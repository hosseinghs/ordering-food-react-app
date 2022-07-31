import { useContext } from "react";
import CartContext from "../../../context/Cart";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, desc, price }) => {
  const { addItem } = useContext(CartContext);

  const addToCartHandler = (amount) => {
    addItem({
      id,
      amount,
      price,
      name,
    });
  };

  const _price = `$${price.toLocaleString()}`;
  return (
    <li className="flex items-center justify-between p-2 my-4">
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <div className="text-sm font-normal">{desc}</div>
        <div className="text-lg font-bold text-red-500">{_price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
