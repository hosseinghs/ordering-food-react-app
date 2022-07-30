import { createPortal } from "react-dom";
import classes from "../../assets/style/modal.module.css";

const Backdrop = ({ closeCart }) => {
  return <div className={classes.backdrop} onClick={closeCart}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const protalElem = document.getElementById("overlay");

const Modal = ({ children, onCartClose }) => {
  return (
    <>
      {createPortal(<Backdrop closeCart={onCartClose} />, protalElem)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, protalElem)}
    </>
  );
};

export default Modal;
