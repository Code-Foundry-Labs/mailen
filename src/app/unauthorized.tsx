import AuthCard from "@/components/auth/auth-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UnauthorizedPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <AuthCard
                title="Unauthorized"
                description="You need to be signed in to view this page."
            >
                <Link href="/sign-in" className="w-full">
                    <Button className="w-full">Sign In</Button>
                </Link>
            </AuthCard>
        </div>
    )
}
