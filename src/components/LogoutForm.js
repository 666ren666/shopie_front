import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogoutForm() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.post('http://localhost:8000/api/logout_shopper/', null, { withCredentials: true })
      .then((response) => {
        console.log(response);
        navigate('/cart');
      })
      .catch((error) => { console.log(error); });
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}

export default LogoutForm;