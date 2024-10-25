import { useContext, useEffect, useState } from "react";
import DisplayProducts from "../Components/DisplayProducts/DisplayProducts";
import useApi from "../Hooks/UseApi";
import Layout from "../Components/Layouts";
import { MyContext } from "../Context/AppContext";
import { useLocation, useParams } from "react-router-dom";

const Products = () => {
  const { data, isLoaded, error, fetchData } = useApi();
  const [products, setProducts] = useState([]);
  const { store, setStore } = useContext(MyContext);
  const { category } = useParams();
  const [title, setTitle ]= useState('');
  const location = useLocation()

  useEffect(() => {
    switch (category) {
      case "AllProducts":
        fetchData("https://fakestoreapi.com/products", "get");
        setTitle("Tous nos produits");
        setStore({...store, currentUrl : location.pathname})
        break;
      case "Electronics":
        fetchData(
          "https://fakestoreapi.com/products/category/electronics",
          "get"
        );
        setTitle( "Nos produits dans la catégorie Electronics");
        setStore({...store, currentUrl : location.pathname})
        break;
      case "Jewelery":
        fetchData("https://fakestoreapi.com/products/category/jewelery", "get");
        setTitle("Nos produits dans la catégorie Jewelery");
        setStore({...store, currentUrl : location.pathname})
        break;
      case "MensClothing":
        fetchData(
          "https://fakestoreapi.com/products/category/men's clothing",
          "get"
        );
        setTitle("Nos produits dans la catégorie Men's clothing");
        setStore({...store, currentUrl : location.pathname})
        break;
      case "WomensClothing":
        fetchData(
          "https://fakestoreapi.com/products/category/women's clothing",
          "get"
        );
        setTitle("Nos produits dans la catégorie Women's clothing");
        setStore({...store, currentUrl : location.pathname})
        break;
      default:
        fetchData("https://fakestoreapi.com/products", "get");
        setTitle("Tous nos produits");
        setStore({...store, currentUrl : location.pathname})
        break;
    }
  }, [category]);

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
          <DisplayProducts item={products} title={title} />
        ) : (
          <div className="Container">
            <h2>{title}</h2>
            <p>Aucun produit disponible</p>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Products;
