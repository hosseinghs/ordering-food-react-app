import MealsImg from "../../assets/img/meals.jpg";

const Header = () => {
  return (
    <>
      <header className="w-full h-20 flex items-center justify-between px-16 bg-[#8a2b06] text-white shadow z-10">
        <h1 className="text-xl font-bold">ReactMeals</h1>
        <button className="bg-white text-black px-4 py-2 rounded-md border shadow ">
          Cart
        </button>
      </header>
      <div className=" overflow-hidden z-0">
        <img
          className="w-full object-cover transform -rotate-4 -translate-x-4 -translate-y-16"
          alt="food"
          src={MealsImg}
        />
      </div>
    </>
  );
};

export default Header;
