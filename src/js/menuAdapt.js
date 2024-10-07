const menuAdapt = () => {

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

}

export default menuAdapt;