// main.js

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('message-input');
  const button = document.getElementById('btn-submit');
  const historic = document.getElementById('historic');

  button.addEventListener('click', () => {
    const message = input.value.trim();
    if (message !== '') {
      addMessage('Cliente', message);
      botReply(message);
      input.value = ''; // Limpa o campo
    }
  });

  function addMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    historic.appendChild(msgDiv);
    historic.scrollTop = historic.scrollHeight; // rolar para a última mensagem
  }

  function botReply(userMessage) {
    let resposta = '';

    // Respostas simples baseadas na mensagem do usuário
     if (userMessage.toLowerCase().includes('oi')) {
      resposta = 'Olá, seja bem-vindo(a) Pizzaria Papalégua';
     } else if (userMessage.toLowerCase().includes('cardápio')) {
      resposta = 'Aqui está o link do nosso cardápio: https://vitoraparecido20.github.io/Site-Projeto-Pr-tico-teste/cardapio.html';
    } else if (userMessage.toLowerCase().includes('horário')) {
      resposta = 'Funcionamos todos os dias das 18h às 23h. ⏰';
    } else if (userMessage.toLowerCase().includes('reclamação')) {
      resposta = 'Sentimos muito! Por favor, diga o que aconteceu para que possamos resolver. 😢';
    } else {
      resposta = 'Desculpe, ainda estou aprendendo! Você pode perguntar sobre o cardápio ou o horário. 🤖';
    }

    setTimeout(() => addMessage('Pizzaria Papalégua', resposta), 1000); // resposta após 1s
  }
});