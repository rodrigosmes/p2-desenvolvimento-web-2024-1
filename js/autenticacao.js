


function login(){
    
    var senha = document.getElementById('senha').value;
    
    if (senha == 'senha'){
        alert('Sucesso')
        location.href = "home.html";
        
    }
    else{
        alert('Senha incorreta')
    }
    
}


const loginButton = document.getElementById('login')
console.log(loginButton)
loginButton.addEventListener("click", () => login())