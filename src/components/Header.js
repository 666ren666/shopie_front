import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Cartitems from "./Cartitems"
import LoginForm from "./LoginForm"
import Logo from "./Logo"
import LogoutForm from "./LogoutForm"
import SigninForm from "./SigninForm"
import './styles/logo.css';

function Header({ logout, login }) {
  return (
    <div className="topcontainer">

      <div className="blue"><Logo></Logo></div>
      <div className="white"></div>

      <div className="orange">
        <Nav defaultActiveKey="/" className="menu_buttons">
          <Nav.Item className="menu_button"><Nav.Link as={Link} to="/" >SHOP</Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} onClick={Cartitems} to="/cartitems">Cart</Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} onClick={LoginForm} to="/login">Login</Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} onClick={SigninForm} to="/signin">Signin</Nav.Link></Nav.Item>
          <Nav.Item className="menu_button"><Nav.Link as={Link} onClick={LogoutForm} to="/login">Logout</Nav.Link></Nav.Item>
        </Nav>
      </div>

      <div className="whitewithshaddow"></div>

    </div>

  )
}
export default Header