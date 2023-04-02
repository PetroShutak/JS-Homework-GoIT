const myNamespace = {
  init() {
    const links = document.querySelectorAll('[data-homework-link]');
    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        links.forEach(otherLink => {
          if (otherLink !== link) {
            setTimeout(() => {
              otherLink.style.display = 'none';
            }, 500);
          }
        });
        setTimeout(() => {
          window.location.href = link.href;
        }, 1500);
      });
    });
  },
};

myNamespace.init();
