# Daiana Lash Artist

Sito web professionale per servizi di lash artist.

## Struttura del Progetto

```
progetto/
├── src/                    # Codice sorgente frontend
│   ├── js/                # JavaScript files
│   ├── css/               # CSS files
│   └── html/              # HTML templates
├── backend/               # Codice backend
│   ├── src/               # Sorgenti backend
│   └── dist/              # Backend compilato
├── dev/                    # Ambiente di sviluppo
│   ├── temp/              # File temporanei
│   └── working/           # File in lavorazione
├── dist/                   # Build di produzione (minificato)
    ├── js/                # JavaScript minificato
    ├── css/               # CSS minificato
    └── *.html             # HTML minificato
```

## Setup Sviluppo

1. Clona il repository

```bash
git clone https://github.com/MattiaF95/Daiana-Lash-Artist.git
cd Daiana-Lash-Artist
```

2. Installa le dipendenze

```bash
npm install
```

3. Avvia l'ambiente di sviluppo

```bash
npm run dev
```

<!-- ## Testing

Per eseguire i test:

```bash
npm test
``` -->

## Build per Produzione

Per buildare il progetto per la produzione:

```bash
npm run build
```

Questo comando:

- Minifica i file CSS
- Minifica i file JavaScript
- Minifica i file HTML (rimuove spazi, commenti e ottimizza inline CSS/JS)
- Processa solo i file modificati dall'ultimo commit
- Salva tutto nella cartella `dist/`
