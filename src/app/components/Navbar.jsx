"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    // Initial fetch of cart count
    updateCartCount();

    // Listen for the custom "cart-updated" event
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cart-updated", handleCartUpdate);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("cart-updated", handleCartUpdate);
    };
  }, []);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-white hover:text-gray-400">
            Super Shop
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="#shop" className="text-white hover:text-gray-400">
            Shop
          </Link>
          <Link href="#about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <Link href="/cart" className="text-white hover:text-gray-400">
            <ShoppingCartIcon className="w-6 h-6" />

            {cartCount > 0 && (
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                {cartCount}
              </div>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
