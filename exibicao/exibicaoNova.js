const paisesData = [
    {
        nome: { pt: "Brasil", en: "Brazil" },
        resumo: { pt: "O único pentacampeão mundial.", en: "The only five-time world champion." },
        historia: {
            pt: `O Brasil tem uma das histórias mais marcantes na Copa do Mundo FIFA. A seleção brasileira é a única que participou de todas as edições do torneio e também a maior campeã, com cinco títulos conquistados em 1958, 1962, 1970, 1994 e 2002. Ao longo dos anos, o Brasil revelou jogadores que se tornaram lendas do futebol mundial, como Pelé, considerado por muitos o maior jogador da história, além de Ronaldo Nazário, Ronaldinho Gaúcho e Neymar. O estilo de jogo brasileiro ficou conhecido como "futebol arte", marcado pela criatividade, habilidade e alegria em campo. Momentos históricos, como a conquista de 1970 no México, consolidaram essa identidade e encantaram o mundo.`,
            
            en: `Brazil has one of the most remarkable histories in the FIFA World Cup. The Brazilian national team is the only one to have participated in every edition of the tournament and is also the most successful, with five titles won in 1958, 1962, 1970, 1994, and 2002. Over the years, Brazil has produced legendary players such as Pelé, widely considered the greatest of all time, as well as Ronaldo Nazário, Ronaldinho Gaúcho, and Neymar. The Brazilian style became known as "jogo bonito", defined by creativity, skill, and joy on the field. Historic moments, such as the 1970 victory in Mexico, solidified this identity and captivated the world.`
        },
        cultura: {
            pt: `A cultura brasileira é marcada pela diversidade resultante da mistura de povos indígenas, africanos e europeus. A influência indígena aparece na alimentação, na língua e na relação com a natureza, enquanto a africana destaca-se na música, dança e religião. Já a europeia, especialmente portuguesa, contribuiu para a língua e tradições religiosas. A música inclui estilos como samba, bossa nova e funk, com destaque para o Carnaval. A culinária apresenta pratos como feijoada, pão de queijo e acarajé. Além disso, festas populares e a diversidade regional reforçam a riqueza cultural do Brasil.`,
            en: `Brazilian culture is marked by diversity resulting from the mixture of Indigenous, African, and European peoples. Indigenous influence appears in food, language, and the relationship with nature, while African influence stands out in music, dance, and religion. European influence, especially Portuguese, contributed to the language and religious traditions. Music includes styles such as samba, bossa nova, and funk, with Carnival as a major highlight. Brazilian cuisine features dishes like feijoada, pão de queijo, and acarajé. In addition, popular festivals and regional diversity reinforce the cultural richness of Brazil.`
        },
        imgCard: "https://i.ibb.co/V0ySVJ7f/photo-1653863878915-8a0a03c1b5ac.avif",
        imgHist: "https://i.ibb.co/29sWP80/imagem-400x200.png",
        imgCult: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800"
    },

    {
        nome: { pt: "Estados Unidos", en: "United States" },
    
        resumo: { 
            pt: "O Sonho Americano.", 
            en: "The American Dream." 
        },
    
        historia: {
            pt: "Em constante evolução, os EUA trazem força atlética e um mercado crescente que promete ser o centro de 2026.",
            en: "Constantly evolving, the USA brings athletic strength and a growing market that is set to be the center of 2026."
        },
    
        cultura: {
            pt: "Cultura do entretenimento global e da diversidade, dos arranha-céus às paisagens naturais vastas.",
            en: "A culture of global entertainment and diversity, from skyscrapers to vast natural landscapes."
        },
        imgCard: "https://i.ibb.co/1fYCnbhb/photo-1618420138990-25842589a7c4.avif",
        imgHist: "https://images.unsplash.com/photo-1551290464-67250ec4628a?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800"
    },

    {
        nome: { pt: "Canadá", en: "Canada" },
    
        resumo: { 
            pt: "O Despertar da Folha de Bordo.", 
            en: "The Rise of the Maple Leaf." 
        },
    
        historia: {
            pt: "Retornou ao palco mundial em 2022 com uma geração jovem, preparando-se para brilhar como anfitrião em 2026.",
            en: "Returned to the world stage in 2022 with a young generation, preparing to shine as a host in 2026."
        },
    
        cultura: {
            pt: "Mosaico multicultural e natureza intocada, onde a cortesia e a inclusão são marcas registradas.",
            en: "A multicultural mosaic with untouched nature, where politeness and inclusion are defining traits."
        },
    
        imgCard: "https://i.ibb.co/Xhw30cR/istockphoto-184399449-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1510051640316-cee39563ddab?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800"
    },

    {
        nome: { pt: "México", en: "Mexico" },
        resumo: { pt: "A Paixão Asteca.", en: "The Aztec Passion." },
        historia: {
            pt: "Anfitrião de duas Copas históricas, o México é sinônimo de festa e devoção no místico Estádio Azteca.",
            en: "Host of two historic World Cups, Mexico is synonymous with celebration and devotion at the legendary Azteca Stadium."
        },
        cultura: {
            pt: "Uma explosão de cores e sabores, com tradições ancestrais como o Dia de los Muertos.",
            en: "An explosion of colors and flavors, with ancestral traditions such as the Day of the Dead."
        },
        imgCard: "https://i.ibb.co/0V6Zzvv0/istockphoto-157483423-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1564613271708-62f7902d2072?q=80&w=800"
    },
    
    {
        nome: { pt: "Argentina", en: "Argentina" },
        resumo: { pt: "A terra de Maradona e Messi.", en: "The land of Maradona and Messi." },
        historia: {
            pt: "Três vezes campeã, a trajetória argentina é marcada por gênios. A 'Mão de Deus' de Maradona e a consagração de Messi em 2022 definem gerações.",
            en: "Three-time champions, Argentina’s journey is marked by legends. Maradona’s 'Hand of God' and Messi’s 2022 triumph define generations."
        },
        cultura: {
            pt: "O Tango de Buenos Aires e a paixão pelos asados refletem o fervor que se traduz diretamente para as arquibancadas.",
            en: "Buenos Aires tango and the passion for barbecue reflect a fervor that carries into the stadiums."
        },
        imgCard: "https://i.ibb.co/RGkSwd1f/istockphoto-647676034-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1671374523173-51624c6e9112?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1545153997-1200926615b1?q=80&w=800"
    },
    
    {
        nome: { pt: "Marrocos", en: "Morocco" },
        resumo: { pt: "Os Leões do Atlas.", en: "The Atlas Lions." },
        historia: {
            pt: "Fez história em 2022 como a primeira nação africana e árabe a chegar a uma semifinal, unindo continentes com sua resiliência.",
            en: "Made history in 2022 as the first African and Arab nation to reach a semifinal, uniting continents with resilience."
        },
        cultura: {
            pt: "Uma terra de Souks vibrantes e arquitetura detalhada, onde a hospitalidade é servida com chá de hortelã.",
            en: "A land of vibrant souks and detailed architecture, where hospitality is served with mint tea."
        },
        imgCard: "https://i.ibb.co/rNF6TBy/photo-1641302621676-1cb63c616188.avif",
        imgHist: "https://images.unsplash.com/photo-1518112166137-85909673df8d?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1489493512598-d08130f49bea?q=80&w=800"
    },
    
    {
        nome: { pt: "Espanha", en: "Spain" },
        resumo: { pt: "O domínio do Tiki-Taka.", en: "The Tiki-Taka dominance." },
        historia: {
            pt: "Alcançou o topo do mundo em 2010 com o gol de Iniesta, definindo uma era de posse de bola e precisão cirúrgica.",
            en: "Reached the top of the world in 2010 with Iniesta’s goal, defining an era of possession and precision."
        },
        cultura: {
            pt: "Do Flamenco rítmico à arquitetura de vanguarda, a Espanha celebra a vida social e as tradições milenares.",
            en: "From rhythmic flamenco to avant-garde architecture, Spain celebrates social life and ancient traditions."
        },
        imgCard: "https://i.ibb.co/4RMh4wSZ/istockphoto-184679574-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1510051640316-cee39563ddab?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800"
    },
    
    {
        nome: { pt: "Alemanha", en: "Germany" },
        resumo: { pt: "Consistência e poder coletivo.", en: "Consistency and collective power." },
        historia: {
            pt: "Tetracampeã mundial, a Mannschaft é sinônimo de perfeição tática, desde o Milagre de Berna ao histórico 7 a 1 em 2014.",
            en: "Four-time world champions, Germany represents tactical perfection, from the Miracle of Bern to the historic 7–1 in 2014."
        },
        cultura: {
            pt: "Conhecida por sua organização, festivais como a Oktoberfest e forte tradição cultural europeia.",
            en: "Known for its organization, festivals like Oktoberfest, and strong European cultural traditions."
        },
        imgCard: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800",
        imgHist: "https://images.unsplash.com/photo-1551290464-67250ec4628a?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1599946347341-6cd394793abc?q=80&w=800"
    },
    
    {
        nome: { pt: "Inglaterra", en: "England" },
        resumo: { pt: "O berço do futebol.", en: "The birthplace of football." },
        historia: {
            pt: "Campeã em 1966 em Wembley, a seleção inglesa carrega a tradição de craques e o sonho constante de que o futebol volte para casa.",
            en: "Champions in 1966 at Wembley, England carries the tradition of great players and the dream of football coming home."
        },
        cultura: {
            pt: "Uma fusão de elegância real com o espírito do Rock, centrada na vibrante cultura dos pubs.",
            en: "A fusion of royal elegance and rock spirit, centered around vibrant pub culture."
        },
        imgCard: "https://i.ibb.co/ZRzxZc1K/photo-1651608589821-82b047ae56bd.avif",
        imgHist: "https://images.unsplash.com/photo-1529900903110-d3574d11521a?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1520467795206-62e33627e6ce?q=80&w=800"
    },
    
    {
        nome: { pt: "Curaçao", en: "Curaçao" },
        resumo: { pt: "O Coração do Caribe.", en: "The Heart of the Caribbean." },
        historia: {
            pt: "Uma força emergente na CONCACAF, exportando talentos para as ligas europeias e crescendo no cenário mundial.",
            en: "An emerging force in CONCACAF, exporting talent to European leagues and growing on the world stage."
        },
        cultura: {
            pt: "Famosa pelas casas coloridas de Willemstad e uma mistura única de línguas e águas cristalinas.",
            en: "Famous for the colorful houses of Willemstad and a unique blend of languages and crystal-clear waters."
        },
        imgCard: "https://i.ibb.co/HfdzKPcS/istockphoto-1071043160-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=800"
    },
    
    {
        nome: { pt: "França", en: "France" },
        resumo: { pt: "A força da diversidade.", en: "The power of diversity." },
        historia: {
            pt: "Bicampeã mundial (1998 e 2018), a França une técnica e vigor físico com formações de atletas de elite.",
            en: "Two-time world champions (1998 and 2018), France combines technique and physical strength with elite talent."
        },
        cultura: {
            pt: "Referência em arte e gastronomia, Paris brilha como a Cidade Luz e símbolo do 'Art de Vivre'.",
            en: "A reference in art and gastronomy, Paris shines as the City of Light and symbol of 'Art de Vivre'."
        },
        imgCard: "https://i.ibb.co/nszdb1C7/istockphoto-824990862-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=800"
    },
    
    {
        nome: { pt: "Itália", en: "Italy" },
        resumo: { pt: "A Arte da Defesa.", en: "The Art of Defense." },
        historia: {
            pt: "Tetracampeã mundial, a Azzurra é mestre em tática e superação, com títulos épicos em 1982 e 2006.",
            en: "Four-time world champions, Italy is a master of tactics and resilience, with iconic titles in 1982 and 2006."
        },
        cultura: {
            pt: "O berço do Renascimento, onde a moda, a ópera e a culinária criam um estilo de vida sofisticado.",
            en: "The birthplace of the Renaissance, where fashion, opera, and cuisine create a sophisticated lifestyle."
        },
        imgCard: "https://i.ibb.co/cXQM7MLp/photo-1596440243128-cf71a4c60065.avif",
        imgHist: "https://images.unsplash.com/photo-1518112166137-85909673df8d?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1499195333224-3ce974eecfb4?q=80&w=800"
    },
    
    {
        nome: { pt: "Uruguai", en: "Uruguay" },
        resumo: { pt: "Garra Charrua.", en: "Charrúa spirit." },
        historia: {
            pt: "Primeiro campeão mundial em 1930 e símbolo de superação no futebol.",
            en: "First world champion in 1930 and a symbol of resilience in football."
        },
        cultura: {
            pt: "Cultura marcada pelo mate, pelo candombe e pela tradição do futebol.",
            en: "Culture marked by mate, candombe, and strong football traditions."
        },
        imgCard: "https://i.ibb.co/YFmC1DYs/photo-1766790458523-5bfc78de43ef.avif",
        imgHist: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1590038767624-dac5740a997b?q=80&w=800"
    }

];

