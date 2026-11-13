// Conteúdo único do site, em PT / EN / ES.
// Itens com `review: true` só aparecem na versão de revisão (/review), nunca na pública.
// Itens com `note` geram uma nota interna visível apenas na revisão.

export const SITE = {
  origin: 'https://linka.agenciademarketingdigital.com.br',
  // Nome da área editorial ainda não decidido ("Insights" recomendado; "Conteúdos" alternativa).
  editorialName: { pt: 'Insights', en: 'Insights', es: 'Insights' },
  gtm: 'GTM-P2R23466',
};

export const LANGS = ['pt', 'en', 'es'];
export const LANG_META = {
  pt: { html: 'pt-BR', og: 'pt_BR', label: 'Português', short: 'PT', path: '/' },
  en: { html: 'en', og: 'en_US', label: 'English', short: 'EN', path: '/en/' },
  es: { html: 'es', og: 'es_ES', label: 'Español', short: 'ES', path: '/es/' },
};

export const PEOPLE = {
  eric: {
    name: 'Eric Gomes',
    photo: '/assets/img/people/eric-160.jpg',
    linkedin: 'https://www.linkedin.com/in/ericmottagomes/',
    whatsapp: 'https://wa.me/5511999503930',
    // Destino verificado em 12/11/2026: página "Call de 30 mins com Eric".
    schedule: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2_GLmeamcM09QV0Vn5wjLamgBvW2vuRtL044HvAHgbj0Eao5BV40fiIa8P3oX9586pjVD6tEBr',
  },
  marcelo: {
    name: 'Marcelo Caricati',
    photo: '/assets/img/people/marcelo-160.jpg',
    linkedin: 'https://www.linkedin.com/in/marcelo-caricati-83ab7018/',
    whatsapp: 'https://wa.me/5511982432765',
    // Destino verificado em 12/11/2026: página "30 min with Marcelo".
    schedule: 'https://calendar.app.google/b5h5dDqBLhyNBQrj6',
  },
};

