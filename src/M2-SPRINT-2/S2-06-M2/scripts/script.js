function searchDessert(inputValue) {
  let filtered = dessertList.filter((element) =>
    element.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return filtered;
}
