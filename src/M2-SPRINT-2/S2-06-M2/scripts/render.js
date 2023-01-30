const ulTag = document.querySelector("ul");
const formTag = document.querySelector("form");
const inputTag = document.querySelector("input");

function renderDessert(dessertList) {
  ulTag.innerHTML = "";

  dessertList.forEach((dessert) => {
    const liTag = document.createElement("li");

    const imgTag = document.createElement("img");
    imgTag.src = dessert.image;
    imgTag.alt = dessert.name;

    const textContainer = document.createElement("div");

    const title = document.createElement("h2");
    title.innerText = dessert.name;

    const description = document.createElement("p");
    description.innerText = dessert.description;

    textContainer.append(title, description);
    liTag.append(imgTag, textContainer);
    ulTag.append(liTag);
  });
}

formTag.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();

  const inputValue = inputTag.value;

  if (searchDessert(inputValue)) {
    renderDessert(searchDessert(inputValue));
  } else {
    console.error("Retorno da função inválido");
  }
}

renderDessert(dessertList);
