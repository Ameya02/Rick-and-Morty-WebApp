import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Characters />} />
          <Route />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
