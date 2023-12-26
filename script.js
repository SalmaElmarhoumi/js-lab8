const loginBtn = document.getElementById('loginBtn');
    const messageEl = document.getElementById('message');

    loginBtn.addEventListener('click', function (event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Regex patterns for validation
      const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/; // Allows alphanumeric characters and underscores, 3 to 16 characters
      const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,}$/; // Requires at least one digit, one letter, and 6 or more characters

      if (!usernamePattern.test(username)) {
        messageEl.textContent = 'Invalid username format!';
      } else if (!passwordPattern.test(password)) {
        messageEl.textContent = 'Invalid password format!';
      } else if (username === 'admin' && password === '123') {
        messageEl.textContent = 'Welcome, admin!';
      } else {
        messageEl.textContent = 'Invalid username or password!';
      }

      // Clear form fields
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    });