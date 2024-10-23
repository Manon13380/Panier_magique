import { useContext, useEffect, useState } from "react";
import DisplayProducts from "../Components/DisplayProducts/DisplayProducts";
import useApi from "../Hooks/UseApi";
import Layout from "../Components/Layouts";
import { MyContext } from "../Context/AppContext";


const MensClothing = () => {
  const { data, isLoaded, error, fetchData } = useApi();
  const [products, setProducts] = useState([]);
  const { store } = useContext(MyContext);


  useEffect(() => {
    fetchData(
      "https://fakestoreapi.com/products/category/men's clothing",
      "get"
    );
  }, []);
  

  useEffect(() => {
    if (isLoaded && Array.isArray(data)) {
      setProducts(data);
      if (store.searchTerm !== "") {
        const filteredProducts = data.filter((item) =>
          item.title.toLowerCase().includes(store.searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
      }
    }
  }, [store.searchTerm, data, isLoaded]);

  return (
    <>
      <Layout>
        {error ? (
          <div className="Container">Erreur : {error}</div>
        ) : !isLoaded ? (
          <div className="Container">Chargement ...</div>
        ) : products.length > 0 ? (
          <DisplayProducts item={products} title="Nos produits dans la catégorie Men's clothing" />
        ) : (
          <div className="Container">
          <h2>Nos produits dans la catégorie Men's clothing</h2>
          <p>Aucun produit disponible</p>
        </div>
        )}
      </Layout>
    </>
  );
};

export default MensClothing;
