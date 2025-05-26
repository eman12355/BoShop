export const addCard = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const delCard = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const updateQuantity = (productId, quantity) => {
  return {
    type: "UPDATE_CART_QUANTITY",
    payload: { productId, quantity },
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
