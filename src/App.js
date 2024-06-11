import React from "react";
import AppComponent from "./Components/AppComponent";
import PublicLayout from "./Components/Layout/PublicLayout";

const App = () => {
  return (
    <PublicLayout>
      <div className="container mx-auto">
        <AppComponent />
      </div>
    </PublicLayout>
  );
};

export default App;
