"use client"

import AuthCard from "@/components/auth/auth-card"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password-input"
import { resetPasswordFormData, resetPasswordSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo, Suspense } from "react"
import { useForm } from "react-hook-form"
import { authClient } from "@/lib/auth-client"
import { toast } from "@/lib/toast-store"
import { useRouter, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"

const ResetForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const code = searchParams.get("code")

    const form = useForm<resetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
        },
    })

    const password = form.watch("password")

    const passwordChecks = useMemo(() => {
        return {
            minLength: password.length >= 8,
            hasUppercase: /[A-Z]/.test(password),
            hasLowercase: /[a-z]/.test(password),
            hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        }
    }, [password])

    const passedChecks = Object.values(passwordChecks).filter(Boolean).length
    const strengthPercentage = (passedChecks / 4) * 100

    const strengthInfo = useMemo(() => {
        if (passedChecks === 4) {
            return { label: "Strong", color: "bg-success" }
        } else if (passedChecks >= 2) {
            return { label: "Moderate", color: "bg-chart-5 dark:bg-chart-3" }
        } else {
            return { label: "Weak", color: "bg-primary" }
        }
    }, [passedChecks])

    const isStrong = passedChecks === 4

    const onSubmit = async (data: resetPasswordFormData) => {
        if (!code) {
            toast.error("Missing reset code")
            return
        }
        await authClient.resetPassword({
            newPassword: data.password,
            token: code,
        }, {
            onSuccess: () => {
                toast.success("Password reset successfully")
                router.push("/sign-in")
            },
            onError: (ctx) => {
                toast.error(ctx.error.message)
            }
        })
    }

    return (
        <div className=" w-full flex flex-col items-center">
            <AuthCard
                title="Reset your password"
                description="Enter your new password, don't forget it!"
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 pl-3 focus-within:bg-accent bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <PasswordInput
                                                className="border-none px-0 pr-10 focus-visible:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent"
                                                autoComplete="new-password"
                                                placeholder="Enter your password"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="pt-4 space-y-3">
                            <div className="h-1.5 w-full bg-primary/15 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-300 ease-out ${strengthInfo.color}`}
                                    style={{ width: `${strengthPercentage}%` }}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-foreground">
                                    {isStrong
                                        ? "Your password is safe to use"
                                        : "Password must contain"}
                                </p>
                                <span
                                    className={`text-sm font-medium ${passedChecks === 4
                                        ? "text-success"
                                        : passedChecks >= 2
                                            ? "text-chart-5 dark:text-chart-3"
                                            : "text-muted-foreground"
                                        }`}
                                >
                                    {strengthInfo.label}
                                </span>
                            </div>

                            <ul className="space-y-1.5 text-sm">
                                <li
                                    className={`flex items-center gap-2 ${passwordChecks.minLength
                                        ? "text-success"
                                        : "text-muted-foreground"
                                        }`}
                                >
                                    <span className="text-lg leading-none">•</span>
                                    Contain at least 8 characters
                                </li>
                                <li
                                    className={`flex items-center gap-2 ${passwordChecks.hasUppercase
                                        ? "text-success"
                                        : "text-muted-foreground"
                                        }`}
                                >
                                    <span className="text-lg leading-none">•</span>
                                    1 upper case character
                                </li>
                                <li
                                    className={`flex items-center gap-2 ${passwordChecks.hasLowercase
                                        ? "text-success"
                                        : "text-muted-foreground"
                                        }`}
                                >
                                    <span className="text-lg leading-none">•</span>
                                    1 lower case character
                                </li>
                                <li
                                    className={`flex items-center gap-2 ${passwordChecks.hasSpecial
                                        ? "text-success"
                                        : "text-muted-foreground"
                                        }`}
                                >
                                    <span className="text-lg leading-none">•</span>
                                    1 special character
                                </li>
                            </ul>
                        </div>

                        <Button type="submit" className="w-full mt-4" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? (
                                <><Loader2 className="mr-2 size-4 animate-spin" /> Resetting...</>
                            ) : (
                                "Set New Password"
                            )}
                        </Button>
                    </form>
                </Form>
            </AuthCard>
        </div>
    )
}

const SetNewPasswordPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResetForm />
        </Suspense>
    )
}

export default SetNewPasswordPage