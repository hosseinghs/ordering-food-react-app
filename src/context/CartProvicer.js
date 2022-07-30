import CartContext from "./Cart";

const CartProvider = ({ children }) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartCtx = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
