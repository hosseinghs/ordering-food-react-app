const Input = ({ label, input }) => {
  return (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <input className="border rounded-md ml-2" {...input} />
    </div>
  );
};

export default Input;
