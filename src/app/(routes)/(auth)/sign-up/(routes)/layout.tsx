import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { imageFallback } from "@/constants";
import { ChevronLeft } from "lucide-react";
import { ReactNode } from "react";

export default async function SignUpLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <div className=" absolute top-0 inset-x-0 py-4 px-10 flex items-center justify-between">
                <Button variant="ghost"><ChevronLeft /> Back to Mailen</Button>
                <div className=" flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={imageFallback} alt="Profile Picture" />
                        <AvatarFallback>MA</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0 leading-none items-start -space-y-1">
                        <span className=" text-sm text-muted-foreground">Signing up as</span>
                        <p className=" text-sm">example@mailen.co</p>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}