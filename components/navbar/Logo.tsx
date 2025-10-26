import Link from "next/link";
import { FaCentercode } from "react-icons/fa";

function Logo() {
  return (
    <Link href="/" className="bg-gray-200 p-3 rounded-2xl">
      <FaCentercode className="w-7 h-7" />
    </Link>
  );
}

export default Logo;
