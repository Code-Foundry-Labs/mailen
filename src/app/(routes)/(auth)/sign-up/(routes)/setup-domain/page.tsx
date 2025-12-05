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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    domainFormData,
    domainSchema,
    regionOptions,
} from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import * as Flags from "country-flag-icons/react/3x2"
import { useForm } from "react-hook-form"

const CountryFlag = ({ countryCode }: { countryCode: string }) => {
    const FlagComponent = Flags[countryCode as keyof typeof Flags]
    if (!FlagComponent) return null
    return <FlagComponent className="size-5" />
}

const AddDomainPage = () => {
    const form = useForm<domainFormData>({
        resolver: zodResolver(domainSchema),
        defaultValues: {
            domain: "",
            region: "us-east-1",
        },
    })

    const onSubmit = (data: domainFormData) => {
        console.log(data)
        // TODO: Implement domain setup logic
    }

    return (
        <div className=" w-full flex flex-col items-center">
            <AuthCard
                title="Add Domain"
                description="Use a domain you own to send emails."
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
                        <FormField
                            control={form.control}
                            name="domain"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 px-3 focus-within:bg-accent bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel>Domain</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="border-none px-0 focus-visible:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent"
                                                placeholder="go.acme.com"
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
                            name="region"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 pb-1 bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel className="px-3">Region</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="border-none px-3 focus:outline-0 outline-none ring-0 focus-visible:ring-0 focus:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent dark:hover:bg-transparent w-full">
                                                    <SelectValue placeholder="Select a region">
                                                        {field.value && (() => {
                                                            const region = regionOptions.find(r => r.value === field.value)
                                                            return region ? (
                                                                <span className="flex items-center gap-2">
                                                                    <CountryFlag countryCode={region.countryCode} />
                                                                    <span>{region.label}</span>
                                                                </span>
                                                            ) : null
                                                        })()}
                                                    </SelectValue>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="h-40">
                                                {regionOptions.map((region) => (
                                                    <SelectItem key={region.value} value={region.value}>
                                                        <span className="flex items-center gap-2">
                                                            <CountryFlag countryCode={region.countryCode} />
                                                            <span>{region.label}</span>
                                                        </span>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Helper text and examples */}
                        <div className="pt-2 space-y-3">
                            <p className="text-sm text-muted-foreground">
                                Use separate subdomains to preserve the domain reputation.
                            </p>
                            <div className="space-y-1">
                                <p className="text-sm font-medium">Subdomain examples:</p>
                                <ul className="text-sm text-muted-foreground space-y-0.5">
                                    <li className="flex items-center gap-2">
                                        <span>•</span>
                                        <span>news.acme.com</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>•</span>
                                        <span>updates.acme.com</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span>•</span>
                                        <span>notifications.acme.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <Button type="submit" className="w-full mt-4">
                            Add Domain
                        </Button>
                        <Button variant="ghost" className="w-full gap-1 group h-9 md:h-9">
                            I&apos;ll do this later
                        </Button>
                    </form>
                </Form>
            </AuthCard>
        </div>
    )
}

export default AddDomainPage