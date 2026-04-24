const paisesData = [
    {
        nome: "Brasil",
        resumo: "O único pentacampeão mundial.",
        historia: `O Brasil tem uma das histórias mais marcantes na Copa do Mundo FIFA. A seleção brasileira é a única que participou de todas as edições do torneio e também a maior campeã, com cinco títulos conquistados em 1958, 1962, 1970, 1994 e 2002. Ao longo dos anos, o Brasil revelou jogadores que se tornaram lendas do futebol mundial, como Pelé, considerado por muitos o maior jogador da história, além de Ronaldo Nazário, Ronaldinho Gaúcho e Neymar. O estilo de jogo brasileiro ficou conhecido como "futebol arte", marcado pela criatividade, habilidade e alegria em campo. Momentos históricos, como a conquista de 1970 no México, consolidaram essa identidade e encantaram o mundo.`,
        cultura: `A cultura brasileira é marcada pela diversidade resultante da mistura de povos indígenas, africanos e europeus. A influência indígena aparece na alimentação, na língua e na relação com a natureza, enquanto a africana destaca-se na música, dança e religião. Já a europeia, especialmente portuguesa, contribuiu para a língua e tradições religiosas. A música inclui estilos como samba, bossa nova e funk, com destaque para o Carnaval. A culinária apresenta pratos como feijoada, pão de queijo e acarajé. Além disso, festas populares e a diversidade regional reforçam a riqueza cultural do Brasil.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,
        imgCard: "https://i.ibb.co/V0ySVJ7f/photo-1653863878915-8a0a03c1b5ac.avif",
        imgHist: "https://i.ibb.co/29sWP80/imagem-400x200.png",
        imgCult: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800"
    },


    {
        nome: "Estados Unidos",
        resumo: "O Sonho Americano.",
        historia: "Em constante evolução, os EUA trazem força atlética e um mercado crescente que promete ser o centro de 2026.",
        cultura: "Cultura do entretenimento global e da diversidade, dos arranha-céus às paisagens naturais vastas.",
        imgCard: "https://i.ibb.co/1fYCnbhb/photo-1618420138990-25842589a7c4.avif",
        imgHist: "https://images.unsplash.com/photo-1551290464-67250ec4628a?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800"
    },



    {
        nome: "Canadá",
        resumo: "O Despertar da Folha de Bordo.",
        historia: "Retornou ao palco mundial em 2022 com uma geração jovem, preparando-se para brilhar como anfitrião em 2026.",
        cultura: "Mosaico multicultural e natureza intocada, onde a cortesia e a inclusão são marcas registradas.",
        imgCard: "https://i.ibb.co/Xhw30cR/istockphoto-184399449-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1510051640316-cee39563ddab?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800"
    },


    {
        nome: "México",
        resumo: "A Paixão Asteca.",
        historia: "Anfitrião de duas Copas históricas, o México é sinônimo de festa e devoção no místico Estádio Azteca.",
        cultura: "Uma explosão de cores e sabores, com tradições ancestrais como o Dia de los Muertos.",
        imgCard: "https://i.ibb.co/0V6Zzvv0/istockphoto-157483423-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1564613271708-62f7902d2072?q=80&w=800"
    },


    {
        nome: "Argentina",
        resumo: "A terra de Maradona e Messi.",
        historia: "Três vezes campeã, a trajetória argentina é marcada por gênios. A 'Mão de Deus' de Maradona e a consagração de Messi em 2022 definem gerações.",
        cultura: "O Tango de Buenos Aires e a paixão pelos asados refletem o fervor que se traduz diretamente para as arquibancadas.",
        imgCard: "https://i.ibb.co/RGkSwd1f/istockphoto-647676034-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1671374523173-51624c6e9112?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1545153997-1200926615b1?q=80&w=800"
    },
    {
        nome: "Marrocos",
        resumo: "Os Leões do Atlas.",
        historia: "Fez história em 2022 como a primeira nação africana e árabe a chegar a uma semifinal, unindo continentes com sua resiliência.",
        cultura: "Uma terra de Souks vibrantes e arquitetura detalhada, onde a hospitalidade é servida com chá de hortelã.",
        imgCard: "https://i.ibb.co/rNF6TBy/photo-1641302621676-1cb63c616188.avif",
        imgHist: "https://images.unsplash.com/photo-1518112166137-85909673df8d?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1489493512598-d08130f49bea?q=80&w=800"
    },
    {
        nome: "Espanha",
        resumo: "O domínio do Tiki-Taka.",
        historia: "Alcançou o topo do mundo em 2010 com o gol de Iniesta, definindo uma era de posse de bola e precisão cirúrgica.",
        cultura: "Do Flamenco rítmico à arquitetura de vanguarda, a Espanha celebra a vida social e as tradições milenares.",
        imgCard: "https://i.ibb.co/4RMh4wSZ/istockphoto-184679574-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1510051640316-cee39563ddab?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=800"
    },
    {
        nome: "Alemanha",
        resumo: "Consistência e poder coletivo.",
        historia: "Tetracampeã mundial, a Mannschaft é sinônimo de perfeição tática, desde o Milagre de Berna ao histórico 7 a 1 em 2014.",
        cultura: "https://i.ibb.co/gM5mgNdn/istockphoto-113731268-612x612.webp",
        imgCard: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800",
        imgHist: "https://images.unsplash.com/photo-1551290464-67250ec4628a?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1599946347341-6cd394793abc?q=80&w=800"
    },
    {
        nome: "Inglaterra",
        resumo: "O berço do futebol.",
        historia: "Campeã em 1966 em Wembley, a seleção inglesa carrega a tradição de craques e o sonho constante de que o futebol volte para casa.",
        cultura: "Uma fusão de elegância real com o espírito do Rock, centrada na vibrante cultura dos pubs.",
        imgCard: "https://i.ibb.co/ZRzxZc1K/photo-1651608589821-82b047ae56bd.avif",
        imgHist: "https://images.unsplash.com/photo-1529900903110-d3574d11521a?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1520467795206-62e33627e6ce?q=80&w=800"
    },
    {
        nome: "Curaçao",
        resumo: "O Coração do Caribe.",
        historia: "Uma força emergente na CONCACAF, exportando talentos para as ligas europeias e crescendo no cenário mundial.",
        cultura: "Famosa pelas casas coloridas de Willemstad e uma mistura única de línguas e águas cristalinas.",
        imgCard: "https://i.ibb.co/HfdzKPcS/istockphoto-1071043160-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=800"
    },
    {
        nome: "França",
        resumo: "A força da diversidade.",
        historia: "Bicampeã mundial (1998 e 2018), a França une técnica e vigor físico com formações de atletas de elite.",
        cultura: "Referência em arte e gastronomia, Paris brilha como a Cidade Luz e símbolo do 'Art de Vivre'.",
        imgCard: "https://i.ibb.co/nszdb1C7/istockphoto-824990862-612x612.webp",
        imgHist: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=800"
    },
    {
        nome: "Itália",
        resumo: "A Arte da Defesa.",
        historia: "Tetracampeã mundial, a Azzurra é mestre em tática e superação, com títulos épicos em 1982 e 2006.",
        cultura: "O berço do Renascimento, onde a moda, a ópera e a culinária criam um estilo de vida sofisticado.",
        imgCard: "https://i.ibb.co/cXQM7MLp/photo-1596440243128-cf71a4c60065.avif",
        imgHist: "https://images.unsplash.com/photo-1518112166137-85909673df8d?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1499195333224-3ce974eecfb4?q=80&w=800"
    },
    {
        nome: "Uruguai",
        resumo: "A Garra Charrua.",
        historia: "Primeiro campeão do mundo e autor do Maracanazo, o Uruguai prova que o tamanho não define a grandeza.",
        cultura: "Terra do candombe e do mate, onde a simplicidade e a resiliência são valores fundamentais.",
        imgCard: "https://i.ibb.co/YFmC1DYs/photo-1766790458523-5bfc78de43ef.avif",
        imgHist: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=800",
        imgCult: "https://images.unsplash.com/photo-1590038767624-dac5740a997b?q=80&w=800"
    },


];

const grid = document.getElementById('gridPaises');
const modal = document.getElementById('modalPais');
const modalBody = document.getElementById('modalBody');
const btnClose = document.querySelector('.close');

function renderCards() {
    grid.innerHTML = '';
    paisesData.forEach((pais, index) => {
        const card = document.createElement('div');
        card.className = 'card-pais';
        card.innerHTML = `
            <img src="${pais.imgCard}" class="card-img" alt="${pais.nome}">
            <div class="card-info">
                <h3>${pais.nome}</h3>
                <p>${pais.resumo}</p>
            </div>
        `;
        card.onclick = () => openModal(index);
        grid.appendChild(card);
    });
}

// ... (mantenha o array paisesData igual ao anterior) ...

function renderCards() {
    const grid = document.getElementById('gridPaises');
    grid.innerHTML = '';
    paisesData.forEach((pais, index) => {
        const card = document.createElement('div');
        card.className = 'card-pais';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${pais.imgCard}" class="card-img" alt="${pais.nome}">
            </div>
            <div class="card-info">
                <h3>${pais.nome}</h3>
                <p>${pais.resumo}</p>
            </div>
        `;
        card.onclick = () => openModal(index);
        grid.appendChild(card);
    });
}

