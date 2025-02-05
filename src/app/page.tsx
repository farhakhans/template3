

import Navbar from "./component/Navbar";
import HeroSection from "./component/Hero";
import Footer from "./component/Footer";






// src/app/page.tsx
const HomePage = () => {
  return (
    <div>
  <Navbar/>
  <HeroSection params={{
        HeroSection: ""
      }}/>
  <Footer/>




    </div>
  );
};

export default HomePage; // Default export hona chahiye
