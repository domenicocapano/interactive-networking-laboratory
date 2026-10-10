const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync(require('path').join(__dirname,'../netlab_v5_6.html'),'utf8');
const source=html.slice(html.indexOf('<script>')+8,html.indexOf('</script>'));
function section(a,b){return source.slice(source.indexOf(a),source.indexOf(b,source.indexOf(a)));}
const code=[
  section('const PDU_MAP=', '// ─── STATE'),
  section('function gqOptions(', 'function askGuidedError('),
  section('function stripHdr(', '// ══════════════════════════════════════════════════════\n// CORE FLOW'),
  section('async function runFlow(', '// ─── ACK'),
  section('async function runAck(', '// ─── TCP HANDSHAKE'),
  section('async function runHandshake(', '// ══════════════════════════════════════════════════════\n// SCENARIO: ARP'),
  section('async function runARP(', '// ══════════════════════════════════════════════════════\n// SCENARIO: ICMP PING'),
  section('async function runICMP(', '// ══════════════════════════════════════════════════════\n// SCENARIO: IP FRAGMENTATION'),
  section('async function runFragmentation(', '// ─── SCENARIO BUILDER'),
  section('function mkSc(', '// ─── RUN SINGLE'),
  section('async function runSingle(', '// ─── FULL SCENARIO'),
  section("$('btn-full').addEventListener", '// ─── BUTTONS'),
  section("$('pdf-btn').addEventListener", '// ─── INIT')
].join('\n');
function makeLayer(name){return {dataset:{layer:name},classList:{add(){},remove(){}}};}
const logs=[],snapshots=[];
let ctx={console,Math,Promise,setTimeout(fn){fn();},MOVE:0,
  modelSel:{value:'OSI'},sim:{running:true,headers:{},content:''},
  pktEl:{style:{},classList:{add(){},remove(){}},className:'',querySelector(){return {textContent:''};}},
  errChk:{checked:false},guidedErrChk:{checked:false},rtTog:{checked:true},
  logBadge:{textContent:''},
  glowed:[],
  elClient:{children:[{classList:{add(){ctx.glowed.push('Client');}}}]},elRtA:{},elDce:{},elRtB:{},
  elServer:{children:[{classList:{add(){ctx.glowed.push('Server');}}}]},
  visLayers(el){return el.layers;},moveTo(){},activate(){},setPDU(){},phase(){},animDot(){},
  setContent(t){ctx.sim.content=t;},
  log(msg){logs.push({msg,content:ctx.sim.content});},
  async wait(){snapshots.push(ctx.sim.content);},
  reset(){ctx.sim={running:false,headers:{},content:''};},
  toggleCtrl(){},clearLog(){logs.length=0;snapshots.length=0;},notifyDelivery(){},
  window:{open(){return {document:{write(s){ctx.reportHTML=s;},close(){}}};}},
  logEntries:[],reportHTML:'',showToast(msg){ctx.toastMessage=msg;},
  fullHandler:null,$(id){return {addEventListener(event,fn){if(id==='btn-full')ctx.fullHandler=fn;if(id==='pdf-btn')ctx.pdfHandler=fn;}};},
};
vm.createContext(ctx);vm.runInContext(code,ctx);
function setup(model){
  ctx.modelSel.value=model;
  vm.runInContext(`M=MODELS.${model}`,ctx);
  let m=vm.runInContext('M',ctx),layers=m.layers;
  ctx.elClient.layers=layers.map(x=>makeLayer(x.name));
  ctx.elServer.layers=layers.map(x=>makeLayer(x.name));
  ctx.elRtA.layers=layers.slice(-m.routerLayers).map(x=>makeLayer(x.name));
  ctx.elRtB.layers=layers.slice(-m.routerLayers).map(x=>makeLayer(x.name));
  ctx.elDce.layers=layers.slice(-m.dceLayers).map(x=>makeLayer(x.name));
  ctx.sim={running:true,headers:{},content:''};ctx.errChk.checked=false;
  logs.length=0;snapshots.length=0;ctx.glowed.length=0;
}
(async()=>{
 for(const model of ['OSI','TCPIP']){
  setup(model);
  let sc=vm.runInContext("mkSc('HTTP Web','GET /index.html HTTP/1.1','TCP')",ctx);
  assert.strictEqual(await ctx.runFlow(sc,false),true);
  assert.strictEqual(ctx.sim.content,sc.initialData);
  assert(logs.some(x=>x.msg.includes('TTL=64→63')));
  assert(logs.some(x=>x.msg.includes('TTL=63→62')));
  assert(!logs.some(x=>x.msg.includes('ETH→DCE')));
  assert(snapshots.some(x=>x.includes('TTL:62')));
  assert(!snapshots.some(x=>/\[ETH[^]*\[WAN seriale/.test(x)));
  assert(!snapshots.some(x=>(x.match(/\[ETH/g)||[]).length>1));
  // La terminologia di decapsulamento TCP deve parlare di elaborazione del segmento
  // e ricostruzione del flusso di byte, non di "riassemblaggio" di un singolo segmento.
  assert(logs.some(x=>x.msg.includes('Elabora segmento TCP e ricostruisce il flusso di byte')));
  assert(!logs.some(x=>x.msg.includes('Riassembla segmento')));
  console.log(model,'Web and router encapsulation: OK');

  // Le opzioni e il feedback dell'Errore Guidato devono seguire il modello selezionato:
  // nessuna numerazione OSI letterale (L1/L2) quando è selezionato TCP/IP, e viceversa
  // nessun termine TCP/IP ("Accesso Rete") quando è selezionato OSI.
  const gq=ctx.gqOptions();
  const allLabels=gq.opts.map(o=>o.label).join(' | ');
  if(model==='OSI'){
    assert(/\b2\. Collegamento\b/.test(allLabels));
    assert(/\b1\. Fisico\b/.test(allLabels));
    assert(!/Accesso Rete/.test(allLabels));
  } else {
    assert(/Accesso Rete/.test(allLabels));
    assert(!/\bL1\b|\bL2\b|2\. Collegamento|1\. Fisico\b/.test(allLabels));
  }
  assert.strictEqual(gq.opts.filter(o=>o.correct).length,1);
  assert(gq.opts[1].label.includes('Router-A'));
  console.log(model,'guided-error options match selected model: OK');

  setup(model);sc=vm.runInContext("mkSc('HTTP Web','GET /index.html HTTP/1.1','TCP')",ctx);
  ctx.errChk.checked=true;
  assert.strictEqual(await ctx.runFlow(sc,false),false);
  assert(logs.some(x=>x.msg.includes('ERRORE FCS')));
  console.log(model,'FCS rejection: OK');

  setup(model);sc=vm.runInContext("mkSc('DNS risposta','esempio.com → 10.0.0.20','UDP')",ctx);
  assert.strictEqual(await ctx.runFlow(sc,true),true);
  assert.strictEqual(ctx.sim.content,sc.initialData);
  console.log(model,'reverse DNS data path: OK');

  setup(model);sc=vm.runInContext("mkSc('DNS','esempio.com?','UDP')",ctx);
  await ctx.runSingle(()=>sc);
  assert(!logs.some(x=>x.msg.includes('TCP ACK')));
  assert(logs.some(x=>x.msg.includes('Completato')));
  console.log(model,'DNS no TCP ACK: OK');

  setup(model);sc=vm.runInContext("mkSc('HTTP Web','GET /index.html HTTP/1.1','TCP')",ctx);
  sc.resp=vm.runInContext("mkSc('HTTP 200 OK','200 OK [HTML]','TCP')",ctx);
  await ctx.runSingle(()=>sc);
  assert(logs.some(x=>x.msg.includes('Server→Client')));
  assert(logs.some(x=>x.msg.includes('Client→Server')));
  // L'ultimo nodo a ricevere qualcosa è il Client (la risposta è stata eseguita):
  // la notifica/evidenziazione finale deve seguire la direzione realmente eseguita.
  assert.strictEqual(ctx.glowed.at(-1),'Client');
  assert(!ctx.glowed.includes('Server'));
  console.log(model,'ACK in both directions: OK');

  // Punto 3 di questo giro: evidenziazione finale coerente con richiesta/risposta.
  // Con una risposta eseguita (Round-trip attivo) l'ultimo nodo è il Client...
  setup(model);sc=vm.runInContext("mkSc('HTTP Web','GET /index.html HTTP/1.1','TCP')",ctx);
  sc.resp=vm.runInContext("mkSc('HTTP 200 OK','200 OK [HTML]','TCP')",ctx);
  await ctx.runSingle(()=>sc);
  assert.strictEqual(ctx.glowed.at(-1),'Client');
  // ...mentre senza risposta (nessun sc.resp, o Round-trip disattivato) resta il Server.
  setup(model);sc=vm.runInContext("mkSc('DNS','esempio.com?','UDP')",ctx);
  await ctx.runSingle(()=>sc);
  assert.strictEqual(ctx.glowed.at(-1),'Server');
  assert(!ctx.glowed.includes('Client'));
  setup(model);sc=vm.runInContext("mkSc('HTTP Web','GET /index.html HTTP/1.1','TCP')",ctx);
  sc.resp=vm.runInContext("mkSc('HTTP 200 OK','200 OK [HTML]','TCP')",ctx);
  ctx.rtTog.checked=false;
  await ctx.runSingle(()=>sc);
  assert.strictEqual(ctx.glowed.at(-1),'Server');
  ctx.rtTog.checked=true;
  console.log(model,'final notify/highlight matches request-only vs request+response: OK');

  setup(model);await ctx.runARP();
  assert(!logs.some(x=>x.msg.includes('⛔ Errore:')));
  assert(logs.some(x=>x.msg.includes('ARP completato')));
  console.log(model,'ARP path: OK');

  setup(model);await ctx.runICMP('traceroute');
  assert(!logs.some(x=>x.msg.includes('⛔ Errore:')));
  // L'etichetta di livello deve essere coerente con il modello selezionato (punto 3):
  // "3. Rete" in ISO/OSI, "2. Internet" in TCP/IP — mai "L3" letterale in modalità TCP/IP.
  const netLbl=model==='OSI'?'3. Rete':'2. Internet';
  assert(logs.some(x=>x.msg.includes(`Router-B [${netLbl}]: TTL=1→0`)));
  assert(logs.some(x=>x.msg.includes(`Router-B [${netLbl}]: TTL=2→1`)));
  console.log(model,'traceroute TTL path: OK');

  setup(model);await ctx.runFragmentation();
  assert(!logs.some(x=>x.msg.includes('⛔ Errore:')));
  assert(logs.some(x=>x.msg.includes('FRAMMENTO 3/3')));
  assert(logs.some(x=>x.msg.includes('3000B ✅')));
  console.log(model,'fragmentation three fragments: OK');

  setup(model);await ctx.runHandshake();
  assert(logs.some(x=>x.msg.includes('Client→Server: SYN')));
  assert(logs.some(x=>x.msg.includes('Server→Client: SYN-ACK')));
  assert(logs.some(x=>x.msg.includes('Client→Server: ACK → connesso')));
  console.log(model,'real handshake function: OK');

  setup(model);await ctx.fullHandler();
  assert(!logs.some(x=>x.msg.includes('⛔ Errore:')));
  assert(logs.some(x=>x.msg.includes('Navigazione Web Completa')));
  assert(logs.some(x=>x.msg.includes('risposta DNS (UDP)')));
  assert(logs.findIndex(x=>x.msg.includes('risposta DNS (UDP)')) < logs.findIndex(x=>x.msg.includes('TCP 3-Way Handshake')));
  assert(!logs.some(x=>x.msg.includes('TCP ACK') && x.content.includes('esempio.com')));
  assert.strictEqual(ctx.logBadge.textContent,'Scenario: Navigazione Web');
  console.log(model,'complete navigation: OK');
  ctx.logEntries=logs.map(x=>({ts:'00:00:00',msg:x.msg,cls:''}));
  ctx.pdfHandler();
  assert(ctx.reportHTML.includes('<title>Report — Navigazione Web Completa</title>'));
  assert(ctx.reportHTML.includes('NetLab — Report di Simulazione v5.6'));
  console.log(model,'generated report HTML title: OK');

  // Punto 4 di questo giro: il report PDF deve distinguere lo stato del toggle
  // Round-trip dal fatto che "Naviga Web" include SEMPRE richiesta e risposta —
  // non deve mostrare "Round-trip: No" in un modo che lasci intendere che la
  // risposta sia stata saltata.
  assert(ctx.reportHTML.includes('Naviga Web" include sempre richiesta e risposta'));
  assert(!/<b>Round-trip:<\/b>\s*No\s*<\/div>/.test(ctx.reportHTML));
  console.log(model,'PDF report distinguishes Round-trip toggle from Naviga Web behavior: OK');

  // Per uno scenario singolo (non "Naviga Web") il report deve invece riportare
  // lo stato reale del toggle Round-trip.
  setup(model);sc=vm.runInContext("mkSc('HTTP Web','GET /index.html HTTP/1.1','TCP')",ctx);
  sc.resp=vm.runInContext("mkSc('HTTP 200 OK','200 OK [HTML]','TCP')",ctx);
  ctx.rtTog.checked=false;
  await ctx.runSingle(()=>sc);
  ctx.logEntries=logs.map(x=>({ts:'00:00:00',msg:x.msg,cls:''}));
  ctx.pdfHandler();
  assert(ctx.reportHTML.includes('<b>Round-trip:</b> No'));
  assert(!ctx.reportHTML.includes('include sempre richiesta e risposta'));
  ctx.rtTog.checked=true;
  console.log(model,'PDF report shows actual Round-trip state for single scenarios: OK');

  setup(model);ctx.errChk.checked=true;await ctx.fullHandler();
  assert(logs.some(x=>x.msg.includes('ERRORE FCS')));
  assert(!logs.some(x=>x.msg.includes('Navigazione Web completata!')));
  console.log(model,'complete navigation stops on FCS: OK');

  // Punto 1: "Naviga Web" deve includere SEMPRE la risposta HTTP del server (e quella DNS),
  // indipendentemente dal toggle "Round-trip" — che riguarda solo gli scenari singoli Web/DNS.
  setup(model);ctx.rtTog.checked=false;await ctx.fullHandler();
  assert(!logs.some(x=>x.msg.includes('⛔ Errore:')));
  assert(logs.some(x=>x.msg.includes('Fase 5: HTTP 200 OK')));
  assert(logs.some(x=>x.msg.includes('Navigazione Web completata!')));
  ctx.rtTog.checked=true; // ripristina lo stato condiviso per l'iterazione successiva
  console.log(model,'complete navigation always delivers HTTP response (Round-trip OFF): OK');
 }
 // Punto 2: la risposta deve invertire le porte della richiesta (stessa comunicazione),
 // non generarne una nuova indipendente né ripetere la porta del servizio come destinazione.
 for(const model of ['OSI','TCPIP']){
   setup(model);
   const req=vm.runInContext("mkSc('DNS','esempio.com?','UDP')",ctx);
   const resp=vm.runInContext(`mkSc('DNS risposta','esempio.com → 10.0.0.20','UDP',${req.ephPort})`,ctx);
   const reqHdr=Object.values(req.headers.find(h=>Object.keys(h).length)||{})[0];
   const respHdr=Object.values(resp.headers.find(h=>Object.keys(h).length)||{})[0];
   assert(reqHdr.includes(`sp:${req.ephPort} dp:53`));
   assert(respHdr.includes(`sp:53 dp:${req.ephPort}`));
   assert.strictEqual(resp.ephPort,req.ephPort);
 }
 console.log('Port reversal on responses (DNS/HTTP): OK');
 assert(source.includes('Frag3=20B dati + 20B IP hdr (offset=370, MF=0)'));
 assert(source.includes('Frag2=1480B dati + 20B IP hdr (offset=185, MF=1)'));
 console.log('Fragment arithmetic in source: OK');
 ctx.window.open=()=>null;ctx.pdfHandler();
 assert(ctx.toastMessage.includes('finestre popup'));
 console.log('Blocked report popup: handled without exception');
})().catch(e=>{console.error(e);process.exitCode=1;});
