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

// Adicionar eventos aos botões "Saiba mais"
const learnMoreButtons = document.querySelectorAll('.card button');
learnMoreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    alert(`Mais informações sobre o Card ${index + 1}.`);
    window.location.href = '#'; // Substitua '#' com a URL para detalhes do card específico.
  });
});

// Seleciona os botões e elementos do documento
const donateButton = document.getElementById('donate-button');
const contactForm = document.getElementById('contact-form');
const sendButton = document.getElementById('send-btn');

// Função para simular uma doação
function handleDonation() {
  alert('Obrigado por considerar uma doação! Em breve, você será redirecionado para a página de doações.');
  window.location.href = '#'; // Substitua '#' pela URL da página de doação.
}
