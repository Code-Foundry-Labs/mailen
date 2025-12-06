import { SignUpHeader } from "../../../../../components/auth/sign-up-header";
import { ReactNode } from "react";

export default async function SignUpLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <SignUpHeader />
            {children}
        </div>
    );
}