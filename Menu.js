const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
})