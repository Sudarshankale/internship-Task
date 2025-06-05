// ThankYouPopup.jsx
import React from "react";
import heartImg from "../assets/Heart.png"
import "./ThankYouPopup.css";

const ThankYouPopup = ({ onClose }) => {
  return (
    <div className="thank-you-popup">
      <div className="popup-content">
        <img src={heartImg} alt="Heart" style={{height:"41.95px", width:"41.95px"}}/>
        <h4> Thank you for connecting with us!</h4>
        <p>Our team will contact you soon.</p>
        <button className="btn btn-danger" onClick={onClose} style={{backgroundColor:"#ff3e54"}}>
          Done
        </button>
      </div>
    </div>
  );
};

export default ThankYouPopup;
