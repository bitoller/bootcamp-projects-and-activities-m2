async function login(email, password) {
  let user = {
    email: email,
    password: password,
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const token = await fetch("http://localhost:3333/login", options)
    .then((response) => response.json())
    .then((response) => {
      if (response.hasOwnProperty("message")) {
        let message = response.message;
        if (message.toLowerCase().includes("email")) {
          const email = document.querySelector("#email");
          const emailError = document.querySelector("#email-error");
          error(email, emailError, message);
        }
        if (message.toLowerCase().includes("senha")) {
          const password = document.querySelector("#password");
          const passwordError = document.querySelector("#password-error");
          error(password, passwordError, message);
        }
      } else {
        localStorage.setItem("token", JSON.stringify(response.token));
        window.location.replace("./pages/feed.html");
      }
    })
    .catch((err) => {});
}

function submitLogin() {
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const emailError = document.querySelector("#email-error");
    const passwordError = document.querySelector("#password-error");
    if (email.value != "" && password.value != "") {
      email.classList.remove("error");
      emailError.innerHTML = "";
      password.classList.remove("error");
      passwordError.innerHTML = "";
      login(email.value, password.value);
    }
    if (email.value == "") {
      error(email, emailError, "O email é obrigatório");
    }
    if (password.value == "") {
      error(password, passwordError, "A senha é obrigatória");
    }
  });
}

function signup() {
  const signupButton = document.querySelector("#signup");
  signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.replace("./pages/signup.html");
  });
}

function clearTokenStorage() {
  localStorage.removeItem("token");
}

function error(field, error, message) {
  error.classList.add("error");
  error.innerHTML = message;
  field.classList.add("error");
}

clearTokenStorage();
submitLogin();
signup();
