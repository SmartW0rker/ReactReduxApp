import './App.css';
import Header from "./components/Header"
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route exact path="/products" element={<ProductListing/>} />
                <Route exact path="/products/:id" element={<ProductDetails/>} />
                <Route
                    path="*"
                    element={<Navigate to="/products" replace />}
                />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
