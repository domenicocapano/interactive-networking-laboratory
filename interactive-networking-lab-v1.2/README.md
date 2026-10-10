# Interactive Networking Laboratory — 1.2

**Main simulator:** NetLab v5.6 · **Author:** Domenico Capano · **License:** CC BY 4.0.

## English

Interactive Networking Laboratory is a collection of browser-based educational resources for teaching computer networks through visual explanations, animations, guided scenarios and interactive activities. It covers the ISO/OSI model, the four-layer TCP/IP architecture, encapsulation, ARP, DNS, TCP handshake, HTTP, acknowledgements, ICMP/Ping, Traceroute, IPv4 fragmentation and packet routing.

**Package version 1.2 includes NetLab v5.6.** These two version numbers identify the complete package and its main simulator respectively. The preceding package 1.1, containing NetLab v5.5, remains a separate archived version.

### Getting started

Extract the entire ZIP and open `netlab_v5_6.html` in a modern browser. Keep the three HTML files in the same directory so their navigation links work. No installation, server, external libraries or Internet connection is needed for the simulations. External reference links require Internet access.

The interface is in Italian. This README and the tutorial include English and Italian documentation. `LICENSE.txt` and the citation abstract are in English; release notes and the verification report are in Italian.

### Files

| File | Purpose |
|---|---|
| `netlab_v5_6.html` | Main simulator: Web, DNS, ARP, Ping, Traceroute, fragmentation and full Web navigation |
| `mappa_tcpip_v5_6.html` | Interactive concept map and five mini-simulations |
| `glossario.html` | Glossary and network diagnostic commands |
| `TUTORIAL.md` | English and Italian guide for students and teachers |
| `LICENSE.txt` | License information and link to CC BY 4.0 |
| `CITATION.cff` | Machine-readable citation metadata |
| `RELEASE_NOTES_v5.6.md` | Changes relative to NetLab v5.5 |
| `VERIFICA_v5.6.md` | Verification evidence and remaining limitations |
| `PUBBLICAZIONE_v5.6.md` | Deposit status, metadata and publication procedure |
| `SHA256SUMS.txt` | SHA-256 checksums for the other package files |
| `tests/` | Repeatable tests using Node.js, without additional dependencies |

### Changes and teaching notes

- Full Web navigation always includes DNS and HTTP requests and responses. The Round-trip checkbox controls only the individual Web and DNS scenarios.
- Response ports reverse the corresponding request ports; log labels and guided-error answers follow the selected model.
- TCP processes segments and reconstructs the byte stream; UDP processes datagrams. Fragmented IP datagrams are reassembled at the IP layer.
- Router processing, FCS detection, TTL changes, serial WAN framing and IPv4 fragmentation have been corrected or clarified.
- The animated packet now follows the built-in A− / A / A+ zoom controls, including its width, text and spacing.
- HTTP is demonstrated without encryption, on port 80. TLS/HTTPS is not simulated. The network and protocol animations are simplified educational representations.

### Verification

Both included automated suites pass for the final HTML, in OSI and TCP/IP modes. They execute the simulation logic with a simulated DOM and do not measure browser layout. The preceding corrected simulator was also tested in Chromium by Claude, and its four-page sample PDF was independently inspected. The last change adds packet zoom CSS only. This final CSS has been checked in the source; its appearance during animation still needs a visual check on the author's computer. No physical-phone test was performed. ARP, Traceroute and fragmentation were covered by automated tests but were not visually rerun in the last browser round. See `VERIFICA_v5.6.md` for attribution and scope.

From the extracted directory, run:

```sh
node tests/test_netlab.js
node tests/test_package.js
```

### Citation and deposit status

Capano, D. (2026). *Interactive Networking Laboratory – Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing* (Version 1.2; includes NetLab v5.6). Zenodo. https://doi.org/10.5281/zenodo.23272307

**Prepared on 10 October 2026 for the new Zenodo version.** DOI `10.5281/zenodo.23272307` was supplied by the author from the new-version draft. It is reserved and becomes registered when the draft is published. This package does not itself confirm publication. The DOI of package 1.1 is `10.5281/zenodo.21299699`; it must not identify the files in this package. No final publication date is asserted in `CITATION.cff` before publication.

## Italiano

**Interactive Networking Laboratory 1.2** comprende **NetLab v5.6**, il glossario e la mappa concettuale. Le tre pagine sono in italiano e funzionano offline: estrarre l'intero ZIP, mantenerle nella stessa cartella e aprire `netlab_v5_6.html`. README e tutorial comprendono una parte inglese e una italiana; note di rilascio e rapporto di verifica sono in italiano.

### Uso e novità

Il laboratorio mostra livelli ISO/OSI e TCP/IP, incapsulamento, ARP, DNS, handshake TCP, HTTP, ACK, ICMP/Ping, Traceroute, frammentazione IPv4 e instradamento. Gli scenari sono rappresentazioni didattiche semplificate. La dimostrazione Web usa HTTP in chiaro sulla porta 80 e non simula TLS.

Nella v5.6 sono stati corretti percorsi, intestazioni, FCS, TTL, frammentazione, porte nelle risposte, terminologia e opzioni dell'Errore Guidato. «Naviga Web» comprende sempre richiesta e risposta DNS/HTTP; la casella Round-trip riguarda i due scenari singoli Web e DNS. Il pacchetto animato segue ora i controlli A− / A / A+ anche per larghezza, testo e spaziatura.

### Verifica e conservazione

I due test automatici inclusi passano sul file HTML definitivo per entrambi i modelli; verificano la logica con DOM simulato. Il collaudo Chromium e il PDF campione riguardano il sorgente corretto prima dell'ultima aggiunta CSS. Il PDF di quattro pagine è stato ispezionato anche nel ricontrollo indipendente. La modifica CSS è stata controllata nel sorgente; resta da osservare lo zoom durante l'animazione sul computer del docente. Restano dichiarati i limiti su telefono fisico e sul ricontrollo visivo di ARP, Traceroute e frammentazione. Dettagli in `VERIFICA_v5.6.md`.

La versione precedente, pacchetto 1.1 con NetLab 5.5, resta archiviata separatamente. Questa cartella contiene esclusivamente i file della nuova versione e non sostituisce l'archivio precedente.

### Citazione

Capano, D. (2026). *Interactive Networking Laboratory – Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing* (Versione 1.2; comprende NetLab v5.6). Zenodo. https://doi.org/10.5281/zenodo.23272307

Pacchetto preparato il **10 ottobre 2026**, da caricare nella bozza della nuova versione. Il DOI indicato è riservato e si attiverà alla pubblicazione; la pubblicazione non è stata effettuata da questo ricontrollo. Procedura e descrizione inglese per Zenodo in `PUBBLICAZIONE_v5.6.md`. Autore e licenza CC BY 4.0 invariati.
