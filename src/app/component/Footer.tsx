import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      {/* Footer Container */}
      <div className="container mx-auto px-6 md:px-12 flex flex-wrap justify-between">

        {/* About Us Section */}
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">FIND A STORE</h2>
          <ul className="space-y-2">
            <li>
              <a href="BECOME A MEMBER" className="text-gray-400 hover:text-white transition">BECOME A MEMBER</a>
            </li>
            <li>
              <a href="SIGN UP FOR EMAIL" className="text-gray-400 hover:text-white transition">SIGN UP FOR EMAIL</a>
            </li>
            <li>
              <a href="Send Us Feedback" className="text-gray-400 hover:text-white transition">Send Us Feedback </a>
            </li>
            <li>
              <a href="STUDENT DISCOUNTS" className="text-gray-400 hover:text-white transition">STUDENT DISCOUNTS</a>
            </li>
          </ul>
        </div>

        {/* GET HELP */}
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">GET HELP</h2>
          <ul className="space-y-2">
            <li>
              <a href="Order Status" className="text-gray-400 hover:text-white transition">Order Status</a>
            </li>
            <li>
              <a href="Delivery" className="text-gray-400 hover:text-white transition">Delivery</a>
            </li>
            <li>
              <a href="Returns" className="text-gray-400 hover:text-white transition">Returns</a>
            </li>
            <li>
              <a href="Payment Option" className="text-gray-400 hover:text-white transition">Payment Option</a>
            </li>
            <li>
              <a href="Contact Us On Nike.com Inquiries" className="text-gray-400 hover:text-white transition">Contact Us On Nike.com Inquiries</a>
            </li>
            <li>
              <a href="Contact Us On All Other Inquiries " className="text-gray-400 hover:text-white transition">Contact Us On All Other Inquiries</a>
            </li>

            
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex-1 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-4">ABOUT NIKE</h2>
          <ul className="space-y-2">
            <li>
              <a href="News" className="text-gray-400 hover:text-white transition">News</a>
            </li>
            <li>
              <a href="Careers" className="text-gray-400 hover:text-white transition">Careers</a>
            </li>
            <li>
              <a href="Investors" className="text-gray-400 hover:text-white transition">Investors</a>
            </li>
            <li>
              <a href="Sustainability" className="text-gray-400 hover:text-white transition">Sustainability</a>
            </li>
          </ul>
        </div>

       </div>
          {/* Footer Bottom */}
      <div className="container mx-auto px-6 flex justify-between items-center  text-sm text-gray-400">
        {/* Footer Links */}
        <div className='mt-7 ml-6'>
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>

            {/* Links Section on the Left */}
          <div className="flex space-x-6 w-full md:w-auto mt-6 md:mt-0 translate-x-96 -translate-y-5">
            <h1 className="text-sm hover:text-gray-400 cursor-pointer transition ml-80">Guides</h1>
            <h1 className="text-sm hover:text-gray-400 cursor-pointer transition">Terms of Sale</h1>
            <h1 className="text-sm hover:text-gray-400 cursor-pointer transition">Terms of Use</h1>
            <h1 className="text-sm hover:text-gray-400 cursor-pointer transition">Nike Privacy Policy</h1>
          </div>
        </div>

        {/* Social Media Icons Section (Right Side) */}
        <div className="flex space-x-6 -mt-16">
          {/* Add your icons here */}
          <a href="twetr.png" className="text-gray-400 hover:text-white transition">
            <img src="/twetr.png" alt="Facebook" className="w-6 h-6 -mt-60" />
          </a>
          <a href="facebook.png" className="text-gray-400 hover:text-white transition">
            <img src="/facebook.png" alt="Instagram" className="w-6 h-6 -mt-60" />
          </a>
          <a href="youtube.png" className="text-gray-400 hover:text-white transition">
            <img src="/youtube.png" alt="Twitter" className="w-6 h-6 -mt-60" />
          </a>
          <a href="instagram.png" className="text-gray-400 hover:text-white transition">
            <img src="/instagram.png" alt="YouTube" className="w-6 h-6 -mt-60" />
          </a>
        </div>
    </div>
    </div>
  );
};

export default Footer;
