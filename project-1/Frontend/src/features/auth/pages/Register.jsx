import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from "react-router-dom";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleFormSubmit(e) {
    e.preventDefault();
    console.log({ username, email, password }); 
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

         <button className="button primary-button" type="submit">
  Register
</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link className="toggle-authform" to="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;