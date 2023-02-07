function menuButton() {
  const button = document.querySelector(".button-open");
  button.addEventListener("click", () =>
    document.querySelector(".list-show").classList.toggle("show")
  );
}
menuButton();
