export const products = [
  {
    id: 1,
    name: "Vintage Leather Jacket",
    description: "A stylish, genuine leather jacket perfect for any occasion.",
    price: 199.99,
    image:
      "https://whitehillsknives.com/cdn/shop/files/vintage-genuine-cowhide-leather-jacket-men-161.webp?v=1686281119",
  },
  {
    id: 2,
    name: "Sneakers 5000",
    description:
      "High-performance sneakers with premium cushioning and support.",
    price: 89.99,
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9320.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
  },
  {
    id: 3,
    name: "Wooden Desk Lamp",
    description: "A sleek wooden desk lamp with adjustable lighting.",
    price: 49.99,
    image:
      "https://m.media-amazon.com/images/I/610FYl31-9L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Smartwatch Pro",
    description:
      "A stylish smartwatch with fitness tracking and notifications.",
    price: 299.99,
    image: "https://fitage.nl/cdn/shop/products/Smartwatch_1.jpg?v=1695242855",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    description:
      "Compact and high-quality wireless earbuds with noise-canceling features.",
    price: 79.99,
    image:
      "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/A3955Z11_TD01_V1_94fa7a75-6b0b-4de8-8946-20e436c87a46.jpg?v=1708914006",
  },
  {
    id: 6,
    name: "Coffee Maker Deluxe",
    description:
      "Brew your favorite coffee with ease using this premium coffee maker.",
    price: 129.99,
    image:
      "https://martzon.net/storage/products/yYgGo0FbHJ4p4w0ffraOy9Kjf10PSh4dIexjpdwj.webp",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with powerful sound and a long battery life.",
    price: 59.99,
    image:
      "https://images-cdn.ubuy.co.in/64f8fabde01bf74c341c95f7-portable-bluetooth-speaker-wireless.jpg",
  },
  {
    id: 8,
    name: "Cozy Knit Sweater",
    description: "A soft and warm sweater, perfect for chilly days.",
    price: 39.99,
    image:
      "https://as2.ftcdn.net/v2/jpg/02/34/19/75/1000_F_234197570_P6NJHBQ1ZZafM4f4oMUzzdTtSyPo8vaN.jpg",
  },
];

export const lowRisk = {
  "primary.email.valid": true,
  "primary.email.first_seen_days": 1853,
  "primary.email.to_name": "match",
  "ip.risk": false,
  "ip.primary_address_distance": 0,
  "primary.phone.valid": true,
  "primary.phone.line_type": "mobile",
  "primary.phone.to_name": "match",
  "primary.address.valid": false,
  "primary.address.to_name": "match",
  "secondary.address.valid": null,
  "secondary.address.to_name": null,
  fraudguard_network_score: 0.164,
  ip_risk_score: 0.204,
  fraudguard_risk_score: 50,
};

export const mediumRisk = {
  "primary.email.valid": true,
  "primary.email.first_seen_days": 682,
  "primary.email.to_name": "no-match",
  "ip.risk": false,
  "ip.primary_address_distance": 20,
  "primary.phone.valid": true,
  "primary.phone.line_type": "landline",
  "primary.phone.to_name": "no-match",
  "primary.address.valid": false,
  "primary.address.to_name": "no-match",
  "secondary.address.valid": null,
  "secondary.address.to_name": null,
  fraudguard_network_score: 0.438,
  ip_risk_score: 0.612,
  fraudguard_risk_score: 237,
};

export const highRisk = {
  "primary.email.valid": false,
  "primary.email.first_seen_days": null,
  "primary.email.to_name": "not-found",
  "ip.risk": false,
  "ip.primary_address_distance": 830,
  "primary.phone.valid": false,
  "primary.phone.line_type": null,
  "primary.phone.to_name": "not-found",
  "primary.address.valid": false,
  "primary.address.to_name": "not-found",
  "secondary.address.valid": null,
  "secondary.address.to_name": null,
  fraudguard_network_score: 0.874,
  ip_risk_score: 0.925,
  fraudguard_risk_score: 474,
};
