import { Link, useParams } from "react-router-dom";
import useApi from "../../Hooks/UseApi";
import { useContext, useEffect } from "react";
import Layout from "../../Components/Layouts";
import { addOnCart } from "../../Utils/CartUtils";
import { MyContext } from "../../Context/AppContext";
import "../Product/Product.css";

const Product = () => {
  const { data, isLoaded, error, fetchData } = useApi();
  const { id } = useParams();
  const { store, setStore } = useContext(MyContext);

  useEffect(() => {
    fetchData(`https://fakestoreapi.com/products/${id}`, "get");
  }, []);

  return (
    <>
      <Layout>
        {error ? (
          <div className="Container">Erreur : {error}</div>
        ) : !isLoaded ? (
          <div className="Container">Chargement ...</div>
        ) : (
          Object.keys(data).length > 0 && (
            <div className="Container">
              <Link to={store.currentUrl} id="backButton"><button>  &larr; Retour</button></Link>
              <div className="productContainer">
                <h2>{data.title}</h2>
                <div id="infoProdContainer">
                  <img
                    id="productImage"
                    src={data.image}
                    alt="Image du produit"
                  />
                  <p>
                    {" "}
                    <b>Description :</b> {data.description}
                  </p>
                  <p>
                    <b>Categorie : </b>
                    {data.category}
                  </p>
                  <p>
                    <b>Prix :</b> {data.price} €
                  </p>
                  <div id="productButton">
                    <button
                      id="addOnCartButton"
                      onClick={() => addOnCart(data, store, setStore)}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Layout>
    </>
  );
};

export default Product;
