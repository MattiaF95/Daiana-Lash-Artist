const fs = require('fs');
const path = require('path');

// Configurazione
const config = {
    // Directory principale che contiene le cartelle con le immagini
    rootDir: './assets/img/portfolio-clients/',
    // Directory dove salvare i file JSON
    outputDir: './assets/json/',
    // Estensione delle immagini da cercare
    imageExtension: '.webp'
};

/**
 * Legge tutti i file .webp da una cartella
 */
function getWebpImages(folderPath) {
    try {
        const files = fs.readdirSync(folderPath);
        return files
            .filter(file => path.extname(file).toLowerCase() === config.imageExtension)
            .sort(); // Ordina alfabeticamente
    } catch (error) {
        console.error(`Errore nella lettura della cartella ${folderPath}:`, error.message);
        return [];
    }
}

/**
 * Crea o aggiorna il file JSON per una cartella
 */
function createJsonForFolder(folderName, folderPath) {
    const images = getWebpImages(folderPath);

    const jsonData = {
        folder: folderName,
        images: images
    };

    // Crea la directory di output se non esiste
    if (!fs.existsSync(config.outputDir)) {
        fs.mkdirSync(config.outputDir, { recursive: true });
    }

    // Salva il file JSON
    const jsonPath = path.join(config.outputDir, `${folderName}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');

    console.log(`✓ ${folderName}.json creato (${images.length} immagini)`);
    return jsonData;
}

/**
 * Funzione principale
 */
function generateImageJsons() {
    console.log('Generazione file JSON in corso...\n');

    // Verifica che la directory root esista
    if (!fs.existsSync(config.rootDir)) {
        console.error(`Errore: La directory ${config.rootDir} non esiste!`);
        console.log(`Crea la directory e le sottocartelle con le immagini, poi riesegui lo script.`);
        return;
    }

    // Legge tutte le sottocartelle
    const folders = fs.readdirSync(config.rootDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    if (folders.length === 0) {
        console.log(`Nessuna cartella trovata in ${config.rootDir}`);
        return;
    }

    // Genera JSON per ogni cartella
    const summary = [];
    folders.forEach(folderName => {
        const folderPath = path.join(config.rootDir, folderName);
        const data = createJsonForFolder(folderName, folderPath);
        summary.push({ folder: folderName, count: data.count });
    });

    console.log(`\nFile JSON salvati in: ${config.outputDir}/`);
}

// Esegui lo script
generateImageJsons();

// Esempio di utilizzo in HTML (bonus)
/*
// Nel tuo file HTML puoi usare fetch per caricare e iterare sui JSON:

fetch('json/cartella1.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('gallery');
    data.images.forEach(imageName => {
      const img = document.createElement('img');
      img.src = `images/${data.folder}/${imageName}`;
      img.alt = imageName;
      container.appendChild(img);
    });
  });
*/