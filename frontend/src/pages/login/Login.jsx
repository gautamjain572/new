import React, { useState } from 'react'
import './login.css'

const Login = () => {

    const [show , setShow] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="main">
            <div className={`container ${show ? 'active' : ''}`}>

                <div className='form-container sign-up'>
                    <form>
                        <h1>Create Account</h1>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type='submit' onClick={(e) => handleSubmit(e)}>Sign Up</button>
                    </form>
                </div>

                <div className='form-container sign-in'>
                    <form>
                        <h1>Sign In</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button type='submit' onClick={(e) => handleSubmit(e)}>Login</button>
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button onClick={() => setShow(false)}>Login</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button onClick={() => setShow(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Login