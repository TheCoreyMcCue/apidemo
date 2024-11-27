"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState(null); // Start with null to defer rendering

  useEffect(() => {
    // Fetch cart from localStorage on the client side
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    setCartItems(cart); // Update the state after localStorage is available
  }, []);

  // Remove item from cart
  const removeFromCart = (itemId) => {
    if (!cartItems) return;

    // Filter out the item to be removed
    const updatedCart = cartItems.filter((item) => item.id !== itemId);

    // Update state
    setCartItems(updatedCart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems?.reduce((total, item) => total + item.price, 0) || 0;
  };

  // Show a loading state until cartItems is loaded
  if (cartItems === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {/* Cart Items */}
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-md shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">${item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)} // Handle removal
                    className="text-red-500 hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t pt-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold">
              Total: ${Math.round(calculateTotal() * 100) / 100}
            </h3>
            <Link href="/checkout">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
