let currentSlide = 1;
const totalSlides = 3;

function nextSlide() {
    document.getElementById(`slide-${currentSlide}`).classList.remove('active');
    document.getElementById(`dot-${currentSlide}`).classList.remove('active');
    
    currentSlide++;

    if (currentSlide > totalSlides) {
        window.location.href = 'login.html';
        return;
    }

    document.getElementById(`slide-${currentSlide}`).classList.add('active');
    document.getElementById(`dot-${currentSlide}`).classList.add('active');

    if (currentSlide === totalSlides) {
        document.getElementById('nextBtn').innerText = 'Start Now';
    }
}