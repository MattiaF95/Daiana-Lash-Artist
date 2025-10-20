const portfolioPhoto = document.querySelector('#image-container');
const directoryImg = 'assets/img/portfolio-clients';
const directoryJsonImg = 'assets/json';
const totalGalleries = 7;
let loadedGalleries = 0;

function createHtmlPhoto(nameJsonImg, titleNameImg) {
    fetch(`${directoryJsonImg}/${nameJsonImg}.json`)
        .then(res => res.json())
        .then(data => {
            const halfLenghtImages = data.images.length / 2;
            let htmlImages = '';

            // [...Array(numHtml)] crea un array “vuoto” di lunghezza numHtml.
            // .forEach((_, i) => {...}) itera su ogni elemento usando i come indice.
            // _ indica che non ti serve il valore dell’array, solo l’indice.
            [...Array(halfLenghtImages)].forEach((_, i) => {
                htmlImages += `<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${nameJsonImg}">
                                        <img src="${directoryImg}/${nameJsonImg}/${nameJsonImg}-${i + 1}-resize.webp" class="img-fluid"
                                            loading="lazy" alt="Immagine ${titleNameImg}">
                                        <div class="portfolio-info">
                                            <h4>${titleNameImg}</h4>
                                            <a href="${directoryImg}/${nameJsonImg}/${nameJsonImg}-${i + 1}.webp" title="${nameJsonImg}"
                                            data-gallery="portfolio-gallery-${nameJsonImg}" class="glightbox preview-link">
                                            <i class="bi bi-zoom-in"></i>
                                            </a>
                                        </div>
                                    </div>`;
            });
            portfolioPhoto.innerHTML += htmlImages;
            loadedGalleries++;

            // Quando tutto è caricato, chiama la funzione di reinizializzazione
            if (loadedGalleries === totalGalleries) {
                if (typeof window.reinitIsotope === 'function') {
                    window.reinitIsotope();
                }
            }
        })
        .catch(error => {
            console.error(`Errore nel caricamento di ${nameJsonImg}:`, error);
        });
}

createHtmlPhoto('effetto-parziale', 'Effetto parziale');
createHtmlPhoto('laminazione', 'Laminazione ciglia');
createHtmlPhoto('mega-volume', 'Mega volume');
createHtmlPhoto('one-to-one', 'One-To-One');
createHtmlPhoto('volume-soft', 'Volume soft');
createHtmlPhoto('wet', 'Effetto wet');
createHtmlPhoto('wispy', 'Effetto wispy');
