const paises = {

    brasil: {
        nome: "Brasil",
        historia: "O Brasil é o país mais vitorioso da história da Copa do Mundo com cinco títulos: 1958, 1962, 1970, 1994 e 2002.",
        cultura: "O futebol brasileiro é conhecido pelo jogo bonito, habilidade e criatividade.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Pele_1970.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4e/Brazil_1970.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/74/Ronaldo_2002.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ronaldinho.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6d/Brazil_2002_world_cup.jpg"
        ]
    },

    argentina: {
        nome: "Argentina",
        historia: "A Argentina conquistou três Copas do Mundo: 1978, 1986 e 2022.",
        cultura: "A cultura do futebol argentino é marcada por paixão intensa e grandes ídolos.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/5/55/Maradona_1986.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a1/Argentina_1978.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_2022.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/35/Argentina_2022_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/Messi_world_cup.jpg"
        ]
    },

    franca: {
        nome: "França",
        historia: "A França venceu as Copas do Mundo de 1998 e 2018.",
        cultura: "O futebol francês é conhecido por sua diversidade cultural e jogadores talentosos.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/Zidane_2006.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/8e/France_1998_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6d/France_2018_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5c/Mbappe_2018.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1c/France_world_cup.jpg"
        ]
    },

    alemanha: {
        nome: "Alemanha",
        historia: "A Alemanha conquistou quatro Copas do Mundo: 1954, 1974, 1990 e 2014.",
        cultura: "A seleção alemã é famosa pela disciplina tática e eficiência.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/6/6d/Germany_2014_world_cup.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/24/Germany_1990_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Miroslav_Klose.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4c/Germany_1974.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/72/Germany_team.jpg"
        ]
    },

    italia: {
        nome: "Itália",
        historia: "A Itália conquistou quatro Copas do Mundo: 1934, 1938, 1982 e 2006.",
        cultura: "O futebol italiano é conhecido pela forte defesa e organização tática.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Italy_2006_world_cup.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5a/Italy_1982.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/6e/Buffon_2006.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Italy_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/9e/Italy_world_cup.jpg"
        ]
    },

    espanha: {
        nome: "Espanha",
        historia: "A Espanha conquistou a Copa do Mundo de 2010.",
        cultura: "A seleção espanhola ficou famosa pelo estilo de jogo tiki-taka.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/4/47/Spain_2010_world_cup.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/33/Iniesta_goal_2010.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/79/Spain_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1c/Xavi_spain.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/8f/Spain_2010_team.jpg"
        ]
    },

    inglaterra: {
        nome: "Inglaterra",
        historia: "A Inglaterra conquistou a Copa do Mundo de 1966.",
        cultura: "A Inglaterra é considerada o berço do futebol moderno.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/England_1966_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/35/Bobby_Charlton.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/54/England_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/25/Wembley_1966.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/8a/England_world_cup.jpg"
        ]
    },

    uruguai: {
        nome: "Uruguai",
        historia: "O Uruguai venceu as Copas de 1930 e 1950.",
        cultura: "O futebol uruguaio é conhecido pela garra e tradição.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/5/5f/Uruguay_1950.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/70/Uruguay_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Maracana_1950.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/Suarez_uruguay.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4b/Uruguay_world_cup.jpg"
        ]
    },

    mexico: {
        nome: "México",
        historia: "O México é uma das seleções mais tradicionais da América do Norte e já sediou duas Copas do Mundo.",
        cultura: "O futebol mexicano possui grande torcida e tradição continental.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/0/02/Mexico_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/66/Mexico_1986.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4a/Chicharito.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/Mexico_world_cup.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Mexico_stadium.jpg"
        ]
    },

    eua: {
        nome: "Estados Unidos",
        historia: "Os Estados Unidos vêm crescendo no cenário internacional do futebol.",
        cultura: "O futebol tem crescido muito em popularidade no país.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/3/3f/USA_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/8e/USA_world_cup.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/55/Pulisic.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/7d/USA_soccer.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/2f/USA_team_worldcup.jpg"
        ]
    },

    canada: {
        nome: "Canadá",
        historia: "O Canadá tem crescido no futebol internacional e participou da Copa de 2022.",
        cultura: "O futebol canadense tem evoluído com novas gerações de jogadores.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/1/1e/Canada_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/63/Canada_soccer.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/3e/Alphonso_Davies.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Canada_worldcup.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/2/25/Canada_team_match.jpg"
        ]
    },

    curacao: {
        nome: "Curaçao",
        historia: "Curaçao é uma seleção emergente do Caribe com crescimento recente no futebol.",
        cultura: "O futebol em Curaçao representa a cultura esportiva das ilhas caribenhas.",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/4/41/Curacao_team.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/30/Curacao_soccer.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/5/5b/Curacao_match.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/67/Curacao_team_game.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/Curacao_players.jpg"
        ]
    }

}

