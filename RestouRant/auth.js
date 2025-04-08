document.addEventListener('DOMContentLoaded', () => {
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    const authForm = document.getElementById('authForm');
    const registerForm = document.getElementById('registerForm');
  
    // Переключение на форму регистрации
    switchToRegister.addEventListener('click', (e) => {
      e.preventDefault();
      authForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
    });
  
    // Переключение на форму входа
    switchToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      registerForm.classList.add('hidden');
      authForm.classList.remove('hidden');
    });
  
    // Обработка отправки формы входа
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      alert(`Вы вошли как ${email}`);
      // Здесь можно добавить логику для проверки данных с сервером
    });
  
    // Обработка отправки формы регистрации
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('newEmail').value;
      const password = document.getElementById('newPassword').value;
  
      alert(`Вы зарегистрировались как ${username} (${email})`);
      // Здесь можно добавить логику для отправки данных на сервер
    });
  });
  