// Función para mostrar/ocultar información
function toggleInfo(id) {
    let section = document.getElementById(id);
    let button = document.querySelector(`button[onclick="toggleInfo('${id}')"]`);

    if (section.classList.contains("visible")) {
        // Ocultar la sección
        section.classList.remove("visible");
        section.style.display = "none";
        button.textContent = "Más info";
    } else {
        // Mostrar la sección
        section.classList.add("visible");
        section.style.display = "block";
        button.textContent = "Mostrar menos";
    }
}

// Función para cerrar el menú colapsado
function closeMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Cierra el menú colapsado
    navbarCollapse.classList.remove('show');
    navbarToggler.setAttribute('aria-expanded', 'false');

    // Restaura el padding-top del body
    document.body.style.paddingTop = '80px';
}

// Ajustar el padding-top del body cuando el menú se expande o contrae
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const body = document.body;

navbarToggler.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
        // Si el menú está abierto, ajusta el padding-top del body
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const collapseHeight = navbarCollapse.offsetHeight;
        body.style.paddingTop = `${navbarHeight + collapseHeight}px`;
    } else {
        // Si el menú está cerrado, restaura el padding-top inicial
        body.style.paddingTop = '80px';
    }
});

// Ajustar el padding-top cuando la ventana se redimensiona
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        // En pantallas grandes, restaura el padding-top inicial
        body.style.paddingTop = '80px';
    }
});