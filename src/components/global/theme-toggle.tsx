"use client"

import { cn } from "@/lib/utils"
import { Monitor, MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="h-7 w-21 rounded-full border border-border bg-muted/30" />
    }

    return (
        <div className="flex items-center justify-center  rounded-full border bg-muted/30 w-21 overflow-clip h-7">
            <Button
                size="themeToggle"
                variant="themeToggle"
                onClick={() => setTheme("system")}
                className={cn(
                    "",
                    theme === "system" && "border text-foreground"
                )}
                aria-label="System theme"
            >
                <Monitor className="h-4 w-4" />
            </Button>
            <Button
                size="themeToggle"
                variant="themeToggle"
                onClick={() => setTheme("light")}
                className={cn(
                    "",
                    theme === "light" && "border text-foreground"
                )}
                aria-label="Light theme"
            >
                <Sun className="h-4 w-4" />
            </Button>
            <Button
                size="themeToggle"
                variant="themeToggle"
                onClick={() => setTheme("dark")}
                className={cn(
                    "",
                    theme === "dark" && "border text-foreground"
                )}
                aria-label="Dark theme"
            >
                <MoonStar className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default ThemeToggle