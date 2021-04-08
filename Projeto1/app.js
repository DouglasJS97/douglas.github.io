function validaFormulario(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var nameUser = document.getElementById('nameUser');

    if ((senha < 11111111 ) ||(email == '')){
      alert('Login ou senha inválida !')
      nameUser.innerHTML = 'Login ou senha inválida !'
      
    }
    
}

function retornar(){
  return
}