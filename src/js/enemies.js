
const elFn = () => {

const box = document.querySelector('.box');
const box2 = document.querySelector('.box-second');

box.addEventListener('click', function(event) {
    // Сначала делаем box невидимым
    box.style.opacity = '0'; // Плавно исчезает

    // Ждем, пока завершится анимация исчезновения
    setTimeout(() => {
        box2.classList.add('active'); // Добавляем класс для box2
    }, 500); // Время должно совпадать с transition в CSS
});

// Обработчик кликов на документ
document.addEventListener('click', function(event) {
    // Проверяем, был ли клик вне box и box2
    if (!box.contains(event.target) && !box2.contains(event.target)) {
        // Делаем box видимым и box2 невидимым
        box.style.opacity = '1'; // Возвращаем видимость box
        box2.classList.remove('active'); // Убираем класс у box2
    }
});        
};
export default elFn;


// Адаптация кнопки меню
const btn = document.querySelector('.btn-adapt');
const items = document.querySelectorAll('.btn-adapt-line');


// Функция для отключения скролла
function preventScroll(e) {
    e.preventDefault();
}

// Обработчик события для кнопки
btn.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle('open');
    });

    // Проверяем, есть ли у любого элемента класс 'open'
    if (items[0].classList.contains('open')) {
        // Если есть, отключаем скролл
        window.addEventListener('wheel', preventScroll, { passive: false });
        window.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
        // Если нет, включаем скролл
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
    }
});

const menu = document.querySelector('.menu__wrapper');
const blur = document.querySelector('.menu-blur');
const logo = document.querySelector('.menu__logo')
btn.addEventListener('click', function () {
    menu.classList.toggle('open');
    blur.classList.toggle('open');
    logo.classList.toggle('open');
    document.html.style.overflow = 'hidden';
});