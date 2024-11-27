// Abrir e fechar FAQ
function toggleFAQ(faqItem) {
  const isOpen = faqItem.open;
  const allFAQs = document.querySelectorAll('.faq-item');
  allFAQs.forEach(item => {
    if (item !== faqItem) {
      item.open = false;
    }
  });
  faqItem.open = !isOpen;
}

// Capturar envio do formulário
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simula envio de dados
  alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
  
  // Limpa o formulário
  this.reset();
});

// Botão "Doe Agora!"
document.getElementById('donate-button').addEventListener('click', function () {
  alert('Obrigado por se interessar em doar! Entre na seção de doações para continuar.');
});
