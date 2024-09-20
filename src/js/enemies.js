
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


        