let lang = "pt";

const grid = document.getElementById('gridPaises');
const modal = document.getElementById('modalPais');
const modalBody = document.getElementById('modalBody');

let currentIndex = null;

// 🔑 traduz objetos OU data-attributes
function t(valor) {
    if (typeof valor === "object" && valor !== null) {
        return valor[lang] || valor.pt || "";
    }
    return valor || "";
}
// 🔥 TRADUZ HTML (data-pt / data-en)
function traduzirHTML() {
    document.querySelectorAll("[data-pt]").forEach(el => {
        el.innerText = el.getAttribute(`data-${lang}`);
    });
}

// ✅ RENDER CARDS
function renderCards() {
    grid.innerHTML = '';

    paisesData.forEach((pais, index) => {
        const card = document.createElement('div');
        card.className = 'card-pais';

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${pais.imgCard}" class="card-img" alt="${t(pais.nome)}">
            </div>
            <div class="card-info">
                <h3>${t(pais.nome)}</h3>
                <p>${t(pais.resumo)}</p>
            </div>
        `;

        card.onclick = () => openModal(index);
        grid.appendChild(card);
    });
}

// ✅ MODAL
function openModal(index) {
    currentIndex = index;
    const p = paisesData[index];

    modalBody.innerHTML = `
        <img src="${p.imgCard}" class="modal-header-img">

        <div style="padding: 0 40px">
            <h2 style="font-family: 'Cinzel'; font-size: 3rem; color: #fff;">
                ${t(p.nome)}
            </h2>
        </div>

        <div class="modal-grid">
            <div class="modal-section">
                <h3 data-pt="🏆 Tradição em Copas" data-en="🏆 World Cup History">
                    ${lang === "pt" ? "🏆 Tradição em Copas" : "🏆 World Cup History"}
                </h3>
                <p>${t(p.historia)}</p>
                <img src="${p.imgHist}">
            </div>

            <div class="modal-section">
                <h3 data-pt="🌍 Essência Cultural" data-en="🌍 Cultural Essence">
                    ${lang === "pt" ? "🌍 Essência Cultural" : "🌍 Cultural Essence"}
                </h3>
                <p>${t(p.cultura)}</p>
                <img src="${p.imgCult}">
            </div>
        </div>
    `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// ✅ FECHAR MODAL
document.querySelector('.close-btn')?.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// 🔥 BOTÃO DE IDIOMA
function toggleLanguage() {
    lang = lang === "pt" ? "en" : "pt";

    // muda texto do botão
    const btn = document.getElementById("btn-translate");
    if (btn) {
        btn.innerText = lang === "pt" ? "EN" : "PT";
    }

    traduzirHTML();   // 🔥 traduz textos fixos
    renderCards();    // 🔥 atualiza cards

    // 🔥 atualiza modal aberto
    if (modal.style.display === "block" && currentIndex !== null) {
        openModal(currentIndex);
    }
}

// iniciar
traduzirHTML();
renderCards();

document.addEventListener("DOMContentLoaded", () => {
    traduzirHTML();
    renderCards();
});