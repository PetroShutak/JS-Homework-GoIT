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
// modal
const modal = document.getElementById('myModal');

const btn = document.getElementById('myBtn');

const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

window.onload = function () {
  // setInterval(() => {

  // }, 8000);
  setTimeout(function () {
    modal.style.display = 'block';
  }, 3000);
};
