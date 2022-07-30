import Modal from "../UI/Modal";

const Cart = ({ onCartClose }) => {
  const cartItems = [
    { id: "1", name: "sushi", amount: "2", price: "12.99" },
  ].map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <Modal onCartClose={onCartClose}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div className="text-end">
        <button
          className="bg-white text-red-700 border border-red-700 px-3 py-1 rounded-full"
          onClick={onCartClose}
        >
          Close
        </button>
        <button className="ml-2 text-white bg-red-700 px-9 py-1 rounded-full ">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
