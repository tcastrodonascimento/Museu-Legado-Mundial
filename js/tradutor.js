// 1. Função de Inicialização (O Google chama isso)
window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'en,es,pt', // Força carregar essas línguas
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
};

// 2. CSS para limpar a barra e esconder o widget original
const style = document.createElement('style');
style.innerHTML = `
    .goog-te-banner-frame.skiptranslate, .goog-te-gadget-icon { display: none !important; }
    body { top: 0px !important; }
    /* Esconde o seletor feio do Google mas deixa ele existir */
    #google_translate_element { height: 0; overflow: hidden; position: absolute; }
    .goog-te-balloon-frame, #goog-gt-tt { display: none !important; }
`;
document.head.appendChild(style);

// 3. Lógica do Botão
document.addEventListener('click', function (e) {
    // Verifica se clicou no seu botão de traduzir
    if (e.target && (e.target.id === 'btn-tradutor' || e.target.closest('#btn-tradutor'))) {

        const combo = document.querySelector('.goog-te-combo');

        if (combo) {
            // Se estiver em PT, muda para EN. Se estiver em EN, volta para PT.
            const lang = (combo.value === 'en') ? 'pt' : 'en';
            combo.value = lang;

            // Dispara a mudança para o Google traduzir
            combo.dispatchEvent(new Event('change'));

            // Muda o texto do seu botão
            const btn = document.querySelector('#btn-tradutor');
            btn.innerHTML = (lang === 'en') ? '🌐 Ver em PT' : '🌐 Traduzir';
        } else {
            console.error("O Google Translate ainda não carregou o seletor.");
            alert("O sistema do Google está demorando a responder. Verifique sua conexão e recarregue a página.");
        }
    }
});

// 4. Carrega o Script do Google com tratamento de erro
(function () {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://google.com';
    script.onerror = function () {
        alert("Erro ao carregar o tradutor do Google. Verifique se há extensões bloqueando scripts.");
    };
    document.body.appendChild(script);
})();
