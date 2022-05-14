import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import Item from "./components/demoItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProducts from "./pages/addProducts";
import Cart from './pages/Cart'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/items" element={<Item />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/addProducts" element={<AddProducts />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
