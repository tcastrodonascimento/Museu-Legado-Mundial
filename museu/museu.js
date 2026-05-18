// ===============================
// ANIMAÇÕES DA PÁGINA
// ===============================

function adicionarAnimacoes() {

    // Pega os elementos que vão receber animação
    const elementos = document.querySelectorAll(
        ".page-header h1, .page-header p, .card, .detalhe-bloco, .foto-item, .bg-gray h2, .bg-gray p, .bg-gray a"
    );

    // Adiciona a classe de animação em todos
    elementos.forEach((elemento) => {
        elemento.classList.add("animar");
    });

    // Observa quando o elemento aparece na tela
    const observador = new IntersectionObserver((itens) => {

        itens.forEach((item) => {

            if (item.isIntersecting) {
                item.target.classList.add("apareceu");
            }

        });

    }, {
        threshold: 0.15
    });

    // Coloca todos os elementos no observador
    elementos.forEach((elemento) => {
        observador.observe(elemento);
    });
}


// ===============================
// ESTILO DO TÍTULO
// ===============================

function estilizarTitulos() {

    const tituloPrincipal = document.querySelector(".titulo-museu");

    if (tituloPrincipal) {
        tituloPrincipal.classList.add("titulo-dourado");
    }

}


// ===============================
// LIGHTBOX DAS IMAGENS
// ===============================

function configurarLightbox() {

    const imagens = document.querySelectorAll(".foto-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    imagens.forEach((imagem) => {

        imagem.addEventListener("click", () => {

            lightboxImg.src = imagem.src;
            lightbox.classList.add("open");

        });

    });

}


// ===============================
// INICIAR TUDO
// ===============================

window.addEventListener("load", () => {

    adicionarAnimacoes();
    estilizarTitulos();
    configurarLightbox();

});