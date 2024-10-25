import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../Styled_Components/Styled_Components";
import logo from "../../assets/images/Logo_Panier_Magique.webp";
import "../Header/Header.css";
import Panier from "../../assets/images/icons8-panier-64.png";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../Context/AppContext";
import Loupe from "../../assets/images/loupe.png";

const Header = () => {
  const { store, setStore } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState("");
  const timerRef = useRef(null);
  const location = useLocation();
  const basePath = location.pathname.split("/").slice(0, 2).join("/");

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (searchTerm.length >= 3) {
        setStore({ ...store, searchTerm: searchTerm });
      } else {
        setStore({ ...store, searchTerm: "" });
      }
    }, 500);

    return () => clearTimeout(timerRef.current);
  }, [searchTerm]);

  return (
    <>
      <div id="header">
        <div id="elementOne">
          <Link to={"/"}>
            <Logo src={logo}></Logo>
          </Link>
        </div>
        <div id="titles_header">
          <h1 id="title_header">Panier Magique</h1>
          <h2 id="subtitle_header">E-COMMERCE</h2>
        </div>
        <div id="rightHeader">
          {basePath != "/Product" && (
            <div id="searchContainer">
              <img id="searchIcon" src={Loupe} alt="Loupe" />{" "}
              <input
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                id="searchInput"
                type="text"
                placeholder="Rechercher un article"
              />
            </div>
          )}

          <Link to="/Login" className="link">
            Admin
          </Link>
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
