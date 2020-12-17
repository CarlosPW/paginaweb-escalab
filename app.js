const toggleMenu = document.querySelector('.menu-responsive');
const navLinks = document.querySelector('.nav-links');

document.addEventListener('DOMContentLoaded',()=>{
    
    
    toggleMenu.addEventListener("click", ()=> {
        navLinks.classList.toggle("menu-responsivo-activo");
    })
     

})
