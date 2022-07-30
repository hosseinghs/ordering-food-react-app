import { createPortal } from "react-dom";
import classes from "../../assets/style/modal.module.css";

const Backdrop = ({ onCartClose }) => {
  return <div className={classes.backdrop} onClick={onCartClose}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const protalElem = document.getElementById("overlay");

const Modal = ({ children }) => {
  return (
    <>
      {createPortal(<Backdrop />, protalElem)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, protalElem)}
      {children}
    </>
  );
};

export default Modal;
