const pass_field = document.querySelector('.password');
  const show_btn = document.querySelector('.show');
  show_btn.addEventListener('click', function () {
    if (pass_field.type === "password") {
      pass_field.type = "text";
      show_btn.style.color = "#3498db";
      show_btn.textContent = "HIDE";
    } else {
      pass_field.type = "password";
      show_btn.style.color = "#222";
      show_btn.textContent = "SHOW";
    }
  });
  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");

  loginButton.addEventListener("click", function () {
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username === "admin" && password === "password") {
      window.open('dashboard.html');
    } else {
      alert("Error Wrong Password or Username.");
    }
  });