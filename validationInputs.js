 const userLogged = document.getElementById("userLogged")

 function entrar(){
    let listaUser = []
    let userValid = {
        name:"",
        email:"",
        password:""
    }
    listaUser = JSON.parse(localStorage.getItem("usersLogin"))
    listaUser.forEach((item) => {
        if(email.value === item.email && senha.value === item.senha){
            userValid = {
                nome:item.name,
                email:item.email,
                password:item.senha
            }
        }
    })
    let token = Math.random().toString(16).substring(2)
    localStorage.setItem("token",token)

    localStorage.setItem("userLogado",JSON.stringify(userValid))
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'))
if(localStorage.getItem("token") == null){
    userLogged.innerHTML = `<p>Usuario não logado</p>`
}
else{
    userLogged.innerHTML = `<p>Bem vindo ${userLogado.nome}</p>
    <button onclick="sair()" class="btn-logout" id="btnLogout"><div><i class="fi fi-rr-exit"></i></div></button>`
}



function sair(){
    localStorage.removeItem("token")
    window.location.href = "login.html"
}