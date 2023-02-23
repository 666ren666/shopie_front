
import React from "react";


import { Row } from "react-bootstrap";

function AmountButton({ quantity, increase, decrease }) {
  return (
    <div>
          <h1>amount - {quantity}</h1>
    
    
    <Row>
    <button className="button_more" onClick={increase}></button>
    </Row>

    <Row>
    <button className="button_less" onClick={decrease}></button>
    </Row>

    </div>
  );
}

export default AmountButton;