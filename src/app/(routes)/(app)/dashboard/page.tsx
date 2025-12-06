"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { Loader2 } from "lucide-react"
import { unauthorized, useRouter } from "next/navigation"

const DashboardPage = () => {
    const router = useRouter()
    const { data: session, isPending } = authClient.useSession()

    if (isPending) {
        return <div className="w-full h-screen flex items-center justify-center"><Loader2 className=" animate-spin" /></div>
    }

    const user = session?.user;

    if (!user) unauthorized();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="mb-4">Welcome, {session?.user?.email}</p>
            <Button
                variant="destructive"
                onClick={async () => {
                    await authClient.signOut()
                    router.push("/sign-in")
                }}
            >
                Logout
            </Button>
        </div>
    )
}

export default DashboardPage