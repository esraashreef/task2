export function addProductToBasket(product) {
  return {
    payload: product,
    type: "ADD_PRODUCT_TO_BASKET",
  };
}

export function removeProductFromBasket(id) {
  return {
    
    type: "REMOVE_PRODUCT_FROM_BASKET",
    id
  };
}