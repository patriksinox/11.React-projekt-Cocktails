import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Error from "./components/Error";
import SharedNav from "./components/SharedNav";
import Footer from "./components/Footer";
import Drink from "./components/Drink";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<SharedNav />}>
          <Route index path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="drink/:strDrink" element={<Drink />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
