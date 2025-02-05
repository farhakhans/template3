"use client";

import React, { useState } from "react";
import Navbar from "../../component/Navbar";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  discount: number; // Discount in percentage
}

const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Force 1 Mid '07",
    description: "Nike shoes are renowned globally for their exceptional blend of style and comfort.",
    image: "Image 3.png",
    price: 120,
    category: "Shoes",
    discount: 20,
  },
  {
    id: 2,
    name: "Nike Issue Basketball Jersey",
    description: "Nike constantly pushes the boundaries of innovation.",
    image: "pg2 man.png",
    price: 80,
    category: "Apparel",
    discount: 10,
  },
  {
    id: 3,
    name: "Nike Dunk Low Retro SE",
    description: "Nike constantly pushes the boundaries of innovation, focusing on sustainability more comfort.",
    image: "shoe cloth.png",
    price: 110,
    category: "Shoes",
    discount: 0,
  },
  {
    id: 4,
    name: "Nike Zoom Fly 5",
    description: "Comfortable and stylish, perfect for any activity much smoth.",
    image: "Image 1.png",
    price: 130,
    category: "Shoes",
    discount: 15,
  },
  {
    id: 5,
    name: "Nike Blazer Mid '77 Vintage",
    description: "Comfortable and stylish, perfect for any activity.",
    image: "man suit.png",
    price: 150,
    category: "Shoes",
    discount: 5,
  },
  {
    id: 6,
    name: "Nike Metcon 8",
    description: "Comfortable and stylish, perfect for any activity more use.",
    image: "pg2 man.png",
    price: 140,
    category: "Shoes",
    discount: 10,
  },
  {
    id: 7,
    name: "Nike Waffle One SE",
    description: "Comfortable and stylish, perfect for any activity and beautiful and comfort more smoth.",
    image: "pg 2 girl.png",
    price: 100,
    category: "Shoes",
    discount: 0,
  },
  {
    id: 8,
    name: "Nike Air Force 1 PLT.AF.ORM",
    description: "Comfortable and stylish, perfect for any activity.",
    image: "Image 1.png",
    price: 120,
    category: "Shoes",
    discount: 25,
  },
];

const ContentSection = () => {
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [cartMessage, setCartMessage] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const handleAddToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCartMessage(`${product.name} has been added to the cart!`);
    setTimeout(() => setCartMessage(null), 2000);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleIncreaseQuantity = (productId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (productId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCategory(event.target.value);
  };

  const filteredProducts =
    filterCategory === "All" ? products : products.filter((product) => product.category === filterCategory);

  const getDiscountedPrice = (price: number, discount: number) => {
    return price * (1 - discount / 100);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalDiscount = () => {
    return cart.reduce((totalDiscount, item) => {
      const originalPrice = item.price * item.quantity;
      const discountedPrice = getDiscountedPrice(item.price, item.discount) * item.quantity;
      return totalDiscount + (originalPrice - discountedPrice);
    }, 0);
  };

  const getDiscountedTotal = () => {
    return cart.reduce((total, item) => {
      const discountedPrice = getDiscountedPrice(item.price, item.discount);
      return total + discountedPrice * item.quantity;
    }, 0);
  };

  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font shadow-xl bg-sky-100">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Best Branded Nike Shoes and Products</h1>

          {cartMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-center">
              {cartMessage}
            </div>
          )}
          <div>
          <Link href="/checkOut">
           <button className="absolute ml-80 p-2 font-bold bg-gray-300 z-50 rounded-md hover:text-red-400 hover:bg-black">Member checkOut

           </button>
           </Link>
           </div>
           <div>
           <Link href="/productDetail">
           <button className="absolute ml-40 p-2 font-bold bg-gray-300 z-50 rounded-md hover:text-red-400 hover:bg-black">Product Detail

           </button>
           </Link>
           </div>
          <div className="mb-6 text-center">
            <select
              value={filterCategory}
              onChange={handleFilterChange}
              className="px-4 py-2 rounded bg-gray-200 text-gray-700"
            >
              <option value="All">All Products</option>
              <option value="Shoes">Shoes</option>
              <option value="Apparel">Apparel</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const discountedPrice = getDiscountedPrice(product.price, product.discount);
              return (
                <div key={product.id} className="p-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="h-40 w-full object-cover object-center mb-6 rounded"
                      src={`/${product.image}`}
                      alt={product.name}
                      width={150}
                      height={150}
                    />
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product.name}</h2>
                    <p className="leading-relaxed text-base mb-4">{product.description}</p>
                    <div className="text-gray-700">
                      <span className="line-through text-red-500">${product.price}</span>
                      <span className="ml-2 text-xl font-bold text-indigo-500">${discountedPrice.toFixed(2)}</span>
                    </div>
                    {product.discount > 0 && (
                      <div className="mt-2 text-sm text-green-500">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          {product.discount}% OFF
                        </span>
                      </div>
                    )}
                    <button
                      className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 mt-4 w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 mt-4 w-full"
                     
                    >
                      <Link href="/shipmentform"> Order Now</Link>
                    
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item) => {
                    const discountedPrice = getDiscountedPrice(item.price, item.discount);
                    return (
                      <div key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded">
                        <div className="flex items-center">
                          <Image className="h-16 w-16 object-cover rounded" src={`/${item.image}`} alt={item.name} width={64} height={64} />
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-gray-300 px-3 py-1 rounded">
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleIncreaseQuantity(item.id)} className="bg-gray-300 px-3 py-1 rounded">
                            +
                          </button>
                          <button
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 text-right">
                  <p className="text-lg font-semibold">Total: ${getTotalPrice().toFixed(2)}</p>
                  <p className="text-lg font-semibold">Discount: ${getTotalDiscount().toFixed(2)}</p>
                  <p className="text-lg font-semibold">Total after Discount: ${getDiscountedTotal().toFixed(2)}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <div className="bg-blue-300 text-black hover:text-yellow-400 text-center font-bold">
      <Link href="/">Back Home</Link>
      </div>
    </div>
  );
};

export default ContentSection;