// ---------------------------------------------------------------------------
// Textos de interface
// ---------------------------------------------------------------------------
export const T = {
  meta: {
    title: {
      pt: 'Linka | SEO e GEO, Mídias Pagas, Dados e Mensuração',
      en: 'Linka | SEO & GEO, Paid Media, Data & Measurement',
      es: 'Linka | SEO y GEO, Medios Pagados, Datos y Medición',
    },
    description: {
      pt: 'Agência de marketing digital conduzida por Eric Gomes e Marcelo Caricati. SEO e GEO, Mídias Pagas e Dados e Mensuração, com tecnologia, IA e atribuição ao longo da jornada.',
      en: 'Digital marketing agency led by Eric Gomes and Marcelo Caricati. SEO & GEO, Paid Media and Data & Measurement, with technology, AI and attribution across the customer journey.',
      es: 'Agencia de marketing digital dirigida por Eric Gomes y Marcelo Caricati. SEO y GEO, Medios Pagados y Datos y Medición, con tecnología, IA y atribución a lo largo del recorrido del cliente.',
    },
  },
  ui: {
    skip: { pt: 'Ir para o conteúdo', en: 'Skip to content', es: 'Ir al contenido' },
    menu: { pt: 'Menu', en: 'Menu', es: 'Menú' },
    closeMenu: { pt: 'Fechar menu', en: 'Close menu', es: 'Cerrar menú' },
    language: { pt: 'Idioma', en: 'Language', es: 'Idioma' },
    themeToDark: { pt: 'Ativar tema escuro', en: 'Switch to dark theme', es: 'Activar tema oscuro' },
    themeToLight: { pt: 'Ativar tema claro', en: 'Switch to light theme', es: 'Activar tema claro' },
    whatsapp: { pt: 'Conversar no WhatsApp', en: 'Chat on WhatsApp', es: 'Hablar por WhatsApp' },
    whatsappWith: { pt: 'Falar com', en: 'Talk to', es: 'Hablar con' },
    schedule: { pt: 'Agendar 30 min', en: 'Book 30 min', es: 'Agendar 30 min' },
    linkedin: { pt: 'LinkedIn', en: 'LinkedIn', es: 'LinkedIn' },
    details: { pt: 'Ver detalhes', en: 'See details', es: 'Ver detalles' },
    newTab: { pt: '(abre em nova aba)', en: '(opens in a new tab)', es: '(se abre en una nueva pestaña)' },
    verify: { pt: 'Verificar', en: 'Verify', es: 'Verificar' },
    ptOnly: { pt: '', en: 'In Portuguese', es: 'En portugués' },
    readMore: { pt: 'Ler artigo', en: 'Read article', es: 'Leer artículo' },
    allArticles: { pt: 'Ver todos os artigos', en: 'See all articles', es: 'Ver todos los artículos' },
    backToTop: { pt: 'Voltar ao topo', en: 'Back to top', es: 'Volver arriba' },
    privacy: { pt: 'Privacidade', en: 'Privacy', es: 'Privacidad' },
    close: { pt: 'Fechar', en: 'Close', es: 'Cerrar' },
    enlarge: { pt: 'Ampliar', en: 'Enlarge', es: 'Ampliar' },
  },
  nav: [
    { id: 'servicos', label: { pt: 'O que\nfazemos', en: 'What\nwe do', es: 'Qué\nhacemos' } },
    { id: 'cases', label: { pt: 'Cases', en: 'Cases', es: 'Casos' }, needsCases: true },
    // "\n" quebra a linha no menu do desktop (no menu móvel fica em uma linha)
    { id: 'como-trabalhamos', label: { pt: 'Como\ntrabalhamos', en: 'How we\nwork', es: 'Cómo\ntrabajamos' } },
    { id: 'lab', label: { pt: 'Lab', en: 'Lab', es: 'Lab' } },
    { id: 'socios', label: { pt: 'Sócios', en: 'Partners', es: 'Socios' } },
    { id: 'credenciais', label: { pt: 'Credenciais', en: 'Credentials', es: 'Credenciales' } },
    { id: 'insights', label: SITE.editorialName },
  ],
  navCta: { pt: 'Conversar', en: 'Get in touch', es: 'Conversar' },

  hero: {
    eyebrow: {
      pt: 'SEO e GEO · Mídias Pagas · Dados e Mensuração',
      en: 'SEO & GEO · Paid Media · Data & Measurement',
      es: 'SEO y GEO · Medios Pagados · Datos y Medición',
    },
    title: {
      pt: 'Experiência para decidir. Tecnologia para ir além.',
      en: 'Experience to decide. Technology to go further.',
      es: 'Experiencia para decidir. Tecnología para ir más allá.',
    },
    lead: {
      pt: 'Conectamos experiência humana, tecnologia com IA e mensuração ao longo da jornada do cliente para orientar onde investir em busca orgânica e mídia paga.',
      en: 'We connect human experience, AI-powered technology and measurement across the customer journey to guide where to invest in organic search and paid media.',
      es: 'Conectamos experiencia humana, tecnología con IA y medición a lo largo del recorrido del cliente para orientar dónde invertir en búsqueda orgánica y medios pagados.',
    },
    support: {
      pt: 'Os sócios Eric Gomes e Marcelo Caricati participam diretamente da estratégia e do acompanhamento de cada conta, de pequenas operações a empresas grandes.',
      en: 'Partners Eric Gomes and Marcelo Caricati are directly involved in the strategy and follow-up of every account, from small operations to large companies.',
      es: 'Los socios Eric Gomes y Marcelo Caricati participan directamente en la estrategia y el seguimiento de cada cuenta, desde pequeñas operaciones hasta grandes empresas.',
    },
    ctaPrimary: { pt: 'Conversar sobre o seu negócio', en: 'Talk about your business', es: 'Hablar sobre su negocio' },
    ctaSecondary: { pt: 'Conhecer resultados', en: 'See results', es: 'Ver resultados' },
    ctaSecondaryNoCases: { pt: 'Ver o que fazemos', en: 'See what we do', es: 'Ver qué hacemos' },
    diagramTitle: {
      pt: 'A jornada que medimos',
      en: 'The journey we measure',
      es: 'El recorrido que medimos',
    },
    diagramDesc: {
      pt: 'Diagrama ilustrativo: busca e respostas com IA, tráfego orgânico, mídia paga e retorno direto participam da descoberta, da consideração e da conversão. A mensuração considera esses contatos, não apenas o último clique.',
      en: 'Illustrative diagram: search and AI answers, organic traffic, paid media and direct return take part in discovery, consideration and conversion. Measurement considers these touchpoints, not only the last click.',
      es: 'Diagrama ilustrativo: búsqueda y respuestas con IA, tráfico orgánico, medios pagados y retorno directo participan en el descubrimiento, la consideración y la conversión. La medición considera esos contactos, no solo el último clic.',
    },
    stages: {
      pt: ['Descoberta', 'Consideração', 'Conversão'],
      en: ['Discovery', 'Consideration', 'Conversion'],
      es: ['Descubrimiento', 'Consideración', 'Conversión'],
    },
    touch: {
      pt: ['Busca e respostas com IA', 'Tráfego orgânico', 'Mídia paga', 'Retorno direto', 'Conversão on-line e off-line'],
      en: ['Search and AI answers', 'Organic traffic', 'Paid media', 'Direct return', 'Online and offline conversion'],
      es: ['Búsqueda y respuestas con IA', 'Tráfico orgánico', 'Medios pagados', 'Retorno directo', 'Conversión online y offline'],
    },
    lastClick: {
      pt: 'Além do último clique',
      en: 'Beyond the last click',
      es: 'Más allá del último clic',
    },
  },

  proof: {
    label: { pt: 'Credenciais verificáveis', en: 'Verifiable credentials', es: 'Credenciales verificables' },
    items: [
      { title: { pt: 'Google Premier Partner', en: 'Google Premier Partner', es: 'Google Premier Partner' },
        text: { pt: 'Selo Premier em 2023, 2024, 2025 e 2026', en: 'Premier badge in 2023, 2024, 2025 and 2026', es: 'Sello Premier en 2023, 2024, 2025 y 2026' } },
      { title: { pt: 'Certificações Google Ads', en: 'Google Ads certifications', es: 'Certificaciones de Google Ads' },
        text: { pt: 'Search, Display, Vídeo, Shopping e Apps', en: 'Search, Display, Video, Shopping and Apps', es: 'Search, Display, Video, Shopping y Apps' } },
      { title: { pt: 'LinkedIn Marketing Academy', en: 'LinkedIn Marketing Academy', es: 'LinkedIn Marketing Academy' },
        text: { pt: 'Três credenciais com verificação oficial', en: 'Three credentials with official verification', es: 'Tres credenciales con verificación oficial' } },
    ],
    more: { pt: 'Ver todas as credenciais', en: 'See all credentials', es: 'Ver todas las credenciales' },
  },

  services: {
    eyebrow: { pt: 'O que fazemos', en: 'What we do', es: 'Qué hacemos' },
    title: {
      pt: 'Três frentes que trabalham juntas',
      en: 'Three practices that work together',
      es: 'Tres frentes que trabajan juntos',
    },
    lead: {
      pt: 'A busca orgânica e a mídia paga geram demanda; os dados mostram o que cada canal contribui e orientam o próximo investimento. A IA entra em tarefas concretas de cada frente, com direção dos sócios.',
      en: 'Organic search and paid media generate demand; data shows what each channel contributes and guides the next investment. AI is used in concrete tasks within each practice, directed by the partners.',
      es: 'La búsqueda orgánica y los medios pagados generan demanda; los datos muestran lo que aporta cada canal y orientan la próxima inversión. La IA participa en tareas concretas de cada frente, con la dirección de los socios.',
    },
    aiLabel: { pt: 'Onde entram IA e tecnologia', en: 'Where AI and technology come in', es: 'Dónde entran la IA y la tecnología' },
    deliverLabel: { pt: 'O que entregamos', en: 'What we deliver', es: 'Qué entregamos' },
    channelsLabel: { pt: 'Plataformas', en: 'Platforms', es: 'Plataformas' },
    connectTitle: { pt: 'Como as frentes se conectam', en: 'How the practices connect', es: 'Cómo se conectan los frentes' },
    connect: {
      pt: [
        'O tracking e as integrações registram o que cada canal gera, inclusive conversões que acontecem fora do site.',
        'A análise de atribuição mostra quais campanhas participam da descoberta e da consideração, além das que recebem o último clique.',
        'Essa leitura orienta onde investir em mídia e quais temas priorizar em SEO e GEO.',
      ],
      en: [
        'Tracking and integrations record what each channel generates, including conversions that happen outside the website.',
        'Attribution analysis shows which campaigns take part in discovery and consideration, in addition to those that receive the last click.',
        'That reading guides where to invest in media and which topics to prioritise in SEO and GEO.',
      ],
      es: [
        'El tracking y las integraciones registran lo que genera cada canal, incluidas las conversiones que ocurren fuera del sitio.',
        'El análisis de atribución muestra qué campañas participan en el descubrimiento y la consideración, además de las que reciben el último clic.',
        'Esa lectura orienta dónde invertir en medios y qué temas priorizar en SEO y GEO.',
      ],
    },
    items: [
      {
        id: 'seo-geo',
        title: { pt: 'SEO e GEO', en: 'SEO & GEO', es: 'SEO y GEO' },
        summary: {
          pt: 'Presença orgânica nos mecanismos de busca e nas experiências de busca e resposta com IA, ligada aos objetivos do negócio.',
          en: 'Organic presence in search engines and in AI search and answer experiences, tied to business goals.',
          es: 'Presencia orgánica en los buscadores y en las experiencias de búsqueda y respuesta con IA, vinculada a los objetivos del negocio.',
        },
        deliver: {
          pt: ['Auditoria e diagnóstico do site', 'SEO técnico', 'Análise e otimização de conteúdo', 'Acompanhamento de desempenho no Google Search Console e no GA4', 'Mapeamento de oportunidades de busca'],
          en: ['Website audit and diagnosis', 'Technical SEO', 'Content analysis and optimisation', 'Performance tracking in Google Search Console and GA4', 'Search opportunity mapping'],
          es: ['Auditoría y diagnóstico del sitio', 'SEO técnico', 'Análisis y optimización de contenido', 'Seguimiento del rendimiento en Google Search Console y GA4', 'Mapeo de oportunidades de búsqueda'],
        },
        ai: {
          pt: 'Ferramenta própria que pontua o conteúdo de cada página com IA, sugere melhorias e perguntas frequentes, cruzando dados do GA4 e do Search Console.',
          en: 'Our own tool scores each page’s content with AI and suggests improvements and FAQs, combining GA4 and Search Console data.',
          es: 'Herramienta propia que puntúa con IA el contenido de cada página y sugiere mejoras y preguntas frecuentes, cruzando datos de GA4 y Search Console.',
        },
        disclaimer: {
          pt: 'Não prometemos posições, citações em IAs ou volumes de tráfego.',
          en: 'We do not promise rankings, AI citations or traffic volumes.',
          es: 'No prometemos posiciones, citas en IA ni volúmenes de tráfico.',
        },
      },
      {
        id: 'midias-pagas',
        title: { pt: 'Mídias Pagas', en: 'Paid Media', es: 'Medios Pagados' },
        summary: {
          pt: 'Planejamento, gestão e otimização contínua de campanhas, com controle de investimento e avaliação pelo resultado de negócio.',
          en: 'Planning, management and ongoing optimisation of campaigns, with budget control and evaluation by business results.',
          es: 'Planificación, gestión y optimización continua de campañas, con control de la inversión y evaluación por el resultado de negocio.',
        },
        deliver: {
          pt: ['Planejamento e estratégia de funil', 'Gestão e otimização contínua', 'Controle e distribuição do investimento', 'Avaliação de leads, vendas e receita, não só de cliques'],
          en: ['Planning and funnel strategy', 'Ongoing management and optimisation', 'Budget control and allocation', 'Evaluation of leads, sales and revenue, not only clicks'],
          es: ['Planificación y estrategia de embudo', 'Gestión y optimización continua', 'Control y distribución de la inversión', 'Evaluación de leads, ventas e ingresos, no solo de clics'],
        },
        channels: [
          { name: 'Google Ads' }, { name: 'Meta Ads' }, { name: 'Microsoft Ads' }, { name: 'LinkedIn Ads' },
          { name: 'TikTok Ads', review: true }, { name: 'ChatGPT Ads', review: true },
        ],
        channelsNote: 'TikTok Ads e ChatGPT Ads foram informados por Eric, mas o briefing pede confirmação da oferta antes de publicar (plataformas recentes). Ocultos na versão pública.',
        ai: {
          pt: 'Ferramentas próprias para controle de orçamento no Google Ads e geração de planos de mídia, que agilizam a distribuição do investimento entre campanhas e canais.',
          en: 'Our own tools for Google Ads budget control and media plan generation speed up how investment is distributed across campaigns and channels.',
          es: 'Herramientas propias de control de presupuesto en Google Ads y de generación de planes de medios agilizan la distribución de la inversión entre campañas y canales.',
        },
      },
      {
        id: 'dados-mensuracao',
        title: { pt: 'Dados e Mensuração', en: 'Data & Measurement', es: 'Datos y Medición' },
        summary: {
          pt: 'Conectamos tracking, plataformas de anúncios, CRM e relatórios para entender a jornada de conversão e orientar o investimento.',
          en: 'We connect tracking, ad platforms, CRM and reporting to understand the conversion journey and guide investment.',
          es: 'Conectamos tracking, plataformas de anuncios, CRM e informes para entender el recorrido de conversión y orientar la inversión.',
        },
        deliver: {
          pt: [
            'Google Analytics 4 e Google Tag Manager',
            'Tracking de eventos e conversões',
            'Integração com contas de anúncios e, quando necessário, com o CRM',
            'Importação e mensuração de conversões off-line',
            'Análise da jornada, caminhos de conversão e contribuição dos canais',
            'Modelos e janelas de atribuição, além do último clique',
            'Avaliação do retorno do investimento considerando a atribuição',
            'Dashboards no Looker Studio e relatórios customizados para o negócio',
          ],
          en: [
            'Google Analytics 4 and Google Tag Manager',
            'Event and conversion tracking',
            'Integration with ad accounts and, when needed, with the CRM',
            'Offline conversion import and measurement',
            'Journey analysis, conversion paths and channel contribution',
            'Attribution models and windows, beyond the last click',
            'Return on investment assessment that accounts for attribution',
            'Looker Studio dashboards and custom reports built for the business',
          ],
          es: [
            'Google Analytics 4 y Google Tag Manager',
            'Tracking de eventos y conversiones',
            'Integración con cuentas de anuncios y, cuando hace falta, con el CRM',
            'Importación y medición de conversiones offline',
            'Análisis del recorrido, rutas de conversión y contribución de los canales',
            'Modelos y ventanas de atribución, más allá del último clic',
            'Evaluación del retorno de la inversión considerando la atribución',
            'Dashboards en Looker Studio e informes personalizados para el negocio',
          ],
        },
        ai: {
          pt: 'Relatórios customizados desenvolvidos com apoio de IA, adaptados às perguntas do negócio, e conectores que levam dados de anúncios e do GA4 para relatórios e consultas.',
          en: 'Custom reports developed with AI assistance, shaped around the business’s questions, plus connectors that bring ad and GA4 data into reports and queries.',
          es: 'Informes personalizados desarrollados con apoyo de IA, adaptados a las preguntas del negocio, y conectores que llevan datos de anuncios y de GA4 a informes y consultas.',
        },
        disclaimer: {
          pt: 'Atribuição mostra a participação dos canais na jornada; não é prova de causa nem estudo de incrementalidade.',
          en: 'Attribution shows how channels take part in the journey; it is not proof of causation nor an incrementality study.',
          es: 'La atribución muestra la participación de los canales en el recorrido; no es prueba de causalidad ni un estudio de incrementalidad.',
        },
      },
    ],
  },

  cases: {
    eyebrow: { pt: 'Cases', en: 'Cases', es: 'Casos' },
    title: { pt: 'Resultados de antigos clientes', en: 'Results from former clients', es: 'Resultados de antiguos clientes' },
    lead: {
      pt: 'Os nomes das empresas são preservados. Cada case mostra contexto, desafio, intervenção, período e comparação.',
      en: 'Company names are kept confidential. Each case shows context, challenge, intervention, period and comparison.',
      es: 'Los nombres de las empresas se mantienen en reserva. Cada caso muestra contexto, desafío, intervención, período y comparación.',
    },
    labels: {
      segment: { pt: 'Segmento', en: 'Segment', es: 'Segmento' },
      challenge: { pt: 'Desafio', en: 'Challenge', es: 'Desafío' },
      action: { pt: 'O que a Linka fez', en: 'What Linka did', es: 'Qué hizo Linka' },
      result: { pt: 'Resultado', en: 'Result', es: 'Resultado' },
      period: { pt: 'Período', en: 'Period', es: 'Período' },
      before: { pt: 'Antes', en: 'Before', es: 'Antes' },
      after: { pt: 'Depois', en: 'After', es: 'Después' },
    },
  },

  work: {
    eyebrow: { pt: 'Como trabalhamos', en: 'How we work', es: 'Cómo trabajamos' },
    title: {
      pt: 'Atendimento próximo. Estratégia sob medida.',
      en: 'Close partnership. Tailored strategy.',
      es: 'Atención cercana. Estrategia a medida.',
    },
    lead: {
      pt: 'Não aplicamos uma fórmula pronta. O trabalho parte do contexto do negócio e se ajusta a ele ao longo do tempo.',
      en: 'We do not apply a ready-made formula. The work starts from the business context and adapts to it over time.',
      es: 'No aplicamos una fórmula lista. El trabajo parte del contexto del negocio y se ajusta a él con el tiempo.',
    },
    items: [
      { title: { pt: 'Entendimento do negócio', en: 'Understanding the business', es: 'Entender el negocio' },
        text: { pt: 'Começamos pelos objetivos, pelo funil de vendas e pelos dados que já existem, antes de recomendar canais ou ações.', en: 'We start with the goals, the sales funnel and the data that already exists, before recommending channels or actions.', es: 'Empezamos por los objetivos, el embudo de ventas y los datos que ya existen, antes de recomendar canales o acciones.' } },
      { title: { pt: 'Participação direta dos sócios', en: 'Partners directly involved', es: 'Participación directa de los socios' },
        text: { pt: 'Eric e Marcelo conduzem a estratégia e acompanham as decisões. Você conversa com quem conhece a conta.', en: 'Eric and Marcelo lead the strategy and follow the decisions. You talk to the people who know the account.', es: 'Eric y Marcelo dirigen la estrategia y acompañan las decisiones. Usted habla con quien conoce la cuenta.' } },
      { title: { pt: 'Plano ajustado ao contexto', en: 'A plan fitted to the context', es: 'Plan ajustado al contexto' },
        text: { pt: 'Prioridades, canais e relatórios variam conforme o segmento, o ciclo de venda e a maturidade de dados de cada empresa.', en: 'Priorities, channels and reports vary with each company’s segment, sales cycle and data maturity.', es: 'Prioridades, canales e informes varían según el segmento, el ciclo de venta y la madurez de datos de cada empresa.' } },
      { title: { pt: 'Acompanhamento com dados', en: 'Follow-up backed by data', es: 'Seguimiento con datos' },
        text: { pt: 'Dashboards e análises mostram o que está funcionando e sustentam cada ajuste de investimento.', en: 'Dashboards and analyses show what is working and support every investment adjustment.', es: 'Dashboards y análisis muestran lo que funciona y respaldan cada ajuste de inversión.' } },
      { title: { pt: 'Capacidade ampliada por tecnologia', en: 'Capacity extended by technology', es: 'Capacidad ampliada por tecnología' },
        text: { pt: 'Ferramentas próprias, integrações, automações e IA aceleram tarefas repetitivas e liberam tempo para análise e decisão.', en: 'Our own tools, integrations, automation and AI speed up repetitive tasks and free time for analysis and decisions.', es: 'Herramientas propias, integraciones, automatizaciones e IA aceleran tareas repetitivas y liberan tiempo para el análisis y la decisión.' } },
    ],
  },

  lab: {
    eyebrow: { pt: 'Linka Lab', en: 'Linka Lab', es: 'Linka Lab' },
    title: { pt: 'Ferramentas que criamos', en: 'Tools we build', es: 'Herramientas que creamos' },
    lead: {
      pt: 'O Lab reúne ferramentas desenvolvidas pela Linka para mensuração, SEO, mídia e relatórios. Algumas estão abertas; outras são apresentadas em demonstração.',
      en: 'The Lab brings together tools built by Linka for measurement, SEO, media and reporting. Some are open; others are shown in a demo.',
      es: 'El Lab reúne herramientas desarrolladas por Linka para medición, SEO, medios e informes. Algunas están abiertas; otras se presentan en una demostración.',
    },
    showMore: { pt: 'Ver mais ferramentas', en: 'See more tools', es: 'Ver más herramientas' },
    showLess: { pt: 'Ver menos', en: 'See less', es: 'Ver menos' },
    status: {
      open: { pt: 'Acesso aberto', en: 'Open access', es: 'Acceso abierto' },
      demo: { pt: 'Demonstração on-line', en: 'Online demo', es: 'Demostración online' },
      onRequest: { pt: 'Demonstração sob agendamento', en: 'Demo on request', es: 'Demostración con cita' },
    },
    usesAi: { pt: 'Usa IA', en: 'Uses AI', es: 'Usa IA' },
    ctaOpen: { pt: 'Abrir ferramenta', en: 'Open tool', es: 'Abrir herramienta' },
    ctaDemo: { pt: 'Ver demonstração', en: 'View demo', es: 'Ver demostración' },
    ctaRequest: { pt: 'Pedir demonstração', en: 'Request a demo', es: 'Pedir demostración' },
    problemLabel: { pt: 'Para que serve', en: 'What it is for', es: 'Para qué sirve' },
  },

  people: {
    eyebrow: { pt: 'Quem está à frente', en: 'Who leads the work', es: 'Quién está al frente' },
    title: { pt: 'Competências complementares', en: 'Complementary expertise', es: 'Competencias complementarias' },
    lead: {
      pt: 'Tecnologia, dados e SEO de um lado; mídia paga e performance do outro. Os dois participam das decisões de cada conta.',
      en: 'Technology, data and SEO on one side; paid media and performance on the other. Both take part in each account’s decisions.',
      es: 'Tecnología, datos y SEO por un lado; medios pagados y rendimiento por el otro. Ambos participan en las decisiones de cada cuenta.',
    },
    moreLabel: { pt: 'Trajetória', en: 'Background', es: 'Trayectoria' },
    eric: {
      role: { pt: 'Sócio · SEO, Tecnologia e Dados', en: 'Partner · SEO, Technology & Data', es: 'Socio · SEO, Tecnología y Datos' },
      bio: {
        pt: 'Atua em SEO técnico, Google Tag Manager, GA4, atribuição, integrações via API, automações e relatórios no Looker Studio. Conduz o desenvolvimento das ferramentas do Lab.',
        en: 'Works on technical SEO, Google Tag Manager, GA4, attribution, API integrations, automation and Looker Studio reporting. Leads development of the Lab tools.',
        es: 'Trabaja en SEO técnico, Google Tag Manager, GA4, atribución, integraciones vía API, automatizaciones e informes en Looker Studio. Dirige el desarrollo de las herramientas del Lab.',
      },
      more: {
        pt: ['Formado em Ciência da Computação pela PUC-SP.', 'Em 1995, seu primeiro ano de faculdade, já desenvolvia sites para a pós-graduação da PUC, no início da internet comercial no Brasil.'],
        en: ['Computer Science graduate from PUC-SP.', 'In 1995, his first year at university, he was already building websites for PUC’s graduate school, at the start of the commercial internet in Brazil.'],
        es: ['Graduado en Ciencias de la Computación por la PUC-SP.', 'En 1995, su primer año de universidad, ya desarrollaba sitios para el posgrado de la PUC, en los inicios de internet comercial en Brasil.'],
      },
    },
    marcelo: {
      role: { pt: 'Sócio · Mídias Pagas e Performance', en: 'Partner · Paid Media & Performance', es: 'Socio · Medios Pagados y Rendimiento' },
      bio: {
        pt: 'Especialista em planejamento, gestão e otimização de campanhas de mídia paga, com dashboards de performance no Looker Studio. Certificado em Google Ads e pela LinkedIn Marketing Academy.',
        en: 'Specialist in planning, managing and optimising paid media campaigns, with performance dashboards in Looker Studio. Google Ads certified and LinkedIn Marketing Academy certified.',
        es: 'Especialista en planificación, gestión y optimización de campañas de medios pagados, con dashboards de rendimiento en Looker Studio. Certificado en Google Ads y por LinkedIn Marketing Academy.',
      },
      more: {
        pt: ['MBA em Marketing.', 'Atua com Google Ads, Meta Ads, Microsoft Ads e LinkedIn Ads.'],
        en: ['MBA in Marketing.', 'Works with Google Ads, Meta Ads, Microsoft Ads and LinkedIn Ads.'],
        es: ['MBA en Marketing.', 'Trabaja con Google Ads, Meta Ads, Microsoft Ads y LinkedIn Ads.'],
      },
    },
  },

  creds: {
    eyebrow: { pt: 'Credenciais', en: 'Credentials', es: 'Credenciales' },
    title: { pt: 'Certificações, selos e parcerias', en: 'Certifications, badges and partnerships', es: 'Certificaciones, sellos y alianzas' },
    lead: {
      pt: 'Cada item tem data e, quando disponível, link para verificação na fonte oficial.',
      en: 'Each item is dated and, when available, linked to verification at the official source.',
      es: 'Cada elemento tiene fecha y, cuando está disponible, enlace de verificación en la fuente oficial.',
    },
    premier: {
      title: { pt: 'Google Premier Partner', en: 'Google Premier Partner', es: 'Google Premier Partner' },
      text: {
        pt: 'O selo Premier é concedido pelo Google às agências parceiras com melhor desempenho no país, com base em performance, investimento gerido e certificações. A Linka recebeu o selo em 2023, 2024, 2025 e 2026.',
        en: 'Google awards the Premier badge to the top-performing partner agencies in each country, based on performance, managed spend and certifications. Linka received the badge in 2023, 2024, 2025 and 2026.',
        es: 'Google otorga el sello Premier a las agencias asociadas con mejor desempeño del país, según rendimiento, inversión gestionada y certificaciones. Linka recibió el sello en 2023, 2024, 2025 y 2026.',
      },
      verify: { pt: 'Ver perfil no Google Partners', en: 'View Google Partners profile', es: 'Ver perfil en Google Partners' },
      directory: { pt: 'Diretório de parceiros do Google', en: 'Google Partners directory', es: 'Directorio de socios de Google' },
    },
    ads: {
      title: { pt: 'Certificações Google Ads', en: 'Google Ads certifications', es: 'Certificaciones de Google Ads' },
      text: { pt: 'Certificações de Marcelo Caricati.', en: 'Held by Marcelo Caricati.', es: 'Certificaciones de Marcelo Caricati.' },
    },
    linkedin: {
      title: { pt: 'LinkedIn Marketing Academy', en: 'LinkedIn Marketing Academy', es: 'LinkedIn Marketing Academy' },
      text: { pt: 'Credenciais de Marcelo Caricati.', en: 'Held by Marcelo Caricati.', es: 'Credenciales de Marcelo Caricati.' },
      items: [
        { img: 'cert-estrategia', verify: 'https://training.marketing.linkedin.com/verify/zaoq22jb6th4',
          name: { pt: 'Estratégia de marketing do LinkedIn', en: 'LinkedIn Marketing Strategy', es: 'Estrategia de marketing de LinkedIn' } },
        { img: 'cert-publicidade', verify: 'https://training.marketing.linkedin.com/verify/jyqxwekeqw5m',
          name: { pt: 'Princípios básicos da publicidade do LinkedIn', en: 'LinkedIn Advertising Fundamentals', es: 'Fundamentos de publicidad de LinkedIn' } },
        { img: 'cert-design', verify: 'https://training.marketing.linkedin.com/verify/jj5bs48bxrbx',
          name: { pt: 'Design e conteúdo de anúncios do LinkedIn', en: 'LinkedIn Ad Design and Content', es: 'Diseño y contenido de anuncios de LinkedIn' } },
      ],
    },
  },

  insights: {
    eyebrow: SITE.editorialName,
    title: { pt: 'Análises sobre busca, mídia e dados', en: 'Analysis on search, media and data', es: 'Análisis sobre búsqueda, medios y datos' },
  },

  // "Analisar com IA" (rodapé): abre ChatGPT ou Claude com um pedido de análise desta página.
  ai: {
    button: { pt: 'Analisar com IA', en: 'Analyse with AI', es: 'Analizar con IA' },
    copy: { pt: 'Copiar página', en: 'Copy page', es: 'Copiar página' },
    copySub: { pt: 'Conteúdo desta página em Markdown, para colar em qualquer IA.', en: 'This page’s content in Markdown, to paste into any AI.', es: 'Contenido de esta página en Markdown, para pegar en cualquier IA.' },
    copied: { pt: 'Copiado', en: 'Copied', es: 'Copiado' },
    chatgpt: { pt: 'Abrir no ChatGPT', en: 'Open in ChatGPT', es: 'Abrir en ChatGPT' },
    chatgptSub: { pt: 'Peça ao ChatGPT para analisar esta página', en: 'Ask ChatGPT to analyse this page', es: 'Pida a ChatGPT que analice esta página' },
    claude: { pt: 'Abrir no Claude', en: 'Open in Claude', es: 'Abrir en Claude' },
    claudeSub: { pt: 'Peça ao Claude para analisar esta página', en: 'Ask Claude to analyse this page', es: 'Pida a Claude que analice esta página' },
    task: {
      pt: 'Leia e analise a página abaixo. Resuma o que a Linka oferece, como trabalha e para quem, citando a página como fonte.',
      en: 'Read and analyse the page below. Summarise what Linka offers, how it works and who it serves, citing the page as the source.',
      es: 'Lea y analice la página indicada abajo. Resuma qué ofrece Linka, cómo trabaja y para quién, citando la página como fuente.',
    },
    context: {
      pt: 'Contexto: a Linka é uma agência brasileira de marketing digital conduzida pelos sócios Eric Gomes e Marcelo Caricati, com três frentes: SEO e GEO, Mídias Pagas e Dados e Mensuração.',
      en: 'Context: Linka is a Brazilian digital marketing agency led by partners Eric Gomes and Marcelo Caricati, with three practices: SEO & GEO, Paid Media and Data & Measurement.',
      es: 'Contexto: Linka es una agencia brasileña de marketing digital dirigida por los socios Eric Gomes y Marcelo Caricati, con tres frentes: SEO y GEO, Medios Pagados y Datos y Medición.',
    },
    pageLabel: { pt: 'Página', en: 'Page', es: 'Página' },
  },

  contact: {
    eyebrow: { pt: 'Contato', en: 'Contact', es: 'Contacto' },
    title: { pt: 'Converse direto com os sócios', en: 'Talk directly to the partners', es: 'Hable directamente con los socios' },
    lead: {
      pt: 'Escolha o canal: mensagem pelo WhatsApp ou uma conversa de 30 minutos na agenda de cada sócio.',
      en: 'Pick a channel: a WhatsApp message or a 30-minute call booked in each partner’s calendar.',
      es: 'Elija el canal: un mensaje por WhatsApp o una conversación de 30 minutos en la agenda de cada socio.',
    },
    langNote: {
      pt: '',
      en: 'Note: our commercial service language is Portuguese.',
      es: 'Nota: nuestro idioma de atención comercial es el portugués.',
    },
    faqTitle: { pt: 'Perguntas frequentes', en: 'Frequently asked questions', es: 'Preguntas frecuentes' },
    faq: [
      { q: { pt: 'Com que tipo de empresa vocês trabalham?', en: 'What kind of companies do you work with?', es: '¿Con qué tipo de empresas trabajan?' },
        a: { pt: 'Pequenas, médias e grandes empresas, em geração de leads e em e-commerce.', en: 'Small, mid-sized and large companies, in lead generation and e-commerce.', es: 'Pequeñas, medianas y grandes empresas, en generación de leads y en e-commerce.' } },
      { q: { pt: 'Quem acompanha o meu projeto?', en: 'Who follows my project?', es: '¿Quién acompaña mi proyecto?' },
        a: { pt: 'Os sócios Eric Gomes e Marcelo Caricati participam diretamente da estratégia e do acompanhamento.', en: 'Partners Eric Gomes and Marcelo Caricati are directly involved in the strategy and follow-up.', es: 'Los socios Eric Gomes y Marcelo Caricati participan directamente en la estrategia y el seguimiento.' } },
      { q: { pt: 'Como começa uma conversa?', en: 'How does a first conversation start?', es: '¿Cómo empieza una conversación?' },
        a: { pt: 'Mande uma mensagem pelo WhatsApp ou agende 30 minutos com um dos sócios. Na conversa, entendemos o momento do negócio e o que faz sentido avaliar.', en: 'Send a WhatsApp message or book 30 minutes with one of the partners. In that call we understand where the business stands and what is worth evaluating.', es: 'Envíe un mensaje por WhatsApp o agende 30 minutos con uno de los socios. En la conversación entendemos el momento del negocio y qué conviene evaluar.' } },
    ],
  },
};

