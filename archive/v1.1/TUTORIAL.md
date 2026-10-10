# Tutorial: Interactive Networking Laboratory (Release 1.1)

Guida rapida all'uso del pacchetto **Interactive Networking Laboratory**,
release **1.1**. Il componente principale è il simulatore **NetLab**,
attualmente alla versione interna **v5.5**. Guida pensata sia per studenti
sia per docenti.

### File del pacchetto

| File | Cosa contiene |
|---|---|
| `netlab_v5_5.html` | Simulatore principale NetLab |
| `glossario.html` | Glossario e comandi di rete |
| `mappa_tcpip_v5_5.html` | Mappa concettuale TCP/IP e ISO/OSI |
| `TUTORIAL.md` | Questa guida |
| `README.md` | Descrizione generale, pubblicazione, citazione, licenza |
| `LICENSE.txt` | Testo della licenza CC BY 4.0 |
| `CITATION.cff` | Metadati di citazione |

---

## 0. Prima di iniziare

- Apri `netlab_v5_5.html` in un browser moderno (Chrome, Edge, Firefox,
  Safari). Non serve installare nulla né essere connessi a Internet.
- In alto trovi sempre la stessa barra di navigazione per passare tra
  **📡 Simulatore**, **📖 Glossario & Comandi** e **🗺️ Mappa Concettuale**.
- I controlli **A− / A / A+** in alto a destra ingrandiscono o rimpiccioliscono
  tutta l'interfaccia (testi e riquadri insieme); la scelta resta salvata nel
  browser per le visite successive.
- Il bottone **⬆** in basso a sinistra riporta in cima alla pagina in ogni
  momento.

---

## 1. Il Simulatore (`netlab_v5_5.html`)

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
  con sintassi Windows ed equivalente Linux/Mac e spiegazione di cosa
  restituiscono.

**Suggerimento didattico:** dopo aver visto lo scenario "ARP" nel simulatore
(protocollo del livello Accesso Rete, locale alla LAN — non instradato dai
router), fai eseguire agli studenti `arp -a` sul proprio PC e confronta il
risultato con quanto visto in animazione.

---

## 3. Mappa Concettuale (`mappa_tcpip_v5_5.html`)

- Naviga per nodi cliccabili, organizzati per righe tematiche (problema →
  soluzione → concetto base → livelli → flusso dati → meccanismi speciali →
  errori frequenti). Usa la **barra di indice rapido** subito sotto gli
  strumenti per saltare direttamente a una sezione.
- Bottone **"🔄 Vista: TCP/IP ⇄ ISO/OSI"**: passa dalla vista a 4 livelli
  TCP/IP alla vista a 7 livelli ISO/OSI (con testo che spiega esplicitamente
  la corrispondenza tra i due modelli).
- **"Modalità docente"**: alterna tra spiegazione sintetica (studente) e più
  dettagliata (docente) per ogni nodo.
- **5 mini-simulazioni** in fondo alla pagina (incapsulamento, routing,
  DNS, ARP, IP/MAC/next-hop), ciascuna con pulsanti "Simula arp -a",
  "Simula ipconfig /all", "Simula ping" che mostrano un finto terminale con
  l'output atteso.
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

**Perché vedo due numeri di versione diversi (1.1 e 5.5)?** Sono due
numerazioni indipendenti: **1.1** è la versione del pacchetto pubblicato su
Zenodo (Interactive Networking Laboratory), **5.5** è la versione interna
del solo simulatore NetLab. I nomi dei file HTML non cambiano tra una
release Zenodo e l'altra, a meno di un aggiornamento maggiore del
simulatore.

---

## 5. Citazione e licenza

Il pacchetto è distribuito con licenza **Creative Commons Attribution 4.0
International (CC BY 4.0)** — testo completo in `LICENSE.txt`. Sei libero di
usare, modificare e ridistribuire il materiale, anche a scopo commerciale,
citando l'autore originale:

> Capano, D. (2026). Interactive Networking Laboratory - Educational
> Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing,
> Version 1.1. Zenodo. 10.5281/zenodo.21299699
> la creazione della release su Zenodo - la versione precedente 1.0 ha
> invece DOI 10.5281/zenodo.19066947, non riutilizzabile per la 1.1)*.

Per la citazione completa (con entrambe le versioni) e il formato BibTeX,
vedi la sezione "Citazione" del `README.md` o il file `CITATION.cff`.
