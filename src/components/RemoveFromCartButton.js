import axios from "axios";
import React from "react";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

function RemoveFromCartButton({ cartitem, onUpdateCart, setCartitems }) {
  const handleRemoveFromCart = () => {
    axios
      .delete(`http://localhost:8000/api/delete_cart_item/${cartitem.id}/`)
      .then((response) => {
        console.log(response.data);
        onUpdateCart();
        setCartitems((cartitems) =>
          cartitems.filter((item) => item.id !== cartitem.id)
        ); // update the cartItems state immediately
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <button className="cart_item_button_remove" onClick={handleRemoveFromCart}/>
  );
}

export default RemoveFromCartButton;
