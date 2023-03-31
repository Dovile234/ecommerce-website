import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:id" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:item" element={<Product />} />
        </Routes>
        <Newsletter />
        <Footer />
      </ScrollToTop>
    </div>
  );
}

export default App;
