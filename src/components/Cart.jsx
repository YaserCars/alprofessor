import { BsCart4 } from "react-icons/bs";

const Cart = () => {
  const length = 1;
  const state = 0;
  return (
    <div className="flex relative">
      <BsCart4 />
      {length > 0 && (
        <span className="xl:text-black text-white text-center flex justify-center items-center bg-blue-500 rounded-full w-5 h-5 -right-4 -top-2 z-10 absolute">
          {length}
        </span>
      )}
    </div>
  );
}

export default Cart;
