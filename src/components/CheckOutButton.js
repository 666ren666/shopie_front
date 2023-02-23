function CheckOutButton() {
  const handleClick = () => {alert("your order is on it's way");};

  return (
    
    <div><button className="check_button" onClick={handleClick}></button></div>

);}export default CheckOutButton;