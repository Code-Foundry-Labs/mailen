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
import { workspaceFormData, workspaceSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { CircleCheck } from "lucide-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

// Helper function to generate slug from name
const generateSlug = (name: string): string => {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

const SetupWorkspacePage = () => {
    const form = useForm<workspaceFormData>({
        resolver: zodResolver(workspaceSchema),
        defaultValues: {
            name: "",
            slug: "",
        },
    })

    const workspaceName = form.watch("name")

    // Auto-generate slug when name changes
    useEffect(() => {
        const slug = generateSlug(workspaceName)
        // Only validate if the name field has content to avoid initial error state
        form.setValue("slug", slug, { shouldValidate: workspaceName.length > 0 })
    }, [workspaceName, form])

    const onSubmit = (data: workspaceFormData) => {
        console.log(data)
        // TODO: Implement workspace creation logic
    }

    return (
        <div className=" w-full flex flex-col items-center">
            <AuthCard
                title="Create your workspace"
                description="A workspace keeps your contacts, emails, analytics, and team organized in one place."
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 px-3 focus-within:bg-accent bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel>Workspace Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="border-none px-0 focus-visible:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent"
                                                placeholder="Acme, Inc"
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
                            name="slug"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <div className={`flex flex-col -space-y-1 rounded-xl pt-3 pl-3 focus-within:bg-accent bg-card border transition-[color,box-shadow] focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                        <FormLabel>Workspace Slug</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center h-10">
                                                <span className="text-muted-foreground text-sm">mailen.co/w/</span>
                                                <Input
                                                    className="border-none px-0 focus-visible:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent"
                                                    placeholder="acme-inc"
                                                    {...field}
                                                />
                                                {field.value && (
                                                    <CircleCheck className="size-5 text-success mr-3 shrink-0" />
                                                )}
                                            </div>
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-4">
                            Create Workspace
                        </Button>
                    </form>
                </Form>
            </AuthCard>
        </div>
    )
}

export default SetupWorkspacePage