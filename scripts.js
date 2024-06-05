/* scripts.js */
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .cta-button');
    elements.forEach(element => {
        element.classList.add('visible');
    });
});
