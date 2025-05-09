// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('SEO Tools X loaded');
    
    // Tool counter animation
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
