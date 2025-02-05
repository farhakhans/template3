"use client"
import { FaShopify, FaRegEnvelope, FaComment, FaMapMarkedAlt, FaThumbsUp, FaWhatsapp } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../component/Navbar'; // Assuming Navbar component is available
import Footer from '../../component/Footer';
const GetHelp = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', message: 'Hello! How can I assist you today?' },
  ]);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory([...chatHistory, { sender: 'user', message: chatMessage }]);
      setChatMessage('');
      setTimeout(() => {
        setChatHistory((prev) => [
          ...prev,
          { sender: 'bot', message: 'I am here to help. What can I do for you?' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-purple-100">
      
      {/* Fixed Navbar */}
      <div className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Header with Search Bar */}
      <div className="flex justify-center pt-16 pb-12">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full py-3 pl-4 pr-10 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          <FiSearch className="absolute top-3 right-3 text-gray-500" size={20} />
        </div>
      </div>
   
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8 animate__animated animate__fadeIn">Get Help</h1>
        
        {/* Action Buttons Section */}
        <div className="flex justify-center gap-10 mb-12">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg transform hover:scale-105 transition-all duration-300">
            Shop
          </button>
          <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-lg transform hover:scale-105 transition-all duration-300">
            Join Us
          </button>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">FAQs</h2>
            <details className="group cursor-pointer">
              <summary className="text-xl font-medium text-gray-700 mb-2 hover:text-blue-600 transition-all duration-300">How do I shop?</summary>
              <p className="text-gray-600">To shop, browse our collection, select items, and add them to your cart.</p>
            </details>
            <details className="group cursor-pointer">
              <summary className="text-xl font-medium text-gray-700 mb-2 hover:text-blue-600 transition-all duration-300">How can I join?</summary>
              <p className="text-gray-600">Create an account on our Join Us page to join our community.</p>
            </details>
          </div>

          {/* Contact Icons Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <div className="flex items-center gap-6">
              <FaRegEnvelope size={28} className="text-blue-600 hover:text-blue-700 transition-all duration-300" />
              <p className="text-gray-600">support@example.com</p>
            </div>
            <div className="flex items-center gap-6">
              <FaComment size={28} className="text-green-600 hover:text-green-700 transition-all duration-300" />
              <p className="text-gray-600">Chat with us</p>
            </div>
            <div className="flex items-center gap-6">
              <FaMapMarkedAlt size={28} className="text-red-600 hover:text-red-700 transition-all duration-300" />
              <p className="text-gray-600">Find us on the map</p>
            </div>
          </div>
        </div>

        {/* Payment Method Section */}
        <div className="bg-white shadow-lg p-8 mb-12 rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Payment Method</h2>
          <div className="space-y-4">
            <p className="text-gray-600">We accept all major credit and debit cards. Please choose a payment method below:</p>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
              Pay with Credit Card
            </button>
            <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300">
              Pay with PayPal
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-16 animate__animated animate__fadeIn animate__delay-1s">
          <img src="/helpimage.jpg" alt="Help" className="w-1/2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300" />
        </div>
      </div>

      {/* Chat Functionality Section */}
      <div className="fixed bottom-0 right-0 m-6 bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Chat with Us</h3>
        <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`p-2 ${msg.sender === 'user' ? 'bg-blue-200 text-right' : 'bg-gray-200'}`}>
              <p>{msg.message}</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Send
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">For more information, feel free to explore!</p>
          <div className="flex justify-center gap-10">
            <button className="text-blue-400 hover:text-blue-500 transition-all duration-300">Read More</button>
            <button className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-all duration-300">
              <FaThumbsUp size={24} />
              <span>Like</span>
            </button>
          </div>
        </div>
        <Link href="/">
          <button className="w-200 absolute   bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 -mt-5 ml-96">
            Back Home
          </button>
        </Link>
      </footer>
      <Footer/>
    </div>
   
  );
};

export default GetHelp;
