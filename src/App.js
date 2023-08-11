import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import { Layout } from "antd";
const ApplyLayout = (page,pagename) => <Layout style={{  backgroundColor: "#1F2937"}}>
      <Navbar filter={pagename  === 'home' ? '' : 'hidden'} />

  {page}
  <Footer />

</Layout>;
function App() {

  return (
  

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ApplyLayout(<Home />,"home")} />
          <Route path="/:id" element={ApplyLayout(<Characters />,"characters")} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
