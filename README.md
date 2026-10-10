# Interactive Networking Laboratory

**Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing**

| | |
|---|---|
| Current package | **1.2** |
| Main simulator | **NetLab v5.6** |
| Author | Domenico Capano |
| Published on Zenodo | 10 October 2026 |
| Version DOI | [10.5281/zenodo.23272307](https://doi.org/10.5281/zenodo.23272307) |
| License | Creative Commons Attribution 4.0 International (CC BY 4.0) |
| Project website | [LearningObjects.org](https://www.learningobjects.org) |

## Italiano

Interactive Networking Laboratory raccoglie risorse didattiche HTML/CSS/JavaScript per lo studio di ISO/OSI, TCP/IP, incapsulamento, ARP, DNS, TCP, HTTP, ICMP/Ping, Traceroute, frammentazione IPv4 e instradamento.

Il pacchetto **1.2** comprende **NetLab 5.6**, il glossario e la mappa concettuale con cinque mini-simulazioni. Le interfacce sono in italiano; README e tutorial della nuova versione sono bilingui. Le risorse funzionano offline: estrarre lo ZIP e aprire `netlab_v5_6.html`, mantenendo le tre pagine HTML nella stessa cartella.

### Versione corrente

- [Cartella completa della versione 1.2](interactive-networking-lab-v1.2/)
- [Sorgente del simulatore NetLab 5.6](interactive-networking-lab-v1.2/netlab_v5_6.html)
- [README bilingue del pacchetto](interactive-networking-lab-v1.2/README.md)
- [Tutorial italiano/inglese](interactive-networking-lab-v1.2/TUTORIAL.md)
- [Note di rilascio](interactive-networking-lab-v1.2/RELEASE_NOTES_v5.6.md)
- [Verifiche e limiti dichiarati](interactive-networking-lab-v1.2/VERIFICA_v5.6.md)
- [Deposito Zenodo pubblicato, versione 1.2](https://zenodo.org/records/23272307)

Lo ZIP `interactive-networking-lab-v1.2.zip` allegato alla release GitHub deve essere lo stesso archivio pubblicato su Zenodo. La cartella della versione conserva gli stessi 13 file del pacchetto depositato, comprese le note sulla sua preparazione prima della pubblicazione. Questo README e il `CITATION.cff` nella cartella principale riportano invece lo stato attuale: pubblicato su Zenodo il 10 ottobre 2026.

### Archivio della versione precedente

- [Archivio completo del pacchetto 1.1 con NetLab 5.5](archive/v1.1/)
- [README originale della 1.1](archive/v1.1/README.md)
- [Deposito Zenodo della 1.1](https://zenodo.org/records/21299699)

I sette file dell'archivio sono copie identiche del repository precedente all'aggiornamento. I vecchi HTML e il glossario nella cartella principale restano invariati per mantenere i collegamenti esistenti. Il materiale corrente si trova nella cartella `interactive-networking-lab-v1.2/`.

### Verifiche

Dalla cartella `interactive-networking-lab-v1.2`, eseguire con Node.js:

```sh
node tests/test_netlab.js
node tests/test_package.js
```

Le prove automatiche passano in entrambi i modelli. Il rapporto distingue logica, collaudo precedente in Chromium, PDF campione e limiti residui, tra cui la verifica visiva dell'ultimo CSS dello zoom. HTTP è rappresentato in chiaro sulla porta 80, senza TLS; le animazioni sono semplificazioni didattiche.

### Citazione

Capano, D. (2026). *Interactive Networking Laboratory – Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing* (Versione 1.2; comprende NetLab v5.6). Zenodo. https://doi.org/10.5281/zenodo.23272307

## English

Interactive Networking Laboratory provides browser-based educational resources for computer networking. Package **1.2**, published on Zenodo on **10 October 2026**, contains **NetLab v5.6**, a glossary and an interactive ISO/OSI and TCP/IP concept map with five mini-simulations. The interface is Italian; the package README and tutorial are bilingual. Extract the complete release ZIP and open `netlab_v5_6.html` in a modern browser. Keep the three HTML pages together. The simulations require no installation, server, external libraries or Internet connection; external reference links require a connection.

The current package is in [interactive-networking-lab-v1.2](interactive-networking-lab-v1.2/). Read its [tutorial](interactive-networking-lab-v1.2/TUTORIAL.md), [release notes](interactive-networking-lab-v1.2/RELEASE_NOTES_v5.6.md) and [verification report](interactive-networking-lab-v1.2/VERIFICA_v5.6.md). Its 13 files are identical to the Zenodo package, retaining the preparation documentation as deposited. The root citation metadata records the confirmed publication date.

The complete earlier package 1.1, containing NetLab v5.5, remains in [archive/v1.1](archive/v1.1/), copied without changes from the preceding repository state. The legacy HTML pages and glossary at the repository root remain unchanged for existing links. The release asset should be the same ZIP already deposited on Zenodo.

Citation: Capano, D. (2026). *Interactive Networking Laboratory – Educational Simulators for ISO/OSI, TCP/IP, ARP, DNS, HTTP and Packet Routing* (Version 1.2; includes NetLab v5.6). Zenodo. https://doi.org/10.5281/zenodo.23272307

License: **CC BY 4.0**. Copyright © 2026 Domenico Capano.
