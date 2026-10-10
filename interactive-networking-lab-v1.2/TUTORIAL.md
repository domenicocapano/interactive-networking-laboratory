# Tutorial: Interactive Networking Laboratory (Release 1.2)

## English guide

Package **Interactive Networking Laboratory 1.2** contains **NetLab v5.6**. The interface remains in Italian; the explanations below retain button labels so users can find them. The Italian guide follows this section.

### 1. Before starting

Extract all files and open `netlab_v5_6.html` in Chrome, Edge, Firefox or Safari. Keep `netlab_v5_6.html`, `mappa_tcpip_v5_6.html` and `glossario.html` together. The simulations work offline and require no installation. The top navigation opens the simulator, glossary and concept map. A− / A / A+ decrease, reset and increase the built-in zoom, including the animated packet. Settings are stored locally when permitted; denied storage does not prevent use. The arrow at the bottom left returns to the top of the page.

### 2. Main simulator: student activities

1. Select **ISO/OSI** (seven layers) or **TCP/IP** (four layers).
2. Choose a scenario. **Web (TCP)** shows an HTTP exchange; **DNS (UDP)** shows a DNS query; **Naviga Web** combines DNS resolution, TCP connection establishment and HTTP navigation. Use **cosa fa?** to read a scenario explanation.
3. Observe the path: Client → Router-A → DCE → Router-B → Server. Watch the selected model's layers, encapsulation, addressing and router processing.
4. Use **Velocità**, **Pausa** and **Step** to slow, pause and examine individual steps.
5. Open **Log** to read events and use its report/PDF control to generate a printable report. Allow the report popup if the browser blocks it, then print or save as PDF.
6. Use **Quiz** to practise. Quiz attempts remain on the same browser/device when local storage is available. They are not sent to a server.

### 3. Interpreting the scenarios

- **Round-trip:** affects only the individual Web and DNS scenarios. When selected, both directions are shown. **Naviga Web** always includes the DNS and HTTP responses, regardless of the checkbox; its report states that Round-trip does not apply.
- **Ports:** the server's reply reverses source/destination ports from the corresponding request. DNS uses port 53; the HTTP example uses port 80.
- **Transport:** TCP processes segments and reconstructs a byte stream using sequence information. UDP processes datagrams and has no TCP acknowledgements. DNS may also use TCP in real networks, although this scenario uses UDP.
- **Network/link processing:** routers decrement TTL and replace link framing for the next link. The DCE represents physical signal functions on a simplified serial WAN, and is not an Ethernet next-hop endpoint. Ethernet MAC addresses do not describe the serial WAN link.
- **ARP:** resolves link-layer addresses locally within a LAN; ARP requests are not routed. The animated ARP cache is simplified.
- **IPv4 fragmentation:** with DF=0, a 3000-byte IPv4 datagram, including a 20-byte header, and an MTU of 1500 yields three fragments: total lengths 1500, 1500 and 40 bytes; payloads 1480, 1480 and 20 bytes; offsets 0, 185 and 370 in eight-byte units. Each fragment has its own IP header. The DCE does not fragment packets; reassembly occurs at the destination IP layer.
- **HTTP:** the example uses unencrypted HTTP. It does not model TLS/HTTPS. Animations simplify real timing and protocol details.

### 4. Teacher activities and guided errors

**Lavagna Didattica** provides explanation cards. Enable **Simula errore FCS** and **Modalità Errore Guidato** to ask students where a corrupted frame will be detected. Answer options follow the selected model. Correct and incorrect outcomes remain in the simulation log and report. Ask students to explain frame replacement, TTL changes, IP/MAC roles, response ports and the relationship between peer entities and layers, rather than only naming buttons.

For the last packet-zoom change, visually check A−, A and A+ while a packet moves in both models before publishing. Source inspection and the automated logic tests cannot certify layout. Long packet text still uses an ellipsis; opening the packet inspector provides additional detail.

### 5. Glossary and commands

`glossario.html` provides searchable terms and diagnostic commands, with Windows and Linux/macOS alternatives. Examples include `ipconfig /all`, `ip addr`, `ping`, `tracert`/`traceroute`, `arp -a`, `nslookup` and `netstat`. Compare the ARP scenario with `arp -a` on a real computer; these real outputs depend on that computer and network.

### 6. Concept map

