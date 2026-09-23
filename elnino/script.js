
let swiper = new Swiper('.meuCarrossel', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, 
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

const noticiasFallback = [
    {
        title: "Monitoramento global aponta intensificação das fases do ENOS para os próximos meses.",
        link: "https://portal.inmet.gov.br",
        pubDate: new Date().toISOString()
    },
    {
        title: "Especialistas alertam para a importância de planos de contingência regionais contra eventos extremos.",
        link: "https://www.gov.br/inpe/pt-br",
        pubDate: new Date().toISOString()
    },
    {
        title: "Impactos do El Niño e La Niña na agricultura exigem planejamento estratégico antecipado.",
        link: "https://portal.inmet.gov.br",
        pubDate: new Date().toISOString()
    }
];

function preencherCarrossel(itensNoticias) {
    const container = document.getElementById('container-cards-rss');
    if (!container) return;

    container.innerHTML = '';

    itensNoticias.slice(0, 8).forEach((item, index) => {
        let dataFormatada = "Recente";
        try {
            dataFormatada = new Date(item.pubDate).toLocaleDateString('pt-BR');
        } catch (e) {
            dataFormatada = "Recente";
        }

        const imgFallback = imagensClima[index % imagensClima.length];
        const imagemCard = (item.enclosure && item.enclosure.link)
            ? item.enclosure.link
            : imgFallback;

        const slideHTML = `
            <div class="swiper-slide card-noticia">
                <div class="card-imagem" style="height: 180px; overflow: hidden; background-color: #e0e0e0;">
                    <img src="${imagemCard}" alt="Notícia El Niño" onerror="this.src='${imgFallback}'" style="width: 100%; height: 100%; object-fit: cover;">
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

    if (swiper) {
        swiper.destroy(true, true);
    }
    swiper = new Swiper('.meuCarrossel', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true, 
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
}

const feedUrl = encodeURIComponent('https://news.google.com/rss/search?q=El+Nino+clima+Brasil&hl=pt-BR&gl=BR&ceid=BR:pt-419');

fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feedUrl}`)
    .then(response => {
        if (!response.ok) throw new Error('Falha na rede');
        return response.json();
    })
    .then(data => {
        if (data && data.status === 'ok' && data.items && data.items.length > 0) {
            preencherCarrossel(data.items);
        } else {
            throw new Error('Dados inválidos da API');
        }
    })
    .catch(error => {
        console.warn('API externa indisponível. Usando Plano B de segurança.');
        preencherCarrossel(noticiasFallback);
    });