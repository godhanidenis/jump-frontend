import React from "react";
import ContentSection from "./ContentSection";
import FormSection from "./FormSection";

const AppComponent = () => {
  return (
    <div className="mt-5 sm:mt-10 lg:mt-20">
      <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-20 w-full">
        <ContentSection />
        <FormSection />
      </div>
    </div>
  );
};

export default AppComponent;
