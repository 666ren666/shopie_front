import { Col, Row  } from "react-bootstrap";
import AddToCartButton from "./AddTOCartBUtton";

function Product({ product }) {
  return (
    <div>
      <div className="product_info">
        <Col>
        <Row>
          <h3 className="product_text">{product.name}</h3>
        </Row>
          <Row>
          <h3 className="product_text">Price - {product.price}</h3>
          </Row>
        </Col>
      </div>

      <div className="product_bg_image">
        <img className="product_image" src={"http://localhost:8000/static" + product.image}
          alt={product.image}
        />
      </div>

      <div className="buttons_container">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

export default Product;



// import { Col, Row } from "react-bootstrap"
// import AddToCartButton from "./AddTOCartBUtton"

// function Product({ product }) {
//   return (

//     <div className="product_container">


//         <div className="product_info">
//           <Row>
//             <Col><h3 className="product_name">{product.name}</h3></Col>
//             <Col><h3 className="product_price">Price - {product.price}</h3></Col>
//           </Row>
//         </div>

//         <div className="product_bg_image">        
//           <img className="product_image" src={'http://localhost:8000/static'+ product.image} alt={product.image} />
//           {/* <img src={'https://shopie-django.onrender.com/static' + product.image} alt={product.name} />  */ }  
//         </div>

//         <div className="buttons_container">
//           <AddToCartButton product={product} />
//         </div>



//     </div>

//   )
// }

// export default Product


