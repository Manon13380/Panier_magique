import { useContext } from "react";
import DisplayProducts from "../Components/DisplayProducts/DisplayProducts";
import Layout from "../Components/Layouts";
import { MyContext } from "../Context/AppContext";

const Cart = () => {
  const { store } = useContext(MyContext);

  return (
    <>
      <Layout>
        {store.cart.length > 0 ? (
          <DisplayProducts
            item={store.cart}
            title="Mon panier"
          ></DisplayProducts>
        ) : (
          <div id="Container">
            <h2>Mon panier</h2>
            <p>Vous n'avez pas d'article dans le panier</p>
          </div>
        )}
      </Layout>
    </>
  );
};
export default Cart;
