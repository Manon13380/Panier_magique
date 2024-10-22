import { useEffect, useState } from "react";
import DisplayProducts from "../Components/DisplayProducts/DisplayProducts";
import useApi from "../Hooks/UseApi";
import Layout from "../Components/Layouts";

const WomensClothing = () => {
  const { data, isLoaded, error, fetchData } = useApi();
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchData(
      "https://fakestoreapi.com/products/category/women's clothing",
      "get"
    );
  }, []);

  useEffect(() => {
    if (isLoaded && Array.isArray(data)) {
      setProducts(data)
    }
  }, [isLoaded, data]);

  if (error) {
    return <div>Erreur : {error}</div>;
  } else if (!isLoaded) {
    return <div className="loading">Chargement ...</div>;
  } else {
    return (
      <>
        <Layout>
          <DisplayProducts
            item={products}
            title="Nos produits dans la catégorie Women's Clothing"
          ></DisplayProducts>
        </Layout>
      </>
    );
  }
};

export default WomensClothing;
