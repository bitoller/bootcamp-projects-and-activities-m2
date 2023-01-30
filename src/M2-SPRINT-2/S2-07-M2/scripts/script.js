function removeFromCart(product) {
  let itemIndex = cartList.findIndex(function (productList) {
    return productList.id == product.id;
  });
  let item = cartList.splice(itemIndex, 1);

  return item;
}
