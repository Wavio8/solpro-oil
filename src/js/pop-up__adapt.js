const popup__adapt = () => {
    // Создаем массив с номерами колеса
    for (let i = 1; i <= 7; i++) {
        const wheelSelector = `[data-wheel="${i}"]`;
        const popUpSelector = `[data-pop-up="${i}"]`;
        const closeSelector = '.pop-up__close';

        // Находим элемент с атрибутом data-wheel
        const wheelElement = document.querySelector(wheelSelector);

        // Проверяем, если элемент существует
        if (wheelElement) {
            // Добавляем обработчик события клика
            wheelElement.addEventListener('click', function () {
                // Проверяем ширину окна
                if (window.innerWidth < 768) {
                    // Находим элемент с атрибутом data-pop-up
                    const popUpElement = document.querySelector(popUpSelector);
                    const blurElement = document.querySelector('.wheel__blur');

                    // Проверяем, если элемент pop-up существует
                    if (popUpElement) {
                        // Добавляем класс open
                        popUpElement.classList.add('open');
                    }

                    // Проверяем, если элемент blur существует
                    if (blurElement) {
                        // Добавляем класс open
                        blurElement.classList.add('open');
                    }
                }
            });
        }

        // Находим элементы закрытия поп-апа
        const closeElements = document.querySelectorAll(closeSelector);
        closeElements.forEach(closeElement => {
            // Добавляем обработчик события клика для каждого элемента
            closeElement.addEventListener('click', function () {
                const popUpElement = document.querySelector(popUpSelector); // Получаем элемент поп-апа
                if (popUpElement) {
                    // Убираем класс open
                    popUpElement.classList.remove('open');
                }

                const blurElement = document.querySelector('.wheel__blur'); // Получаем элемент с классом wheel__blur
                if (blurElement) {
                    // Убираем класс open
                    blurElement.classList.remove('open');
                }
            });
        });
    }
}

export default popup__adapt;