// --- LÓGICA DE NAVEGACIÓN (SPA) ---
function showSection(sectionId) {
    const sections = document.querySelectorAll('.view');
    sections.forEach(sec => {
        sec.classList.add('hidden');
        sec.classList.remove('active');
    });
    const target = document.getElementById(sectionId);
    if(target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- LÓGICA DEL CARRITO (LocalStorage) ---

// 1. Cargar carrito al iniciar
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
updateCartDisplay();

// 2. Función para añadir
function addToCart() {
    // Aumentar contador
    cartCount++;
    
    // Guardar en memoria del navegador (Persistencia)
    localStorage.setItem('cartCount', cartCount);
    
    // Actualizar vista
    updateCartDisplay();
    
    // Feedback visual (Cambiar texto del botón temporalmente)
    const btn = document.getElementById('add-btn');
    const originalText = btn.innerText;
    
    btn.innerText = "¡Añadido! 👜";
    btn.style.backgroundColor = "#fff"; // Flash blanco
    btn.style.color = "#000";
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = ""; // Volver al color original
        btn.style.color = "";
    }, 1500);
}

// 3. Función auxiliar para actualizar el numerito
function updateCartDisplay() {
    const counterElement = document.getElementById('cart-count');
    counterElement.innerText = cartCount;
    
    // Pequeña animación si el número cambia
    counterElement.classList.add('pulse-anim');
    setTimeout(() => counterElement.classList.remove('pulse-anim'), 300);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});