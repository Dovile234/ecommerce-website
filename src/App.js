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
import Cart from "./pages/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import ErrorPage from "./pages/ErrorPage";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>FURNITURE.</title>
        <link rel="canonical" href="https://furninatur.netlify.app/" />
        <meta name="description" content="Furniture shop" />
      </Helmet>
      <ShopContextProvider>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:id" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:item" element={<Product />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Newsletter />
          <Footer />
        </ScrollToTop>
      </ShopContextProvider>
    </div>
  );
}

export default App;
