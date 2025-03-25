document.getElementById('open').addEventListener('click', function () {
    const letter = document.querySelector('.cover');
    const heart = document.querySelector('.heart');
    
    // Abertura da carta
    letter.classList.add('open-cover');
    
    // Esperar a carta abrir para mostrar o coração
    setTimeout(() => {
        heart.style.display = 'block'; // Tornar o coração visível
    }, 800); // Depois de 0.8 segundos (duração da animação de abertura)
});

document.getElementById('close').addEventListener('click', function () {
    const letter = document.querySelector('.cover');
    const heart = document.querySelector('.heart');
    
    // Fechar a carta
    letter.classList.remove('open-cover');
    
    // Esconder o coração
    heart.style.display = 'none';
});
