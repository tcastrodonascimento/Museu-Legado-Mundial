// Função para configurar o Lightbox (Abrir foto ao clicar)
const configurarLightbox = () => {
    const imagens = document.querySelectorAll('.foto-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Verifica se os elementos existem para não dar erro no console
    if (!lightbox || !lightboxImg) return;

    imagens.forEach(img => {
        img.addEventListener('click', () => {
            // 1. Pega o caminho da imagem clicada e coloca no modal
            lightboxImg.src = img.src;
            // 2. Mostra o modal (o CSS precisa da classe .open)
            lightbox.classList.add('open');
            // 3. Trava o scroll da página ao fundo
            document.body.style.overflow = 'hidden';
        });
    });

    // Fecha o lightbox ao clicar em qualquer lugar do fundo preto
    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('open');
        // Devolve o scroll da página
        document.body.style.overflow = 'auto';
    });
};

// Função para animação de subida (Scroll)
const observarScroll = () => {
    const blocos = document.querySelectorAll('.detalhe-bloco');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    blocos.forEach(bloco => observer.observe(bloco));
};

// Inicializa tudo quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
    observarScroll();
    configurarLightbox();
});