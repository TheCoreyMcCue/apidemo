"use client";

import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    setCartItems(cart);
  }, []);

  // Remove item from cart
  const removeFromCart = (itemId) => {
    // Filter out the item to be removed
    const updatedCart = cartItems.filter((item) => item.id !== itemId);

    // Update state
    setCartItems(updatedCart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

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
            <h3 className="text-2xl font-bold">Total: ${calculateTotal()}</h3>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
