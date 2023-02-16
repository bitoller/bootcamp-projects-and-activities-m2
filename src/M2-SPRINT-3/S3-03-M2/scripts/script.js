function menuButton() {
  const button = document.querySelector(".button-open");
  button.addEventListener("click", () => {
    let list = document.querySelector(".list-show");
    list.classList.toggle("show");
    let search = document.querySelector(".search").classList.toggle("show");
    let img = document.querySelector(".img-show").classList.toggle("show");
    let username = document
      .querySelector(".user-name")
      .classList.toggle("show");
    let btnImg = document.querySelector(".menu-img");
    if (list.classList.contains("show") == true) {
      btnImg.src = "./assets/close-button.svg";
    } else {
      btnImg.src = "./assets/menu-button.svg";
    }
  });
}
menuButton();
