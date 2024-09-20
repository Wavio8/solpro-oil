
const counterFn = () => {
    
let hasStarted = false; // Флаг, чтобы избежать повторного запуска счетчика
const targetNumber = 265;
const duration = 2000; // Время анимации в миллисекундах

function animateCounter(element, start, end, duration) {
    let startTime = null;

    function updateCounter(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const count = Math.floor(progress * (end - start) + start);
        element.textContent = count;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

window.addEventListener('scroll', () => {
    const section = document.getElementById('counter-section');
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !hasStarted) {
        hasStarted = true;
        animateCounter(document.getElementById('counter'), 0, targetNumber, duration);
    }
});

};
export default counterFn;