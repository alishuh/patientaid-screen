import React from "react";
import QRcode from "./images/QR_code.png";

const EntryPage = ({ onNext }) => {
    const handleVerification = () => {
        // Handle verification, code here idk
        // If verification is successful, proceed to the next page
        onNext();
    };

    return (
        <div>
            <h1>Scan the QR Code to go to verification page</h1>
            {/* Display QR Code */}
            <img src={QRcode} alt="QR Code" height = "100" width = "100"/>
            {/* Verification Code */}
            <h3>Enter this verification code on the verification page</h3>
            <p>Verification Code: ABC123</p>
            <button onClick={handleVerification}>Next</button>
        </div>
    );
};

export default EntryPage;
