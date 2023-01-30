const numbers = [20, 13, 50, 36, 97];

//1
function sumNumbers(array) {
  let totalSum = array.reduce(
    (previousValue, currentValue) => currentValue + previousValue
  );
  return totalSum;
}
console.log(sumNumbers(numbers));

//2
function totalProducts(array) {
  let totalSum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );
  return totalSum;
}
console.log(totalProducts(products));

//3
function totalProductsSize(array) {
  let filtered = array.filter((product) => product.size.toLowerCase() == "gg");
  let sum = totalProducts(filtered);
  return sum;
}
console.log(totalProductsSize(products));

//DESAFIO
function totalProductsSale(array) {
  let filtered = array.filter((product) => product.sale == true);
  let totalSum = filtered.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price / 2,
    0
  );
  return totalSum;
}
console.log(totalProductsSale(products));
