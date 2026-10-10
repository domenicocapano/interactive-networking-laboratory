# Verifica di NetLab v5.6

**Preparazione finale: 10 ottobre 2026. Stato: pacchetto pronto per il caricamento nella bozza; non pubblicato da questo ambiente.** La prima verifica logica risale al 28 settembre 2026; il primo e il secondo ricontrollo del 10 ottobre 2026 sono descritti più sotto.

## Controllo del file finale con zoom — 10 ottobre 2026

- Il file `netlab_v5_6.html` del pacchetto è byte per byte uguale all'HTML allegato dal docente dopo l'aggiunta del CSS.
- Il confronto con il sorgente già ricontrollato mostra un'unica aggiunta: il blocco CSS dello zoom, collocato prima della chiusura dello stile principale. Nessuna modifica al JavaScript o al movimento del pacchetto.
- `node tests/test_netlab.js` e `node tests/test_package.js` ripetuti sul file finale: esito positivo per entrambi i modelli e per i tre HTML collegati.
- I checksum sono rigenerati e verificati per tutti gli altri file del pacchetto. Controllati sintassi JavaScript, link relativi, metadati di citazione e integrità dello ZIP.
- Il DOI **10.5281/zenodo.23272307** è quello fornito dal docente dalla nuova bozza, non il DOI precedente **10.5281/zenodo.21299699**. Non si dichiara ancora una data effettiva di pubblicazione.

**Attribuzione delle prove:** il collaudo Chromium/Playwright precedente è documentato nella consegna di Claude e nelle sezioni storiche sotto. Il ricontrollo indipendente ha ripetuto i test automatici, controllato ulteriormente le porte delle risposte Web/DNS e ispezionato tutte le quattro pagine del PDF campione fornito. Il PDF campione precede il CSS finale.

**Limite dell'ultima modifica:** la correttezza del blocco CSS è stata verificata nel sorgente, ma l'animazione con questo CSS non è stata ricollaudata visivamente qui. Chromium locale non è disponibile e il download del browser non è riuscito. Prima di pubblicare, sul computer del docente controllare A−, A e A+ durante Web o DNS in ISO/OSI e TCP/IP, verificando che il pacchetto resti allineato e il testo leggibile. Restano i limiti già dichiarati su telefono fisico e sul ricontrollo visivo di ARP, Traceroute e Frammentazione. Questi limiti non sono presentati come prove superate.

Il pacchetto nuovo è preparato in una cartella distinta: nessun file della v5.5 è stato modificato in questa preparazione. README e tutorial sono ora bilingui; le tre interfacce HTML restano in italiano.

## Terzo ricontrollo del 10 ottobre 2026 — quattro ulteriori interventi richiesti

Richiesti quattro interventi puntuali, entro un perimetro esplicitamente
limitato a questi quattro punti (dettagli in `RELEASE_NOTES_v5.6.md`):
Modalità Errore Guidato adattata al modello selezionato; formulazione
"Riassembla segmento TCP" corretta; notifica/evidenziazione finale degli
scenari singoli Web/DNS coerente con la risposta effettivamente eseguita;
nel report PDF, stato dell'opzione Round-trip distinto dal comportamento di
"Naviga Web".

**Prove automatiche** — `node tests/test_netlab.js` ripetuto con esito
positivo per entrambi i modelli. Aggiunto un nuovo intervallo di estrazione
del sorgente (`section('function gqOptions(', 'function askGuidedError(')`)
per rendere testabile `gqOptions()`, prima escluso dal bundle di test. Nuovi
blocchi di prova: terminologia delle opzioni della Modalità Errore Guidato per
modello; assenza di "Riassembla segmento" e presenza della nuova formulazione
TCP nel log; evidenziazione finale coerente in tre casi (risposta consegnata →
Client; nessuna risposta → Server; risposta prevista ma Round-trip
disattivato → Server); contenuto del meta-grid del report PDF per "Naviga Web"
(nota esplicativa) e per gli scenari singoli (stato reale della casella).
`node tests/test_package.js` ripetuto, non impattato dalle modifiche.

**Collaudo in browser reale (Chromium via Playwright)** — a differenza dei
ricontrolli precedenti, in questo round è stata generata e ispezionata anche
un'**esportazione PDF reale**, non solo l'HTML del popup di stampa:

