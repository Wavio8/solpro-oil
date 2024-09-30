const counterFn = () => {
  let hasStarted = false; // Флаг, чтобы избежать повторного запуска счетчика
  let hasStartedGreen = false;
  const targetNumber = 265;
  // const duration = 2000; // Время анимации в миллисекундах

  function animateCounter(element, start, end,duration) {
    let startTime = null;

    function updateCounter(currentTime) {
      if (startTime === null) {
        startTime = currentTime;
      }
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration - 1000), 1);
      const count = Math.floor(progress * (end - start) + start);
      element.textContent = count;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  function animateCounterAll(elements, start,duration) {
    elements.forEach((element) => {
      let startTime = null;
      let end = parseInt(element.textContent, 10) || 0;
      console.log(start);
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
    });
  }

  window.addEventListener("scroll", () => {
    const section = document.getElementById("counter-section");

    const sectionTop = section.getBoundingClientRect().top;
    const sectionGreen = document.getElementById("green-counter");
    const sectionGreenTop = sectionGreen.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight && !hasStarted) {
      hasStarted = true;
      animateCounter(document.getElementById("counter"), 0, targetNumber,2000);
    }
    if (sectionGreenTop < window.innerHeight && !hasStartedGreen) {
      // hasStarted = true;
      hasStartedGreen = true;
      animateCounterAll(document.querySelectorAll(".counter-scroll"), 0,1000);
    }
  });

};
export default counterFn;
