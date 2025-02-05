"use client"
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import Navbar from '../../component/Navbar';
import Image from 'next/image';
import Footer from '../../component/Footer';
import Link from 'next/link';

const ProductDetail = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    setIsWishlisted(!isWishlisted);

  };
 
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-16 gap-8">
   
      {/* Product Image */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/3.png"
          alt="Nike Air Force 1 PLT.AF.ORM"
          width={500}
          height={500}
          className="rounded-xl shadow-lg"
        />
      </div>
     
      {/* Product Details */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
        <p className="text-gray-600 mb-6">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish.
        </p>
        <div className="text-2xl font-semibold mb-4">
          ₹ 8,695.00
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
            onClick={handleAddToCart}
          >
            <AiOutlineShoppingCart /> Add to Cart
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              isWishlisted ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
            } hover:opacity-90`}
            onClick={handleAddToCart}
          >
            {isWishlisted ? <AiFillHeart /> : <AiOutlineHeart />} 
            {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
     
      </div>
      <Link href="/"className="flex justify-center text-blue-900 font-bold -mt-12 text-2xl text-underline">Back Home</Link>
      <Footer/>
    </div>
  );
};

export default ProductDetail;
