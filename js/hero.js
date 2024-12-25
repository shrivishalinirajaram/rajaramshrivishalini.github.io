// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const lines = heroContent.querySelectorAll('h1, h2, p');

    lines.forEach((line, index) => {
        line.style.opacity = 0;
        line.style.transform = 'translateY(20px)';
        line.style.transition = `opacity 0.6s ease-in-out ${index * 0.4}s, transform 0.6s ease-in-out ${index * 0.4}s`;
    });

    setTimeout(() => {
        lines.forEach((line) => {
            line.style.opacity = 1;
            line.style.transform = 'translateY(0)';
        });
    }, 100);

    // Mousemove parallax effect
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const offsetX = (clientX / innerWidth - 0.5) * 20;
        const offsetY = (clientY / innerHeight - 0.5) * 20;

        heroContent.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        heroContent.style.transition = 'transform 0.1s ease-out';
    });

    hero.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'translate(0, 0)';
        heroContent.style.transition = 'transform 0.3s ease-in-out';
    });
});
