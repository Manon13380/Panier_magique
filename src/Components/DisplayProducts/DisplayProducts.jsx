import { useLocation } from "react-router-dom";
import "../DisplayProducts/DisplayProducts.css";
import { useContext } from "react";
import { MyContext } from "../../Context/AppContext";
import PaymentPanel from "../PaymentPanel/PaymentPanel";
import { addOnCart, deleteProduct, addQuantity, removeQuantity } from '../../Utils/CartUtils';


const DisplayProducts = ({ item, title }) => {
  const location = useLocation();
  const { store, setStore } = useContext(MyContext);

  return (
    <>
      <div className="Container">
        <h2>{title}</h2>
        <div id="cartContainer">
          <div id="productsContainer">
            {item.map((product, index) => (
              <div id="productContainer" key={product.id}>
                <img
                  id="productImage"
                  src={product.image}
                  alt="Image du produit"
                />
                <p className="description">{product.title}</p>
                {location.pathname === "/Allproducts" && (
                  <p>Categorie : {product.category}</p>
                )}
                <p>{product.price} €</p>
                {location.pathname != "/Panier" ? (
                  <button onClick={() => addOnCart(product, store, setStore)}>
                    Ajouter au panier
                  </button>
                ) : (
                  <>
                    <div className="quantity-container">
                      <button onClick={() => removeQuantity(product.id, store, setStore)}>
                        -
                      </button>
                      <p>Quantité : {product.quantity}</p>
                      <button onClick={() => addQuantity(product.id, store, setStore)}>+</button>
                    </div>
                    <p>Total : {(product.quantity * product.price).toFixed(2)} €</p>
                    <button
                      onClick={() => deleteProduct(product.id,store, setStore)}
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
    </>
  );
};

export default DisplayProducts;