function openModal(index) {
    const p = paisesData[index];
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <img src="${p.imgCard}" class="modal-header-img">
        <div style="padding: 0 40px"><h2 style="font-family: 'Cinzel', serif; font-size: 3rem; color: #fff; margin-top: -50px; position: relative;">${p.nome}</h2></div>
        <div class="modal-grid">
            <div class="modal-section">
                <h3>🏆 Tradição em Copas</h3>
                <p style="line-height: 1.8; color: #bbb;">${p.historia}</p>
                <img src="${p.imgHist}">
            </div>
            <div class="modal-section">
                <h3>🌍 Essência Cultural</h3>
                <p style="line-height: 1.8; color: #bbb;">${p.cultura}</p>
                <img src="${p.imgCult}">
            </div>
        </div>
    `;
    document.getElementById('modalPais').style.display = "block";
    document.body.style.overflow = "hidden";
}

// Fechar modal (mantenha os eventos de clique anteriores)
document.querySelector('.close-btn').onclick = () => {
    document.getElementById('modalPais').style.display = "none";
    document.body.style.overflow = "auto";
};
window.onclick = (e) => {
    if (e.target.id === 'modalPais') {
        document.getElementById('modalPais').style.display = "none";
        document.body.style.overflow = "auto";
    }
};

renderCards();