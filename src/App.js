import './App.css';
import Products from './components/Products';
import Product from './components/Product';
import React from "react";
import Navbar from './components/navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
    <Navbar />
      {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
     
    </div>
  </Router>
  );
}

export default App;
