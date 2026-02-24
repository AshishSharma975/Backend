import React, { useState } from "react";
import "../styles/form.scss";
import { Link,useNavigate } from "react-router-dom";
import {useAuth} from "../hooks/useAuth"

const Register = () => {

  const {loading,handleRegister} = useAuth()



  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  async function handleFormSubmit(e) {
    e.preventDefault();

   await handleRegister(username,email,password)

   navigate("/")

  }

  if(loading){
    return <div><h1>loading...</h1></div>
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