import React, { useContext } from "react";
import "./PaymentPanel.css";
import { MyContext } from "../../Context/AppContext";
import { PaymentIcon } from "../../Styled_Components/Styled_Components";
import AEIcon from "../../assets/images/AE.png"
import CBIcon from "../../assets/images/CB.png"
import PaypalIcon from "../../assets/images/paypal.png"
import VisaIcon from "../../assets/images/visa.png"

const PaymentPanel = () => {
  const { store } = useContext(MyContext);
  const paymentPanelClass =
    store.cart.length < 3 ? "payment-panel-fixed" : "payment-panel-sticky";
  const totalHT = store.totalCart - store.totalCart * 0.2;
  const totalHTAPayerArrondi = totalHT.toFixed(2);
  const totalAPayerArrondi = store.totalCart.toFixed(2);

  return (
    <div className={`${paymentPanelClass} payment-panel`}>
      <h2>Récapitulatif</h2>
      <div className="payment-info">
        <p>Total HT: {totalHTAPayerArrondi} €</p>
        <p>TVA: 20 %</p>
        <h3>À Payer : {totalAPayerArrondi} €</h3>
      </div>
      <button className="payment-button">Valider mon panier</button>
      <div id="infoPayment">
        <div id="LogoPaymentContainer">
          <PaymentIcon src={CBIcon}></PaymentIcon>
          <PaymentIcon src={VisaIcon}></PaymentIcon>
          <PaymentIcon src={PaypalIcon}></PaymentIcon>
          <PaymentIcon src={AEIcon}></PaymentIcon>
        </div>
        <p>Paiement sécurisé</p>
      </div>
    </div>
  );
};

export default PaymentPanel;
