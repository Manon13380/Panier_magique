import { Link } from "react-router-dom";
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <>
      <div id="NavBar">
        <Link to = {`/Allproducts/`} className="custom-link ">All</Link>
        <Link to ={'/MensClothing'} className="custom-link ">Men's Clothing</Link>
        <Link to ={'/WomensClothing'} className="custom-link ">Women's Clothing</Link>
        <Link to ={'/Jewelery'}className="custom-link ">Jewelery</Link>
        <Link to = {'/Electronics'} className="custom-link ">Electronics</Link>
      </div>
    </>
  );
};

export default NavBar;
