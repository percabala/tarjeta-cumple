// ==========================================
// 🎵 1. CONFIGURACIÓN DE AUDIO
// ==========================================
const cancion1 = new Audio('audio/cancion1.mp3');
const cancion2 = new Audio('audio/cancion2.mp3');

cancion2.loop = true;
cancion1.volume = 0.8;
cancion2.volume = 0.8;

// ==========================================
// 🎬 2. ANIMACIÓN DE LA BROMA (PANTALLA 2)
// ==========================================
lottie.loadAnimation({
    container: document.getElementById('lottie-pastel1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://lottie.host/17bc4495-9769-4560-8456-9e9f6534571d/XjF0w9L6sC.json' 
});

// ==========================================
// 🔄 3. LÓGICA DE EVENTOS (CLICS)
// ==========================================
const pantalla1 = document.getElementById('pantalla1');
const pantalla2 = document.getElementById('pantalla2');
const pantalla3 = document.getElementById('pantalla3');

const sobreCerrado = document.querySelector('.sobre-cerrado');
const btnBroma = document.getElementById('btn-broma');

// Clic en el sobre (Pasa a la Broma)
sobreCerrado.addEventListener('click', () => {
    pantalla1.classList.remove('activa');
    pantalla1.classList.add('oculta');
    pantalla2.classList.remove('oculta');
    pantalla2.classList.add('activa');
    
    cancion1.play().catch(error => {
        console.error("El navegador bloqueó el audio: ", error);
    });
});

// Clic en el botón de la broma (Pasa al Mensaje Real)
btnBroma.addEventListener('click', () => {
    pantalla2.classList.remove('activa');
    pantalla2.classList.add('oculta');
    pantalla3.classList.remove('oculta');
    pantalla3.classList.add('activa');
    
    cancion1.pause();
    cancion1.currentTime = 0; 
    
    cancion2.play().catch(error => {
        console.error("Error canción 2: ", error);
    });
});