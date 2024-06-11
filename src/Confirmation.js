import React from "react";
import ConfirmationComponent from "./Components/ConfirmationComponent";
import PublicLayout from "./Components/Layout/PublicLayout";

const Confirmation = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto h-[calc(100vh-329px)]">
        <ConfirmationComponent />
      </div>
    </PublicLayout>
  );
};

export default Confirmation;
