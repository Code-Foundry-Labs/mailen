"use client"

import AuthCard from "@/components/auth/auth-card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { signUpFormData, signUpSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"

const SignUpPage = () => {
    const form = useForm<signUpFormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            acceptTerms: true,
        },
    })

    const acceptTerms = form.watch("acceptTerms")

    const onSubmit = (data: signUpFormData) => {
        console.log(data)
        // TODO: Implement sign in logic
    }

    return (
        <div className=" w-full flex flex-col items-center">
            <AuthCard
                title="Sign Up to Mailėn"
                description="Email marketing. Simplified for GenZ"
                socialLogin
                disableSocialLogin={!acceptTerms}
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
                                                placeholder="Create a password"
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
                            name="acceptTerms"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-center gap-3 rounded-xl py-3 px-3 bg-card border">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal cursor-pointer">
                                            I agree to all terms and conditions
                                        </FormLabel>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-4">
                            Continue with password
                        </Button>
                        <Link href="/sign-in">
                            <Button variant="ghost" className="w-full gap-1 group h-9 md:h-9">
                                Already have an account?<span className=" text-foreground group-hover:underline underline-offset-3">Sign In</span>
                            </Button>
                        </Link>
                    </form>
                </Form>
            </AuthCard>
        </div>
    )
}

export default SignUpPage