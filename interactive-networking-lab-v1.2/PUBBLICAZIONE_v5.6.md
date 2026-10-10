# Interactive Networking Laboratory 1.2 — deposito Zenodo

**Preparazione: 10 ottobre 2026. Stato: pronto per il caricamento nella bozza; non pubblicato da questo ambiente.**

Il pacchetto **1.2** comprende NetLab **5.6**. Il DOI della nuova bozza, fornito dal docente, è **10.5281/zenodo.23272307**. Il DOI della versione precedente (pacchetto 1.1 con NetLab 5.5) è **10.5281/zenodo.21299699**. La nuova versione va pubblicata dalla bozza creata tramite **New version** del deposito precedente, mantenendo disponibile l'archivio 5.5.

## Metadati della nuova versione

| Campo | Valore |
|---|---|
| Resource type | Software |
| Title | Interactive Networking Laboratory – Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing |
| Version | 1.2 |
| Creator | Capano, Domenico; conservare i dati verificati nel record precedente |
| DOI | 10.5281/zenodo.23272307 — già riservato nella nuova bozza |
| Publication date | Data effettiva di pubblicazione; 2026-10-10 se pubblicato il 10 ottobre 2026 |
| License | Creative Commons Attribution 4.0 International (CC BY 4.0) |
| Languages | Italian e English: interfacce in italiano, README e tutorial bilingui |
| Files visibility | Public |

Conservare autore, eventuale ORCID e affiliazioni già presenti: non aggiungere identificatori o affiliazioni non verificati. I collegamenti tra versioni sono gestiti da Zenodo tramite la nuova versione. Non assegnare al nuovo pacchetto il DOI specifico della versione precedente.

## Descrizione inglese per il campo Description

Interactive Networking Laboratory is a collection of browser-based educational resources for teaching and learning computer networks through visual explanations, step-by-step animations, interactive simulations and guided activities.

Package version 1.2 includes NetLab v5.6, an interactive TCP/IP and ISO/OSI concept map with five embedded mini-simulations, and a searchable glossary of network concepts and diagnostic commands. The three HTML pages use an Italian interface. The README and tutorial provide documentation in English and Italian.

The main simulator illustrates the seven-layer ISO/OSI model and the four-layer TCP/IP architecture using a Client–Router-A–DCE/WAN–Router-B–Server topology. Scenarios cover encapsulation and decapsulation, Ethernet framing and FCS error detection, local ARP resolution, DNS over UDP, TCP connection establishment, HTTP request/response, TCP acknowledgements, ICMP/Ping, Traceroute with TTL changes, IPv4 fragmentation, and packet routing.

NetLab v5.6 corrects model-specific layer labels and guided-error answers, router and link-layer processing, TTL and fragmentation details, and response port reversal. Full Web navigation always includes both DNS and HTTP requests and responses; the Round-trip option controls only the individual Web and DNS scenarios. Completion messages, destination highlighting and the printable report consistently reflect the scenario that was executed. TCP terminology describes segment processing and byte-stream reconstruction. The animated packet follows the built-in zoom controls for width, text size and spacing.

The package offers adjustable animation speed, pause and step controls, a detailed log with printable/PDF reporting, guided FCS-error activities, a quiz, and classroom explanation cards. The concept map relates models, protocols, PDUs, addressing and devices, presenting the correspondence between ISO/OSI and TCP/IP as approximate rather than exact. Its diagnostic terminal examples are fictional and do not execute commands on the user's computer.

All educational components run offline in a modern browser, without installation, a server, external libraries or required Internet access. External reference links require a connection. The HTTP demonstration uses unencrypted HTTP on port 80 and does not simulate TLS/HTTPS. Protocol timing and network behaviour are simplified for teaching.

Repeatable Node.js tests, release notes, a verification report and SHA-256 checksums are included. The verification report distinguishes automated logic checks, the preceding Chromium and PDF checks, and remaining visual or physical-device limitations, including the final packet-zoom check. The previous package 1.1, containing NetLab v5.5, remains archived as a separate version.

Author: Domenico Capano. Project website: https://www.learningobjects.org. License: Creative Commons Attribution 4.0 International (CC BY 4.0).

## Passaggi finali sul computer del docente

1. Estrarre il nuovo ZIP e aprire `netlab_v5_6.html`. Provare A−, A e A+ durante l'animazione in ISO/OSI e TCP/IP: il pacchetto deve restare allineato ai livelli e il testo deve ingrandirsi. Questa ultima prova visiva non è stata eseguita qui.
2. Nella **nuova bozza** Zenodo verificare DOI e versione indicati sopra. Caricare `interactive-networking-lab-v1.2.zip` come pacchetto completo.
3. Se nella bozza è presente il solo HTML provvisorio, rimuoverlo dalla bozza dopo che lo ZIP è stato caricato. Se sono stati importati file della v1.1, escluderli solo dalla nuova bozza: l'archivio pubblicato precedente non va modificato.
4. Aggiornare Description con il testo inglese sopra; verificare metadati, lingue, licenza e data effettiva. Mantenere le parole chiave pertinenti del record precedente.
5. Usare **Save draft** e **Preview**, verificando titolo, versione, DOI, descrizione e ZIP. Solo al termine, il docente preme **Publish** e conferma.
6. Dopo la pubblicazione, il DOI riservato diventa registrato. Scaricare lo ZIP dal nuovo record e confrontarlo con quello consegnato; aprire il simulatore estratto.
7. Se si prepara poi la release GitHub, usare gli stessi contenuti e il DOI di questo deposito manuale. Evitare un secondo deposito automatico GitHub–Zenodo per la stessa versione. Conservare separatamente la release 5.5.

La data effettiva di pubblicazione non viene inventata nei file: `CITATION.cff` contiene il DOI riservato e omette `date-released` finché la pubblicazione non è confermata. I riferimenti storici nel rapporto di verifica riguardano le rispettive fasi di controllo, non una pubblicazione già effettuata.

## Riferimenti ufficiali

- Versioni: https://help.zenodo.org/docs/deposit/manage-versions/
- Bozza, DOI riservato, anteprima e pubblicazione: https://help.zenodo.org/docs/deposit/create-new-upload/
