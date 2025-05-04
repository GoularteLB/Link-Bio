document.addEventListener("DOMContentLoaded", () => {
  const splitText = (element) => {
    const textContent = element.innerHTML;
    element.innerHTML = "";
    const textWithSpans = textContent.replace(/(\S)/g, '<span>$1</span>');
    element.innerHTML = textWithSpans;
  };

  const applyTypingEffect = (selector, delayPerChar = 50) => {
    const targets = document.querySelectorAll(selector);
    targets.forEach(target => {
      splitText(target);
      anime({
        targets: target.querySelectorAll('span'),
        opacity: [0, 1],
        translateX: [30, 0],
        easing: 'easeOutExpo',
        duration: 100,
        delay: (el, i) => i * delayPerChar
      });
    });
  };


  const containers = document.querySelectorAll('.texto-animado-container');
  containers.forEach((container, index) => {
    anime({
      targets: container,
      translateY: [-30, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: index * 400
    });
  });

  anime({
  targets: '.flex.flex-wrap a',
  opacity: [0, 1],
  translateY: [30, 0],
  delay: anime.stagger(150, { start: 1500 }),
  duration: 800,
  easing: 'easeOutExpo'
});


  anime({
    targets: '.flex-1',
    scale: [0.5, 1],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 800,
    delay: (el, i) => 1000 + i * 300
  });


  setTimeout(() => {
    applyTypingEffect('.texto-animado');
  }, 1000);
});
