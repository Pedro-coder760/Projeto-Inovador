// scripts.js

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Mensagem enviada com sucesso!");
    document.getElementById("contact-form").reset();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

function toggleFAQ(element) {
    const answer = element.querySelector("p");
    const isVisible = answer.style.display === "block";
  
    // Esconde todas as respostas
    document.querySelectorAll(".faq-item p").forEach((p) => (p.style.display = "none"));
  
    // Mostra ou esconde a resposta clicada
    answer.style.display = isVisible ? "none" : "block";
  }

// Script para funcionalidades futuras
document.querySelectorAll('.card button').forEach(button => {
  button.addEventListener('click', () => {
      alert("Mais informações em breve!");
  });
});

document.getElementById("donate-button").addEventListener("click", () => {
  alert("Obrigado por sua generosidade! Sua doação faz a diferença.");
});

// Adicionando interatividade ao botão "Comece Agora!"
document.querySelector('.cta-button').addEventListener('click', () => {
  alert("Obrigado por apoiar nossa causa! Vamos fazer a diferença juntos!");
});
