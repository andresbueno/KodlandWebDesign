const menuIcon = document.querySelector(".nav__icon");
const menuUl = document.querySelector(".nav__ul");

menuIcon.addEventListener("click", ()=>{
    menuUl.classList.toggle("activo");
});