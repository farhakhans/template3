import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-100 shadow-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo1.png" alt="Logo" className="w-10 h-auto" />
        </div>

        {/* Navigation Links Moved to Left */}
        <nav className="flex space-x-6 ml-80">
          <Link href="/allDetailPage"
             className="text-blue-700 hover:text-black pl-40 font-bold">FIND A STORE
          </Link>
          <Link href="/contactUs"
             className="text-blue-700 hover:text-black font-bold">HELP
          </Link>
          <Link href="/joinUs"
           className="text-blue-700 hover:text-black font-bold">JOIN US
          </Link>
          <Link href="/loginPage"
           className="text-blue-700 hover:text-black font-bold">SIGN IN
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="relative w-full max-w-xs hidden sm:flex pl-20">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div className="absolute left-24  top-2">
            <img src="/search.png" alt="Search Icon" className="w-5 h-5" />
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <img src="/Heart.png" alt="Heart Icon" className="w-5 h-5 sm:w-5 sm:h-5" />
          <img src="/bag.png" alt="Bag Icon" className="w-5 h-5 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Category Links */}
     
      <div className="bg-white py-3 px-4"> 
      <img src="./right tick.png"alt="img" className=""></img>
        <nav className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-4">
          <Link href="#"
             className="text-blue-600 font-semibold hover:text-gray-500">News & Featured
          </Link>
          <Link href="#"
            className="text-blue-600 font-semibold hover:text-gray-500">Men
          </Link>
          <Link href="#"
             className="text-blue-600 font-semibold hover:text-gray-500">Women
          </Link>
          <Link href="#"
            className="text-blue-600 font-semibold hover:text-gray-500">Kids
          </Link>
          <Link href="#"
             className="text-blue-600 font-semibold hover:text-gray-500">Sale
          </Link>
          <Link href="#"
             className="text-blue-600 font-semibold hover:text-gray-500">SNKRS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;