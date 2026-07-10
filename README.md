# Interactive Networking Laboratory

**Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing**

| | |
|---|---|
| **Versione del pacchetto (Zenodo)** | 1.1 |
| **Componente principale** | NetLab v5.5 |
| **Autore** | Domenico Capano |
| **Anno** | 2026 |
| **Licenza** | Creative Commons Attribution 4.0 International (CC BY 4.0) |
| **DOI di questa versione (1.1)** | `10.5281/zenodo.21299699` - (https://doi.org/10.5281/zenodo.21299699) |
| **DOI versione precedente (1.0)** | [10.5281/zenodo.19066947](https://doi.org/10.5281/zenodo.19066947) |
| **Sito** | [www.learningobjects.org](https://www.learningobjects.org) |

---

## 🇮🇹 Descrizione

**Interactive Networking Laboratory** è un pacchetto di risorse didattiche
interattive, in HTML/JS puro (nessuna installazione, nessuna dipendenza
server), per l'insegnamento delle reti di calcolatori: modello ISO/OSI,
architettura TCP/IP, incapsulamento, ARP, DNS, handshake TCP, ICMP/Traceroute,
frammentazione IP, instradamento dei pacchetti.

È pensato per istituti tecnici (ITIS), corsi di **Sistemi e Reti**, università
ed e-learning, e funziona interamente offline nel browser.

Il pacchetto comprende:

- il **simulatore principale NetLab** (attualmente alla versione interna
  **v5.5**), con animazione passo-passo del flusso dati e scenari guidati;
- un **glossario** dei termini tecnici e dei comandi di rete da prompt;
- una **mappa concettuale interattiva** TCP/IP e ISO/OSI, con vista
  commutabile tra i due modelli;
- **cinque mini-simulazioni** didattiche integrate nella mappa concettuale
  (incapsulamento, routing, DNS, ARP, IP/MAC/next-hop);
- **documentazione** dedicata a studenti e docenti (`TUTORIAL.md`).

> ⚠️ **Nota sul nome:** "NetLab" è il nome del simulatore principale e delle
> singole pagine HTML. Il pacchetto pubblicato su Zenodo si chiama invece
> **Interactive Networking Laboratory**: le due numerazioni di versione sono
> indipendenti (vedi sezione "Versionamento" più sotto).

### Pagine e file inclusi

| File | Descrizione |
|---|---|
| `netlab_v5_5.html` | Simulatore principale: animazione passo-passo del flusso dati, scenari (Web, DNS, ARP, ICMP/Ping, Traceroute, Frammentazione IP, Naviga Web completo), Lavagna Didattica, Quiz con storico locale, esportazione PDF del log. |
| `glossario.html` | Glossario di termini tecnici e lista dei comandi di rete da prompt (`ipconfig`, `ping`, `tracert`, `arp -a`, `nslookup`, ecc.) con spiegazione. |
| `mappa_tcpip_v5_5.html` | Mappa concettuale interattiva del modello TCP/IP **e ISO/OSI** (vista commutabile), con 5 mini-simulazioni didattiche integrate e modalità studente/docente. |
| `TUTORIAL.md` | Guida rapida all'uso per studenti e docenti. |
| `README.md` | Questo file. |
| `LICENSE.txt` | Testo della licenza CC BY 4.0 e attribuzione consigliata. |
| `CITATION.cff` | Metadati di citazione in formato Citation File Format. |

> Le tre pagine HTML sono collegate tra loro tramite **link relativi**:
> vanno mantenute nella stessa cartella - funzionano così sia aperte
> direttamente dal filesystem, sia estratte da uno ZIP, sia pubblicate su
> GitHub Pages, sia scaricate da Zenodo.

### Requisiti

Nessuno. Basta un browser moderno (Chrome, Edge, Firefox, Safari). Nessuna
connessione a Internet è richiesta per l'uso didattico e nessuna dipendenza
esterna (CDN o servizi terzi) è necessaria al funzionamento: l'unico elemento
che richiede rete è il link cliccabile al sito LearningObjects.org
nell'header, non necessario per usare gli strumenti.

### Come pubblicarlo su GitHub Pages

1. Carica tutti i file nella root del repository (o in una sottocartella,
   es. `/docs`), mantenendo i nomi esatti dei tre file HTML.
2. Nelle impostazioni del repository → **Pages**, seleziona il branch e la
   cartella da cui pubblicare.
3. La home consigliata è `netlab_v5_5.html`: linkala dalla sezione
   simulatori di [learningobjects.org](https://www.learningobjects.org).

### Come pubblicarlo su Zenodo

1. Collega il repository GitHub a Zenodo (Zenodo → GitHub → attiva il repo),
   oppure carica manualmente l'archivio come nuova versione del record
   esistente. Il DOI concettuale della serie va verificato direttamente su
   Zenodo (provvisoriamente: `DOI_CONCETTUALE_DA_VERIFICARE`) - **non va
   dato per scontato che coincida con il DOI specifico della versione 1.0**
   (`10.5281/zenodo.19066947`), perché Zenodo assegna in genere un DOI
   concettuale distinto da quello di ogni singola versione.
2. Crea una **release** su GitHub (es. tag `package-v1.1`, da non confondere
   con il tag interno `v5.5` del simulatore): Zenodo genera automaticamente
   un DOI specifico per quella versione, collegato al DOI concettuale della
   serie.
3. Metadati da usare per Zenodo:
   - **Titolo:** Interactive Networking Laboratory – Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing
   - **Tipo di risorsa:** Software
   - **Autori:** Domenico Capano
   - **Licenza:** CC BY 4.0
   - **Versione:** 1.1
   - **Parole chiave:** ISO/OSI, TCP/IP, ARP, DNS, HTTP, packet routing, reti di calcolatori, didattica, simulatore, e-learning, Sistemi e Reti
   - **Descrizione:** riutilizza il paragrafo "Descrizione" di questo README.
4. Il tipo di risorsa "Software" è quello principale della pubblicazione; il
   pacchetto può comunque essere *descritto* nel testo come risorsa
   didattica interattiva o insieme di simulatori educativi.

---

## Versionamento

Il pacchetto distingue esplicitamente due numerazioni indipendenti:

| Cosa | Versione |
|---|---|
| **Pacchetto Zenodo** (Interactive Networking Laboratory) | **1.1** |
| **Simulatore principale** (NetLab) | **5.5** |
| Mappa concettuale e glossario | Componenti della release 1.1, senza numerazione autonoma |

Il nome dell'archivio distribuito è: **`interactive-networking-lab-v1.1.zip`**

I nomi dei file HTML interni **non cambiano** da una release Zenodo
all'altra a meno di un aggiornamento maggiore del simulatore: restano
`netlab_v5_5.html`, `mappa_tcpip_v5_5.html`, `glossario.html`.

---

## Citazione

Questo software è archiviato su Zenodo e può essere citato. Il pacchetto ha
due versioni pubblicate con DOI distinti: **non usare il DOI della versione
1.0 per citare la versione 1.1**.

### A. Versione precedente - Interactive Networking Laboratory, Version 1.0

DOI: `10.5281/zenodo.19066947`

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.19066947.svg)](https://doi.org/10.5281/zenodo.19066947)

> Capano, D. (2026). *Interactive Networking Laboratory - Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing* (Version 1.0) [Computer software]. Zenodo. https://doi.org/10.5281/zenodo.19066947

La versione 1.0 comprendeva due simulatori HTML indipendenti
(`simulatore_osi_v4.html` e `netlab_v5.1.html`); vedi la sezione
["Evoluzione dalla versione 1.0"](#evoluzione-dalla-versione-10) più sotto.

### B. Nuova versione - Interactive Networking Laboratory, Version 1.1

**DOI specifico: da inserire dopo la creazione della nuova versione su
Zenodo.** Fino ad allora, il riferimento nei file del pacchetto è il
segnaposto `10.5281/zenodo.21299699`.

> Capano, D. (2026). *Interactive Networking Laboratory - Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing* (Version 1.1) [Computer software]. Zenodo. 10.5281/zenodo.21299699


> ⚠️ **Nota per l'autore, ben visibile:** prima della pubblicazione
> definitiva, sostituire **`10.5281/zenodo.21299699`** (qui sopra e in
> tutti i file del pacchetto - vedi elenco nel rapporto di revisione) con il
> DOI specifico riservato o assegnato da Zenodo alla Version 1.1. **Non**
> riutilizzare il DOI `10.5281/zenodo.19066947` della Version 1.0: identifica
> una pubblicazione diversa.

### Citazione in formato BibTeX (Version 1.1)

```bibtex
@software{capano_interactive_networking_lab_2026,
  author    = {Capano, Domenico},
  title     = {Interactive Networking Laboratory – Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing},
  year      = {2026},
  version   = {1.1},
  publisher = {Zenodo},
  doi       = {10.5281/zenodo.21299699},
  url       = {https://doi.org/10.5281/zenodo.21299699},
  license   = {CC-BY-4.0}
}
```

Sono disponibili anche i metadati di citazione in formato leggibile da
macchina nel file [`CITATION.cff`](./CITATION.cff).

---

## Licenza

Distribuito con licenza **Creative Commons Attribution 4.0 International
(CC BY 4.0)** - identificatore SPDX: `CC-BY-4.0`. Sei libero di usare,
modificare e ridistribuire, anche a scopo commerciale, citando l'autore
originale. Testo completo in [`LICENSE.txt`](./LICENSE.txt).

Copyright © 2026 Domenico Capano – LearningObjects.org

Attribuzione consigliata (Version 1.1):

> Capano, D. (2026). Interactive Networking Laboratory – Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing, Version 1.1. Zenodo. 10.5281/zenodo.21299699

*(Versione precedente 1.0: https://doi.org/10.5281/zenodo.19066947)*

---

## Evoluzione dalla versione 1.0

La **versione 1.0**, pubblicata su Zenodo con DOI
`10.5281/zenodo.19066947`, comprendeva due simulatori HTML indipendenti:
`simulatore_osi_v4.html` e `netlab_v5.1.html`.

La **versione 1.1** riorganizza e amplia il pacchetto in un sito
multipagina collegato, con:

- il simulatore principale aggiornato a **NetLab v5.5**;
- glossario e comandi di rete (`glossario.html`);
- mappa concettuale interattiva TCP/IP e ISO/OSI (`mappa_tcpip_v5_5.html`);
- cinque mini-simulazioni didattiche integrate nella mappa;
- modalità studente/docente nei contenuti didattici;
- un tutorial dedicato (`TUTORIAL.md`);
- i file `LICENSE.txt` e `CITATION.cff`, assenti nella 1.0;
- miglioramenti di navigazione, accessibilità e fruibilità (zoom, bottone
  "torna su", indice di navigazione rapida, adattamento a
  smartphone/tablet/PC);
- la revisione didattica della collocazione di ARP (livello Accesso Rete,
  non Internet/Rete);
- la revisione della formulazione sulla corrispondenza tra TCP/IP e
  ISO/OSI (confronto didattico, non equivalenza assoluta).

---

## Changelog

### A. Changelog del pacchetto Zenodo (Interactive Networking Laboratory)

**Version 1.1**

- Aggiornamento del simulatore principale NetLab alla versione interna v5.5.
- Introduzione della struttura multipagina (simulatore, glossario, mappa
  concettuale collegati tra loro).
- Aggiunta del glossario dei termini tecnici e dei comandi di rete.
- Aggiunta della mappa concettuale interattiva TCP/IP / ISO-OSI.
- Aggiunta delle mini-simulazioni didattiche integrate nella mappa.
- Miglioramento di navigazione, controlli di zoom e fruibilità generale
  (bottone "torna su", indice di navigazione rapida, adattamento a
  smartphone/tablet/PC).
- Correzione della collocazione didattica di ARP (livello Accesso Rete,
  non livello Internet/Rete) in tutti i file del pacchetto.
- Revisione della formulazione sulla corrispondenza tra TCP/IP e ISO/OSI
  (confronto didattico, non equivalenza architetturale assoluta).
- Aggiunta di `LICENSE.txt` e `CITATION.cff`.
- Aggiornamento della documentazione (README, TUTORIAL) per la
  pubblicazione Zenodo.

**Version 1.0**

- Prima pubblicazione del pacchetto su Zenodo.

### B. Changelog interno del simulatore NetLab

- **v5.5** - Sito multi-pagina (simulatore / glossario / mappa concettuale
  collegati), mappa concettuale con vista ISO/OSI commutabile e indice di
  navigazione rapida, controlli zoom A−/A/A+ persistenti, bottone "torna su"
  su tutte le pagine, credito LearningObjects.org in header, guida "Come si
  usa?" in-app.
- **v5.4** - Modalità Errore Guidato (previsione + verifica), confronto
  IPv4/IPv6 nella frammentazione, storico quiz salvato in locale.
- **v5.3** - Tab Glossario & Comandi, correzione dimensioni testi/riquadri,
  soglie responsive più corrette per PC/tablet.
- **v5.2** - Notifica sonora/visiva alla consegna del pacchetto, base
  responsive per smartphone/tablet/PC, bottoni "❓ cosa fa?" sotto ogni
  scenario, primi ingrandimenti testo.
- **v5.1** - Versione base (simulatore + variante "con lavagna didattica").

> Il changelog A (pacchetto Zenodo, versioni 1.0/1.1) e il changelog B
> (simulatore NetLab, versioni 5.1→5.5) sono numerazioni **indipendenti** e
> non vanno confusi tra loro.

---

## 🇬🇧 Description (English)

**Interactive Networking Laboratory** is a set of interactive,
dependency-free HTML/JS teaching resources for computer networking: the
ISO/OSI model, TCP/IP architecture, encapsulation, ARP, DNS, TCP handshake,
ICMP/Traceroute, IP fragmentation, and packet routing. Designed for
technical secondary schools, networking courses, and e-learning, it runs
entirely offline in the browser.

The package (Zenodo version **1.1**) includes the main simulator **NetLab**
(internal version **5.5**), a glossary of terms and network commands, an
interactive TCP/IP & ISO/OSI concept map with five embedded mini-simulations,
and documentation for students and teachers. See the Italian sections above
for the full file list, publishing steps, citation, license, and changelog -
the same information applies regardless of language.

Licensed under **CC BY 4.0**. Copyright © 2026 Domenico Capano –
LearningObjects.org. DOI of this version (1.1): `10.5281/zenodo.21299699`
(to be completed after the Zenodo release). Previous version (1.0) DOI:
[10.5281/zenodo.19066947](https://doi.org/10.5281/zenodo.19066947).
