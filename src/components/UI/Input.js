import { forwardRef } from "react";

const Input = forwardRef((props,ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.input.label}</label>
      <input ref={ref} className="border rounded-md ml-2" {...props.input} />
    </div>
  );
});

export default Input;
