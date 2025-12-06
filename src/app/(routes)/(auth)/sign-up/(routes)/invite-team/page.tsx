"use client"

import { useRouter } from "next/navigation"

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
    inviteTeamFormData,
    inviteTeamSchema,
    roleOptions,
} from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, X } from "lucide-react"
import { useFieldArray, useForm } from "react-hook-form"

const InviteTeamPage = () => {
    const router = useRouter()
    const form = useForm<inviteTeamFormData>({
        resolver: zodResolver(inviteTeamSchema),
        defaultValues: {
            members: [{ email: "", role: "member" }],
        },
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "members",
    })

    const onSubmit = (data: inviteTeamFormData) => {
        // Filter out empty emails
        const validMembers = data.members.filter(m => m.email.trim() !== "")
        console.log(validMembers)
        // TODO: Implement invite logic
        router.push("/welcome")
    }

    const onSkip = () => {
        router.push("/welcome")
    }

    const addEmailField = () => {
        append({ email: "", role: "member" })
    }

    return (
        <div className=" w-full flex flex-col items-center">
            <AuthCard
                title="Invite your teammates"
                description="Invite teammates to join your workspace. Invitations will be valid for 14 days."
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex items-start gap-2 relative">
                                <div className="flex-1">
                                    <FormField
                                        control={form.control}
                                        name={`members.${index}.email`}
                                        render={({ field, fieldState }) => (
                                            <FormItem>
                                                <div className={`flex items-center rounded-xl bg-card border transition-[color,box-shadow] focus-within:bg-accent focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] ${fieldState.error ? 'border-destructive ring-[3px] ring-destructive/20 dark:ring-destructive/40 bg-destructive/5' : ''}`}>
                                                    <div className="flex-1 flex flex-col -space-y-1 pt-3 pl-3">
                                                        <FormLabel>Email</FormLabel>
                                                        <div className=" inline-flex items-center justify-between">
                                                            <FormControl>
                                                                <Input
                                                                    className="border-none px-0 focus-visible:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent"
                                                                    placeholder="team@acme.com"
                                                                    type="email"
                                                                    {...field}
                                                                />
                                                            </FormControl>

                                                            <FormField
                                                                control={form.control}
                                                                name={`members.${index}.role`}
                                                                render={({ field: roleField }) => (
                                                                    <Select onValueChange={roleField.onChange} defaultValue={roleField.value}>
                                                                        <SelectTrigger className="w-auto border-none focus:outline-0 outline-none ring-0 focus-visible:ring-0 focus:ring-0 h-10 rounded-none shadow-none bg-transparent dark:bg-transparent dark:hover:bg-transparent">
                                                                            <SelectValue placeholder="Role" />
                                                                        </SelectTrigger>
                                                                        <SelectContent className=" mr-6">
                                                                            {roleOptions.map((role) => (
                                                                                <SelectItem key={role.value} value={role.value}>
                                                                                    {role.label}
                                                                                </SelectItem>
                                                                            ))}
                                                                        </SelectContent>
                                                                    </Select>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {index > 0 && (
                                    <div
                                        className=" text-muted-foreground hover:text-foreground absolute right-3 top-2.5 cursor-pointer"
                                        onClick={() => remove(index)}
                                    >
                                        <X className="size-4" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {fields.length < 3 && (
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full justify-between has-[>svg]:px-4 bg-transparent dark:bg-transparent"
                                onClick={addEmailField}
                            >
                                <span>Add email</span>
                                <Plus className="size-4" />
                            </Button>
                        )}

                        <Button type="submit" className="w-full mt-4">
                            Continue
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

export default InviteTeamPage