import AuthCard from "@/components/auth/auth-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ForbiddenPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <AuthCard
                title="Forbidden"
                description="You do not have permission to access this resource."
            >
                <Link href="/dashboard" className="w-full">
                    <Button className="w-full">Return to Dashboard</Button>
                </Link>
            </AuthCard>
        </div>
    )
}
