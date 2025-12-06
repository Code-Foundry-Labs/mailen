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
import { useDebounce } from "@/hooks/use-debounce"
import { toast } from "@/lib/toast-store"
import { workspaceFormData, workspaceSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "convex/react"
import { CircleCheck, CircleX, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

const generateSlug = (name: string): string => {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '')
}

const SetupWorkspacePage = () => {
    const router = useRouter()
    const createWorkspace = useMutation(api.workspaces.create)
    const activeWorkspace = useQuery(api.workspaces.getUserWorkspace)

    useEffect(() => {
        if (activeWorkspace) {
            router.push("/sign-up/setup-company")
        }
    }, [activeWorkspace, router])

    const form = useForm<workspaceFormData>({
        resolver: zodResolver(workspaceSchema),
        defaultValues: {
            name: "",
            slug: "",
        },
    })

    const workspaceName = form.watch("name")
    const slug = form.watch("slug")
    const debouncedSlug = useDebounce(slug, 500)

    const isSlugAvailable = useQuery(api.workspaces.checkSlug, { slug: debouncedSlug })

    useEffect(() => {
        const generatedSlug = generateSlug(workspaceName)
        if (workspaceName) {
            form.setValue("slug", generatedSlug, { shouldValidate: true })
        }
    }, [workspaceName, form])

    const onSubmit = async (data: workspaceFormData) => {
        if (isSlugAvailable === false) {
            form.setError("slug", { message: "Slug already taken" })
            return
        }

        try {
            await createWorkspace({
                name: data.name,
                slug: data.slug,
            })
            router.push("/sign-up/setup-company")
        } catch (error) {
            console.error(error)
            toast.error("Failed to create workspace")
        }
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
                                                <span className="text-muted-foreground text-sm text-nowrap shrink-0">mailen.co/w/</span>
                                                <Input
                                                    className="border-none px-0 focus-visible:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent"
                                                    placeholder="acme-inc"
                                                    {...field}
                                                />
                                                {/* Loading State */}
                                                {slug && isSlugAvailable === undefined && (
                                                    <Loader2 className="size-5 text-muted-foreground mr-3 shrink-0 animate-spin" />
                                                )}

                                                {/* Success State */}
                                                {slug && isSlugAvailable === true && (
                                                    <CircleCheck className="size-5 text-green-500 mr-3 shrink-0" />
                                                )}

                                                {/* Error State */}
                                                {slug && isSlugAvailable === false && (
                                                    <CircleX className="size-5 text-destructive mr-3 shrink-0" />
                                                )}
                                            </div>
                                        </FormControl>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-4" disabled={form.formState.isSubmitting || isSlugAvailable === false}>
                            {form.formState.isSubmitting ? (
                                <><Loader2 className="mr-2 size-4 animate-spin" /> Creating workspace...</>
                            ) : (
                                "Create Workspace"
                            )}
                        </Button>
                    </form>
                </Form>
            </AuthCard>
        </div>
    )
}

export default SetupWorkspacePage