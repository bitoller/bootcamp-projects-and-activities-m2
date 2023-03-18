import { getAll, getOne, getOneWithFlavor } from "./pokemon.js";

let pageNumber = 0;
let defaultUrlImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let gifUrlImg =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";

async function showSelectedPokemon(name, image, id) {
  let pokemonWithFlavor = await getOneWithFlavor(name);
  let pokemon = await getOne(name);
  let pokedexTop = document.querySelector("#pokedex-top");
  pokedexTop.innerHTML = "";

  let pokemonNameAndId = document.createElement("h1");
  pokemonNameAndId.innerText = `${name} #${pokemonWithFlavor.id}`;

  let topContainer = document.createElement("div");
  topContainer.classList.add("pokedex-info-container");

  let containerLeft = document.createElement("div");
  containerLeft.classList.add("container-left");

  let heightAndWeightDiv = document.createElement("div");
  heightAndWeightDiv.classList.add("height-weight");

  let height = document.createElement("p");
  height.innerText = `${pokemon.height / 10} m`;

  let weight = document.createElement("p");
  weight.innerText = `${pokemon.weight / 10} kg`;

  let imgDiv = document.createElement("div");
  imgDiv.classList.add("img-div");

  let pokemonImg = document.createElement("img");
  pokemonImg.src = `${gifUrlImg}${id}.gif`;
  pokemonImg.addEventListener("error", () => {
    pokemonImg.src = image;
  });

  let containerRight = document.createElement("div");
  containerRight.classList.add("container-right");

  let descriptionTitle = document.createElement("h5");
  descriptionTitle.innerText = "Description";

  let descriptionContent = document.createElement("p");
  descriptionContent.innerText =
    pokemonWithFlavor.flavor_text_entries[0].flavor_text;

  heightAndWeightDiv.append(height, weight);
  imgDiv.append(pokemonImg);
  containerLeft.append(heightAndWeightDiv, imgDiv);
  containerRight.append(descriptionTitle, descriptionContent);
  topContainer.append(containerLeft, containerRight);
  pokedexTop.append(pokemonNameAndId, topContainer);
}

function createPokemon(image, name, id) {
  let pokemon = document.createElement("li");

  let pokemonButton = document.createElement("button");
  pokemonButton.addEventListener("click", async () => {
    await showSelectedPokemon(name, image, id);
  });

  let pokemonImg = document.createElement("img");
  pokemonImg.src = image;
  pokemonImg.setAttribute("loading", "lazy");

  pokemonButton.append(pokemonImg);
  pokemon.append(pokemonButton);

  return pokemon;
}

function searchInput() {
  let searchButton = document.querySelector("#pokemon-search-button");
  searchButton.addEventListener("click", async (event) => {
    event.preventDefault();
    let searchInput = document.querySelector("#pokemon-search").value;
    if (searchInput != "") {
      let pokemon = await getOne(searchInput);
      if (pokemon != null) {
        document.querySelector("#pokemon-search").value = "";
        showSelectedPokemon(
          pokemon.name,
          `${defaultUrlImg}${pokemon.id}.png`,
          pokemon.id
        );
        let audio = new Audio("./assets/pc-on.mp3");
        audio.play();
      }
    }
  });
}

async function renderAll(pageNumber = 0) {
  let pokemons = await getAll(pageNumber);
  let pokemonList = document.querySelector("#pokemon-list");
  pokemonList.innerHTML = "";

  pokemons.results.forEach((pokemon) => {
    let pokemonId = pokemon.url.slice(34, -1);
    let pokemonCard = createPokemon(
      `${defaultUrlImg}${pokemonId}.png`,
      pokemon.name,
      pokemonId
    );

    pokemonList.append(pokemonCard);
  });
}

function browseButtons() {
  let buttonUp = document.querySelector("#back-button");
  buttonUp.addEventListener("click", async () => {
    if (pageNumber > 0) {
      pageNumber -= 21;
      await renderAll(pageNumber);
    }
  });

  let buttonDown = document.querySelector("#next-button");
  buttonDown.addEventListener("click", async () => {
    pageNumber += 21;
    await renderAll(pageNumber);
  });
}

renderAll();
browseButtons();
searchInput();
