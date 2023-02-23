import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => { setUsername(event.target.value); };
  const handlePasswordChange = (event) => { setPassword(event.target.value); };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username: username, password: password };

    axios.post("http://localhost:8000/api/login_shopper/", data, { withCredentials: true })
      .then((response) => { 
        console.log(response);
        navigate('/');
      })
      .catch((error) => { console.log(error); });
  };

  return (
    <div className="login_main_div">
      <div className="login_image">
        <div className="login_container">
          <h3 className="login_text_2">Please Login</h3>
          <div className="login_text">
            <form onSubmit={handleSubmit}>
              <label>Username:</label>
              <input type="text" value={username} onChange={handleUsernameChange} />
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;












// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LoginForm(login) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const csrftoken = getCookie('csrftoken');
//     const data = new FormData();
//     data.append('username', username);
//     data.append('password', password);

//     try {
//       const response = await fetch('/api/login_shopper/', {
//         method: 'POST',
//         headers: {
//           'X-CSRFToken': csrftoken,
//         },
//         body: data,
//         credentials: 'include',
//       });

//       if (response.ok) {
//         navigate('/');
//       } else {
//         const error = new Error(response.statusText);
//         error.response = response;
//         throw error;
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChange = (event) => {
//     if (event.target.name === 'username') {
//       setUsername(event.target.value);
//     } else if (event.target.name === 'password') {
//       setPassword(event.target.value);
//     }
//   };

//   return (
//     <div className="login_main_div">
//     <div className="login_image">
//         <div className="login_container">

//             <h3 className="login_text_2">Please login shopper</h3>

//             <div className="login_text">

//     <form onSubmit={handleSubmit}>


//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" name="username" value={username} onChange={handleChange}/>

//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" value={password} onChange={handleChange}/>


//       <button type="submit">Login</button>
      
//     </form>


//     </div></div></div></div>
//   );
// }

// function getCookie(name) {
//   let cookieValue = null;
//   if (document.cookie && document.cookie !== '') {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.substring(0, name.length + 1) === name + '=') {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

// export default LoginForm;










// // import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const history = useHistory();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const data = { email, password };
// //     try {
// //       // Send login request
// //       // ...
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div>
// //         <label htmlFor="email">Email:</label>
// //         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //       </div>
// //       <div>
// //         <label htmlFor="password">Password:</label>
// //         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //       </div>
// //       <button type="submit">Log in</button>
// //     </form>
// //   );
// // }

// // export default Login;
