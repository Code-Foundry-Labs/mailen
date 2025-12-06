"use client";

import { api } from "@/../convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { imageFallback } from "@/constants";
import { useQuery } from "convex/react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";

export const SignUpHeader = () => {
    const user = useQuery(api.auth.getCurrentUser);

    return (
        <div className=" absolute top-0 inset-x-0 py-4 px-10 flex items-center justify-between">
            <Button variant="ghost" asChild>
                <Link href="/">
                    <ChevronLeft /> Back to Mailen
                </Link>
            </Button>
            <div className=" flex items-center gap-2">
                {user === undefined ? (
                    <>
                        <Skeleton className=" size-10 rounded-xl" />
                        <div className=" flex flex-col gap-1">
                            <Skeleton className=" h-4 w-[8ch] rounded-sm" />
                            <Skeleton className=" h-4 w-40 rounded-sm" />
                        </div>
                    </>
                ) : (
                    <>
                        <Avatar>
                            <AvatarImage src={user?.image || imageFallback} alt="Profile Picture" />
                            <AvatarFallback>{user?.name?.charAt(0) || "M"}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-0 leading-none items-start -space-y-1">
                            <span className=" text-sm text-muted-foreground">Signing up as</span>
                            <p className=" text-sm font-medium">{user?.email}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
