import React, { useState } from "react";
import "../styles/form.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { user, loading, handleLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await handleLogin(username, password);
      console.log("user logged in...");
      navigate("/"); 
    } catch (err) {
      console.error("Login failed", err);
    }
  };

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

          <button
            className="button primary-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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