function mostrarPais(id) {

    const pais = paises[id]

    let galeria = ""

    pais.imagens.forEach(img => {
        galeria += `<img src="${img}">`
    })

    document.getElementById("conteudo").innerHTML = `

<h2>${pais.nome}</h2>

<h3>História nas Copas</h3>
<p>${pais.historia}</p>

<h3>Cultura Futebolística</h3>
<p>${pais.cultura}</p>

<div class="galeria">
${galeria}
</div>

`

}

let paisAberto = null;

function mostrarPais(pais) {
    const conteudo = document.getElementById("conteudo");

    // Se clicar no mesmo país, fecha
    if (paisAberto === pais) {
        conteudo.innerHTML = `
            <h2>Selecione uma seleção</h2>
            <p>Clique em uma bandeira para ver a história.</p>
        `;
        paisAberto = null;
        return;
    }

    paisAberto = pais;

    if (pais === "brasil") {
        conteudo.innerHTML = `
            <h2>Brasil</h2>
            <p>Maior campeão da Copa do Mundo, com 5 títulos (1958, 1962, 1970, 1994, 2002).</p>
        `;
    }

    else if (pais === "argentina") {
        conteudo.innerHTML = `
            <h2>Argentina</h2>
            <p>Tricampeã mundial (1978, 1986, 2022), conhecida por ídolos como Maradona e Messi.</p>
        `;
    }

    else if (pais === "franca") {
        conteudo.innerHTML = `
            <h2>França</h2>
            <p>Bicampeã mundial (1998 e 2018), com gerações talentosas e forte presença recente.</p>
        `;
    }

    else if (pais === "alemanha") {
        conteudo.innerHTML = `
            <h2>Alemanha</h2>
            <p>Quatro títulos mundiais (1954, 1974, 1990, 2014), famosa por sua eficiência.</p>
        `;
    }

    else if (pais === "italia") {
        conteudo.innerHTML = `
            <h2>Itália</h2>
            <p>Quatro títulos (1934, 1938, 1982, 2006), com tradição defensiva forte.</p>
        `;
    }

    else if (pais === "espanha") {
        conteudo.innerHTML = `
            <h2>Espanha</h2>
            <p>Campeã em 2010, conhecida pelo estilo de jogo "tiki-taka".</p>
        `;
    }

    else if (pais === "inglaterra") {
        conteudo.innerHTML = `
            <h2>Inglaterra</h2>
            <p>Campeã em 1966, país onde o futebol moderno foi criado.</p>
        `;
    }

    else if (pais === "uruguai") {
        conteudo.innerHTML = `
            <h2>Uruguai</h2>
            <p>Bicampeão mundial (1930, 1950), famoso pelo "Maracanazo".</p>
        `;
    }

    else if (pais === "mexico") {
        conteudo.innerHTML = `
            <h2>México</h2>
            <p>Presença constante em Copas, sediou os torneios de 1970 e 1986.</p>
        `;
    }

    else if (pais === "eua") {
        conteudo.innerHTML = `
            <h2>Estados Unidos</h2>
            <p>Em crescimento no futebol, sediou a Copa de 1994 e sediará 2026.</p>
        `;
    }

    else if (pais === "canada") {
        conteudo.innerHTML = `
            <h2>Canadá</h2>
            <p>Seleção em ascensão, participará da Copa de 2026 como país-sede.</p>
        `;
    }

    else if (pais === "curacao") {
        conteudo.innerHTML = `
            <h2>Curaçao</h2>
            <p>Seleção caribenha em desenvolvimento, com influência do futebol holandês.</p>
        `;
    }
}