`mappa_tcpip_v5_6.html` contains clickable concepts, a quick index, OSI/TCP-IP views and student/teacher modes. The model correspondence is approximate, not a perfect equivalence. Five mini-simulations demonstrate encapsulation, routing, DNS, ARP and IP/MAC/next-hop delivery. Their terminal outputs are fictional; they do not execute commands on the computer. The IP/MAC mini-simulation assumes Ethernet links and no NAT, whereas the main simulator distinguishes the serial WAN. **Copia sintesi** and **Apri sintesi stampabile** copy or print the selected explanation.

### 7. Troubleshooting, citation and license

Use the built-in zoom or the browser zoom if text is small. To preserve quiz history, use the same browser/device and retain its stored data. Keep all three HTML pages together if navigation links fail.

Author: **Domenico Capano**. License: **CC BY 4.0**; credit the author, link the license and indicate changes. Citation metadata is in `CITATION.cff`. The new-version DOI is **10.5281/zenodo.23272307**, reserved in the author's draft and registered upon publication. Package version **1.2** and simulator version **5.6** are independent numbers. The previous version remains archived. The verification report documents which tests were performed and which limits remain.

---

## Guida italiana

Guida rapida al pacchetto **Interactive Networking Laboratory**,
versione **1.2**, preparato per il deposito Zenodo. Il componente principale è il simulatore **NetLab**,
attualmente alla versione interna **v5.6**. Guida pensata sia per studenti
sia per docenti.

### File del pacchetto

| File | Cosa contiene |
|---|---|
| `netlab_v5_6.html` | Simulatore principale NetLab |
| `glossario.html` | Glossario e comandi di rete |
| `mappa_tcpip_v5_6.html` | Mappa concettuale TCP/IP e ISO/OSI |
| `TUTORIAL.md` | Questa guida |
| `README.md` | Descrizione generale, pubblicazione, citazione, licenza |
| `LICENSE.txt` | Testo della licenza CC BY 4.0 |
| `CITATION.cff` | Metadati di citazione |

---

## 0. Prima di iniziare

- Apri `netlab_v5_6.html` in un browser moderno (Chrome, Edge, Firefox,
  Safari). Non serve installare nulla né essere connessi a Internet.
- In alto trovi sempre la stessa barra di navigazione per passare tra
  **📡 Simulatore**, **📖 Glossario & Comandi** e **🗺️ Mappa Concettuale**.
- I controlli **A− / A / A+** in alto a destra ingrandiscono o rimpiccioliscono
  l'interfaccia e il pacchetto animato (larghezza, testo e spaziatura); la scelta resta salvata nel
  browser per le visite successive, se il salvataggio locale è consentito.
  Se è disabilitato, le pagine restano utilizzabili.
- Il bottone **⬆** in basso a sinistra riporta in cima alla pagina in ogni
  momento.

---

## 1. Il Simulatore (`netlab_v5_6.html`)

### Per lo studente

1. **Scegli un modello**: ISO/OSI (7 livelli) o TCP/IP (4 livelli), dal menu
   in alto a sinistra.
2. **Scegli uno scenario**: es. "Web (TCP)", "DNS (UDP)", "Naviga Web". Prima
   di avviarlo, clicca il bottoncino **❓ cosa fa?** sotto ogni scenario per
   capire cosa vedrai.
3. **Osserva l'animazione**: il pacchetto si muove tra i livelli e i nodi
   (Client → Router-A → DCE → Router-B → Server). Ogni volta che arriva a
   destinazione senti un breve suono e vedi una notifica "📦 Pacchetto
   consegnato" (disattivabile dalla casella "🔔 Audio/notifica a consegna").
4. **Rallenta o metti in pausa**: usa lo slider "⚡ Velocità" o i pulsanti
   "⏸ Pausa" / "▶ Step" per studiare un singolo passaggio con calma.
5. **Leggi il log**: apri "📋 Log" in basso a destra per il resoconto
   testuale, passo-passo, di tutto ciò che è successo. Puoi esportarlo in PDF.
6. **Mettiti alla prova**: nel tab "🎯 Quiz" rispondi alle domande a scelta
   multipla; il tuo punteggio e lo storico dei tentativi restano salvati sul
   tuo browser (sezione "📊 Storico tentativi" sotto il quiz).

### Precisazioni didattiche della v5.6

