"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short-Sleeve Running Top",
    color: "Ashen Slate/Cobalt Bliss",
    size: "L",
    price: 3895,
    image_url: "/6.png",
  },
  {
    id: 2,
    name: "Nike Air Max 87 SE",
    description: "Men's Shoes",
    color: "Flat Pewter/Light Bone/Black/White",
    size: "8",
    price: 16995,
    image_url: "/7.png",
  },
];

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState(sampleProducts);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    color: "",
    size: "",
    price: "",
    image_url: "/default-product.png", // Default image for new products
  });

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCheckoutComplete(true);
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert("Please fill in the product name and price.");
      return;
    }

    const productToAdd = {
      ...newProduct,
      id: Date.now(), // Unique ID for the product
      price: parseInt(newProduct.price),
    };
    setCartItems([...cartItems, productToAdd]);

    setNewProduct({
      name: "",
      description: "",
      color: "",
      size: "",
      price: "",
      image_url: "/default-product.png",
    });
  };

  if (isCheckoutComplete) {
    return (
      <div className="flex flex-col p-8 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Purchase Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-4">
            <div className="flex items-center space-x-4">
              <Image
                src={item.image_url}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-gray-900">
              ₹ {item.price.toLocaleString()}
            </p>
          </div>
        ))}

        {/* Summary Section */}
        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900 font-medium">
              ₹ {getTotalPrice().toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Estimated Delivery & Handling</span>
            <span className="text-gray-900 font-medium">Free</span>
          </div>
          <div className="flex justify-between py-2 mt-4 border-t font-bold text-xl">
            <span>Total Paid</span>
            <span>₹ {getTotalPrice().toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between p-8 bg-gray-50 min-h-screen">
      {/* Bag Section */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Bag</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center space-x-4">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md transition-transform duration-300 ease-in-out transform hover:scale-95"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.description} <br /> Size: {item.size}
                  </p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold text-gray-900">
                  MRP: ₹ {item.price.toLocaleString()}
                </p>
                <button
                  className="text-red-500 text-sm hover:underline"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your bag is empty.</p>
        )}
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Summary</h2>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900 font-medium">
            ₹ {getTotalPrice().toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Estimated Delivery & Handling</span>
          <span className="text-gray-900 font-medium">Free</span>
        </div>
        <div className="flex justify-between py-2 mt-4 border-t font-bold text-xl">
          <span>Total</span>
          <span>₹ {getTotalPrice().toLocaleString()}</span>
        </div>
        <button
          className="w-full mt-6 text-white py-3 rounded-lg font-semibold text-center bg-slate-500 hover:bg-green-500"
          onClick={handleCheckout}
        >
          Member Checkout
        </button>

        {/* Add New Product Form */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Color"
              value={newProduct.color}
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Size"
              value={newProduct.size}
              onChange={(e) =>
                setNewProduct({ ...newProduct, size: e.target.value })
              }
              className="w-full p-2 border rounded-md"
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: e.target.value,
                })
              }
              className="w-full p-2 border rounded-md"
            />
            <button
              onClick={handleAddProduct}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Add Product
            </button>

            {/* Back to Home Button */}
            <Link href="/">
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-4">
                Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
