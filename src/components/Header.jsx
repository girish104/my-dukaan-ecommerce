import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MyContext } from "../context/Context";

function Header() {
  const { cart } = useContext(MyContext);

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg py-3 px-5">
      <div className="flex items-center justify-between max-w-7xl mx-auto text-white">
        {/* Home Link */}
        <Link
          className="text-xl sm:text-2xl font-semibold transition-colors duration-200"
          to="/"
        >
          Home
        </Link>

        {/* Cart Link */}
        <Link
          to="/cart"
          className="relative flex items-center hover:text-red-400 transition-colors duration-200"
        >
          <MdOutlineShoppingCart size="24px" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs sm:text-sm font-semibold w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;
