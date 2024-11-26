"use client";

const Cart = () => {
  // Sample data for cart items
  const cartItems = [
    {
      id: 1,
      name: "Product A",
      price: 50,
      quantity: 2,
      image:
        "https://whitehillsknives.com/cdn/shop/files/vintage-genuine-cowhide-leather-jacket-men-161.webp?v=1686281119",
    },
    {
      id: 2,
      name: "Product B",
      price: 30,
      quantity: 1,
      image:
        "https://m.media-amazon.com/images/I/610FYl31-9L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "Product C",
      price: 20,
      quantity: 3,
      image:
        "https://fitage.nl/cdn/shop/products/Smartwatch_1.jpg?v=1695242855",
    },
  ];

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

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
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button className="text-red-500 hover:underline mt-2">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t pt-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </h3>
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
