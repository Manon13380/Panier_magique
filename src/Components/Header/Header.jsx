import { Link } from "react-router-dom";
import { Logo } from "../../Styled_Components/Styled_Components";
import logo from "../../assets/images/Logo_Panier_Magique.webp";
import "../Header/Header.css";
import Panier from "../../assets/images/icons8-panier-64.png";
import { useContext } from "react";
import { MyContext } from "../../Context/AppContext";

const Header = () => {
  const { store, setStore } = useContext(MyContext);
  return (
    <>
      <div id="header">
        <Link to={"/"}>
          <Logo src={logo}></Logo>
        </Link>
        <div id="titles_header">
          <h1 id="title_header">Panier Magique</h1>
          <h2 id="subtitle_header">E-COMMERCE</h2>
        </div>
        <div id="rightHeader">
          <Link className="link">Admin</Link>
          <div className="cart-container">
            <Link to={"/Panier"}>
              <img id="LogoPanier" src={Panier} alt="panier" />{" "}
              {store.cart.length > 0 && (
                <span className="cart-badge">{store.counterCart}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
