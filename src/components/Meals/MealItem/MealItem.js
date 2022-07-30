const MealItem = ({ name, desc, price }) => {
  const _price = `$${price.toLocaleString()}`;
  return (
    <li className="p-2 my-4">
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <div className="text-sm font-normal">{desc}</div>
        <div className="text-lg font-bold text-red-500">{_price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
