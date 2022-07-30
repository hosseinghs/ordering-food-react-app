import Modal from "../UI/Modal";

const Cart = ({}) => {
  const cartItems = [
    { id: "1", name: "sushi", amount: "2", price: "12.99" },
  ].map((item) => <li>{item.name}</li>);

  return (
    <Modal>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
