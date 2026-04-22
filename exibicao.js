const selecoes = [
{
  nome: "Brasil",
  img: "https://flagcdn.com/w320/br.png",
  historia: "Maior campeão da Copa do Mundo com 5 títulos e único país presente em todas as edições.",
  cultura: "Futebol arte, samba, carnaval e uma forte paixão nacional pelo esporte.",
  imagens: [
    "https://images.unsplash.com/photo-1546519638-68e109498ffc",
    "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b",
    "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a"
  ]
},
{
  nome: "Marrocos",
  img: "https://flagcdn.com/w320/ma.png",
  historia: "Primeira seleção africana a chegar às semifinais da Copa do Mundo (2022).",
  cultura: "Mistura de tradição árabe, africana e europeia.",
  imagens: [
    "https://images.unsplash.com/photo-1528127269322-539801943592",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
  ]
},
{
  nome: "Inglaterra",
  img: "https://flagcdn.com/w320/gb-eng.png",
  historia: "Campeã mundial em 1966.",
  cultura: "Premier League e futebol moderno nasceu aqui.",
  imagens: [
    "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9",
    "https://images.unsplash.com/photo-1526481280695-3c687fd643ed"
  ]
},
{
  nome: "Espanha",
  img: "https://flagcdn.com/w320/es.png",
  historia: "Campeã mundial em 2010.",
  cultura: "Futebol técnico e posse de bola.",
  imagens: [
    "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  ]
},
{
  nome: "Curaçao",
  img: "https://flagcdn.com/w320/cw.png",
  historia: "Seleção em crescimento no futebol caribenho.",
  cultura: "Influência holandesa e cultura tropical.",
  imagens: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  ]
},
{
  nome: "Alemanha",
  img: "https://flagcdn.com/w320/de.png",
  historia: "4 vezes campeã mundial.",
  cultura: "Organização e disciplina tática.",
  imagens: [
    "https://images.unsplash.com/photo-1526679498241-4b0d8c7f71b9",
    "https://images.unsplash.com/photo-1504615755583-2916b52192a3"
  ]
},
{
  nome: "Canadá",
  img: "https://flagcdn.com/w320/ca.png",
  historia: "Retorno recente à Copa do Mundo.",
  cultura: "Multiculturalismo e crescimento do futebol.",
  imagens: [
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
  ]
},
{
  nome: "Estados Unidos",
  img: "https://flagcdn.com/w320/us.png",
  historia: "Forte crescimento no futebol mundial.",
  cultura: "MLS e esporte profissional forte.",
  imagens: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
  ]
},
{
  nome: "México",
  img: "https://flagcdn.com/w320/mx.png",
  historia: "Seleção tradicional da América do Norte.",
  cultura: "Futebol apaixonado e cultura latina.",
  imagens: [
    "https://images.unsplash.com/photo-1512813195386-6cf811ad3542",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  ]
},
{
  nome: "Uruguai",
  img: "https://flagcdn.com/w320/uy.png",
  historia: "Primeiro campeão mundial (1930).",
  cultura: "Futebol raiz e tradição histórica.",
  imagens: [
    "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba"
  ]
},
{
  nome: "Itália",
  img: "https://flagcdn.com/w320/it.png",
  historia: "4 títulos mundiais.",
  cultura: "Defesa forte e tradição europeia.",
  imagens: [
    "https://images.unsplash.com/photo-1529260830199-42c24126f198",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  ]
},
{
  nome: "França",
  img: "https://flagcdn.com/w320/fr.png",
  historia: "Campeã em 1998 e 2018.",
  cultura: "Futebol moderno e multicultural.",
  imagens: [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  ]
},
{
  nome: "Argentina",
  img: "https://flagcdn.com/w320/ar.png",
  historia: "Tricampeã mundial.",
  cultura: "Paixão extrema pelo futebol.",
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

  selecoes.forEach(s => {
    grid.innerHTML += `
      <div class="card" onclick="abrirModal('${s.nome}')">
        <img src="${s.img}">
        <h3>${s.nome}</h3>
      </div>
    `;
  });
}

/* MODAL */
function abrirModal(nome) {
  const sel = selecoes.find(s => s.nome === nome);

  document.getElementById("titulo").innerText = sel.nome;
  document.getElementById("historia").innerText = sel.historia;
  document.getElementById("cultura").innerText = sel.cultura;

  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  sel.imagens.forEach(img => {
    galeria.innerHTML += `<img src="${img}" onclick="zoomImagem('${img}')">`;
  });

  document.getElementById("modal").classList.add("show");

  iniciarSlide();
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

// Exemplo de como deve estar a criação do card no seu JS
function renderizarCards(selecoes) {
    const grid = document.getElementById('grid');
    grid.innerHTML = selecoes.map(selecao => `
        <div class="card-selecao" onclick="abrirModal('${selecao.id}')">
            <img src="${selecao.imagem}" alt="Bandeira ${selecao.nome}">
            <h3>${selecao.nome}</h3>
        </div>
    `).join('');
}