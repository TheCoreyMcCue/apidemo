"use client";

// ProductCard component that accepts props for product details
const ProductCard = ({ product }) => {
  const addToCart = (product) => {
    const storedCart = localStorage.getItem("cart");

    // Parse the cart or initialize it as an empty array
    const cart = storedCart ? JSON.parse(storedCart) : [];

    // Add the new product to the cart
    cart.push(product);

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-green-600">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)} // Correctly bind the onClick handler
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
