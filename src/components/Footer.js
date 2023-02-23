import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


function Footer() {
  return (

  <div className="bottomcontainer">
      <div className="whitewithshaddow2"></div>

      <div className="orange2">
        <Nav defaultActiveKey="/" className="footer_buttons"  >
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/">CLOTHING</Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/">FOOD</Nav.Link></Nav.Item> 
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/">TOOLS</Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link}  to="/">TOYS</Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/">WEAPONS</Nav.Link></Nav.Item>
        </Nav>
      </div>

      <div className="white2"></div>
      <div className="blue2"></div>

  </div>


  )
}

export default Footer


