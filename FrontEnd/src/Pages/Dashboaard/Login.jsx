import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../Components/FormLogin/FormLogin";
import Layout from "../../Components/Layouts";
import toastr from "toastr";
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const Authentification = (e) => {
    e.preventDefault();
    if (userName == "admin") {
      if (password == "password") {
        fetch(
          "https://api.themoviedb.org/3/authentication/token/new?api_key=095ce1468f7fa286e78b099eb6bac9b1"
        )
          .then((res) => res.json())
          .then((result) => {
            sessionStorage.setItem("token", result.request_token);
            navigate("/Dashboard");
          });
      } else {
        navigate("/Login");
        toastr.error("Mauvais mot de passe", "Erreur", {
          closeButton: true,
          progressBar: true,
          positionClass: "toast-bottom-right",
          timeOut: 3000,
        });
      }
    } else {
      navigate("/Login");
      toastr.error("Utilisateur non trouvé", "Erreur", {
        closeButton: true,
        progressBar: true,
        positionClass: "toast-bottom-right",
        timeOut: 3000,
      });
    }
  };
  return (
    <>
      <Layout>
        <div className=" loginContainer ">
          <form className="authForm" onSubmit={Authentification}>
            <h2>Connexion au Dashboard Admin</h2>
            <FormLogin
              handleUserName={handleUserName}
              handlePassword={handlePassword}
              password={password}
              userName={userName}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
