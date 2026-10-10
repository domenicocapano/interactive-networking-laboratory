// Controlli senza browser: sintassi, link, storage negato, contenuto e interazioni con DOM simulato.
const fs=require('fs'), path=require('path'), vm=require('vm'), assert=require('assert');
const root=path.join(__dirname,'..');
const names=['netlab_v5_6.html','mappa_tcpip_v5_6.html','glossario.html'];
const sources={};
for(const name of names){
 const html=fs.readFileSync(path.join(root,name),'utf8');
 const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x=>x[1]);
 assert.strictEqual(scripts.length,1);
 sources[name]=scripts[0];new vm.Script(scripts[0],{filename:name});
 for(const [,href] of html.matchAll(/href="([^"]+)"/g)){
  if(/^(https?:|#|mailto:)/.test(href))continue;
  assert(fs.existsSync(path.join(root,href.split('#')[0])),name+': link mancante '+href);
 }
 const st=scripts[0].slice(0,scripts[0].indexOf('};')+2);
 const ctx={window:{get localStorage(){throw new Error('Accesso negato');}}};
 vm.createContext(ctx);vm.runInContext(st,ctx);
 assert.strictEqual(vm.runInContext("safeStorage.getItem('x')",ctx),null);
 vm.runInContext("safeStorage.setItem('x',1);safeStorage.removeItem('x')",ctx);
 console.log(name+': sintassi, link e storage negato OK');
}
function el(){return {textContent:'',innerHTML:'',style:{setProperty(){}},classList:{add(){},remove(){},toggle(){}},dataset:{},children:[],
 appendChild(c){this.children.push(c);},setAttribute(){},addEventListener(){},scrollIntoView(){},focus(){}};}
// Esegue l'intero glossario: i parametri <indirizzo> e <nome dominio> devono restare testo.
const elems={};const document={documentElement:el(),getElementById(id){return elems[id]??=el();}};
const glossCtx={document,window:{get localStorage(){throw Error('Accesso negato');},addEventListener(){}},console};
vm.createContext(glossCtx);vm.runInContext(sources['glossario.html'],glossCtx);
assert(elems['cmd-list'].innerHTML.includes('ping &lt;indirizzo&gt;'));
assert(elems['cmd-list'].innerHTML.includes('nslookup &lt;nome dominio&gt;'));
assert(!elems['cmd-list'].innerHTML.includes('<indirizzo>'));
vm.runInContext("render('nslookup')",glossCtx);
assert(elems['cmd-list'].innerHTML.includes('nslookup'));
assert(!elems['cmd-list'].innerHTML.includes('tracert'));
vm.runInContext("render('termine inesistente xyz')",glossCtx);
assert(elems['gloss-list'].innerHTML.includes('Nessun termine'));
console.log('Glossario: avvio con storage negato, ricerca e parametri comandi OK');
// Mappa: avvio e ogni passaggio delle cinque mini-simulazioni; questo DOM non misura il layout.
const mh=fs.readFileSync(path.join(root,names[1]),'utf8');
const nodes=[...mh.matchAll(/<button[^>]*data-panel="([^"]+)"[^>]*data-group="([^"]+)"/g)].map(x=>Object.assign(el(),{dataset:{panel:x[1],group:x[2]}}));
const simButtons=[...mh.matchAll(/<button[^>]*data-sim="([^"]+)"/g)].map(x=>Object.assign(el(),{dataset:{sim:x[1]}}));
const me={};const doc={documentElement:el(),getElementById(id){return me[id]??=el();},
 querySelectorAll(sel){return sel==='[data-sim]'?simButtons:sel==='.node-btn[data-panel]'?nodes:[];},
 createElement(){return el();},addEventListener(){}};
const mapCtx={document:doc,window:{get localStorage(){throw Error('Accesso negato');},addEventListener(){}},console,navigator:{},setTimeout(){}};
vm.createContext(mapCtx);vm.runInContext(sources[names[1]],mapCtx);
assert.strictEqual(vm.runInContext('Object.keys(simData).length',mapCtx),5);
for(const key of vm.runInContext('Object.keys(simData)',mapCtx)){
 vm.runInContext(`changeSim('${key}')`,mapCtx);
 const count=vm.runInContext(`simData['${key}'].length`,mapCtx);
 for(let i=0;i<count;i++){
  assert(me.simTitle.textContent.startsWith('SIMULAZIONE:'));
  assert(me.simLog.innerHTML.length>20);
  vm.runInContext('simNext()',mapCtx);
 }
 assert.strictEqual(vm.runInContext('currentSimStep',mapCtx),count-1);
 vm.runInContext('simReset()',mapCtx);assert.strictEqual(vm.runInContext('currentSimStep',mapCtx),0);
}
assert(nodes.length>20);
mapCtx.assertDetail=()=>assert(me.detail.innerHTML.includes('panel-title'));
for(const node of nodes){mapCtx.testNode=node;vm.runInContext('renderDetail(testNode.dataset.panel,testNode,false);assertDetail();setMode(true);setMode(false);closeDetail()',mapCtx);}
console.log('Mappa: avvio con storage negato, cinque mini-simulazioni e pannelli docente/studente OK');
