document.addEventListener("DOMContentLoaded", () => {
	const toggleMenu = document.querySelector(".menu-responsive");
	const navLinks = document.querySelector(".nav-links");

	toggleMenu.addEventListener("click", () => {
		navLinks.classList.toggle("menu-responsivo-activo");
	});

	// Boton volver al inicio
	const volverInicio = document.querySelector(".volver-al-inicio");
	const logo = document.querySelector("#logo");

	logo.addEventListener("mouseover", () => {
		volverInicio.classList.add("volverinicio-activo");
	});
	logo.addEventListener("mouseout", () => {
		volverInicio.classList.remove("volverinicio-activo");
	});
});
