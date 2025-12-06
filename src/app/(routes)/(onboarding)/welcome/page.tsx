import AuthCard from "@/components/auth/auth-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const WelcomePage = () => {
    return (
        <div className=" w-full h-screen relative">
            <aside className=" absolute inset-0">
                <div className=" w-full h-full bg-black/50 absolute z-10" />
                <div className=" w-full h-full relative">
                    <Image fill src="/assets/background.png" alt="Welcome background" className=" object-cover" />
                </div>
            </aside>

            <div className=" w-full h-full flex flex-col justify-center items-center z-50 relative">
                <AuthCard
                    descriptionClassName=" text-wrap px-2"
                    title="Welcome to Mailėn, Liam!"
                    description="Mailen is built to simplify email marketing. Take the quick tour to know your way around"
                >
                    <Button type="submit" className="w-full">
                        Show me around
                    </Button>
                    <Link href="/dashboard">
                        <Button variant="ghost" className="w-full gap-1 group h-9 md:h-9">
                            Skip
                        </Button>
                    </Link>
                </AuthCard>
            </div>
        </div>
    )
}

export default WelcomePage