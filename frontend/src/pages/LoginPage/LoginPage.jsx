import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import { useNavigate,  } from "react-router-dom";
import {FaHome} from "react-icons/fa";


const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div>
      <div className="navBar">
      <header>
      
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "#683C20" }}>
            <b>Wisecarver.io</b>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <button className="btn">
               Register
             </button>
          </Link>
        </li>
      </ul>
    
      </header>
      
      </div>
      <body>
    <div className="container-fluid">
      <form className="form background-color" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            />
          
          
        </label>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        <Link to="/register">Click to register!</Link>
        <button>Login!</button>
      </form>
      <div className="background-color">
      
      </div>
      
    </div>
    </body>
    
    </div>
  );
};

export default LoginPage;
