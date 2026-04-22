let idiomaAtual = "pt"; // pt ou en
let selecaoAtualIndex = null;
const selecoes = [
  {
    nome: "Brasil",
    dataPtNome: "Brasil",
    dataEnNome: "Brazil",
    img: "https://flagcdn.com/w320/br.png",
  
    historia: "Maior campeão da Copa do Mundo com 5 títulos e único país presente em todas as edições.",
    dataPtHistoria: "Maior campeão da Copa do Mundo com 5 títulos e único país presente em todas as edições.",
    dataEnHistoria: "The most successful World Cup team with 5 titles and the only country present in all editions.",
  
    cultura: "Futebol arte, samba, carnaval e uma forte paixão nacional pelo esporte.",
    dataPtCultura: "Futebol arte, samba, carnaval e uma forte paixão nacional pelo esporte.",
    dataEnCultura: "Beautiful football, samba, carnival, and a strong national passion for the sport.",
  
    imagens: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b",
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a"
    ]
  },
  {
    nome: "Marrocos",
    dataPtNome: "Marrocos",
    dataEnNome: "Morocco",
    img: "https://flagcdn.com/w320/ma.png",
  
    historia: "Primeira seleção africana a chegar às semifinais da Copa do Mundo (2022).",
    dataPtHistoria: "Primeira seleção africana a chegar às semifinais da Copa do Mundo (2022).",
    dataEnHistoria: "First African team to reach the World Cup semifinals (2022).",
  
    cultura: "Mistura de tradição árabe, africana e europeia.",
    dataPtCultura: "Mistura de tradição árabe, africana e europeia.",
    dataEnCultura: "A mix of Arab, African and European traditions.",
  
    imagens: [
      "https://images.unsplash.com/photo-1528127269322-539801943592",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
    ]
  },
  {
    nome: "Inglaterra",
    dataPtNome: "Inglaterra",
    dataEnNome: "England",
    img: "https://flagcdn.com/w320/gb-eng.png",
  
    historia: "Campeã mundial em 1966.",
    dataPtHistoria: "Campeã mundial em 1966.",
    dataEnHistoria: "World champion in 1966.",
  
    cultura: "A Premier League e o futebol moderno nasceram aqui.",
    dataPtCultura: "A Premier League e o futebol moderno nasceram aqui.",
    dataEnCultura: "The Premier League and modern football were born here.",
  
    imagens: [
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9",
      "https://images.unsplash.com/photo-1526481280695-3c687fd643ed"
    ]
  },
  {
    nome: "Espanha",
    dataPtNome: "Espanha",
    dataEnNome: "Spain",
    img: "https://flagcdn.com/w320/es.png",
  
    historia: "Campeã mundial em 2010.",
    dataPtHistoria: "Campeã mundial em 2010.",
    dataEnHistoria: "World champion in 2010.",
  
    cultura: "Futebol técnico e posse de bola.",
    dataPtCultura: "Futebol técnico e posse de bola.",
    dataEnCultura: "Technical football and ball possession.",
  
    imagens: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    ]
  },
  {
    nome: "Curaçao",
    dataPtNome: "Curaçao",
    dataEnNome: "Curaçao",
    img: "https://flagcdn.com/w320/cw.png",
  
    historia: "Seleção em crescimento no futebol caribenho.",
    dataPtHistoria: "Seleção em crescimento no futebol caribenho.",
    dataEnHistoria: "A growing team in Caribbean football.",
  
    cultura: "Influência holandesa e cultura tropical.",
    dataPtCultura: "Influência holandesa e cultura tropical.",
    dataEnCultura: "Dutch influence and tropical culture.",
  
    imagens: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    ]
  },
  {
    nome: "Alemanha",
    dataPtNome: "Alemanha",
    dataEnNome: "Germany",
    img: "https://flagcdn.com/w320/de.png",
  
    historia: "4 vezes campeã mundial.",
    dataPtHistoria: "4 vezes campeã mundial.",
    dataEnHistoria: "4-time world champion.",
  
    cultura: "Organização e disciplina tática.",
    dataPtCultura: "Organização e disciplina tática.",
    dataEnCultura: "Organization and tactical discipline.",
  
    imagens: [
      "https://images.unsplash.com/photo-1526679498241-4b0d8c7f71b9",
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3"
    ]
  },
  {
    nome: "Canadá",
    dataPtNome: "Canadá",
    dataEnNome: "Canada",
    img: "https://flagcdn.com/w320/ca.png",
  
    historia: "Retorno recente à Copa do Mundo.",
    dataPtHistoria: "Retorno recente à Copa do Mundo.",
    dataEnHistoria: "Recent return to the World Cup.",
  
    cultura: "Multiculturalismo e crescimento do futebol.",
    dataPtCultura: "Multiculturalismo e crescimento do futebol.",
    dataEnCultura: "Multiculturalism and football growth.",
  
    imagens: [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
    ]
  },
  {
    nome: "Estados Unidos",
    dataPtNome: "Estados Unidos",
    dataEnNome: "United States",
    img: "https://flagcdn.com/w320/us.png",
  
    historia: "Forte crescimento no futebol mundial.",
    dataPtHistoria: "Forte crescimento no futebol mundial.",
    dataEnHistoria: "Strong growth in world football.",
  
    cultura: "MLS e esporte profissional forte.",
    dataPtCultura: "MLS e esporte profissional forte.",
    dataEnCultura: "MLS and strong professional sports culture.",
  
    imagens: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
    ]
  },
  {
    nome: "México",
    dataPtNome: "México",
    dataEnNome: "Mexico",
    img: "https://flagcdn.com/w320/mx.png",
  
    historia: "Seleção tradicional da América do Norte.",
    dataPtHistoria: "Seleção tradicional da América do Norte.",
    dataEnHistoria: "A traditional team in North America.",
  
    cultura: "Futebol apaixonado e cultura latina.",
    dataPtCultura: "Futebol apaixonado e cultura latina.",
    dataEnCultura: "Passionate football and Latin culture.",
  
    imagens: [
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    ]
  },
  {
    nome: "Uruguai",
    dataPtNome: "Uruguai",
    dataEnNome: "Uruguay",
    img: "https://flagcdn.com/w320/uy.png",
  
    historia: "Primeiro campeão mundial (1930).",
    dataPtHistoria: "Primeiro campeão mundial (1930).",
    dataEnHistoria: "First World Cup champion (1930).",
  
    cultura: "Futebol raiz e tradição histórica.",
    dataPtCultura: "Futebol raiz e tradição histórica.",
    dataEnCultura: "Traditional football and strong history.",
  
    imagens: [
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba"
    ]
  },
  {
    nome: "Itália",
    dataPtNome: "Itália",
    dataEnNome: "Italy",
    img: "https://flagcdn.com/w320/it.png",
  
    historia: "4 títulos mundiais.",
    dataPtHistoria: "4 títulos mundiais.",
    dataEnHistoria: "4 World Cup titles.",
  
    cultura: "Defesa forte e tradição europeia.",
    dataPtCultura: "Defesa forte e tradição europeia.",
    dataEnCultura: "Strong defense and European tradition.",
  
    imagens: [
      "https://images.unsplash.com/photo-1529260830199-42c24126f198",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    ]
  },
  {
    nome: "França",
    dataPtNome: "França",
    dataEnNome: "France",
    img: "https://flagcdn.com/w320/fr.png",
  
    historia: "Campeã em 1998 e 2018.",
    dataPtHistoria: "Campeã em 1998 e 2018.",
    dataEnHistoria: "Champion in 1998 and 2018.",
  
    cultura: "Futebol moderno e multicultural.",
    dataPtCultura: "Futebol moderno e multicultural.",
    dataEnCultura: "Modern and multicultural football.",
  
    imagens: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    ]
  },
  {
    nome: "Argentina",
    dataPtNome: "Argentina",
    dataEnNome: "Argentina",
    img: "https://flagcdn.com/w320/ar.png",
  
    historia: "Tricampeã mundial.",
    dataPtHistoria: "Tricampeã mundial.",
    dataEnHistoria: "Three-time world champion.",
  
    cultura: "Paixão extrema pelo futebol.",
    dataPtCultura: "Paixão extrema pelo futebol.",
    dataEnCultura: "Extreme passion for football.",
  
    imagens: [
      "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      "https://images.unsplash.com/photo-1505842465776-3bfd188c8f35"
    ]
  }
  ];

