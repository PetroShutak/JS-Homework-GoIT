const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  const formData = {
    email: email,
    password: password
  };

  console.log(formData);
  form.reset();
});

