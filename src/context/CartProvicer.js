import { useReducer } from "react";
import CartContext from "./Cart";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, { k, v }) => {
  if (k === "ADD") {
    const updatedItems = state.items.concat([v]);
    const updatedTptalAmount = state.totalAmount + v.price * v.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTptalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ k: "ADD", v: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ k: "REMOVE", v: id });
  };

  const cartCtx = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
