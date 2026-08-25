import { Metadata } from "next"

import LoginPage from "./login"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
  robots: { index: false, follow: false },
}

export default function Page() {
  return <LoginPage />
}
