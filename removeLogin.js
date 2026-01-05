let removeLogin = JSON.parse(localStorage.getItem('userLogado'))
if(localStorage.getItem("token") == null){
    userLogged.innerHTML = `<p>Usuario não logado</p>`
}
else{
    userLogged.innerHTML = `<p>Bem vindo ${userLogado.nome}</p>
    <button onclick="sair()" class="btn-logout" id="btnLogout"><div><i class="fi fi-rr-exit"></i></div></button>`
    loginOff.style.display = "none"
    
}