// ---------------------------------------------------------------------------
// Linka Lab — inventário. `public:false` = fica fora da versão pública.
// status: open | demo | onRequest
// ---------------------------------------------------------------------------
export const LAB = [
  { id: 'atribuicao', featured: true, status: 'onRequest', ai: false,
    name: { pt: 'Atribuição', en: 'Attribution', es: 'Atribución' },
    text: { pt: 'Análise de atribuição para entender quais canais participam das conversões, além do último clique.', en: 'Attribution analysis to see which channels take part in conversions, beyond the last click.', es: 'Análisis de atribución para entender qué canales participan en las conversiones, más allá del último clic.' },
    note: 'Sem link no Lab atual. Confirmar se há demonstração com dados fictícios ou anonimizados.' },
  { id: 'orcamento', featured: true, status: 'onRequest', ai: false,
    name: { pt: 'Controle de orçamento Google Ads', en: 'Google Ads budget control', es: 'Control de presupuesto Google Ads' },
    text: { pt: 'Acompanha e redistribui o orçamento entre campanhas de Google Ads para buscar mais conversões dentro do investimento planejado.', en: 'Tracks and reallocates budget across Google Ads campaigns to pursue more conversions within the planned spend.', es: 'Sigue y redistribuye el presupuesto entre campañas de Google Ads para buscar más conversiones dentro de la inversión prevista.' },
    note: 'Ferramenta descrita no Lab atual sem link acessível. Precisa de URL/forma de acesso; confirmar outras funções além do controle de orçamento.' },
  { id: 'seo', featured: true, status: 'onRequest', ai: true,
    name: { pt: 'Otimização de conteúdo SEO', en: 'SEO content optimisation', es: 'Optimización de contenido SEO' },
    text: { pt: 'Pontua o conteúdo de cada página, sugere e publica melhorias e gera perguntas frequentes, com dados do GA4 e do Search Console.', en: 'Scores each page’s content, suggests and publishes improvements and generates FAQs, using GA4 and Search Console data.', es: 'Puntúa el contenido de cada página, sugiere y publica mejoras y genera preguntas frecuentes, con datos de GA4 y Search Console.' },
    note: 'Sem link no Lab atual.' },
  { id: 'conectores', featured: true, status: 'onRequest', ai: false,
    name: { pt: 'Conectores para relatórios', en: 'Reporting connectors', es: 'Conectores para informes' },
    text: { pt: 'Levam dados de Meta Ads, LinkedIn Ads e Semrush para o Looker Studio, mantendo os relatórios atualizados sem exportar planilhas.', en: 'Bring Meta Ads, LinkedIn Ads and Semrush data into Looker Studio, keeping reports up to date without exporting spreadsheets.', es: 'Llevan datos de Meta Ads, LinkedIn Ads y Semrush a Looker Studio y mantienen los informes actualizados sin exportar planillas.' } },
  { id: 'mcp-ga4', featured: false, status: 'onRequest', ai: true,
    name: { pt: 'MCP GA4', en: 'GA4 MCP', es: 'MCP GA4' },
    text: { pt: 'Servidor MCP que permite consultar métricas e relatórios do Google Analytics 4 em conversas com assistentes de IA.', en: 'MCP server that lets AI assistants query Google Analytics 4 metrics and reports within a conversation.', es: 'Servidor MCP que permite consultar métricas e informes de Google Analytics 4 en conversaciones con asistentes de IA.' } },
  { id: 'cidades', featured: false, status: 'demo', ai: false, url: 'https://pop-traffic.agenciademarketingdigital.com.br/?demo=1',
    name: { pt: 'Presença digital por cidade', en: 'Digital presence by city', es: 'Presencia digital por ciudad' },
    text: { pt: 'Cruza tráfego do GA4 com dados populacionais do IBGE para estimar a participação de presença digital em cada cidade.', en: 'Combines GA4 traffic with IBGE population data to estimate share of digital presence in each Brazilian city.', es: 'Cruza el tráfico de GA4 con datos de población del IBGE para estimar la participación de presencia digital en cada ciudad de Brasil.' },
    note: 'URL com ?demo=1 respondeu 200 em 12/11/2026. Validar que a demo não exibe dados de cliente.' },
  { id: 'plano-midia', featured: false, status: 'open', ai: false, url: 'https://linka.agenciademarketingdigital.com.br/gerador-plano-midia',
    name: { pt: 'Gerador de plano de mídia', en: 'Media plan generator', es: 'Generador de plan de medios' },
    text: { pt: 'Ajuda a distribuir um investimento entre canais de mídia.', en: 'Helps distribute an investment across media channels.', es: 'Ayuda a distribuir una inversión entre canales de medios.' } },
  { id: 'calculadora', featured: false, status: 'open', ai: false, url: 'https://linka.agenciademarketingdigital.com.br/calculadora',
    name: { pt: 'Calculadora de marketing', en: 'Marketing calculator', es: 'Calculadora de marketing' },
    text: { pt: 'Calcula CAC, LTV, ROAS e projeções por canal.', en: 'Calculates CAC, LTV, ROAS and per-channel projections.', es: 'Calcula CAC, LTV, ROAS y proyecciones por canal.' } },
  { id: 'lsm', featured: false, status: 'onRequest', ai: false, reviewUrl: 'https://lsm.agenciademarketingdigital.com.br/',
    name: { pt: 'Live Site Monitor', en: 'Live Site Monitor', es: 'Live Site Monitor' },
    text: { pt: 'Mede a velocidade do site com usuários reais: TTFB, carregamento e p95 por página, dispositivo e navegador.', en: 'Measures site speed with real users: TTFB, load time and p95 by page, device and browser.', es: 'Mide la velocidad del sitio con usuarios reales: TTFB, carga y p95 por página, dispositivo y navegador.' },
    note: 'URL abre (200), mas não foi possível confirmar se exige login ou se mostra dados de clientes. Por segurança está como "sob agendamento" na versão pública.' },
  { id: 'artigos', featured: false, status: 'onRequest', ai: true, reviewUrl: 'https://artikfy.agenciademarketingdigital.com.br/',
    name: { pt: 'Artigos', en: 'Articles', es: 'Artículos' },
    text: { pt: 'Apoia a produção de textos e artigos para blog, redes sociais e SEO.', en: 'Supports writing texts and articles for blogs, social media and SEO.', es: 'Apoya la producción de textos y artículos para blog, redes sociales y SEO.' },
    note: 'URL abre (200). Confirmar se é de acesso aberto e se pode ser linkada publicamente.' },
  { id: 'comparador-gsc', featured: false, status: 'onRequest', ai: false,
    name: { pt: 'Comparador Search Console', en: 'Search Console comparison', es: 'Comparador de Search Console' },
    text: { pt: 'Compara cliques, impressões, CTR e posição média entre períodos, por página e consulta.', en: 'Compares clicks, impressions, CTR and average position between periods, by page and query.', es: 'Compara clics, impresiones, CTR y posición media entre períodos, por página y consulta.' },
    note: 'O link atual (script.google.com) exige login na conta Google da Linka. Mantido sem link público.' },
  { id: 'reputacao', featured: false, status: 'onRequest', ai: false,
    name: { pt: 'Reputação', en: 'Reputation', es: 'Reputación' },
    text: { pt: 'Análise de reputação e presença nos resultados de busca.', en: 'Analysis of reputation and presence in search results.', es: 'Análisis de reputación y presencia en los resultados de búsqueda.' },
    note: 'Sem link e descrição curta no Lab atual. Confirmar se deve aparecer.' },
  { id: 'gtd', public: false, status: 'onRequest', ai: false,
    name: { pt: 'GTD', en: 'GTD', es: 'GTD' },
    text: { pt: 'Gestão interna de tarefas.', en: 'Internal task management.', es: 'Gestión interna de tareas.' },
    note: 'Uso interno: fora da versão pública, conforme briefing.' },
];

