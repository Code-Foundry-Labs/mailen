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
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { authClient } from "@/lib/auth-client"
import { toast } from "@/lib/toast-store"
import { signInSchema, type signInFormData } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const SignInPage = () => {
    const router = useRouter()
    const form = useForm<signInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: signInFormData) => {
        await authClient.signIn.email({
            email: data.email,
            password: data.password,
        }, {
            onSuccess: () => {
                router.push("/dashboard")
            },
            onError: (ctx) => {
                toast.error(ctx.error.message)
            }
        })
    }

    return (
        <div className=" w-full flex flex-col items-center">
            <AuthCard
                title="Sign in to Mailėn"
                description="Email marketing. Simplified for GenZ"
                socialLogin
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 px-3 focus-within:bg-accent bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="border-none px-0 focus-visible:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent"
                                                type="email"
                                                placeholder="example@mailen.co"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                                                autoComplete="current-password"
                                                placeholder="Enter your password"
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Link href="/forgot-password">
                            <Button variant="ghost" className="w-full gap-1 group h-9 md:h-9">
                                Forgot Password?<span className=" text-foreground group-hover:underline underline-offset-3">Reset</span>
                            </Button>
                        </Link>
                        <Button type="submit" className="w-full mt-4" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? (
                                <><Loader2 className="mr-2 size-4 animate-spin" /> Signing In...</>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                        <Link href="/sign-up">
                            <Button variant="ghost" className="w-full gap-1 group h-9 md:h-9">
                                Don&apos;t have an account?<span className=" text-foreground group-hover:underline underline-offset-3">Create Account</span>
                            </Button>
                        </Link>
                    </form>
                </Form>
            </AuthCard>
        </div>
    )
}

export default SignInPage