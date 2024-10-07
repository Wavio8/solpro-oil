const list = () => {
    const items = $('.comparison__item_more');
    const button = $('.comparison__btn');
    let isVisible = false; // Переменная для отслеживания состояния видимости

    // Функция для отображения или скрытия элементов
    function toggleItems(duration) {
        if (isVisible) {
            items.slideUp(duration, function () {
                button.text('Показать ещё'); // Если элементы скрыты
                isVisible = false; // Обновляем состояние
            });
        } else {
            items.slideDown(duration, function () {
                button.text('Скрыть список'); // Если элементы видимы
                isVisible = true; // Обновляем состояние
            });
        }
    }

    // Обработчик клика на кнопку
    button.on('click', function () {
        toggleItems(800);
    });

    // Скрываем элементы изначально
    items.hide();
}

// Инициализация функции
$(document).ready(() => {
    list();
});

export default list;