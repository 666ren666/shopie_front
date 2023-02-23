import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const handleNameChange = (event) => { setName(event.target.value); };
  const handlePasswordChange = (event) => { setPassword(event.target.value); };
  const handleEmailChange = (event) => { setEmail(event.target.value); };

  const handleSubmit = (event) => {
    event.preventDefault(); const data = { name: name, password: password, email: email, };

    axios.post("http://localhost:8000/api/new_shopper/", data, {})

      // Navigates to the success page
      .then((response) => { console.log(response); navigate("/login"); })
      .catch((error) => { console.log(error); });
  };
  return (
    <div className="login_main_div">
      <div className="login_image">
        <div className="login_container"> <h3 className="login_text_2">Please Signin</h3>
          <div className="login_text">

            <form onSubmit={handleSubmit}>
              <label>Name:</label><input type="text" value={name} onChange={handleNameChange} />
              <label>Password:</label><input type="text" value={password} onChange={handlePasswordChange} />
              <label>Email:</label><input type="email" value={email} onChange={handleEmailChange} />
              <button type="submit">Sign up</button>
            </form>

          </div>
        </div>
      </div>
    </div>

  );
}

export default Signup