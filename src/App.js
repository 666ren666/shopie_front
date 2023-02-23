// FONTS
import "./fonts/Android.ttf"; import "./fonts/Android Hollow.ttf"; import "./fonts/Android Italic.ttf"; import "./fonts/Android Scratch.ttf";

// COMPONENTS
import Header from "./components/Header"; import LoginForm from "./components/LoginForm"; import LogoutForm from "./components/LogoutForm";
import SigninForm from "./components/SigninForm"; import Products from "./components/Products"; import Cartitems from "./components/Cartitems";
import Footer from "./components/Footer"; import Shoppers from "./components/Shoppers";

// STYLES
import "./App.css"; 

// FUNCTIONS
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [shoppers, setShoppers] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartitems, setCartitems] = useState([]);
  // const [session] = useState(localStorage.getItem("session"));

function handleCartUpdate() {
    axios.get("http://localhost:8000/api/cart_items/").then((response) => {
         setCartitems(response.data);}).catch((error) => {console.log(error.response.data); });}

  useEffect(() => {
    axios.get("http://localhost:8000/shoppers/").then((response) => {setShoppers(response.data);});
      console.log("use effect called!");}, []);

  useEffect(() => {
    axios.get("http://localhost:8000/products/").then((response) => {setProducts(response.data);});
      console.log("use effect called!");}, []);

  useEffect(() => {
    axios.get("http://localhost:8000/cart_items/").then((response) => {setCartitems(response.data);})
      .catch((error) => {console.log(error.response.data);}); console.log("use effect called!");}, []);

  return (
    <BrowserRouter>
    <div className="screenall">


    <div className="screenmid">
        <Routes>
        
        <Route path="/" element={<Products products={products} />} />
        <Route path="/cartitems" element={<Cartitems cartitems={cartitems} onUpdateCart={handleCartUpdate} setCartitems={setCartitems} />} />
        <Route path="/login" element={<LoginForm login={"login"} />} />
        <Route path="/signin" element={<SigninForm signin={"signin"} />} />
        <Route path="/logout" element={<LogoutForm logout={"logout"} />} />
        <Route path="/shoppers" element={<Shoppers shoppers={shoppers} />} />
        </Routes>
    </div>
        
    <div className="screentop"> <Header /></div>
            {/* {session ? (<h2>Hello {session}</h2>) : ( <p className="login-prompt">Please log in</p>)} */}
    <div className="screenbottom"><Footer/></div>

    </div>
</BrowserRouter>

  );
}
export default App;

