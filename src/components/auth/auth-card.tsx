import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { ReactNode } from "react";
import Logo from "../icons/logo";
import Social from "./social";

const AuthCard = ({
    children,
    title,
    description,
    socialLogin = false,
}: {
    children: ReactNode
    title: string;
    description: string;
    socialLogin?: boolean;
}) => {
    return (
        <div className="p-2 border border-black/5 dark:border-white/10 bg-[#E2E2E2] dark:bg-white/5 w-full max-w-100 rounded-[40px]">
            <Card className="w-full">
                <CardHeader>
                    <div className="mb-2">
                        <Logo />
                    </div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className=" leading-[1.2]">
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {socialLogin && <Social />}
                    {children}
                </CardContent>
            </Card>
        </div>
    )
}

export default AuthCard