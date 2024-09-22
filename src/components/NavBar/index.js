import { useState } from "react";
import Link from "next/link";
import { ShoppingCartIcon, SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [cartItems, setCartItems] = useState(3); // Simulate cart item count

  return (
    <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
      {/* Left: Brand */}
      <div className="text-2xl font-bold flex items-center">
        <span className="text-gray-800">Plant</span>
        <span className="ml-1 h-2 w-2 bg-green-500 rounded-full"></span>
      </div>

      {/* Center: Links */}
      <div className="space-x-6">
        <Link href="/" className="text-gray-600 hover:text-black">
          Home
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black">
          Store
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black">
          About
        </Link>
        <Link href="#" className="text-gray-600 hover:text-black">
          News
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-black">
          Contact
        </Link>
        <Link href="/design" className="text-gray-600 hover:text-black">
          Design
        </Link>
      </div>

      {/* Right: Search and Cart */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button className="text-gray-600 hover:text-black">
          <SearchIcon className="h-6 w-6" />
        </button>

        {/* Cart with Badge */}
        <div className="relative">
          <button className="text-gray-600 hover:text-black">
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
