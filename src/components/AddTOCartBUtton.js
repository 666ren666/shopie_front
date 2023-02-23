import React, { useState } from "react";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";


function AddToCartButton({ product }) {

  const [quantity] = useState(1);
  const handleAddToCart = () => {
    alert('product added to your cart ');
    const data = {
      quantity: quantity,
      product_id: product.id,
    } ;

    axios.post("http://localhost:8000/api/add_to_cart/", data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);

      });
  };

  return (
    <div>
      <button className="add_button"  onClick={handleAddToCart}></button>
    </div>
  );
}

export default AddToCartButton;

