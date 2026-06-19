// Función para el efecto de aparición al hacer Scroll
const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Scroll suave con offset para compensar el Navbar fijo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Cambiar estilo del Navbar al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 8%';
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.padding = '15px 8%';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});