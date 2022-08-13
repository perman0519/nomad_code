const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginBtn(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  greeting.innerText = "Hello " + username;
}

loginForm.addEventListener("submit", onLoginBtn);
