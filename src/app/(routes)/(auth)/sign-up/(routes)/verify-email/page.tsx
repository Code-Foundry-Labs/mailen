"use client"

import AuthCard from "@/components/auth/auth-card"
import { TwoFactorFormData, twoFactorSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { OtpInput } from "@/components/ui/otp-input"


const VerifyEmailPage = () => {
    const form = useForm<TwoFactorFormData>({
        resolver: zodResolver(twoFactorSchema),
        defaultValues: {
            code: "",
        },
    })

    const onSubmit = (data: TwoFactorFormData) => {
        console.log(data)
        // TODO: Implement sign in logic
    }

    return (
        <div className=" w-full flex flex-col items-center">
            <AuthCard
                title="Check your email"
                description="We’ve sent the verification code. Please check your inbox and spam"
            >
                <div className=" w-full flex items-center justify-center -mt-6 text-sm md:text-base tracking-tight">
                    <span className="text-center font-medium">example@mailen.co</span>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2 mt-4">
                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 pl-3 focus-within:bg-accent bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel>OTP Code</FormLabel>
                                        <FormControl>
                                            <OtpInput
                                                className="border-none px-0 pr-10 focus-visible:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent"
                                                autoComplete="one-time-code"
                                                placeholder="XXX-XXX-XXX"
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button variant="ghost" className="w-full gap-1 group">
                            Didn’t receive the code?<span className=" text-foreground group-hover:underline underline-offset-3">Resend in 30s</span>
                        </Button>
                        <Button type="submit" className="w-full">
                            Continue to Account Setup
                        </Button>
                    </form>
                </Form>
            </AuthCard>
        </div>
    )
}

export default VerifyEmailPage;