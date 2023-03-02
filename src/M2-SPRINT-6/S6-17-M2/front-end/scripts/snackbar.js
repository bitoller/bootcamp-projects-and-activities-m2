export function snackbarSignUp() {
  const snackbar = document.querySelector("#snackbar");
  snackbar.classList.add("show-snackbar");
  setTimeout(() => {
    snackbar.classList.remove("show-snackbar");
    window.location.replace("../index.html");
  }, 2000);
}

export function snackbarDeletePost() {
  const snackbar = document.querySelector("#snackbar");
  snackbar.classList.add("show-snackbar");
  setTimeout(() => {
    snackbar.classList.remove("show-snackbar");
  }, 2000);
}
