const btnMenu = document.querySelector(".btn-hmenu")
const listaMenu = document.querySelector(".lista-menu")
let tarefasNovas = document.getElementById("tfNova")
const tarefa = document.querySelector("#texto")
const btnAdicionar = document.querySelector(".adicionar")
const form = document.getElementById("form")
const localStorageKey = "to-do-list"
const nav = document.querySelector(".nav")
const messageAlert = document.getElementById("alert")


btnMenu.addEventListener("click", () =>
    listaMenu.classList.toggle("active")
)

form.addEventListener("submit", event => {
    event.preventDefault()
    const valorTexto = tarefa.value
    if(!valorTexto){
        messageAlert.textContent = "Preencha o campo de Tarefa"
        tarefa.focus()
        tarefa.style.outline = "2px solid red"
        tarefa.style.border = "2px solid red"
    }
    
    else{let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
   valores.push(tarefa.value)
   localStorage.setItem(localStorageKey,JSON.stringify(valores))
   showValores()}
   
})
tarefa.addEventListener("input",(e) =>{
    tarefa.style.outline = "3px solid green"
    tarefa.style.border = "3px solid green"
    messageAlert.textContent = ""
 })

function showValores(){
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.querySelector(".to-do-list")
    list.innerHTML = ""
    for(let i = 0; i < valores.length; i++){
        list.innerHTML += `<li id="tfNova">${valores[i]} <button id="btn-remove" onclick='removeItem("${valores[i]} ")'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg></button></li> `
    }
    tarefa.value = ""
    tarefa.focus()
    messageAlert.textContent = ""
    tarefa.style.outline = ""
    tarefa.style.border = ""
}
function removeItem(data){
    let valores = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = valores.findIndex(x => x == data)
    valores.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(valores))
    showValores()
}
showValores()
