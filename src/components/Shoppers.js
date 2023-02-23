import { Col, Container, Row } from "react-bootstrap"
import Shopper from "./Shopper"


function Shoppers(shoppers) {
  return (

        <div >
         {/* for product in products:
             return '<Product ' */}
    <Container fluid> 
    <Row>
    {shoppers.map(shopper => <Col><Shopper key={shopper.id} shopper={shopper}/></Col>)}
    </Row>
    </Container>

    </div>
  )
}

export default Shoppers