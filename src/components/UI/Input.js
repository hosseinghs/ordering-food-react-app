const Input = ({ label, input }) => {
  return (
    <div>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
