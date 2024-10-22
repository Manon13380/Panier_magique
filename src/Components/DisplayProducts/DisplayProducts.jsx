import { useLocation } from "react-router-dom";
import "../DisplayProducts/DisplayProducts.css";
import { useContext } from "react";
import AppContext, { MyContext } from "../../Context/AppContext";

const DisplayProducts = ({ item, title }) => {
  const location = useLocation();
  const { store, setStore } = useContext(MyContext);

  const addOnCart = (product) => {
  };

  return (
    <>
      <AppContext>
        <div id="Container">
          <h2>{title}</h2>
          <div id="productsContainer">
            {item.map((product, index) => (
              <div id="productContainer" key={index}>
                <img
                  id="productImage"
                  src={product.image}
                  alt="Image du produit"
                />
                <p className="description">{product.title}</p>
                {location.pathname === "/Allproducts/" && (
                  <p>Categorie : {product.category}</p>
                )}
                <p>{product.price} €</p>
                <button onClick={() => addOnCart(product)}>
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        </div>
      </AppContext>
    </>
  );
};

export default DisplayProducts;
