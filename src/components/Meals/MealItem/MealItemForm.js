import { useRef, useState } from "react";
import Input from "../../UI/Input";

const MealItemForm = ({ onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setIsAmountValid(false);
      return;
    }
    onAddToCart(enteredAmountNum);
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        className="w-full mt-2 text-lg font-bold rounded-full bg-red-700 text-white"
        type="submit"
      >
        + Add
      </button>
      {!isAmountValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