- La dimostrazione Web usa **HTTP non cifrato sulla porta 80**: mostra TCP e
  l'incapsulamento, senza simulare TLS/HTTPS. L’handshake TCP evidenzia
  i tre messaggi tra gli endpoint, con un’animazione semplificata.
- In questa dimostrazione DNS usa UDP: non segue un ACK TCP. Il protocollo
  DNS può usare anche TCP; una risposta può essere già disponibile in cache. Nello scenario «Naviga Web» compare
  anche la risposta DNS prima dell'handshake TCP.
- Il DCE trasmette il segnale sul collegamento seriale; non è il destinatario
  del frame né il prossimo router. Sul tratto WAN non compaiono MAC Ethernet.
- Il TTL diminuisce ai due router. La frammentazione di un datagramma IPv4
  di 3000 byte complessivi (20 byte di intestazione e 2980 di dati), con DF=0
  e MTU 1500, produce tre frammenti di 1500, 1500 e 40 byte, ciascuno con
  una propria intestazione IP di 20 byte. Il DCE non frammenta.

### Precisazioni didattiche del ricontrollo del 10 ottobre 2026 (2)

- **"Naviga Web" mostra sempre anche le risposte** (DNS e HTTP), indipendentemente
  dall'opzione "Round-trip": navigare il Web significa anche ricevere la pagina,
  non solo inviare la richiesta. L'opzione "Round-trip" riguarda invece solo gli
  scenari singoli "Web (TCP)" e "DNS (UDP)", dove decide se mostrare anche la
  direzione di ritorno.
- **Le porte si invertono nella risposta**, come nella realtà: se la richiesta usa
  una porta effimera del Client verso la porta del servizio (es. sp:53210 dp:53
  per DNS, sp:56131 dp:80 per HTTP), la risposta usa la porta del servizio come
  sorgente e la stessa porta effimera come destinazione (sp:53 dp:53210,
  sp:80 dp:56131): è la stessa comunicazione percorsa in senso inverso, non una
  nuova connessione indipendente.
- **Le etichette dei livelli nel log seguono sempre il modello selezionato**:
  in ISO/OSI compaiono "1. Fisico", "2. Collegamento", "3. Rete"…; in TCP/IP
  compaiono "1. Accesso Rete", "2. Internet", "3. Trasporto", "4. Applicazione".
  Il log non mostra mai un'etichetta numerica OSI (L1/L2/L3) mentre è selezionato
  il modello TCP/IP, né viceversa.
- **UDP non riassembla**: il log usa "Elabora datagramma UDP" alla ricezione,
  perché UDP non effettua il riassemblaggio dei frammenti IP (operazione che
  avviene al livello IP, indipendentemente dal protocollo di trasporto); per TCP
  il log usa "Elabora segmento TCP e ricostruisce il flusso di byte", perché TCP
  non "riassembla" un singolo segmento: elabora i segmenti ricevuti e ricostruisce
  il flusso di byte originale in base ai numeri di sequenza.

### Per il docente

- Il tab **📝 Lavagna Didattica** contiene schede pronte per la spiegazione
  frontale (incapsulamento, ARP, frammentazione IPv4 vs IPv6, errori
  concettuali comuni, ecc.) — utile proiettato in classe.
- Attiva **"Simula errore FCS"** insieme a **"🎯 Modalità Errore Guidato"**
  per una verifica interattiva: prima di avviare la simulazione, la classe
  deve prevedere in quale punto del percorso l'errore verrà rilevato, poi la
  simulazione lo conferma visivamente.
- Il **"📋 Log"** esportato in PDF è utile per relazioni di laboratorio o
  verifiche individuali (contiene topologia, livelli, protocolli e log
  completo con data/ora).
- Il bottone **"❓ Come si usa?"** in header apre in-app un riepilogo rapido
  di queste stesse indicazioni, comodo da mostrare la prima volta in classe.

---

## 2. Glossario & Comandi (`glossario.html`)

Pagina di consultazione autonoma, utile anche stampata o linkata a parte:

- **Glossario**: ~39 termini (OSI, TCP/IP, MAC, IP, ARP, DNS, TCP, UDP, porta,
  socket, handshake, ACK, ICMP, TTL, MTU, frammentazione, FCS, router, switch,
  DCE/DTE, LAN/WAN, HTTP/HTTPS, TLS, ecc.), con la barra di ricerca in alto
  che filtra in tempo reale.
