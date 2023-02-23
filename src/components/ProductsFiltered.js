import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap"


function ProductsFilterd({ category }) {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetch("http://localhost:8000/products/")
    .then((response) => response.json())
    .then((data) => setProducts(data));
}, []);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (

    <div className="product_main_div">
        <Container fluid> 
        <Row>
        {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
        ))}
        </Row>
        </Container>

    </div>
  )
}

function Product({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.created}</p>
      <p>{product.updated}</p> 
      <p>{product.category}</p> 
      <p>{product.image}</p> 
    </div>
  );
}


export default ProductsFilterd

