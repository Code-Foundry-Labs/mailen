"use client"

import ThemeToggle from "@/components/global/theme-toggle"
import { Button } from "@/components/ui/button"
import { toast } from "@/lib/toast-store"

const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Toast Verification</h1>
      <div className="flex gap-4">
        <Button onClick={() => toast.normal("This is a normal toast")}>
          Normal Toast
        </Button>
        <Button
          variant="default"
          className="bg-green-600 hover:bg-green-700"
          onClick={() => toast.success("Redirecting you to dashboard")}
        >
          Success Toast
        </Button>
        <Button
          variant="destructive"
          onClick={() => toast.error("Invalid code try again")}
        >
          Error Toast
        </Button>
      </div>
      <ThemeToggle />
    </div>
  )
}

export default Home