import "./Login.css"
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users")) || []

    const exist = users.find((e) => 
      e.email === email && e.password === password
    )

    if (exist) {
      alert("Login successful")
      navigate("/product")
    } else {
      alert("Invalid email or password")
    }
  }

  return (
    <div className='login-container'>
        <div className="login">
      <h2>Login Page</h2>

      <form onSubmit={login}>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Login</button>

      </form>

      <p>
        Don't have an account?
        <Link to="/signup"> Create Account</Link>
      </p>
      </div>

    </div>
  )
}

export default Login
