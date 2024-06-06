import React from "react";
import Header from "./Components/Header";
import BodySection from "./Components/BodySection";

const App = () => {
  return (
    <div
      style={{
        background: "linear-gradient(161deg, #3C3CA4 2.41%, #22224A 89.5%)",
      }}
    >
      <div className="container mx-auto">
        <div className="px-5 sm:px-0">
          <Header />
          <BodySection />
        </div>
      </div>
    </div>
  );
};

export default App;
