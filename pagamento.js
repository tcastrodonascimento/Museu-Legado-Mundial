let ingressoTipo = "";
let ingressoPreco = 0;

function abrirPagamento(tipo, preco) {
    ingressoTipo = tipo;
    ingressoPreco = preco;

    document.getElementById("modal").style.display = "block";
    document.getElementById("produto").innerText = tipo;
    document.getElementById("preco").innerText = preco;
    document.getElementById("quantidade").value = 1;

    calcularTotal();
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function calcularTotal() {
    let quantidade = document.getElementById("quantidade").value;
    let total = quantidade * ingressoPreco;
    document.getElementById("total").innerText = total.toFixed(2);
}

// Atualiza o total sempre que mudar a quantidade
document.getElementById("quantidade").addEventListener("input", calcularTotal);

// Lógica de seleção de pagamento por continente
document.getElementById("continente").addEventListener("change", function () {
    let continente = this.value;
    let pagamento = document.getElementById("pagamento");
    pagamento.innerHTML = "";

    let opcoes = [];
    if (continente === "america") opcoes = ["Cartão", "PIX", "PayPal"];
    else if (continente === "europa") opcoes = ["Visa", "Mastercard", "SEPA"];
    else if (continente === "asia") opcoes = ["Alipay", "WeChat Pay", "UnionPay"];
    else if (continente === "africa") opcoes = ["M-Pesa", "Cartão", "Transferência"];

    opcoes.forEach(opcao => {
        let option = document.createElement("option");
        option.value = opcao;
        option.text = opcao;
        pagamento.appendChild(option);
    });
});

function finalizarCompra() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("pais").value;
    let quantidade = document.getElementById("quantidade").value;
    let metodo = document.getElementById("pagamento").value;
    let total = quantidade * ingressoPreco;

    // Validação
    if (!nome || !email || !pais || !quantidade || !metodo) {
        alert("Por favor, preencha todos os campos antes de finalizar!");
        return;
    }

    // Parâmetros para o EmailJS (devem ser os mesmos nomes no seu Template do site)
    let templateParams = {
        to_name: nome,
        user_email: email,
        tipo_ingresso: ingressoTipo,
        qtd: quantidade,
        pagamento_metodo: metodo,
        valor_total: "R$ " + total.toFixed(2)
    };

    // Enviar E-mail
    // Substitua 'SEU_SERVICE_ID' e 'SEU_TEMPLATE_ID' pelos seus códigos do EmailJS
    emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
        .then(function (response) {
            alert("Sucesso! Compra finalizada e comprovante enviado para: " + email);
            fecharModal();
        }, function (error) {
            alert("Erro ao enviar e-mail. Verifique suas chaves do EmailJS.");
            console.log("Erro:", error);
        });
}
