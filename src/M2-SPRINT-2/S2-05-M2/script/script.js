//1
function filterCountry(array) {
  let filteredCountry = array.filter(
    (country) => country.country.toLowerCase() == "brasil"
  );
  return filteredCountry;
}
console.log(filterCountry(data));

//2
function filterPrice(array) {
  let filteredPrice = array.filter((price) => price.price >= 200);
  return filteredPrice;
}
console.log(filterPrice(data));

//3
function filterIsOpen(array) {
  let filteredOpen = array.filter((open) => open.isOpen == true);
  return filteredOpen;
}
console.log(filterIsOpen(data));

//DESAFIO
function filterHotelName(array) {
  let filteredName = array.filter(
    (name) => name.name.toLowerCase() == "copacabana palace"
  );
  return filteredName[0];
}

function filterToBook() {
  const hotel = filterHotelName(data);
  let isAvaliable = hotel.toBook.filter(
    (avaliable) => avaliable.isAvaliable == true
  );
  return isAvaliable;
}
console.log(filterToBook());
