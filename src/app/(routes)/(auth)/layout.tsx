import ThemeToggle from "@/components/global/theme-toggle";
import { ReactNode } from "react";

export default async function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <main className="w-full h-screen justify-center items-center flex flex-col">
            {children}
            <aside className=" absolute bottom-4 left-1/2 -translate-x-1/2 z-99">
                <ThemeToggle />
            </aside>
        </main>
    );
}