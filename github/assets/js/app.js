/**
 * Buğra Eren Gökkaya - Portfolyo Uygulama Mantığı (App Logic)
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded successfully. Backend mindset active.");

    // Mobil Menü (Hamburger) İşlevselliği
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Sayfa içi linklere tıklandığında mobil menüyü kapatma
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});