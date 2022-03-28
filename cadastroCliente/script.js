let btn = document.querySelector('#versenha');

btn.addEventListener('click', () =>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

let btnConfirm = document.querySelector('#verconfsenha');

btnConfirm.addEventListener('click', () =>{
  let inputConfSenha = document.querySelector('#confsenha')
  
  if(inputConfSenha.getAttribute('type') == 'password'){
    inputConfSenha.setAttribute('type', 'text')
  } else {
    inputConfSenha.setAttribute('type', 'password')
  }
})