const swiperFn = () => {

var swiper = new Swiper(".mySwiper", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
};
export default swiperFn;



document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с классом .wheel
    const wheels = document.querySelectorAll('.wheel');
    
    // Устанавливаем начальный класс open для первого элемента
    document.querySelector('.moisture__view[data-card="1"]').classList.add('open');

    // Добавляем обработчик события клика для каждого элемента
    wheels.forEach(wheel => {
        wheel.addEventListener('click', function() {
            // Убираем класс open у всех элементов с классом moisture__view
            document.querySelectorAll('.moisture__view').forEach(card => {
                card.classList.remove('open');
            });

            // Получаем номер колеса
            const wheelNumber = this.getAttribute('data-wheel');

            // Добавляем класс open к соответствующему элементу moisture__view
            document.querySelector(`.moisture__view[data-card="${wheelNumber}"]`).classList.add('open');
        });
    });
});
