export function createSnackbar(message, isError) {
  let body = document.querySelector("body");

  let snackbarContainer = document.createElement("div");
  snackbarContainer.classList.add("snackbar-container");
  snackbarContainer.id = "snackbar-container";
  snackbarContainer.classList.add(isError ? "error" : "success");

  let snackbarMessage = document.createElement("p");
  snackbarMessage.classList.add("text-center");
  snackbarMessage.innerText = message;

  snackbarContainer.append(snackbarMessage);
  body.append(snackbarContainer);

  setTimeout(() => {
    deleteSnackbar();
  }, 2000);
}

export function deleteSnackbar() {
  let snackbarContainer = document.querySelector("#snackbar-container");
  let body = document.querySelector("body");
  body.removeChild(snackbarContainer);
}
