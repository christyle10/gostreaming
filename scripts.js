
document.addEventListener('touchstart', function (e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault(); // Bloquear el menú contextual en imágenes
    }
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Bloquear el menú contextual del clic derecho
});

document.addEventListener('DOMContentLoaded', function () {
    const chatButton = document.getElementById('chatButton');
    let isScrolling;
    const hideDelay = 3000; // Tiempo en milisegundos para ocultar el botón (5 segundos)

    window.addEventListener('scroll', function () {
        // Mostrar el botón cuando se hace scroll hacia abajo
        chatButton.classList.add('show-chat-button');
        chatButton.classList.remove('hide-chat-button');

        // Ocultar el botón después de 5 segundos de inactividad del scroll
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            chatButton.classList.add('hide-chat-button');
        }, hideDelay);
    });

    // Manejar el clic en el botón
    chatButton.addEventListener('click', function () {
        window.location.href = 'https://wa.me/573022729995'; // Enlace a WhatsApp
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const initialHeaderHeight = header.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY > initialHeaderHeight) {
            // Cuando se hace scroll hacia abajo más allá del encabezado
            header.classList.add('fixed-header');
        } else {
            // Cuando se vuelve al inicio de la página
            header.classList.remove('fixed-header');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const trendingSlider = document.querySelector('.trending-slider');
    const motivosSlider = document.querySelector('.motivos-slider');
    const leftArrowTrending = document.querySelector('.left-arrow');
    const rightArrowTrending = document.querySelector('.right-arrow');
    const leftArrowMotivos = document.querySelector('.left-arrow-motivos');
    const rightArrowMotivos = document.querySelector('.right-arrow-motivos');

    function updateArrows(slider, leftArrow, rightArrow) {
        const scrollLeft = slider.scrollLeft;
        const scrollWidth = slider.scrollWidth;
        const clientWidth = slider.clientWidth;

        // Mostrar/ocultar flecha izquierda
        if (scrollLeft > 0) {
            leftArrow.style.display = 'flex';
        } else {
            leftArrow.style.display = 'none';
        }

        // Mostrar/ocultar flecha derecha
        if (scrollWidth - scrollLeft > clientWidth) {
            rightArrow.style.display = 'flex';
        } else {
            rightArrow.style.display = 'none';
        }
    }

    // Llamar a la función para establecer el estado inicial de las flechas
    updateArrows(trendingSlider, leftArrowTrending, rightArrowTrending);
    updateArrows(motivosSlider, leftArrowMotivos, rightArrowMotivos);

    // Agregar eventos de desplazamiento y clic en las flechas
    trendingSlider.addEventListener('scroll', () => updateArrows(trendingSlider, leftArrowTrending, rightArrowTrending));
    motivosSlider.addEventListener('scroll', () => updateArrows(motivosSlider, leftArrowMotivos, rightArrowMotivos));

    leftArrowTrending.addEventListener('click', () => {
        trendingSlider.scrollBy({ left: -trendingSlider.clientWidth, behavior: 'smooth' });
    });
    rightArrowTrending.addEventListener('click', () => {
        trendingSlider.scrollBy({ left: trendingSlider.clientWidth, behavior: 'smooth' });
    });

    leftArrowMotivos.addEventListener('click', () => {
        motivosSlider.scrollBy({ left: -motivosSlider.clientWidth, behavior: 'smooth' });
    });
    rightArrowMotivos.addEventListener('click', () => {
        motivosSlider.scrollBy({ left: motivosSlider.clientWidth, behavior: 'smooth' });
    });
});