import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <Link to="/products-page">
        <img
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          src="https://www.kipling-usa.com/on/demandware.static/-/Sites-kip-Library/default/dw3000b06c/images/thankyou-summary-newUser.jpg"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Checkout;
