"use client"

import { login, signup } from "./actions"

export default function LoginPage() {
  const handleLogin = async (event) => {
    event.preventDefault() // Prevent default form submission

    const formData = new FormData(event.target)
    try {
      await login(formData)
      // Redirect or handle successful login on client-side
      console.log("Login successful!") // Replace with desired action
    } catch (error) {
      console.error("Login failed:", error)
      // Handle login errors on client-side (e.g., display error message)
    }
  }

  const handleSignup = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    try {
      await signup(formData)
      // Redirect or handle successful signup on client-side
      console.log("Signup successful!") // Replace with desired action
    } catch (error) {
      console.error("Signup failed:", error)
      // Handle signup errors on client-side (e.g., display error message)
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button type="submit">Log in</button>
      </form>
      <button onClick={handleSignup}>Sign up</button>
    </>
  )
}
