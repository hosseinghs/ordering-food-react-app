import { useContext } from "react";
import CartContext from "../../context/Cart";

import CartIcon from "../Cart/CartIcon";
const HeaderCartBtn = () => {
  const cartCtx = useContext(CartContext);

  const numberOfVal = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className="flex items-center px-6 py-2 bg-red-800 rounded-full">
      <span>
        <CartIcon />
      </span>
      <span className="text-sm font-semibold mx-4">Your Cart</span>
      <span className="text-sm font-semibold rounded-full bg-red-300 px-2 py-1">
        {numberOfVal}
      </span>
    </button>
  );
};

export default HeaderCartBtn;
