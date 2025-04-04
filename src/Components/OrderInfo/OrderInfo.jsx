import React from 'react';
import './OrderInfo.css';

const OrderInfo = () => {
  return (
    <div className="order-info">
      <h2>💐 How to Order Flowers via WhatsApp</h2>
      <ol>
        <li>Tap on any flower image to view the price.</li>
        <li>Click <strong>“Order via WhatsApp”</strong>.</li>
        <li>A pre-filled message will open in WhatsApp.</li>
        <li>Confirm your order with our florist.</li>
        <li>Make payment using our banking details below.</li>
        <li>Send proof of payment on WhatsApp to confirm your order.</li>
      </ol>

      <h3>💳 Banking Details</h3>
      <div className="bank-details">
        <p><strong>Bank Name:</strong> FNB</p>
        <p><strong>Account Name:</strong> Twinkle Dells (Pty) Ltd</p>
        <p><strong>Account Number:</strong> 63148404857</p>
        <p><strong>Branch Code:</strong> 210835</p>
        <p><strong>Reference:</strong> Your Name</p>
      </div>


      <p className="note">
        <strong>Note:</strong> Orders are processed only after payment is confirmed.
        For any questions or special requests, chat with us on WhatsApp.
      </p>
    </div>
  );
};

export default OrderInfo;
