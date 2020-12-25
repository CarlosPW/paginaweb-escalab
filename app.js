document.addEventListener('DOMContentLoaded',()=>{

    
    const body = document.querySelector("body");
    body.classList.add("body-activo");
    
    
    const toggleMenu = document.querySelector('.menu-responsive');
    const navLinks = document.querySelector('.nav-links');
    
    toggleMenu.addEventListener("click", ()=> {
        navLinks.classList.toggle("menu-responsivo-activo");
    })
     

})
