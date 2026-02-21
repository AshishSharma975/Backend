import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log({ username, password }); 
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button primary-button" type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link className="toggle-authform" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;