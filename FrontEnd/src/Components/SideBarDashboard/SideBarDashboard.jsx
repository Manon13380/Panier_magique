import { Link, useLocation } from "react-router-dom";
import "../SideBarDashboard/SideBarDashboard.css";

const SideBarDashboard = () => {
  const location = useLocation()
  return (
    <div>
      <div className="sidebar">
          <h2 >Catégories</h2>
          <ul className="category-list">
            <li>
              <Link to ="/Dashboard/AllProducts" className={location.pathname === "/Dashboard/AllProducts" ? "active" : "noActive"}>AllProducts</Link>
            </li>
            <li>
              <Link to ="/Dashboard/MensClothing" className={location.pathname === "/Dashboard/MensClothing" ? "active" : "noActive"}>Men's Clothing</Link>
            </li>
            <li>
              <Link to ="/Dashboard/WomensClothing" className={location.pathname === "/Dashboard/WomensClothing" ? "active" : "noActive"}>Women's Clothing</Link>
            </li>
            <li>
              <Link to ="/Dashboard/Jewelery" className={location.pathname === "/Dashboard/Jewelery" ? "active" : "noActive"}>Jewelery</Link>
            </li>
            <li>
              <Link to ="/Dashboard/Electronics" className={location.pathname === "/Dashboard/Electronics" ? "active" : "noActive"}>Electronics</Link>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default SideBarDashboard;
