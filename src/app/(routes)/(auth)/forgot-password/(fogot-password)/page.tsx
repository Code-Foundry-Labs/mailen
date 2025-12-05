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
import { emailFormData, emailSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


const ForgotPasswordPage = () => {
    const form = useForm<emailFormData>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    })

    const onSubmit = (data: emailFormData) => {
        console.log(data)
        // TODO: Implement sign in logic
    }
    return (
        <div className=" w-full flex flex-col items-center">
            <AuthCard
                title="Forgot Password"
                description="Enter email associated with your account."
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
                        <Button type="submit" className="w-full mt-4">
                            Send Reset Code
                        </Button>
                        <Button variant="ghost" className="w-full gap-1 group h-9 md:h-9">
                            Back to Sign In
                        </Button>
                    </form>
                </Form>
            </AuthCard>
        </div>
    )
}

export default ForgotPasswordPage