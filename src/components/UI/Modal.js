import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div></div>;
};

const ModalOverlay = ({ children }) => {
  return <div>{children}</div>;
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
