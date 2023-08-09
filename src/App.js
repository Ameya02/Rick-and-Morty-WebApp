import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
function App() {
  return (
    <>
    <Navbar />

    <BrowserRouter basename='document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf("/")'>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path = "/:id" element={<Characters />} />
      <Route/>
    </Routes>
    </BrowserRouter>    
    <Footer />
    </>
  );
}

export default App;
