const hamburguesa = document.querySelector("#hamburger");
const enlances = document.querySelector("#nav-links");

hamburguesa.addEventListener("click", ()=>{
    enlances.classList.toggle("show")
    
})