function removeFromCart(product) {
  let itemIndex = cartList.findIndex(
    (productList) => productList.id == product.id
  );
  let item = cartList.splice(itemIndex, 1);

  return item;
}
