import { Col, Container, Row } from "react-bootstrap";
import Product from "./Product";

function Products({ products, selectedCategory }) {

  const filteredProducts = selectedCategory
  ? products.filter((product) => product.category === selectedCategory)
  : products;

  return (
    <div className="midcontainer">
      <div className="product_main_div">
          <Container fluid>
            <Row>
              {filteredProducts.map((product) => (
                <Col className="product-col" key={product.id} xs={12} md={8} lg={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
  );
}

export default Products;


