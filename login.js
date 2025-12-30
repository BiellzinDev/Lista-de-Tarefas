const formLogin = document.getElementById("form-login")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const btnLogin = document.getElementById("btn-login")
const btnRegister = document.getElementById("btn-cadastrar")
const boxResgister = document.querySelector(".register")
const formRegister = document.getElementById("form-cadastro")
const nome = document.getElementById("nome")
const emailRegister = document.getElementById("email-cadastro")
const senhaRegister = document.getElementById("senha-cadastro")
const checkBox = document.getElementById("check")
const btnSendRegister = document.getElementById("btn-sendRegister")
const btnCancelRegister = document.getElementById("btn-cancelRegister")
const localStorageRegister = "usersLogin"
const labelCheckName = document.querySelector("#labelCheckName")
let checkName = false
const labelCheckEmail = document.querySelector("#labelCheckEmail")
let checkEmail = false
const labelCheckSenha = document.querySelector("#labelCheckSenha")
let checkSenha = false
let msgError = document.getElementById("msgError")
let msgSuccess = document.getElementById("msgSuccess")
let msgLogged = document.getElementById("msgLogged")
let msgErrorLogin = document.getElementById("msgErrorLogin")



formLogin.addEventListener("submit", event =>{
    event.preventDefault()
    validationUSer()
    entrar()
    
})

//Validando nome
nome.addEventListener("keyup", () =>{
    if(nome.value.length <=2){
        labelCheckName.setAttribute('style','color:red')
        labelCheckName.innerHTML = `Nome *Insira pelo menos 3 caracteres`
        nome.setAttribute('style', 'border-color:red')
    }
    else{
        labelCheckName.setAttribute('style','color:green')
        labelCheckName.innerHTML = `Nome:`
        nome.setAttribute('style', 'border-color:green')
        checkName = true
    }
})
//Validando email
emailRegister.addEventListener("keyup", () =>{
    let er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    let testEmail = emailRegister.value;
    if( testEmail == '' || !er.test(testEmail) ) { 
        labelCheckEmail.setAttribute('style','color:red')
        labelCheckEmail.innerHTML = `Email Invalido*`
        emailRegister.setAttribute('style', 'border-color:red')
    }
        else{
            labelCheckEmail.setAttribute('style','color:green')
            labelCheckEmail.innerHTML = `Email:`
            emailRegister.setAttribute('style', 'border-color:green')
            checkEmail = true
        }
})
//Validando senha
senhaRegister.addEventListener("keyup", () =>{
    if(senhaRegister.value.length <=3){
        labelCheckSenha.setAttribute('style','color:red')
        labelCheckSenha.innerHTML = `Senha Invalida *Insira pelo menos 3 caracteres`
        senhaRegister.setAttribute('style', 'border-color:red')
    }
    else{
        labelCheckSenha.setAttribute('style','color:green')
        labelCheckSenha.innerHTML = `Senha:`
        senhaRegister.setAttribute('style', 'border-color:green')
        checkSenha = true
    }
})
//Evento do botão cadastrar ao ser presionado
formRegister.addEventListener("submit", event =>{
    event.preventDefault()
    //Declarando variaveis para armazenar os dados no local storage
    const nomes = nome.value
    const emailSave = emailRegister.value
    const senhaSave = senhaRegister.value
    //Validando se o campo nome, email e senha foram preenchidos
    if(checkName && checkEmail && checkSenha){
        msgSuccess.setAttribute("style","display:block")
        msgSuccess.innerHTML =`<strong>Cadastro realizado com sucesso</strong>`
        msgError.setAttribute("style","display:none")
        msgError.innerHTML =`<strong>Preencha todos os campos corretamente</strong>`
        //Foi criado uma variavel e setado no localstorage para adicionar os valores dos inputs
        let inputs = JSON.parse(localStorage.getItem(localStorageRegister) || "[]")
        inputs.push({
            name: nomes,
            email: emailSave,
            senha: senhaSave
        })
        localStorage.setItem(localStorageRegister,JSON.stringify(inputs))

        //delay para voltar a tela de login
        setTimeout(() =>{
            window.location.href="login.html"
        },3000)
    }else{
        msgError.setAttribute("style","display:block")
        msgError.innerHTML =`<strong>Preencha todos os campos corretamente</strong>`
        msgSuccess.setAttribute("style","display:none")
        msgSuccess.innerHTML =`<strong>Cadastro realizado com sucesso</strong>`
    }
})
function validationUSer(){
    let inputs = JSON.parse(localStorage.getItem(localStorageRegister) || "[]")

     for(let i = 0; i < inputs.length; i++){
        //Validação do email e senha
        if(email.value === inputs[i].email){
            if(senha.value === inputs[i].senha){
                const usuario = inputs.find(usuario => email.value === inputs[i].email)
                msgLogged.setAttribute("style", "display:block")
                msgLogged.innerHTML = "<strong>Login Realizado com sucesso!</strong>"
                msgErrorLogin.setAttribute("style","display:none")
                msgErrorLogin.innerHTML = "<strong>Usuário não cadastrado!</strong>"
                setTimeout(() => {
                     window.location.replace("index.html")
                }, 2000); 
            }else{
                msgErrorLogin.setAttribute("style","display:block")
                msgErrorLogin.innerHTML = "<strong>Usuário ou senha incorretos</strong>"
                email.focus()
            }
        }
        else{
                msgErrorLogin.setAttribute("style","display:block")
                msgErrorLogin.innerHTML = "<strong>Usuário não cadastrado!</strong>"
                msgLogged.setAttribute("style", "display:none")
                msgLogged.innerHTML = "<strong>Login Realizado com sucesso!</strong>"
            }
     }
}



 
//Evento para abrir tela de  registro e fechar div que pede para preencher todos os dados
btnRegister.addEventListener("click", () =>{
    boxResgister.classList.toggle("active-register")
    msgError.setAttribute("style","display:none")
    msgError.innerHTML =`<strong>Preencha todos os campos corretamente</strong>`
}
)
//Evento para remover classe da tela de registro
btnCancelRegister.addEventListener("click", () => {
    boxResgister.classList.remove("active-register")
    
}
)
btnSendRegister.addEventListener("submit", event=>{
    event.preventDefault()
    boxResgister.classList.remove("active-register")
    
}
    
)
//Ação para habilitar botão de registro apenas com checkBox marcado
checkBox.addEventListener("change", function(){
        btnSendRegister.disabled = !this.checked
    })

