# NetLab v5.6 — note di rilascio

- Corretta l'associazione fra livelli TCP/IP e intestazioni: TCP/UDP nel Trasporto, IP in Internet, frame e FCS nell'Accesso Rete.
- Ripristinati il controllo FCS e la rimozione e ricostruzione del frame ai router anche nella vista TCP/IP.
- Distinto il frame del collegamento WAN seriale dai frame Ethernet delle LAN. Il DCE resta un apparato del livello fisico.
- Corretto il TTL del pacchetto in transito e nell'ispettore: 64→63→62 ai due router.
- Eliminato l'ACK TCP dallo scenario DNS su UDP; aggiunta la risposta DNS prima dell'handshake nello scenario completo.
- Corretta la direzione dell'ACK dopo la risposta Web: Client→Server.
- Conservati nome e log della Navigazione Web durante la fase ARP.
- Corretta la frammentazione IPv4 del datagramma da 3000 byte con MTU 1500: 1480, 1480 e 20 byte di dati; lunghezze totali 1500, 1500 e 40 byte; offset 0, 185 e 370.
- Allineata la dimostrazione Web al contenuto in chiaro: HTTP sulla porta 80, senza dichiarare una cifratura TLS non simulata.
- Aggiornati alcuni testi della Lavagna, il quiz, i metadati, la guida e i collegamenti tra pagine.

## Preparazione del pacchetto finale — 10 ottobre 2026

- Integrato esattamente il file HTML allegato dal docente, con il CSS per lo zoom del pacchetto: larghezza, caratteri, spaziatura, bordo e raggio seguono `--zoom`; il movimento non viene modificato.
- Ripetute con esito positivo entrambe le suite automatiche sul file definitivo. La modifica CSS è stata confrontata con il sorgente precedente: è l'unica differenza nell'HTML.
- Inserito il DOI riservato della nuova bozza: **10.5281/zenodo.23272307**. Il pacchetto è **1.2** e il simulatore **5.6**; nessuna pubblicazione effettuata da questo ricontrollo.
- Preparati README e tutorial in inglese e italiano, con lo stato attuale delle prove; preservate le istruzioni italiane.
- Rigenerate tutte le impronte SHA-256. La nuova cartella non contiene né sostituisce i file archiviati della v5.5.
- Lo zoom durante l'animazione resta da verificare visivamente sul computer del docente. Il collaudo Chromium documentato sotto riguarda il file precedente all'ultima aggiunta CSS.

## Ricontrollo del 10 ottobre 2026

- Corretto il rendering dei parametri dei comandi: `ping <indirizzo>`, `tracert <indirizzo>` e `nslookup <nome dominio>` conservano il testo tra parentesi angolari.
- Reso facoltativo lo storage locale in tutte le pagine, evitando interruzioni quando il browser nega letture o scritture.
- Corrette nella mappa le spiegazioni su UDP, confronto OSI/TCP/IP, segmento TCP e datagramma UDP, TTL/checksum IPv4 e differenza fra Ethernet e WAN seriale.
- Precisato che la casella Fisico della mini-simulazione indica funzioni dell’Accesso rete, senza introdurre un quinto livello TCP/IP.
- Riviste le definizioni di MAC, IP, DNS, ACK, traceroute, frammentazione, frame e TLS nel glossario; distinte alcune sintassi Linux/macOS.
- Allineati i testi del simulatore su UDP, DNS e cache ARP; gestita la finestra popup bloccata nell’esportazione del report.
- Aggiornati README, tutorial, commenti del CFF, rapporto di verifica e procedura GitHub/Zenodo. La licenza resta CC BY 4.0, autore Domenico Capano.
- Inclusi test ripetibili senza dipendenze e aggiornate le impronte SHA-256.

## Ricontrollo del 10 ottobre 2026 (2) — correzioni su segnalazione del docente

Segnalazioni del docente, verificate con un test nel browser allegato (modalità
TCP/IP, senza errore FCS, con Round-trip disattivato) e poi corrette:

- **"Naviga Web" ora include sempre anche la risposta HTTP** (oltre a quella DNS,
  già presente): prima, con "Round-trip" disattivato, la fase "HTTP 200 OK" non
  veniva eseguita ma il messaggio "Navigazione Web completata!" compariva lo
  stesso, in modo incoerente con la fase DNS (sempre eseguita). Ora "Naviga Web"
  mostra sempre richiesta e risposta per DNS e per HTTP; "Round-trip" continua a
  valere solo per gli scenari singoli "Web (TCP)" e "DNS (UDP)". Aggiunta anche
  la risposta al pulsante singolo "DNS (UDP)" (prima assente), per coerenza.
- **Le porte nelle risposte ora si invertono correttamente** rispetto alla
  richiesta (sorgente↔destinazione), invece di generarne una nuova indipendente
  o ripetere la porta del servizio come destinazione anche nella risposta.
  Corretto nel generatore di scenari (`mkSc`) e propagato a tutte le risposte
  DNS/HTTP (pulsanti singoli e "Naviga Web").
- **Le etichette dei livelli nel log sono ora coerenti con il modello
  selezionato**: in modalità TCP/IP non compaiono più etichette ISO/OSI come
  "L3 Rete", "L2 Collegamento" o "L1 Fisico" (bug presente nel TTL dei router,
  in ARP, in ICMP/Traceroute e nella frammentazione). Il quiz, che tratta la
  numerazione OSI come argomento di studio generale, non è stato modificato.
