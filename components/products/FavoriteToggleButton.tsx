import { FaRegHeart } from "react-icons/fa";
import { Button } from "../ui/button";

function FavoriteToggleButton({ productId }) {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaRegHeart />
    </Button>
  );
}

export default FavoriteToggleButton;
