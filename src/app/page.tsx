"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const Home = () => {
  return (
    <main>
      <Link href="/sign-up">
        <Button>Sign Up</Button>
      </Link>
      <Link href="/sign-in">
        <Button variant="outline">Sign In</Button>
      </Link>
    </main>
  )
}

export default Home