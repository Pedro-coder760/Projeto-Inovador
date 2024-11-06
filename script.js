// Exibe o modal com o título da notícia
function abrirModal(titulo) {
    document.getElementById("modal-title").innerText = titulo;
    document.getElementById("modal").style.display = "flex";
}

// Fecha o modal
function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

// Simula uma doação ao clicar no botão de doar
function doar() {
    alert("Obrigado por sua generosidade!");
}

// Expande ou recolhe a resposta das perguntas frequentes
function toggleResposta(element) {
    const resposta = element.querySelector(".resposta");
    resposta.style.display = resposta.style.display === "block" ? "none" : "block";
}

function enviarMensagem(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    
    document.getElementById("formContato").reset();
}
