# Projeto NUPDECS — Toledo/PR
## Prevenção, Mitigação de Desastres Naturais e Educação Climática

Este repositório contém o código-fonte desenvolvido para o **Projeto de Extensão Universitária** do curso de **Análise e Desenvolvimento de Sistemas da UNIPAR (Câmpus Toledo/PR)**. O site tem como objetivo aproximar a ciência climática, os dados meteorológicos e as diretrizes oficiais de segurança da comunidade local.

---

### 🚀 Funcionalidades e Estrutura do Site

- **Página Principal (`index.html`):** 
  - Apresentação contextualizada sobre os impactos extremos do *El Niño* e *La Niña* na Região Sul.
  - Tabela histórica de desastres baseada em dados oficiais do S2iD / Defesa Civil Nacional.
  - Mapa interativo de clima em tempo real integrado via widget do *Windy*.
  - Seção de feedback interativo do usuário estruturada em formulário assíncrono com modal.

- **Páginas do Ciclo ENOS e Mudanças Climáticas:** 
  - **El Niño e La Niña (`elnino/index.html`):** Explicação detalhada do ciclo climático, linha do tempo interativa (*Timeline*) e carrossel automático de notícias via feed RSS com *SwiperJS*.
  - **Detalhamento e Conexão Clima (`elnino-detalhamento/index.html`):** Resgate histórico, painel comparativo de causa e efeito (concentração de CO₂ vs. anomalias térmicas do oceano) e uso de supercomputadores, satélites e bóias TAO/TRITON.

- **Páginas de Desastres e Estudos Especiais:**
  - **Enchentes (`enchentes/index.html`):** Orientações cronológicas (Antes, Durante e Depois), guia de solidariedade para doações e prevenção de golpes/PIX falsos.
  - **Secas Extremas (`secas/index.html`):** Impactos críticos (desabastecimento, safras, incêndios), medidas de economia de água e telefones de emergência.
  - **Tornados (`tornado/index.html`):** Protocolos de segurança (casa, rua e veículos), formação física das tempestades e relação com o El Niño.
  - **Caso de Estudo: Ciclones Simultâneos no Pacífico (`furacoes-especial/index.html`):** Análise da formação simultânea dos furacões Lowell, Karina e Marie, imagens de satélite em formato GIF e o uso de tecnologia NOAA-21 (VIIRS).

- **Avisos, Alertas e Defesa Civil (`avisos/index.html`):**
  - Diferença entre avisos (24 a 72h) e alertas de risco iminente.
  - Escala de cores de risco (Amarelo, Laranja e Vermelho).
  - Cadastro em canais oficiais (SMS 40199, WhatsApp e tecnologia Cell Broadcast).

- **Núcleos Comunitários (NUPDECs) (`nupdec/index.html`):**
  - Papel dos voluntários e mapeamento de riscos comunitários em Toledo/PR.
  - Entrevista exclusiva com o Capitão Rodrigues, comandante do Corpo de Bombeiros de Toledo.
  - Passo a passo de como se voluntariar e integrar os núcleos de proteção local.

---

### 🛠️ Tecnologias e Padrões Utilizados
- **HTML5 e CSS3** (com tipografia do Google Fonts — *Inter* e *Montserrat*).
- **JavaScript (ES6+)** para manipulação assíncrona, modais e consumo de APIs externas (RSS).
- **Swiper.js** para carrosséis responsivos de alta performance.
- **Google Analytics (GA4)** integrado para métricas de acesso.
- **Design Responsivo** com foco em acessibilidade mobile e desktop.
- **Hospedagem:** GitHub Pages.

---

### 👥 Equipe e Autoria
* **Projeto desenvolvido por:** Grupo 404
* **Instituição:** Universidade Paranaense (UNIPAR) — Câmpus Toledo/PR
* **Curso:** Análise e Desenvolvimento de Sistemas