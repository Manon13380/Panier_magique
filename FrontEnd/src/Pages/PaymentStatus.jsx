import Layout from "../Components/Layouts";
import { useLocation } from "react-router-dom";

const PaymentStatus = () => {
  const location = useLocation()

  return (
    <>
      <Layout>
        <div className="Container ">
          <h2>{location.pathname === "/success" ? "Commande validée" : "Erreur de lors de la commande"}</h2>
          <p>{location.pathname === "/success" ? "Merci pour votre achat" : "Veuillez réessayer"}</p>
        </div>
      </Layout>
    </>
  );
};
export default PaymentStatus;
