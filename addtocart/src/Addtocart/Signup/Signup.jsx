import "./Signup.css"
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate()

  const signup = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users")) || []

    const exist = users.find((e) => e.email === email)

    if (exist) {
      alert("User already exists")
    } else {

      const newuser = {
        name: name,
        email: email,
        password: password
      }

      users.push(newuser)

      localStorage.setItem("users", JSON.stringify(users))

      alert("Account created successfully")

      navigate("/")
    }
  }

  return (
    <div className="signup-container">
        <div className="signup">
      <h2>Create Account</h2>

      <form onSubmit={signup}>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />

        <br /><br />

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

        <button type="submit">Create Account</button>

      </form>

      <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    </div>
  )
}

export default Signup
