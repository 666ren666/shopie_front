import { Container, Row } from "react-bootstrap";
import React from "react";
import Cartitem from "./Cartitem";
import CheckOutButton from "./CheckOutButton";

function Cartitems({ cartitems, onUpdateCart, setCartitems }) {

  // Check if the cart is empty
  const isEmpty = cartitems.length === 0;




  return (
    <div>

      {isEmpty ? (


        <div className="cart_main_div">
        <div backgroud-color="grey">
        <h3 className="login_text_2">Your cart is empty</h3>
        </div>
        </div>

      ) : (
        <div className="cart_main_div">
      <Container fluid>
        <Row>
          {cartitems.map((cartitem) => (
            <Cartitem
              key={cartitem.id}
              cartitem={cartitem}
              onUpdateCart={onUpdateCart}
              setCartitems={setCartitems}
            />
          ))}
        </Row>
      </Container>

      <div className="login_main_div">

      <div className="login_image">

        <div className="login_container">
          <h3 className="login_text_2">check out</h3>
          <CheckOutButton></CheckOutButton>

        </div>
      </div>
    </div>



    </div>
      )}
    
    </div>
  );
}


export default Cartitems;




