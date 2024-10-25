import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
 
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

  const deconnexion = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div id="header">
        <div id="elementOne">
          <Link to={"/"}>
            <Logo src={logo}></Logo>
          </Link>
        </div>
        <div id="titles_header">
          <h1 id="title_header">
            {!(location.pathname === "/Dashboard" || location.pathname.startsWith("/Dashboard/")) ? "Panier Magique" : "Dashboard"}
          </h1>
          <h2 id="subtitle_header">
            {!(location.pathname === "/Dashboard" || location.pathname.startsWith("/Dashboard/"))
              ? "E-COMMERCE"
              : "Panier Magique"}
          </h2>
        </div>
        <div id="rightHeader">
          {basePath != "/Product" && !(location.pathname === "/Dashboard" || location.pathname.startsWith("/Dashboard/")) && (
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
          {location.pathname != "/Dashboard"  ? 
             (
              <Link to="/Login" className="link">
                Admin
              </Link>
            
          ) : (
            <button onClick={() => deconnexion()}>Déconnexion</button>
          )}

          {location.pathname != "/Dashboard" && (
            <div className="cart-container">
              <Link to={"/Panier"}>
                <img id="LogoPanier" src={Panier} alt="panier" />{" "}
                {store.cart.length > 0 && (
                  <span className="cart-badge">{store.counterCart}</span>
                )}
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
