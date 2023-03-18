const url = "https://pokeapi.co/api/v2/";

export async function getAll(offset = 0) {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let pokemons = {};
  try {
    pokemons = await fetch(`${url}pokemon?offset=${offset}&limit=21`, options);
    return pokemons.json();
  } catch (error) {}

  return null;
}

export async function getOneWithFlavor(name) {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let pokemon = {};
  try {
    pokemon = await fetch(`${url}pokemon-species/${name}`, options);
    if (pokemon.status == 404) {
      return null;
    }
    return pokemon.json();
  } catch (error) {}

  return null;
}

export async function getOne(name) {
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let pokemon = {};
  try {
    pokemon = await fetch(`${url}pokemon/${name}`, options);
    if (pokemon.status == 404) {
      return null;
    }
    return pokemon.json();
  } catch (error) {}

  return null;
}
