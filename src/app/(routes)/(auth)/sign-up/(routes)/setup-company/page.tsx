"use client"

import { api } from "@/../convex/_generated/api"
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "@/lib/toast-store"
import {
    companyFormData,
    companySchema,
    companySizeOptions,
    industryOptions,
} from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "convex/react"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const SetupCompany = () => {
    const router = useRouter()
    const userWorkspace = useQuery(api.workspaces.getUserWorkspace)
    const createCompany = useMutation(api.companies.create)

    const form = useForm<companyFormData>({
        resolver: zodResolver(companySchema),
        defaultValues: {
            website: "",
            industry: "",
            companySize: "",
        },
    })

    const onSubmit = async (data: companyFormData) => {
        if (!userWorkspace) return;

        try {
            await createCompany({
                workspaceId: userWorkspace._id,
                website: data.website,
                industry: data.industry,
                companySize: data.companySize,
            })
            router.push("/sign-up/setup-domain")
        } catch (error) {
            console.error(error)
            toast.error("Failed to update company details")
        }
    }

    const onSkip = async () => {
        router.push("/sign-up/setup-domain")
    }

    return (
        <div className=" w-full flex flex-col items-center">
            <AuthCard
                title="Setup Company"
                description="Add details of your company"
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
                        <FormField
                            control={form.control}
                            name="website"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 pl-3 focus-within:bg-accent bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel>Website</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center h-10">
                                                <span className="text-muted-foreground text-sm">https://</span>
                                                <Input
                                                    className="border-none px-0 focus-visible:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent"
                                                    placeholder="acme.agency"
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="industry"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 pb-1  bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel className=" px-3">Industry</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="border-none px-3 focus:outline-0 outline-none ring-0 focus-visible:ring-0 focus:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent dark:hover:bg-transparent w-full">
                                                    <SelectValue placeholder="Select your industry" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="h-48">
                                                {industryOptions.map((industry) => (
                                                    <SelectItem key={industry} value={industry}>
                                                        {industry}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="companySize"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 pb-1 bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel className=" px-3">Company Size</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="border-none px-3 focus:outline-0 outline-none ring-0 focus-visible:ring-0 focus:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent dark:hover:bg-transparent w-full">
                                                    <SelectValue placeholder="1-10" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className=" h-32">
                                                {companySizeOptions.map((size) => (
                                                    <SelectItem key={size} value={size}>
                                                        {size}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-8" disabled={form.formState.isSubmitting || !userWorkspace}>
                            {form.formState.isSubmitting ? (
                                <><Loader2 className="mr-2 size-4 animate-spin" /> Saving...</>
                            ) : (
                                "Continue"
                            )}
                        </Button>
                        <Button type="button" variant="ghost" onClick={onSkip} className="w-full gap-1 group h-9 md:h-9">
                            I&apos;ll do this later
                        </Button>
                    </form>
                </Form>
            </AuthCard>
        </div>
    )
}

export default SetupCompany