import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Employee from "./pages/Employee"
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
