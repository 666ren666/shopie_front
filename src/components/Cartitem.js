import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import RemoveFromCartButton from "./RemoveFromCartButton";
import AmountButton from "./AmountButton";

function Cartitem({ cartitem, onUpdateCart, setCartitems }) {
  const [quantity, setQuantity] = useState(cartitem.quantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    axios
      .patch(`http://localhost:8000/api/cart_items/${cartitem.id}/`, {
        quantity: quantity + 1,
      })
      .then((response) => {
        onUpdateCart();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
      axios
        .patch(`http://localhost:8000/api/cart_items/${cartitem.id}/`, {
          quantity: quantity - 1,
        })
        .then((response) => {
          onUpdateCart();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="cart_item_container">
      <div className="cart_item_bg">
        <Row>
          <Col>
            <div className="cart_item_image">
              <img
                className="cart_item_image"
                src={
                  "http://localhost:8000/static" + cartitem.product.image
                }
                alt={cartitem.product.image}
              />
            </div>
          </Col>
          <Col>
            <div className="cart_item_info">
              <Row>
                <h3 className="cart_item_name">{cartitem.product.name}</h3>
              </Row>
              <Row>
                <h2 className="cart_item_text">
                  {cartitem.product.description}
                </h2>
              </Row>
              <Row>
                <h2 className="cart_item_text">
                  price - {cartitem.product.price}
                </h2>
              </Row>
            </div>
          </Col>
          <Col>
            <div className="cart_item_buttons">
              <div className="cart_item_amount">
                <AmountButton quantity={quantity} setQuantity={setQuantity} increase={increaseQuantity} decrease={decreaseQuantity}/>
              </div>
              <Col><RemoveFromCartButton cartitem={cartitem} onUpdateCart={onUpdateCart} setCartitems={setCartitems}/></Col>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Cartitem;



// import { Col, Row } from "react-bootstrap";
// import React from "react";
// import RemoveFromCartButton from "./RemoveFromCartButton";

// function Cartitem({ cartitem, onUpdateCart, setCartitems }) {
//   return (
//     <div className="cart_item_container">
//       <div className="cart_item_bg">
//         <Row>
//           <Col>
//             <div className="cart_item_image">
//               <img
//                 className="cart_item_image"
//                 src={"http://localhost:8000/static" + cartitem.product.image}
//                 alt={cartitem.product.image}
//               />
//             </div>
//           </Col>
//           <Col>
//             <div className="cart_item_info">
//               <Row>
//                 <h3 className="cart_item_name">{cartitem.product.name}</h3>
//               </Row>
//               <Row>
//                 <h2 className="cart_item_text">
//                   {cartitem.product.description}
//                 </h2>
//               </Row>
//               <Row>
//                 <h2 className="cart_item_price">
//                   price - {cartitem.product.price}
//                 </h2>
//               </Row>
//             </div>
//           </Col>
//           <Col>
//             <div className="cart_item_buttons">
//               <div className="cart_item_amount">
//                 <h1>AMOUNT - {cartitem.quantity}</h1>
//               </div>
//               <Col>
//                 <button className="cart_item_button_more"></button>
//               </Col>
//               <Col>
//                 <button className="cart_item_button_less"></button>
//               </Col>
//               <Col>
//                 <RemoveFromCartButton
//                   cartitem={cartitem}
//                   onUpdateCart={onUpdateCart}
//                   setCartitems={setCartitems}
//                 />
//               </Col>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// }

// export default Cartitem;



