const lazy = () => {
    const lazyVideos = document.querySelectorAll('video[data-src]');

    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                const source = video.querySelector('source');
                source.src = video.dataset.src; // Устанавливаем src
                video.load(); // Загружаем видео
                video.play(); // Запускаем воспроизведение
                observer.unobserve(video); // Отключаем наблюдение
            }
        });
    });

    lazyVideos.forEach(video => {
        videoObserver.observe(video); // Начинаем наблюдение за видео
    });
}

    export default lazy;
