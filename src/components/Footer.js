import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


function Footer({setSelectedCategory}) {

  function handleCategoryClick(category) {
    setSelectedCategory(category);}



  return (

  <div className="bottomcontainer">
      <div className="whitewithshaddow2"></div>

      <div className="orange2">
        <Nav defaultActiveKey="/" className="footer_buttons"  >
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/" onClick={() => handleCategoryClick("clothing")} >CLOTHING</Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/" onClick={() => handleCategoryClick("Food")}> FOOD </Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/" onClick={() => handleCategoryClick("Tools")} >TOOLS</Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/" onClick={() => handleCategoryClick("Toys")}> TOYS </Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/" onClick={() => handleCategoryClick("Weapons")} >WEAPONS</Nav.Link></Nav.Item>
        </Nav>
      </div>

      <div className="white2"></div>
      <div className="blue2"></div>

  </div>


  )
}

export default Footer


