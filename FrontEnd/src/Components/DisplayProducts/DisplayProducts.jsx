import { Link, useLocation } from "react-router-dom";
import "../DisplayProducts/DisplayProducts.css";
import { useContext } from "react";
import { MyContext } from "../../Context/AppContext";
import PaymentPanel from "../PaymentPanel/PaymentPanel";
import {
  addOnCart,
  deleteProduct,
  addQuantity,
  removeQuantity,
} from "../../Utils/CartUtils";

const DisplayProducts = ({ item, title }) => {
  const location = useLocation();
  const { store, setStore } = useContext(MyContext);

  return (
    <div className="container">
      <div className="Container">
        <h2>{title}</h2>
        <div id="cartContainer">
          <div id="productsContainer">
            {item.map((product) => (
              <div id="productContainer" key={product.id}>
                <img
                  id="productImage"
                  src={product.image}
                  alt="Image du produit"
                />
                <p className="productTitle">{product.title}</p>
                {location.pathname === "/Products/AllProducts" && (
                  <p>Categorie : {product.category}</p>
                )}
                <p>Prix : {product.price} €</p>
                {location.pathname != "/Panier" ? (
                  <div id="productButton">
                    <Link to={`/Product/${product.id}`}>
                      <button id="detailsButton">Détails</button>
                    </Link>
                    <button
                      id="addOnCartButton"
                      onClick={() => addOnCart(product, store, setStore)}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="quantity-container">
                      <button
                        onClick={() =>
                          removeQuantity(product.id, store, setStore)
                        }
                      >
                        -
                      </button>
                      <p>Quantité : {product.quantity}</p>
                      <button
                        onClick={() => addQuantity(product.id, store, setStore)}
                      >
                        +
                      </button>
                    </div>
                    <p>
                      Total : {(product.quantity * product.price).toFixed(2)} €
                    </p>
                    <button
                      onClick={() => deleteProduct(product.id, store, setStore)}
                      className="close-button"
                    >
                      x
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
          {location.pathname === "/Panier" && <PaymentPanel></PaymentPanel>}
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
