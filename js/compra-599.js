document.getElementById("form-compra").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para não recarregar a página

    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco-completo").value;
    const cep = document.getElementById("cep").value;
    const cidade = document.getElementById("cidade").value;
    const numeroCartao = document.getElementById("numero-cartao").value;
    const nomeCartao = document.getElementById("nome-cartao").value;
    const validade = document.getElementById("validade").value;
    const cvv = document.getElementById("cvv").value;

    // Verificando se todos os campos estão preenchidos
    if (!nome || !endereco || !cep || !cidade || !numeroCartao || !nomeCartao || !validade || !cvv) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Simulando a finalização da compra
    alert("Compra finalizada com sucesso!\n\n" +
        "Nome: " + nome + "\n" +
        "Endereço: " + endereco + "\n" +
        "Valor: R$ 599,90");
});