// Artigos existentes (URLs preservadas). Conteúdo em português.
export const ARTICLES = [
  { url: '/blog/google-diz-que-geo-nao-existe', date: '2026-09-18', image: '/assets/img/blog/geo-card.jpg',
    title: 'Google diz que GEO não existe',
    text: 'Por que, para a Pesquisa Google, otimizar para IA generativa continua sendo fazer SEO bem feito.' },
  { url: '/blog/black-friday-2026-no-modo-ia-como-a-inteligencia-artificial-esta-mudando-a-jornada-de-compra', date: '2026-09-01', image: '/assets/img/blog/black-friday-card.jpg',
    title: 'Black Friday 2026 no Modo IA',
    text: 'Como IA, Google Search e comércio agêntico estão mudando a jornada de compra.' },
  { url: '/blog/ia-na-busca-crescimento-google-nao-garante-mais-visitas', date: '2026-08-03',
    title: 'IA na Busca: o sucesso do Google não garante mais visitas',
    text: 'Por que o crescimento do Google com IA não significa mais tráfego para o seu site.' },
];

// Cases: nenhum case com dados aprovados ainda. Enquanto a lista estiver vazia,
// a seção e o item de menu "Cases" não aparecem na versão pública.
// Formato esperado de cada case (somente antigos clientes, sem nome da empresa):
// { segment:{pt,en,es}, challenge:{..}, action:{..}, result:{..}, period:{..},
//   metric:{pt,en,es}, unit:'%'|'pp'|'índice', before:Number, after:Number,
//   kind:'atribuída'|'observada' }
export const CASES = [];
