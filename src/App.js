import React from "react";
import { Route, Routes } from "react-router-dom/dist";
import MainLayout from "./components/mainLayout/MainLayout";
import SecuredLayout from "./layouts/securedLayout/SecuredLayout";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<MainLayout />} />
          <Route path="secured/*" element={<SecuredLayout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
