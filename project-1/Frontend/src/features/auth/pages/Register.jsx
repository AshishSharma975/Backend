import React, { useState } from 'react'
import "../styles/form.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';
const register = () => {

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

async function handleformsubmit(e) {
    e.preventDefault();


   try {
    const res = await axios.post("http://localhost:3000/api/auth/register",{
        username,
        email,
        password,
        
    },{
        withCredentials:true
    })
    console.log(res.data);
   } catch (error) {
    console.log(error);
   }    
    
}

    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleformsubmit}>
                    <input onInput={(e) => setusername(e.target.value)}
                        type="text"
                        placeholder="Username" />


                    <input onInput={(e) => setemail(e.target.value)}
                        type="email"
                        placeholder="Email" />


                    <input onInput={(e) => setpassword(e.target.value)}
                        type="password"
                        placeholder="Password" />



                    <button type="submit">Register</button>
                </form>

                <p>Already have an account? <Link className='toggle-authform' to="/login">Login</Link></p>
            </div>
        </main>
    )
}

export default register