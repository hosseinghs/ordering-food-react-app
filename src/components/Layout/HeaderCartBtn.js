import CartIcon from "../Cart/CartIcon";
const HeaderCartBtn = () => {
  return (
    <button className="flex items-center px-6 py-2 bg-red-800 rounded-full">
      <span>
        <CartIcon />
      </span>
      <span className="text-sm font-semibold mx-4">Your Cart</span>
      <span className="text-sm font-semibold rounded-full bg-red-300 px-2 py-1">
        3
      </span>
    </button>
  );
};

export default HeaderCartBtn;
