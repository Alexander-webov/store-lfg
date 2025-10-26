import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

function CartButton() {
  const numItemsInCart = 7;
  return (
    <Link className="relative mr-5" href="/cart">
      <FaShoppingCart />
      <span className="absolute top-[-15px] left-[15px] bg-primary text-white  rounded-full w-5 h-5 flex justify-center items-center text-[11px]">
        {numItemsInCart}
      </span>
    </Link>
  );
}

export default CartButton;
