import { useState } from "react";
import "./CreateProduct.css";
import useApi from "../../Hooks/UseApi";
import axios from "axios";
import toastr from "toastr";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("men's clothing");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { data, isLoaded, error, fetchData } = useApi();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      image,
      category,
      description,
      price: parseFloat(price),
    };
    const response = axios
      .post("https://fakestoreapi.com/products", {
        newProduct,
      })
      .then((response) => {
        navigate("/Dashboard")
        toastr.success(`Nouveau produit ajouté : ${productName}`, "Succès", {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-bottom-right",
            timeOut: 3000,
          });
         
      })
      .catch((error) => {
        toastr.error("Erreur lors de la création du produit", "Erreur", {
            closeButton: true,
            progressBar: true,
            positionClass: "toast-bottom-right",
            timeOut: 3000,
          });
      });
  };

  return (
    <div className="create-product">
      <h2>Créer un nouveau produit</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom du produit :</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Nom du produit"
            required
          />
        </div>

        <div className="form-group">
          <label>URL de l'image :</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="URL de l'image"
            required
          />
        </div>

        <div className="form-group">
          <label>Catégorie :</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description :</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description du produit"
            required
          />
        </div>

        <div className="form-group">
          <label>Prix (€) :</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Prix du produit"
            required
          />
        </div>

        <button type="submit">Créer le produit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
