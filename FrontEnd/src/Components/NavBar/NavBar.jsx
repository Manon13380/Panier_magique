import { Link } from "react-router-dom";
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <>
      <div id="NavBar">
        <Link to = {`/Products/AllProducts`} className="custom-link ">All</Link>
        <Link to ={'/Products/MensClothing'} className="custom-link ">Men's Clothing</Link>
        <Link to ={'/Products/WomensClothing'} className="custom-link ">Women's Clothing</Link>
        <Link to ={'/Products/Jewelery'}className="custom-link ">Jewelery</Link>
        <Link to = {'/Products/Electronics'} className="custom-link ">Electronics</Link>
      </div>
    </>
  );
};

export default NavBar;
