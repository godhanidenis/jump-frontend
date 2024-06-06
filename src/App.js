import React from "react";
import Header from "./Components/Header";
import BodySection from "./Components/BodySection";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div
      style={{
        background: "linear-gradient(161deg, #3C3CA4 2.41%, #22224A 89.5%)",
      }}
    >
      <div className="container mx-auto pb-5">
        <Header />
        <BodySection />
      </div>
      <div className="bg-[#2B2B5C] w-full h-12" />
      <div
        className="w-full h-1"
        style={{
          background:
            "var(--yellow-peach, linear-gradient(90deg, #FFC958 0%, #FE7B94 100%))",
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
