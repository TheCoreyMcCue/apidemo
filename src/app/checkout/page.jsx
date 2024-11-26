"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    zip: "",
    countryCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    risk: "",
  });

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const cart = storedCart ? JSON.parse(storedCart) : [];
    setCartItems(cart);
  }, []);

  const calculateTotal = () => {
    return (
      Math.round(
        cartItems.reduce((total, item) => total + item.price, 0) * 100
      ) / 100
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log("Order submitted!", { form, cartItems });

    // Clear cart after submission
    localStorage.removeItem("cart");
    setCartItems([]);

    console.log(form);

    // Redirect to thank-you page (you can create a thank-you page if needed)
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>
            Your cart is empty. <Link href="/">Go back to shop</Link>.
          </p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 p-4 border rounded-md"
              >
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <span className="text-lg font-semibold">${item.price}</span>
              </div>
            ))}
            <div className="mt-4 border-t pt-4 flex justify-between items-center">
              <h3 className="text-xl font-bold">Total:</h3>
              <span className="text-xl font-bold">${calculateTotal()}</span>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Shipping & Payment</h2>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleInputChange}
            className="border rounded-md p-3 w-full text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleInputChange}
            className="border rounded-md p-3 w-full text-black"
            required
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleInputChange}
          className="border rounded-md p-3 w-full text-black"
          required
        />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleInputChange}
            className="border rounded-md p-3 w-full text-black"
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP/Postal Code"
            value={form.zip}
            onChange={handleInputChange}
            className="border rounded-md p-3 w-full text-black"
            required
          />
          <input
            type="text"
            name="countryCode"
            placeholder="Country Code"
            value={form.countryCode}
            onChange={handleInputChange}
            className="border rounded-md p-3 w-full text-black"
            required
          />
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={form.cardNumber}
            onChange={handleInputChange}
            className="border rounded-md p-3 w-full text-black"
            required
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={form.expiryDate}
            onChange={handleInputChange}
            className="border rounded-md p-3 w-full text-black"
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={form.cvv}
            onChange={handleInputChange}
            className="border rounded-md p-3 w-full text-black"
            required
          />
        </div>

        {/* Dropdown for Risk Level */}
        <div className="mb-4">
          <label
            htmlFor="risk"
            className="block text-sm font-medium text-black-700"
          >
            Risk Level
          </label>
          <select
            name="risk"
            value={form.risk}
            onChange={handleInputChange}
            className="border rounded-md p-3 w-1/2 text-black"
            required
          >
            <option value="">Select Risk Level</option>
            <option value="low">Low Risk</option>
            <option value="medium">Medium Risk</option>
            <option value="high">High Risk</option>
          </select>
        </div>

        <Link href="/success">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 mt-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Place Order
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Checkout;
