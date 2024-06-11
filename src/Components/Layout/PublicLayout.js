import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const PublicLayout = ({ children }) => {
  return (
    <div
      style={{
        background: "linear-gradient(161deg, #3C3CA4 2.41%, #22224A 89.5%)",
      }}
    >
      <div className="flex flex-col">
        <div className="container mx-auto">
          <Header />
        </div>
        {children}
        <div>
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
      </div>
    </div>
  );
};

export default PublicLayout;
