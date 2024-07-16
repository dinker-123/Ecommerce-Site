import React, { useState } from 'react';
import style from "../logIn/login.module.css";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleData = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) {
        navigate("/");
      }
    });
  };

  return (
    <div className="center-container">
      <div className={style.register}>
        <div className={style['col-1']}>
          <h3>Login In</h3>
          <form id='form' className={style.signForm} onSubmit={handleSubmit}>
            <input type="email" id="name" placeholder='Username' required onChange={handleData} />
            <input type="password" id="password" placeholder='Password' required onChange={handleData} />
            <div>
              <button type="submit" className={style.btn}>Login</button>
            </div>
            <Link to="/forget-password"><p>Forgot Password</p></Link>
            <Link to="/signin"><p>Sign In</p></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
