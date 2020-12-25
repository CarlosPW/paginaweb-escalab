document.addEventListener('DOMContentLoaded',()=>{

    const body = document.querySelector("body");
    body.style.opacity = 1;
    body.style.transition = "1s";
    
    
    const toggleMenu = document.querySelector('.menu-responsive');
    const navLinks = document.querySelector('.nav-links');
    
    toggleMenu.addEventListener("click", ()=> {
        navLinks.classList.toggle("menu-responsivo-activo");
    })
     

})
