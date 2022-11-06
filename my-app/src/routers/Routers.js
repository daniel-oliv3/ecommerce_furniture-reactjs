import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

/* ======= Routers ======= */
const Routers = () => {
    return (
        <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="shop" element={<Shop/>} />
            <Route path="Cart" element={<Cart/>} />
            <Route path="ProductDetails" element={<ProductDetails/>} />
            <Route path="Checkout" element={<Checkout/>} />
            <Route path="Login" element={<Login/>} />
            <Route path="Signup" element={<Signup/>} />
        </Routes>
    )
};

export default Routers;