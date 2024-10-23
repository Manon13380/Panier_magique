import React, { useContext } from 'react';
import './PaymentPanel.css';
import { MyContext } from '../../Context/AppContext';

const PaymentPanel = () => {
const {store} = useContext(MyContext)
const paymentPanelClass = store.cart.length < 4 ? 'payment-panel-fixed' : 'payment-panel-sticky';
const totalAPayer = store.totalCart - (store.totalCart * 0.20)
const totalAPayerArrondi = totalAPayer.toFixed(2); 


  return (
    <div className={`${paymentPanelClass} payment-panel`}>
      <h2>Paiement</h2>
      <div className="payment-info">
        <p>Total HT: {totalAPayerArrondi} €</p>
        <p>TVA: 20 %</p>
        <h3>À Payer : {store.totalCart} €</h3>
      </div>
      <button  className="payment-button">
        Payer
      </button>
    </div>
  );
};

export default PaymentPanel;