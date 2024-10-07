const enemies = () => {
    console.log('ddgb');
    const cards = document.querySelectorAll('.assortiment__card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            window.open('https://www.solpro.ru/products-range/', '_blank'); // Открываем ссылку в новой вкладке
        });
    });

};

export default enemies;