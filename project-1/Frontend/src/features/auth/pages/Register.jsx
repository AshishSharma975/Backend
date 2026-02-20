import React, { useState } from 'react'
import "../styles/form.scss";
import { Link } from 'react-router-dom';
const register = () => {

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

async function handleformsubmit(e) {
    e.preventDefault();   
    
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