import { Link, useLocation, useParams } from "react-router-dom";
import "../ProductsDashbord/ProductsDashboard.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/AppContext";
import useApi from "../../Hooks/UseApi";
import axios from "axios";
import toastr from "toastr";

const ProductsDashboard = () => {
  const { data, isLoaded, error, fetchData } = useApi();
  const { store, setStore } = useContext(MyContext);
  const { category } = useParams();
  const [title, setTitle] = useState("");
  const location = useLocation();
  const [isEditing, setIsEditing]= useState(false)
  const [editingId, setEditingId] = useState(null);
  const [editedProduct, setEditedProduct ] = useState({
    image: "",
    category: "",
    title: "",
    description: "",
    price: "",
  });

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

  const deleteProduct = async (productId) => {
    const response = await axios.delete(
      `https://fakestoreapi.com/products/${productId}`
    );
    const deletedProduct = response.data;
    if (response.data.id === productId) {
      toastr.success(`Produit supprimé : ${deletedProduct.title}`, "Succès", {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
        timeOut: 3000,
      });
    } else {
      toastr.error("Erreur lors de la suppression du produit", "Erreur", {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
        timeOut: 3000,
      });
    }
  };

  const editingProduct = (product) => {
    setIsEditing(true)
    setEditingId(product.id);
    setEditedProduct({
      image: product.image,
      category: product.category,
      title: product.title,
      description: product.description,
      price: product.price,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({...editedProduct,
      [name]: value, 
    });
  }

  const saveUpdateProduct = async (productId) => {
    const response = await axios.put(
      `https://fakestoreapi.com/products/${productId}`
    );
    if (response.data.id === productId) {
      toastr.success(`Produit modifié avec succès`, "Succès", {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
        timeOut: 3000,
      });
      setIsEditing(false)
      console.log(response.data)
    } else {
      toastr.error("Erreur lors de la modification du produit", "Erreur", {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
        timeOut: 3000,
      });
    }}

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
            <Link to='/Dashboard/CreateProduct'><button className="create-btn">Créer un produit</button></Link>
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
                    {editingId === product.id  && isEditing ? (
                      <input
                        type="text"
                        name="image"
                        value={editedProduct.image}
                        onChange={handleInputChange }
                      />
                    ) : (
                      <img
                        src={product.image}
                        alt={`Produit ${product.title}`}
                        className="product-img"
                      />
                    )}
                  </td>
                  <td>
                    {editingId === product.id && isEditing ? (
                      <input
                        type="text"
                        name="category"
                        value={editedProduct.category}
                        onChange={handleInputChange }
                      />
                    ) : (
                      product.category
                    )}
                  </td>
                  <td>
                    {editingId === product.id && isEditing ? (
                      <input
                        type="text"
                        name="title"
                        value={editedProduct.title}
                        onChange={handleInputChange }
                      />
                    ) : (
                      product.title
                    )}
                  </td>
                  <td>
                    {editingId === product.id && isEditing ? (
                      <input
                        type="text"
                        name="description"
                        value={editedProduct.description}
                        onChange={handleInputChange }
                      />
                    ) : (
                      product.description
                    )}
                  </td>
                  <td>
                    {" "}
                    {editingId === product.id && isEditing ? (
                      <input
                        type="text"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleInputChange }
                      />
                    ) : (
                      product.price + "€"
                    )}
                  </td>
                  <td className="actionButton">
                    {editingId === product.id && isEditing ? (
                      <button
                        onClick={() => saveUpdateProduct(product.id)}
                        className="edit-validate-btn"
                      >
                        Valider
                      </button>
                    ) : (
                      <button
                        onClick={() => editingProduct(product)}
                        className="edit-btn"
                      >
                        Modifier
                      </button>
                    )}

                    <button
                      onClick={() => {
                        deleteProduct(product.id);
                      }}
                      className="delete-btn"
                    >
                      Supprimer
                    </button>
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
