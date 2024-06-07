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
            "linear-gradient(90deg, #ffd873, #ffb080 10%, #ff6e98 30%, #f176bb 40%, #e87dd4 50%, #7dc2ff 80%, #bcf28f)",
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
