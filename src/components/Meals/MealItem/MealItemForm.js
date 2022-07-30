import Input from "../../UI/Input";

const MealItemForm = () => {
  return (
    <form className="">
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
    </form>
  );
};

export default MealItemForm;
