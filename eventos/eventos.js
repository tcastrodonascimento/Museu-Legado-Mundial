function adicionarAnimacoes() {
    const elementos = document.querySelectorAll(
        ".page-header h1, .page-header p, .card, .detalhe-bloco, .foto-item, .bg-gray h2, .bg-gray p, .bg-gray a"
    );

    elementos.forEach((elemento) => {
        elemento.classList.add("animar");
    });

    const observador = new IntersectionObserver((itens) => {
        itens.forEach((item) => {
            if (item.isIntersecting) {
                item.target.classList.add("apareceu");
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach((elemento) => {
        observador.observe(elemento);
    });
}

function configurarLightbox() {
    const imagens = document.querySelectorAll(".foto-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg) return;

    imagens.forEach((imagem) => {
        imagem.addEventListener("click", () => {
            lightboxImg.src = imagem.src;
            lightbox.classList.add("open");
            document.body.style.overflow = "hidden";
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("open");
        document.body.style.overflow = "auto";
    });
}

window.addEventListener("DOMContentLoaded", () => {
    adicionarAnimacoes();
    configurarLightbox();
});