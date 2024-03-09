"use client"

import Link from "next/link"

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
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div className="quando-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Thank you for contributing to web3-friendly regulation
        </div>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          This is the Member NFT
        </p>
        <div style={{ width: "50%", margin: "0 auto" }}>
          <video autoPlay loop style={{ width: "100%" }}>
            <source src="/images/MemberNFT.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            If you have not created an account, you can do so by entering your
            email and creating any password you want and hitting the sign up
            button. A confirmation email will be sent to you. Otherwise, you can
            log in with your email and password.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <form
            onSubmit={handleLogin}
            style={{ width: "300px", textAlign: "center" }}
          >
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              style={{ marginBottom: "10px", width: "100%" }}
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              style={{ marginBottom: "10px", width: "100%" }}
            />
            <button
              type="submit"
              style={{
                border: "1px solid black",
                padding: "10px",
                marginBottom: "10px",
                width: "300px",
                textAlign: "center",
              }}
            >
              Log in
            </button>
          </form>
          <button
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "300px",
              textAlign: "center",
            }}
            onClick={handleSignup}
          >
            Sign up
          </button>
          <p className="my-10 px-8 text-center text-sm text-muted-foreground ">
            By signing up, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}
