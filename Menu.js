const menu = document.getElementById("menu");
const lista = document.getElementById("lista");

menu.addEventListener("click", function(){
    lista.classList.toggle("active");
})