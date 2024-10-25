import { Link, useLocation } from "react-router-dom";
import "../NavBar/NavBar.css";

const NavBar = () => {
  const location = useLocation();
  return (
    <>
      <div id="NavBar">
        <Link
          to={`/Products/AllProducts`}
          className={
            location.pathname === "/Products/AllProducts"
              ? "active"
              : "noActive"
          }
        >
          All
        </Link>
        <Link
          to={"/Products/MensClothing"}
          className={
            location.pathname === "/Products/MensClothing"
              ? "active"
              : "noActive"
          }
        >
          Men's Clothing
        </Link>
        <Link
          to={"/Products/WomensClothing"}
          className={
            location.pathname === "/Products/WomensClothing"
              ? "active"
              : "noActive"
          }
        >
          Women's Clothing
        </Link>
        <Link
          to={"/Products/Jewelery"}
          className={
            location.pathname === "/Products/Jewelery" ? "active" : "noActive"
          }
        >
          Jewelery
        </Link>
        <Link
          to={"/Products/Electronics"}
          className={
            location.pathname === "/Products/Electronics"
              ? "active"
              : "noActive"
          }
        >
          Electronics
        </Link>
      </div>
    </>
  );
};

export default NavBar;