- **Corretta la terminologia di trasporto**: sostituito "TCP/UDP porta…" con il
  protocollo realmente in uso; corretto "Riassembla UDP" (UDP non riassembla
  frammenti IP) in "Elabora datagramma UDP"; la formulazione TCP di questo secondo ricontrollo è stata ulteriormente
  precisata nel terzo ricontrollo descritto sotto.
- **Esito della Modalità Errore Guidato ora registrato nel log/PDF**: prima
  restava visibile solo nella finestra di dialogo e andava perso (il log veniva
  azzerato subito dopo la domanda); ora la risposta (corretta o errata) viene
  registrata nel log e compare quindi anche nel report stampabile.
- Corretto il nodo evidenziato al termine di "Naviga Web" (ora il Client, che è
  l'ultimo a ricevere qualcosa, invece del Server).
- Aggiunti test automatici mirati (inversione delle porte; "Naviga Web" con
  Round-trip disattivato) e corretta un'asserzione di `test_netlab.js` che
  si aspettava l'etichetta OSI anche in modalità TCP/IP (lo stesso difetto
  segnalato dal docente, presente anche nel test).
- **Collaudo in browser reale** (Chromium via Playwright, non disponibile nel
  ricontrollo precedente) su tre larghezze (smartphone 390px, tablet 834px,
  desktop 1440px): nessun errore in console, nessuno scorrimento orizzontale,
  interazione reale con la Modalità Errore Guidato. Restano non collaudati un
  dispositivo telefonico reale, l'esportazione PDF effettiva (solo l'HTML del
  report è stato verificato) e GitHub/Zenodo (non previsti in questa fase).

Versione 5.5 di `netlab`, `mappa_tcpip` e del glossario non toccate.
Autore e licenza (CC BY 4.0, Domenico Capano) invariati; nessun DOI o data di
pubblicazione aggiunti alla versione candidata.

## Ricontrollo del 10 ottobre 2026 (3) — quattro ulteriori interventi richiesti

Quattro ulteriori correzioni, richieste esplicitamente, con perimetro limitato
a questi quattro punti (archivio 5.5 preservato, nessuna pubblicazione):

- **Modalità Errore Guidato ora adattata al modello selezionato**: le opzioni di
  risposta e il nome del livello corretto (`gqOptions()`, nuova funzione) sono
  calcolati dinamicamente da `M.layers` del modello attivo, come già avviene
  altrove nel file. In ISO/OSI compare "2. Collegamento", in TCP/IP "1. Accesso
  Rete"; prima le opzioni erano fisse (array statico `GQ_OPTIONS`) e potevano
  non corrispondere al modello in uso.
- **Corretta la formulazione "Riassembla segmento TCP"**: TCP non riassembla un
  singolo segmento, ma elabora i segmenti ricevuti e ricostruisce il flusso di
  byte originale in base ai numeri di sequenza. Il log mostra ora "Elabora
  segmento TCP e ricostruisce il flusso di byte"; UDP resta "Elabora datagramma
  UDP" (già corretto). Aggiornati anche `TUTORIAL.md` (sezione precisazioni
  didattiche).
- **Notifica ed evidenziazione finali degli scenari singoli Web/DNS rese
  coerenti con la risposta effettivamente eseguita**: `runSingle()` ora traccia
  se la risposta è stata consegnata (`responseDelivered`) e fa terminare
  l'evidenziazione sul Client solo quando la risposta è stata eseguita
  (Round-trip attivo); altrimenti resta sul Server, che è l'ultimo nodo a
  ricevere qualcosa con Round-trip disattivato. Il comportamento di "Naviga
  Web" (sempre Client, perché include sempre la risposta) non è cambiato.
- **Nel report PDF, lo stato dell'opzione Round-trip è ora distinto dal
  comportamento di "Naviga Web"**: per gli scenari singoli il report mostra lo
  stato reale della casella Round-trip; per "Naviga Web" mostra invece una nota
  esplicativa ("N/D — 'Naviga Web' include sempre richiesta e risposta"),
  perché quell'opzione non si applica a quello scenario.

**Prove eseguite:** `node tests/test_netlab.js` ripetuto con esito positivo
(aggiunti blocchi di prova mirati per le quattro correzioni, incluso un nuovo
intervallo di estrazione per rendere testabile `gqOptions()`); `node
tests/test_package.js` ripetuto, non impattato. Collaudo in browser reale
(Chromium via Playwright): "Naviga Web" con Round-trip disattivato in entrambi
i modelli, scenario singolo "Web (TCP)" con Round-trip attivo e risposta
eseguita, entrambe le risposte (corretta ed errata) della Modalità Errore
Guidato in entrambi i modelli, generazione ed esportazione di un **PDF reale**
(non solo l'HTML del popup) tramite l'API di stampa di Playwright, poi
ispezionato manualmente pagina per pagina. Dettagli e limiti residui in
`VERIFICA_v5.6.md`.

Versione 5.5 non toccata in questo intervento. Perimetro limitato ai quattro
punti sopra, come richiesto; nessuna pubblicazione su GitHub o Zenodo.

Le prove eseguite e quelle ancora necessarie sono elencate in `VERIFICA_v5.6.md`.
