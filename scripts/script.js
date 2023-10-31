/* Declaração das constantes que armazena uma referência ao elemento HTML é são usados para acessar e manipular elementos na página. */
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const bntPopup = document.querySelector('.bntLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {wrapper.classList.add('active');});
/* Adiciona um ouvinte de evento de clique ao elemento registerLink. Quando o link de "Registrar" é clicado, a classe active é adicionada ao elemento wrapper ativando a visualização do formulário de registro ao clicar no link de "Registrar". */

loginLink.addEventListener('click', ()=> {wrapper.classList.remove('active');});
/* Adiciona um ouvinte de evento de clique ao elemento loginLink. Quando o link de "Login" é clicado, a classe active é removida do elemento wrapper ativando a visualização do formulário de login ao clicar no link de "Login". */

bntPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup');});
/* Adiciona um ouvinte de evento de clique ao elemento bntPopup. Quando o botão de pop-up de login é clicado, a classe active-popup é adicionada ao elemento wrapper ativando o pop-up de login ao clicar no botão. */

iconClose.addEventListener('click', () => { wrapper.classList.remove('active-popup','active');});
/* Adiciona um ouvinte de evento de clique ao elemento iconClose. Quando o ícone de fechar é clicado, as classes active-popup e active são removidas do elemento wrapper fechando o pop-up de login ao clicar no ícone de fechar. */