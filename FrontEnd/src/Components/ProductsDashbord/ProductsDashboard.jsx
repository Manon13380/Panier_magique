import { useLocation, useParams } from "react-router-dom";
import "../ProductsDashbord/ProductsDashboard.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/AppContext";
import useApi from "../../Hooks/UseApi";


const ProductsDashboard = () => {
  const { data, isLoaded, error, fetchData } = useApi();
  const { store, setStore } = useContext(MyContext);
  const { category } = useParams();
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (category) {
      case "AllProducts":
        fetchData("https://fakestoreapi.com/products", "get");
        setTitle("Allproducts");
        setStore({ ...store, currentUrl: location.pathname });
        break;
      case "Electronics":
        fetchData(
          "https://fakestoreapi.com/products/category/electronics",
          "get"
        );
        setTitle("Electronics");
        setStore({ ...store, currentUrl: location.pathname });
        break;
      case "Jewelery":
        fetchData("https://fakestoreapi.com/products/category/jewelery", "get");
        setTitle("Jewelery");
        setStore({ ...store, currentUrl: location.pathname });
        break;
      case "MensClothing":
        fetchData(
          "https://fakestoreapi.com/products/category/men's clothing",
          "get"
        );
        setTitle("Men's clothing");
        setStore({ ...store, currentUrl: location.pathname });
        break;
      case "WomensClothing":
        fetchData(
          "https://fakestoreapi.com/products/category/women's clothing",
          "get"
        );
        setTitle("clothing");
        setStore({ ...store, currentUrl: location.pathname });
        break;
      default:
        fetchData("https://fakestoreapi.com/products", "get");
        setTitle("Allproducts");
        setStore({ ...store, currentUrl: location.pathname });
        break;
    }
  }, [category]);

  return (
    <>
      {error ? (
        <div className="Container">Erreur : {error}</div>
      ) : !isLoaded ? (
        <div className="Container">Chargement ...</div>
      ) : data.length > 0 ? (
        <div id="dashboardMain">
          <div id="titleBox">
            <h2>{title}</h2>
            <button className="create-btn">Créer un produit</button>
          </div>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Catégorie</th>
                  <th>Produit</th>
                  <th>Description</th>
                  <th>Prix</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.image}
                        alt={`Produit ${product.title}`}
                        className="product-img"
                      />
                    </td>
                    <td>{product.category}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}€</td>
                    <td className="actionButton">
                      <button className="edit-btn">Modifier</button>
                      <button className="delete-btn">Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      ) : (
        <div className="Container">
          <h2>{title}</h2>
          <p>Aucun produit disponible</p>
        </div>
      )}
    </>
  );
};

export default ProductsDashboard;
