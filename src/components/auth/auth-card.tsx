import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Logo from "../icons/logo";
import Social from "./social";

const AuthCard = ({
    children,
    title,
    description,
    descriptionClassName,
    socialLogin = false,
    disableSocialLogin = false,
}: {
    children: ReactNode
    title: string;
    description: string;
    descriptionClassName?: string;
    socialLogin?: boolean;
    disableSocialLogin?: boolean;
}) => {
    return (
        <div className="p-2 border border-black/5 dark:border-white/10 bg-[#E2E2E2]/80 dark:bg-white/5 backdrop-blur-md w-full max-w-100 rounded-[40px]">
            <Card className="w-full">
                <CardHeader>
                    <div className="mb-2">
                        <Logo />
                    </div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className={cn("leading-[1.2]", descriptionClassName)}>
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {socialLogin && <Social disabled={disableSocialLogin} />}
                    {children}
                </CardContent>
            </Card>
        </div>
    )
}

export default AuthCard