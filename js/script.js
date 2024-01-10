// Función para manejar el desplazamiento suave al hacer clic en enlaces del menú
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.scroll-link');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtener el destino del enlace (usando el atributo href)
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Desplazamiento suave utilizando el método scrollIntoView
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});