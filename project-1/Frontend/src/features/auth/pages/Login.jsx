import React from 'react'
import "../styles/form.scss";
import { Link } from 'react-router';
import { useState } from 'react';
const login = () => {

const [username, setusername] = useState("")
const [password, setpassword] = useState("")


function handleformsubmit(e) {
    e.preventDefault();


    
}

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleformsubmit}>
                    <input  
                    onInput={(e)=>setusername(e.target.value)}
                    type="text" 
                    placeholder="Username" />

                    <input 
                    onInput={(e)=>setpassword(e.target.value)}
                    type="password" 
                    placeholder="Password" />

                    <button type="submit">Login</button>
                </form>
             
             <p>Don't have an account? <Link className='toggle-authform' to="/register">Register</Link></p>
            </div>
        </main>
    )
}

export default login