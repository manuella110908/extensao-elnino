// 1. Inicializa o carrossel básico
let swiper = new Swiper('.meuCarrossel', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, // <-- Ativa o looping infinito
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        }
    }
});

// Banco de imagens temáticas para fallback visual do ENOS
const imagensClima = [
   
    'https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5jJUMzJUFBbmRpbyUyMGZsb3Jlc3RhbHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1639279387104-9f0367bea7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHVycmljYW5lfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1584820537082-8e19daff36bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1cnJpY2FuZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1637179709448-e03199d05f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJ5JTIwZWFydGh8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&q=80',
    'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=500&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80'

];



// 2. Busca dinâmica do Feed
const feedUrl = encodeURIComponent('https://news.google.com/rss/search?q=El+Nino+clima+Brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419');

fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('container-cards-rss');
        if (!container || !data.items || data.items.length === 0) return;

        container.innerHTML = '';

        data.items.slice(0, 8).forEach((item, index) => {
            const dataFormatada = new Date(item.pubDate).toLocaleDateString('pt-BR');

            const imgFallback = imagensClima[index % imagensClima.length];
            const imagemCard = (item.enclosure && item.enclosure.link)
                ? item.enclosure.link
                : imgFallback;

            const slideHTML = `
                <div class="swiper-slide card-noticia">
                    <div class="card-imagem">
                        <img src="${imagemCard}" alt="Notícia El Niño" onerror="this.src='${imgFallback}'">
                    </div>
                    <div class="card-corpo">
                        <span class="categoria-tag">BOLETIM EL NIÑO</span>
                        <h3><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h3>
                        <p class="fonte-noticia">Publicado em: ${dataFormatada}</p>
                    </div>
                </div>
            `;
            container.innerHTML += slideHTML;
        });

        // Atualiza o carrossel e reconstrói o loop com os novos cards carregados
        swiper.update();
        swiper.loopDestroy();
        swiper.loopCreate();
    })
    .catch(error => {
        console.error('Erro ao carregar notícias:', error);
    });