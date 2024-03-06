import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

export default async function PrivatePage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/")
  }

  const { data: todos } = await supabase.from("todos").select()

  return (
    <ul>
      {todos?.map((todo) => (
        <>
          <p>Hello {data.user.email}</p>
          <li>{todo}</li>
        </>
      ))}
    </ul>
  )
}
