"use client";

import { useState } from "react";
import Navbar from "../../component/Navbar"; 
import Link from "next/link"; 

const ProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "United States",
    deliveryStatus: "Pending",
    paymentMethod: "Credit Card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    shippingAddress: "",
    billingAddress: "",
    quantity: 1,
    productId: "123",
  });

  const [selectedProduct, setSelectedProduct] = useState("1");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const products = [
    {
      id: "1",
      name: "Stylish Running Shoes",
      description: "Comfortable shoes for everyday wear.",
      originalPrice: 99.99,
      discount: 10, // 10% discount
      imageUrl: "/1.png",
    },
    {
      id: "2",
      name: "Sports Sneakers",
      description: "Great for sports and outdoor activities.",
      originalPrice: 120.00,
      discount: 15, // 15% discount
      imageUrl: "/2.png",
    },
    {
      id: "3",
      name: "Leather Boots",
      description: "Premium leather boots for a stylish look.",
      originalPrice: 150.00,
      discount: 20, // 20% discount
      imageUrl: "/3.png",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      quantity: parseInt(e.target.value, 10),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  // Calculate the price with discount
  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  const selectedProductDetails = products.find((product) => product.id === selectedProduct);
  const discountedPrice = selectedProductDetails ? calculateDiscountedPrice(selectedProductDetails.originalPrice, selectedProductDetails.discount) : 0;
  const totalPrice = discountedPrice * formData.quantity;

  return (
    <div className="bg-blue-100">
      <Navbar />

   
      <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-white shadow-lg mb-6 text-center">Shipment Form</h1>
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Select a Product</h2>

       
        <div className="mb-6">
          <label className="block mb-1 font-bold">Choose a Product</label>
          <select
            name="productId"
            value={formData.productId}
            onChange={(e) => {
              setSelectedProduct(e.target.value);
              setFormData({ ...formData, productId: e.target.value });
            }}
            className="w-full border-white rounded-lg p-2"
          >
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display selected product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src={selectedProductDetails?.imageUrl}
              alt={selectedProductDetails?.name}
              className="w-64 h-64 object-contain" // Adjust image size
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-4">{selectedProductDetails?.description}</p>
            <p className="text-2xl font-semibold text-indigo-700 mb-6">
              Price: ${selectedProductDetails ? discountedPrice.toFixed(2) : "0.00"}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Discount: {selectedProductDetails?.discount}% off
            </p>

            {/* Quantity Selection */}
            <div className="mb-6">
              <label className="block mb-1 font-medium">Quantity</label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleQuantityChange}
                className="w-full border-blue-50 rounded-lg p-2"
              />
            </div>

            <div className="mb-6">
              <p className="text-xl font-semibold text-indigo-700">
                Total: ${totalPrice.toFixed(2)}
              </p>
            </div>

            {/* Product Form */}
            <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-1 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-1 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Shipping Address</label>
                  <input
                    type="text"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-1 font-medium">Billing Address</label>
                  <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg p-2"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Payment Method</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-lg p-2"
                  >
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Cash">Cash on Delivery</option>
                  </select>
                </div>
              </div>

              {formData.paymentMethod === "Credit Card" && (
                <>
                  <div>
                    <label className="block mb-1 font-medium">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-lg p-2"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">Expiry Date (MM/YY)</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-lg p-2"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      className="w-full border-gray-300 rounded-lg p-2"
                    />
                  </div>
                </>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isFormSubmitted && (
        <div className="text-center bg-green-100 p-4 mt-8">
          <h3 className="text-xl font-semibold text-green-600">Order Submitted Successfully!</h3>
        </div>
      )}

      {/* Back to Home Button */}
      <div className="text-center mt-8">
        <Link href="/">
          <button className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
