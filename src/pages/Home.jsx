import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
