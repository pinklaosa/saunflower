import { useState } from "react";
import Link from "next/link";
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [cartItems, setCartItems] = useState(3); // Simulate cart item count

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50 transition-all duration-300">
      {/* Left: Brand */}
      <div className="text-2xl font-bold flex items-center text-gray-800 hover:text-green-500 transition-colors duration-200">
        <span>Plant</span>
        <span className="ml-1 h-2 w-2 bg-green-500 rounded-full"></span>
      </div>

      {/* Center: Links */}
      <div className="space-x-8 hidden md:flex">
        <Link href="/" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
          Home
        </Link>
        <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
          Store
        </Link>
        <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
          About
        </Link>
        <Link href="#" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
          News
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
          Contact
        </Link>
        <Link href="/design" className="text-gray-600 hover:text-green-500 transition-colors duration-200">
          Design
        </Link>
      </div>

      {/* Right: Search and Cart */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button className="text-gray-600 hover:text-green-500 transition-colors duration-200">
          <SearchIcon className="h-6 w-6" />
        </button>

        {/* Cart with Badge */}
        <div className="relative">
          <button className="text-gray-600 hover:text-green-500 transition-colors duration-200">
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
          {cartItems > 0 && (
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartItems}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
