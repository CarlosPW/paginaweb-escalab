document.addEventListener('DOMContentLoaded',()=>{

    const toggleMenu = document.querySelector('.menu-responsive');
    const navLinks = document.querySelector('.nav-links');
    
    toggleMenu.addEventListener("click", ()=> {
        navLinks.classList.toggle("menu-responsivo-activo");
    })
     

})