| Prova in browser reale | Esito |
|---|---|
| "Naviga Web", Round-trip disattivato, ISO/OSI: fase HTTP presente, nessun errore console, evidenziazione finale sul Client | Superata |
| "Naviga Web", Round-trip disattivato, TCP/IP: fase HTTP presente, nessun errore console, evidenziazione finale sul Client | Superata |
| Scenario singolo "Web (TCP)" con Round-trip attivo, ISO/OSI: risposta eseguita, evidenziazione finale sul Client | Superata |
| Scenario singolo "Web (TCP)" con Round-trip attivo, TCP/IP: risposta eseguita, evidenziazione finale sul Client | Superata |
| Modalità Errore Guidato, risposta corretta, ISO/OSI: esito registrato nel log, opzioni con terminologia OSI | Superata |
| Modalità Errore Guidato, risposta errata, ISO/OSI: esito registrato nel log, opzioni con terminologia OSI | Superata |
| Modalità Errore Guidato, risposta corretta, TCP/IP: esito registrato nel log, opzioni con terminologia TCP/IP | Superata |
| Modalità Errore Guidato, risposta errata, TCP/IP: esito registrato nel log, opzioni con terminologia TCP/IP | Superata |
| Generazione di un **PDF reale** (file `.pdf` su disco, non solo popup HTML) dopo "Naviga Web" in TCP/IP con Round-trip disattivato | Superata |

**PDF reale ispezionato a mano** (4 pagine, generato con l'API di stampa di
Playwright su una "Naviga Web" completa, TCP/IP, Round-trip disattivato):
riga Round-trip del meta-grid mostra correttamente la nota esplicativa
("N/D — 'Naviga Web' include sempre richiesta e risposta"); tutte le etichette
di livello nel log sono coerenti con TCP/IP, nessuna fuoriuscita OSI; porte
confermate invertite nella risposta (DNS sp:54682↔dp:53 richiesta, sp:53↔dp:54682
risposta; HTTP sp:49811↔dp:80 richiesta, sp:80↔dp:49811 risposta); il log TCP
mostra "Elabora segmento TCP e ricostruisce il flusso di byte" sia lato server
che lato client; flusso completo fino a "🎉 Navigazione Web completata!".

**Non ancora collaudato** (limiti dichiarati, invariati rispetto ai
ricontrolli precedenti salvo il punto PDF, ora verificato): un dispositivo
telefonico reale (solo la larghezza "smartphone" è stata simulata in
Chromium); ARP, ICMP/Traceroute e Frammentazione non sono stati ri-osservati
visivamente nel browser reale in questo round (coperti dai test automatici per
entrambi i modelli, non da un nuovo collaudo visivo, perché non rientravano
nel perimetro dei quattro punti richiesti). GitHub e Zenodo: nessuna azione,
su istruzione esplicita di non pubblicare.

Versione 5.5 di `netlab`, `mappa_tcpip` e del glossario non modificate in
questo intervento (verificato per data/ora del file). Autore e licenza
invariati; nessun DOI o data di pubblicazione aggiunti.

## Secondo ricontrollo del 10 ottobre 2026 — correzioni su segnalazione del docente

Il docente ha segnalato che il PDF allegato al ricontrollo precedente documentava
**un solo test nel browser** (TCP/IP, senza errore FCS, Round-trip disattivato) e
non andava considerato una verifica completa. Quel test ha mostrato due difetti
reali, poi confermati nel sorgente e corretti (dettagli in `RELEASE_NOTES_v5.6.md`):
la fase di risposta HTTP mancante con Round-trip disattivato (punto 1) e le
etichette ISO/OSI ("L3 Rete" ecc.) visibili in modalità TCP/IP (punto 3). Il
docente ha inoltre segnalato un difetto nelle porte delle risposte DNS/HTTP
(punto 2, non visibile nel PDF ma presente nel sorgente) e una terminologia di
trasporto imprecisa (punto 4).

**Prove automatiche** — `node tests/test_netlab.js` e `node tests/test_package.js`,
di nuovo entrambi con esito positivo dopo le correzioni. Aggiunti due blocchi di
prova mirati in `test_netlab.js`: inversione delle porte nella risposta
(`mkSc` con e senza `reqPort`) e "Naviga Web" con Round-trip disattivato (verifica
che la fase HTTP 200 OK sia comunque eseguita). Corretta anche un'asserzione
preesistente che si aspettava l'etichetta OSI letterale anche in modalità TCP/IP
— lo stesso difetto segnalato dal docente era presente anche nel test, non solo
nel simulatore.

