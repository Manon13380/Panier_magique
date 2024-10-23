import { useContext, useEffect, useState } from "react";
import DisplayProducts from "../Components/DisplayProducts/DisplayProducts";
import useApi from "../Hooks/UseApi";
import Layout from "../Components/Layouts";
import { MyContext } from "../Context/AppContext";

const AllProducts = () => {
  const { data, isLoaded, error, fetchData } = useApi();
  const [products, setProducts] = useState([]);
  const { store, setStore } = useContext(MyContext);

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products", "get");
  }, []);

  useEffect(() => {
    if (store.searchTerm !== "") {
      const filteredProducts = data.filter((item) =>
        item.title.toLowerCase().includes(store.searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      if (isLoaded && Array.isArray(data)) {
        setProducts(data);
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
          <DisplayProducts item={products} title="Tous nos produits" />
        ) : (
          <div className="Container">
          <h2>Tous nos produits</h2>
          <p>Aucun produit disponible</p>
        </div>
        )}
      </Layout>
    </>
  );
};

export default AllProducts;
