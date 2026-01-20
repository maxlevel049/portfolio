const translations = {
    en: {
        menu_work: "Portfolio",
        menu_services: "Services",
        menu_hire: "Hire Me",
        hero_subtitle: "BOOST YOUR CTR & SALES",
        hero_title: "Stop the scroll.<br>Make them click.",
        hero_desc: "High-converting Thumbnails for Creators & <br> Strategic Branding for E-commerce Stores.",
        btn_portfolio: "See My Work",
        btn_quote: "Get a Quote",
        section_projects: "Selected Projects",
        project1_title: "Viral Thumbnails Pack",
        project1_desc: "High CTR Design for Gaming & Vlogs",
        project2_title: "Urban Wear Brand",
        project2_desc: "Visual Identity & Social Media Kit",
        project3_title: "Course Launch Visuals",
        project3_desc: "Landing Page Assets & Ads",
        serv_thumb: "🔥 Thumbnails",
        serv_thumb_desc: "More Views",
        serv_brand: "🛍️ Branding",
        serv_brand_desc: "More Sales",
        serv_social: "🚀 Social Media",
        serv_social_desc: "More Engagement",
        footer_title: "Ready to level up your brand?",
        footer_sub: "Available for freelance projects worldwide.",
        
        btn_close: "Close Gallery",
        label_process: "The Strategy:",
        modal_cta_text: "Want results like this?",

        // SOON (EM BREVE)
        soon_title: "Case Studies in Production",
        soon_desc: "I am currently curating high-impact data and visuals for this section. Check back soon.",

        // CASE 1: WHALE
        case_whale_title: "Cloud Gaming: Whale Emulator",
        case_whale_ctr: "⚡ CTR 15%",
        case_whale_views: "🔥 85k+ Views",
        case_whale_p1_title: "Visual Anchor:",
        case_whale_p1_desc: "Leveraged the iconic 'Whale' logo for immediate brand recognition among emulator fans.",
        case_whale_p2_title: "Contextual UI:",
        case_whale_p2_desc: "Merged the app interface with gameplay background to prove functionality at a glance.",
        case_whale_p3_title: "Psychology of Color:",
        case_whale_p3_desc: "The electric blue grading establishes a high-tech vibe, while the bold typography promises a working solution.",

        // CASE 2: DOCS (KAI CENAT)
        case_doc_title: "Documentary: The #1 Streamer",
        case_doc_ctr: "⚡ CTR 12%",
        case_doc_views: "🔥 100k+ Views",
        case_doc_p1_title: "Pattern Interrupt:",
        case_doc_p1_desc: "A discrete light pink background was chosen to aggressively contrast against the dark mode UI of YouTube, instantly grabbing attention.",
        case_doc_p2_title: "The Curiosity Gap:",
        case_doc_p2_desc: "The bold white text '100 Billed Millions' creates an immediate financial intrigue (Greed Trigger).",
        case_doc_p3_title: "Authority Anchor:",
        case_doc_p3_desc: "Kai Cenat centered as the main focus leverages his massive celebrity authority to drive clicks."
    },

    pt: {
        menu_work: "Portfólio",
        menu_services: "Serviços",
        menu_hire: "Me Contrate",
        hero_subtitle: "AUMENTE SEU CTR & VENDAS",
        hero_title: "Pare o scroll.<br>Faça eles clicarem.",
        hero_desc: "Thumbnails de Alta Conversão para Creators & <br> Branding Estratégico para Lojas Online.",
        btn_portfolio: "Ver Projetos",
        btn_quote: "Orçamento",
        section_projects: "Projetos Selecionados",
        project1_title: "Pack de Thumbs Virais",
        project1_desc: "Design de Alto CTR para Games e Vlogs",
        project2_title: "Marca de Moda Urbana",
        project2_desc: "Identidade Visual e Social Media",
        project3_title: "Lançamento de Curso",
        project3_desc: "Páginas de Venda e Anúncios",
        serv_thumb: "🔥 Thumbnails",
        serv_thumb_desc: "Mais Visualizações",
        serv_brand: "🛍️ Branding",
        serv_brand_desc: "Mais Vendas",
        serv_social: "🚀 Social Media",
        serv_social_desc: "Mais Engajamento",
        footer_title: "Pronto para elevar sua marca?",
        footer_sub: "Disponível para projetos freelance no Brasil e Mundo.",
        
        btn_close: "Fechar Galeria",
        label_process: "A Estratégia:",
        modal_cta_text: "Quer resultados assim?",

        // SOON (EM BREVE)
        soon_title: "Estudos de Caso em Produção",
        soon_desc: "Estou selecionando dados e visuais de alto impacto para esta seção. Volte em breve.",

        // CASE 1: WHALE
        case_whale_title: "Cloud Gaming: Emulador Whale",
        case_whale_ctr: "⚡ CTR 15%",
        case_whale_views: "🔥 +85k Views",
        case_whale_p1_title: "Âncora Visual:",
        case_whale_p1_desc: "Usei o logo icônico da 'Baleia' para gerar reconhecimento imediato entre os fãs de emuladores.",
        case_whale_p2_title: "UI Contextual:",
        case_whale_p2_desc: "Fundi a interface do aplicativo com o fundo do jogo para provar a funcionalidade logo no primeiro olhar.",
        case_whale_p3_title: "Psicologia das Cores:",
        case_whale_p3_desc: "O gradiente azul elétrico cria uma vibe high-tech, enquanto a tipografia bold promete uma solução funcional.",

        // CASE 2: DOCS (KAI CENAT)
        case_doc_title: "Documentário: O Maior Streamer",
        case_doc_ctr: "⚡ CTR 12%",
        case_doc_views: "🔥 +100k Views",
        case_doc_p1_title: "Quebra de Padrão:",
        case_doc_p1_desc: "Um fundo rosa claro discreto foi escolhido para contrastar agressivamente contra o modo escuro do YouTube, chamando atenção imediata.",
        case_doc_p2_title: "Gatilho de Curiosidade:",
        case_doc_p2_desc: "O texto branco '100 Billed Millions' cria uma intriga financeira imediata (Gatilho da Ganância).",
        case_doc_p3_title: "Âncora de Autoridade:",
        case_doc_p3_desc: "Kai Cenat centralizado como foco principal alavanca sua autoridade massiva de celebridade para forçar o clique."
    }
};

const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

if(langButtons){
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'pt' : 'en';
            langButtons.forEach(b => b.innerText = currentLang === 'en' ? '🇧🇷 PT' : '🇺🇸 EN');
            updateText();
        });
    });
}

function updateText() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
}