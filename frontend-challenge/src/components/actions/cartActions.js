import {
  ADD_QUANTITY,
  ADD_SHIPPING,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  SUB_SHIPPING
} from "./action-types/cart-actions";

// add cart action
export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id
});
// remove item action
export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id
});
// subtract qt action
export const subtractQuantity = (id) => ({
  type: SUB_QUANTITY,
  id
});
// add qt action
export const addQuantity = (id) => ({
  type: ADD_QUANTITY,
  id
});

export const addShipping = () => ({
  type: ADD_SHIPPING
})

export const decreaseShipping = () => ({
  type: SUB_SHIPPING
})
