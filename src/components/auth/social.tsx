"use client"

import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaGoogle, FaWindows, FaXTwitter } from "react-icons/fa6";

import { Button } from '../ui/button';

type Provider = "google" | "twitter" | "microsoft" | "github" | null;

const Social = ({ disabled = false }: { disabled?: boolean }) => {
    const [loadingProvider, setLoadingProvider] = useState<Provider>(null);

    const handleSocialSignIn = async (provider: Provider) => {
        if (!provider) return;
        setLoadingProvider(provider);
        await authClient.signIn.social({
            provider,
        })
    }

    const isLoading = loadingProvider !== null;

    return (
        <div className=' grid grid-cols-4 w-full gap-2 mb-2'>
            <Button
                variant="social"
                disabled={disabled || isLoading}
                onClick={() => handleSocialSignIn("google")}
            >
                {loadingProvider === "google" ? <Loader2 className="size-4 animate-spin" /> : <FaGoogle />}
            </Button>
            <Button
                variant="social"
                disabled={disabled || isLoading}
                onClick={() => handleSocialSignIn("twitter")}
            >
                {loadingProvider === "twitter" ? <Loader2 className="size-4 animate-spin" /> : <FaXTwitter />}
            </Button>
            <Button
                variant="social"
                disabled={disabled || isLoading}
                onClick={() => handleSocialSignIn("microsoft")}
            >
                {loadingProvider === "microsoft" ? <Loader2 className="size-4 animate-spin" /> : <FaWindows />}
            </Button>
            <Button
                variant="social"
                disabled={disabled || isLoading}
                onClick={() => handleSocialSignIn("github")}
            >
                {loadingProvider === "github" ? <Loader2 className="size-4 animate-spin" /> : <FaGithub />}
            </Button>
        </div>
    )
}

export default Social