const grid = document.getElementById("grid");
let intervalo;

/* CARDS */
function carregar() {
  grid.innerHTML = "";

  selecoes.forEach((s, index) => {
    grid.innerHTML += `
      <div class="card" onclick="abrirModal(${index})">
        <img src="${s.img}">
        <h3>${idiomaAtual === "pt" ? (s.dataPtNome || s.nome) : (s.dataEnNome || s.nome)}</h3>
      </div>
    `;
  });
}

/* MODAL */
function abrirModal(index) {
  selecaoAtualIndex = index;
  const sel = selecoes[index];

  const isPT = idiomaAtual === "pt";

  document.getElementById("titulo").innerText =
    isPT ? (sel.dataPtNome || sel.nome) : (sel.dataEnNome || sel.nome);

  document.getElementById("historia").innerText =
    isPT
      ? (sel.dataPtHistoria || sel.historia)
      : (sel.dataEnHistoria || traduzirTexto(sel.historia));

  document.getElementById("cultura").innerText =
    isPT
      ? (sel.dataPtCultura || sel.cultura)
      : (sel.dataEnCultura || traduzirTexto(sel.cultura));

  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  sel.imagens.forEach(img => {
    galeria.innerHTML += `<img src="${img}" onclick="zoomImagem('${img}')">`;
  });

  document.getElementById("modal").classList.add("show");

  iniciarSlide();
}

function mudarIdioma(lang) {
  idiomaAtual = lang;

  carregar(); // atualiza os cards

  // 🔥 ISSO AQUI É O QUE FALTAVA
  if (selecaoAtualIndex !== null) {
    abrirModal(selecaoAtualIndex);
  }
}

/* SLIDE AUTOMÁTICO */
function iniciarSlide() {
  let index = 0;
  const imagens = document.querySelectorAll("#galeria img");

  clearInterval(intervalo);

  if (imagens.length === 0) return;

  imagens.forEach(img => {
    img.style.display = "none";
    img.style.objectFit = "contain";
  });

  imagens[0].style.display = "block";

  intervalo = setInterval(() => {
    imagens.forEach(img => img.style.display = "none");

    imagens[index].style.display = "block";

    index = (index + 1) % imagens.length;
  }, 2500);
}

/* FECHAR */
function fecharModal() {
  document.getElementById("modal").classList.remove("show");
  clearInterval(intervalo);
}

/* ZOOM */
function zoomImagem(src) {
  const zoom = document.getElementById("zoom");
  zoom.querySelector("img").src = src;
  zoom.style.display = "flex";
}

function fecharZoom() {
  document.getElementById("zoom").style.display = "none";
}

carregar();

function traduzirTexto(texto) {
  // fallback simples caso não tenha dataEn
  return "[EN] " + texto;
}