- **Comandi da prompt/terminale**: 10 comandi utili per verificare dal vivo,
  sul proprio PC, gli stessi concetti visti nel simulatore (`ipconfig /all`,
  `ping`, `tracert`/`traceroute`, `arp -a`, `nslookup`, `netstat -an`, ecc.),
  con sintassi Windows e alternative Linux/macOS (gli output differiscono),
  e spiegazione di cosa
  restituiscono.

**Suggerimento didattico:** dopo aver visto lo scenario "ARP" nel simulatore
(protocollo del livello Accesso Rete, locale alla LAN — non instradato dai
router), fai eseguire agli studenti `arp -a` sul proprio PC e confronta il
risultato con quanto visto in animazione.

---

## 3. Mappa Concettuale (`mappa_tcpip_v5_6.html`)

- Naviga per nodi cliccabili, organizzati per righe tematiche (problema →
  soluzione → concetto base → livelli → flusso dati → meccanismi speciali →
  errori frequenti). Usa la **barra di indice rapido** subito sotto gli
  strumenti per saltare direttamente a una sezione.
- Bottone **"🔄 Vista: TCP/IP ⇄ ISO/OSI"**: passa dalla vista a 4 livelli
  TCP/IP alla vista a 7 livelli ISO/OSI (con testo che spiega esplicitamente
  la corrispondenza tra i due modelli).
- **"Modalità docente"**: alterna tra spiegazione sintetica (studente) e più
  dettagliata (docente) per ogni nodo.
- **5 mini-simulazioni** con dati e output fittizi, in fondo alla pagina (incapsulamento, routing,
  DNS, ARP, IP/MAC/next-hop), ciascuna con pulsanti "Simula arp -a",
  "Simula ipconfig /all", "Simula ping" che mostrano un finto terminale con
  un esempio di output; non eseguono comandi sul computer. Nella mini-simulazione
  IP/MAC si assumono collegamenti Ethernet e assenza di NAT; il simulatore
  principale distingue invece la WAN seriale dalle LAN Ethernet.
- **"Copia sintesi"** e **"Apri sintesi stampabile"** generano un riassunto
  testuale del nodo aperto, utile per appunti o dispense.

---

## 4. Domande frequenti

**Il testo è troppo piccolo/grande.** Usa i controlli A−/A/A+ in header. Su PC
con schermo largo (≥1300px) la vista di default è già leggermente più grande.

**Ho perso lo storico del quiz.** È salvato nel `localStorage` del browser: se
cambi browser, dispositivo, o usi la navigazione in incognito, lo storico non
è disponibile. Non è mai inviato a nessun server: resta solo sul tuo
dispositivo.

**Posso usarlo senza Internet?** Sì, tutte le pagine funzionano completamente
offline una volta scaricate. L'unico elemento che richiede connessione è il
link cliccabile a learningobjects.org nell'header (non necessario per l'uso
didattico).

**Le tre pagine sono separate: perché?** Per pubblicazione su GitHub è più
comodo linkare direttamente la pagina che serve (es. solo il glossario come
scheda di ripasso). Vanno però mantenute nella stessa cartella perché i link
tra loro funzionino.

**Perché vedo due numeri di versione diversi (1.2 e 5.6)?** Il numero
del pacchetto *Interactive Networking Laboratory* e quello del simulatore
NetLab sono indipendenti. Questa cartella contiene il pacchetto 1.2 con NetLab
v5.6. Il DOI della nuova bozza è riservato e si attiva alla pubblicazione.

---

## 5. Citazione e licenza

Il pacchetto è distribuito con licenza **Creative Commons Attribution 4.0
International (CC BY 4.0)** — informazioni sulla licenza in `LICENSE.txt`.
È consentito usare, modificare e ridistribuire il materiale, citando l’autore
e indicando le modifiche effettuate.

Il DOI della nuova versione è **10.5281/zenodo.23272307**, riservato nella
bozza Zenodo del docente. Si attiva alla pubblicazione. Il DOI della versione
precedente non identifica questo pacchetto. Metadati in `CITATION.cff`;
esiti e limiti delle prove in `VERIFICA_v5.6.md`; procedura di deposito in
`PUBBLICAZIONE_v5.6.md`. Il pacchetto è stato preparato il 10 ottobre 2026,
senza effettuare la pubblicazione da questo ambiente.
