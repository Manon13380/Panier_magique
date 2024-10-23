import { useLocation } from "react-router-dom";
import "../DisplayProducts/DisplayProducts.css";
import { useContext } from "react";
import AppContext, { MyContext } from "../../Context/AppContext";
import PaymentPanel from "../PaymentPanel/PaymentPanel";

const DisplayProducts = ({ item, title }) => {
  const location = useLocation();
  const { store, setStore } = useContext(MyContext);

  const addOnCart = (product) => {
    const existingProductIndex = store.cart.findIndex(
      (item) => item.id === product.id
    );

    let updatedCart = [...store.cart];

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
      updatedCart[existingProductIndex].total = updatedCart[existingProductIndex].quantity * updatedCart[existingProductIndex].price ;
    } else {
      updatedCart.push({ ...product, quantity: 1, total: product.price });
    }

    const newCounterCart = updatedCart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const newTotalCart = updatedCart.reduce(
      (acc, item) => acc + item.total,
      0
    );


    setStore({
      ...store,
      cart: updatedCart,
      counterCart: newCounterCart,
      totalCart : newTotalCart
    });
  };

  console.log(store.cart)

  const deleteProduct = (productId) => {
    let updatedCart = [...store.cart];
    updatedCart = updatedCart.filter((item) => item.id !== productId);

    const newCounterCart = updatedCart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const newTotalCart = updatedCart.reduce(
      (acc, item) => acc + item.total,
      0
    );

    setStore({
      ...store,
      cart: updatedCart,
      counterCart: newCounterCart,
      totalCart : newTotalCart
    });
  };

  return (
    <>
        <div id="Container">
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
                    <button onClick={() => addOnCart(product)}>
                      Ajouter au panier
                    </button>
                  ) : (
                    <>
                      <p>Quantité : {product.quantity} </p>
                      <p>Total : {product.quantity * product.price} €</p>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="close-button"
                      >
                        x
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
            {location.pathname === "/Panier" && (
              <PaymentPanel></PaymentPanel>
            )}
          </div>
        </div>
    </>
  );
};

export default DisplayProducts;