**Collaudo in browser reale (Chromium via Playwright)** — a differenza del
ricontrollo precedente, qui l'eseguibile del browser era disponibile. Eseguito
su tre larghezze (smartphone 390px, tablet 834px, desktop 1440px):

| Prova in browser reale | Esito |
|---|---|
| Caricamento senza errori console (le tre larghezze) | Superata |
| Nessuno scorrimento orizzontale, anche con tutte le schede aperte (le tre larghezze) | Superata |
| "Naviga Web" completo, TCP/IP, Round-trip disattivato: fase HTTP 200 OK presente | Superata |
| Nessuna etichetta OSI (`[L1]`/`[L2]`/`[L3]`) nel log durante "Naviga Web" in TCP/IP | Superata |
| Nessuna occorrenza di "Riassembla UDP" nel log | Superata |
| Nessun errore console/pagina durante "Naviga Web" completo | Superata |
| Modalità Errore Guidato: interazione reale (clic sull'opzione, continua) con esito registrato nel log | Superata |
| `mappa_tcpip_v5_6.html` e `glossario.html`: caricamento senza errori (smartphone) | Superata |

Log completo di un'esecuzione reale (TCP/IP, Round-trip disattivato) ispezionato
a mano: porte confermate invertite nella risposta (DNS sp:56134 dp:53 →
risposta sp:53 dp:56134; HTTP sp:56525 dp:80 → risposta sp:80 dp:56525);
nessuna etichetta OSI; "Elabora datagramma UDP" per UDP e "Riassembla segmento
TCP" per TCP. Verificato a mano anche il log degli scenari singoli "DNS (UDP)"
e "Web (TCP)" con Round-trip attivato, in ISO/OSI: stesso comportamento corretto.

**Non ancora collaudato** (limiti dichiarati, invariati rispetto al ricontrollo
precedente): un dispositivo telefonico reale (solo la larghezza "smartphone" è
stata simulata in Chromium); l'esportazione PDF effettiva (verificato solo
l'HTML generato per il report, non la stampa/salvataggio PDF); ARP, ICMP/
Traceroute e Frammentazione non sono stati ri-osservati visivamente in modalità
TCP/IP nel browser reale (solo tramite i test automatici, che eseguono il
sorgente reale ma senza rendering) — i test automatici coprono entrambi i
modelli per questi tre scenari. GitHub e Zenodo: nessuna azione, come richiesto.

Versione 5.5 di `netlab`, `mappa_tcpip` e del glossario non modificate. Autore e
licenza invariati; nessun DOI o data di pubblicazione aggiunti.

## Primo ricontrollo del 10 ottobre 2026

## Prove automatiche eseguite

Eseguiti `node tests/test_netlab.js` e `node tests/test_package.js` dopo le correzioni. Entrambi terminano con esito positivo. I test usano Node.js, un DOM simulato e temporizzazioni immediate: non sono prove di rendering o collaudo di un browser reale.

| Prova del simulatore principale | OSI | TCP/IP |
|---|---|---|
| Web: frame sostituito ai router, payload finale pulito, TTL 64→63→62 | Superata | Superata |
| Errore FCS al primo router: frame scartato | Superata | Superata |
| Risposta DNS nel percorso inverso | Superata | Superata |
| DNS su UDP senza ACK TCP | Superata | Superata |
| ACK TCP nelle due direzioni della richiesta e della risposta | Superata | Superata |
| ARP senza eccezioni nello scenario | Superata | Superata |
| Traceroute: TTL 2→1→0 e 3→2→1 | Superata | Superata |
| Frammentazione: tre frammenti, totale originale 3000 byte, offset 0/185/370 | Superata | Superata |
| Funzione handshake reale: SYN, SYN-ACK, ACK | Superata | Superata |
| Navigazione completa: ARP, query e risposta DNS, handshake, HTTP; log e nome conservati | Superata | Superata |
| Titolo e versione nell’HTML generato per il report di Navigazione Web | Superata | Superata |
| Navigazione con errore FCS: interruzione senza completamento | Superata | Superata |

| Prova dei file collegati | Esito |
|---|---|
| Sintassi JavaScript delle tre pagine | Superata |
| Destinazioni dei link locali presenti nel pacchetto | Superata |
| Accesso negato allo storage: preferenze facoltative nelle tre pagine | Superata |
| Glossario: esecuzione dello script completo con storage negato | Superata |
| Glossario: parametri dei comandi conservati come testo e ricerca con/senza risultati | Superata |
| Mappa: esecuzione dello script completo con storage negato | Superata |
| Mappa: tutti i passi delle cinque mini-simulazioni e reset | Superata |
| Mappa: apertura dei pannelli nelle modalità docente e studente | Superata |
| CFF: parsing YAML, autore/licenza/versione coerenti, assenza di DOI precedente nel candidato | Superata |

Il CFF è stato controllato come YAML e per la coerenza dei campi principali; non è stata eseguita una validazione completa contro lo schema CFF. La licenza non è stata modificata. Le copie originali di NetLab 5.5, mappa 5.5 e glossario non sono state modificate.

## Revisione dei contenuti

Corrette imprecisioni su UDP, PDU TCP/UDP, confronto dei modelli, indirizzi IP rispetto a TTL/checksum, formati dei frame, DNS/cache, ACK e traceroute. I terminali della mappa sono esempi simulati. L’esempio di frammentazione assume IPv4, DF=0, intestazione di 20 byte senza opzioni e datagramma iniziale di 3000 byte complessivi.

Riferimenti tecnici: RFC 768 (UDP), https://www.rfc-editor.org/info/rfc768/ ; RFC 791 (IPv4), https://www.rfc-editor.org/rfc/rfc791.html . Consultati il 10 ottobre 2026.

## Controlli ancora necessari (aggiornato al secondo ricontrollo)

- **Browser su PC — completato in parte:** nel secondo ricontrollo è stato ora possibile un collaudo visivo reale con Chromium (vedi sopra): caricamento, assenza di errori console, responsività e un'esecuzione completa di "Naviga Web" in TCP/IP sono stati osservati. Non ancora osservati visivamente nel browser reale (solo tramite i test automatici, che non misurano il rendering): posizione/animazione del pacchetto durante ARP, ICMP/Traceroute e Frammentazione; i controlli Pausa/Step/Velocità; l'apertura del file sia in locale sia dalla versione eventualmente servita online.
- **Errore guidato — completato:** nel secondo ricontrollo è stata collaudata nel browser reale l'interazione vera (clic sull'opzione, pulsante "Continua"), con l'esito ora correttamente registrato nel log. Non ancora provata la risposta "corretta" per via interattiva (solo quella errata è stata cliccata nel collaudo; la correttezza della diramazione "risposta esatta" è comunque coperta a livello di codice).
- **Stampa/PDF:** esportare dopo Naviga Web, controllare titolo, log completo, impaginazione e finestre popup. I test (automatico e in browser reale) verificano l'HTML generato per il report, non la stampa/il salvataggio PDF effettivo.
- **Telefono reale:** controllare touch, scorrimento, leggibilità, popup e navigazione delle tre pagine su un dispositivo fisico. Il secondo ricontrollo ha simulato la larghezza di uno smartphone (390px) in Chromium, che verifica il layout responsivo ma non sostituisce un collaudo touch su hardware reale.
- **Supporti didattici:** verificare nel browser ricerca del glossario, entrambe le viste della mappa, terminali simulati, copia sintesi e sintesi stampabile. Nel secondo ricontrollo è stato verificato solo che le due pagine si aprano senza errori a larghezza smartphone.
- **GitHub e Zenodo:** verificare repository e record precedente, completare data e DOI della nuova versione, rigenerare le impronte; confrontare file pubblicati e link su GitHub Pages dopo l'approvazione. Nessuna pubblicazione o modifica esterna è stata eseguita, su istruzione esplicita del docente: i file vanno presentati prima a lui.

**Conclusione:** le prove automatiche e il collaudo in browser reale eseguiti in questo secondo ricontrollo sono tutti positivi; i quattro punti segnalati dal docente (navigazione web completa, inversione delle porte, coerenza delle etichette di livello, terminologia) risultano corretti e verificati. Restano i limiti dichiarati sopra (telefono fisico, PDF effettivo, GitHub/Zenodo) e un collaudo visivo più ampio di ARP/ICMP/Frammentazione nel browser reale. Il candidato è disponibile per la revisione del docente; non va pubblicato su GitHub o Zenodo prima della sua approvazione.
