"use client"

import { login, signup } from "./actions"

export default function LoginPage() {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent the default form submission
    const formData = new FormData(event.currentTarget)
    await login(formData)
  }

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Prevent the default form submission
    const formData = new FormData(event.currentTarget)
    await signup(formData)
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button type="submit">Log in</button>
      </form>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button type="submit">Sign up</button>
      </form>
    </div>
  )
}
