const base__pop = () => {
    document.querySelectorAll('[data-base]').forEach(function (element) {
        element.addEventListener('click', function () {
            const baseId = this.getAttribute('data-base');
            const boxElement = document.querySelector(`[data-box="${baseId}"]`); // Исправлено на корректный синтаксис

            // Удаляем класс open у всех box перед добавлением к нужному
            document.querySelectorAll('[data-box]').forEach(function (box) {
                box.classList.remove('open');
            });

            // Добавляем класс open к нужному box
            if (boxElement) {
                boxElement.classList.add('open');
            }

            // Добавляем класс open к элементу с классом .wheel__blur
            const blurElement = document.querySelector('.base-blur');
            if (blurElement) {
                blurElement.classList.add('open');
            }
        });
    });

    const closeButtons = document.querySelectorAll('.close__base');

    // Проходим по каждому элементу и добавляем обработчик события
    closeButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.stopPropagation();

            // Получаем все элементы с классом .pop-up__base
            const dataBoxes = document.querySelectorAll('.pop-up__base');
            dataBoxes.forEach(function (box) {
                box.classList.remove('open');
            });

            // Удаляем класс open у элемента с классом .test
            const testElement = document.querySelector('.test');
            if (testElement) {
                testElement.classList.remove('open');
            }

            // Удаляем класс open у элемента с классом .base-blur
            const blurElement = document.querySelector('.base-blur');
            if (blurElement) {
                blurElement.classList.remove('open'); // Удаляем класс open у blur элемента
            }
        });
    });
}

export default base__pop;