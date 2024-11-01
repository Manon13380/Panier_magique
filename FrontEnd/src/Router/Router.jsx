import { Routes, Route } from "react-router-dom";
import AppContext from "../Context/AppContext";
import Cart from "../Pages/Cart";
import Login from "../Pages/Dashboaard/Login";
import Dashboard from "../Pages/Dashboaard/Dashboard";
import PrivateRouter from "./PrivateRouter";
import Products from "../Pages/Products";
import Product from "../Pages/Product/Product";
import PaymentStatus from "../Pages/PaymentStatus";

const Router = () => {
  return (
    <>
      <AppContext>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Products/:category" element={<Products />} />
          <Route path="/Product/:id" element={<Product />}></Route>
          <Route path="/Panier" element={<Cart />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/success" element={<PaymentStatus />}></Route>
          <Route path="/cancel" element={<PaymentStatus />}></Route>
          <Route element={<PrivateRouter />}>
            <Route path="/Dashboard/" element={<Dashboard />}></Route>
            <Route path="/Dashboard/:category" element={<Dashboard />}></Route>
            <Route
              path="/Dashboard/CreateProduct"
              element={<Dashboard />}
            ></Route>
          </Route>
        </Routes>
      </AppContext>
    </>
  );
};

export default Router;
