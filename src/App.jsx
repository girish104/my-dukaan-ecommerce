import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Context } from "./context/Context";

function App() {
  return (
    <Context>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </Context>
  );
}

export default App;
