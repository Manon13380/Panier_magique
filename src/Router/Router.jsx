import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AppContext from "../Context/AppContext";
import AllProducts from "../Pages/AllProducts";
import MensClothing from "../Pages/Men'sClothing";
import WomensClothing from "../Pages/Women'sClothing";
import Jewelery from "../Pages/Jewelery";
import Electronics from "../Pages/Electronics";
import Cart from "../Pages/Cart";

const Router = () => {
  return (
    <>
      <AppContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/AllProducts/' element= {<AllProducts/>}/>
          <Route path ='/MensClothing' element={<MensClothing/>}></Route>
          <Route path = '/WomensClothing' element = {<WomensClothing/>}></Route>
          <Route path = '/Jewelery' element ={<Jewelery/>}></Route>
          <Route path = '/Electronics' element = {<Electronics/>}></Route>
          <Route path="/Panier" element = {<Cart/>}></Route>
        </Routes>
      </AppContext>
    </>
  );
};

export default Router;
