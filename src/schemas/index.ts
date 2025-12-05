import { z } from "zod"

export const signInSchema = z.object({
    email: z
        .email("Please enter a valid email address")
        .min(1, "Email is required"),
    password: z
        .string()
        .min(1, "Password is required")
})

export type signInFormData = z.infer<typeof signInSchema>

export const signUpSchema = z.object({
    email: z
        .email("Please enter a valid email address")
        .min(1, "Email is required"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters"),
    acceptTerms: z
        .boolean()
        .refine((val) => val === true, "You must accept the terms and conditions"),
})

export type signUpFormData = z.infer<typeof signUpSchema>

export const emailSchema = z.object({
    email: z
        .email("Please enter a valid email address")
        .min(1, "Email is required"),
})

export type emailFormData = z.infer<typeof emailSchema>

export const twoFactorSchema = z.object({
    code: z
        .string()
        .min(1, "Code is required")
        .regex(
            /^[A-Za-z0-9]{3}-[A-Za-z0-9]{3}-[A-Za-z0-9]{3}$/,
            "Code must be in the format XXX-XXX-XXX"
        ),
})

export type TwoFactorFormData = z.infer<typeof twoFactorSchema>

export const resetPasswordSchema = z.object({
    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least 1 uppercase character")
        .regex(/[a-z]/, "Password must contain at least 1 lowercase character")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least 1 special character"),
})

export type resetPasswordFormData = z.infer<typeof resetPasswordSchema>

export const workspaceSchema = z.object({
    name: z
        .string()
        .min(1, "Workspace name is required")
        .min(2, "Workspace name must be at least 2 characters"),
    slug: z
        .string()
        .min(1, "Workspace slug is required")
        .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
})

export type workspaceFormData = z.infer<typeof workspaceSchema>

export const industryOptions = [
    "Technology",
    "Healthcare",
    "Finance",
    "E-commerce",
    "Education",
    "Marketing",
    "Real Estate",
    "Media & Entertainment",
    "Non-profit",
    "Other",
] as const

export const companySizeOptions = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+",
] as const

export const companySchema = z.object({
    website: z
        .string()
        .optional()
        .refine((val) => !val || /^[a-zA-Z0-9][a-zA-Z0-9-]*\.[a-zA-Z]{2,}$/.test(val), {
            message: "Please enter a valid website (e.g., acme.agency)"
        }),
    industry: z
        .string()
        .optional(),
    companySize: z
        .string()
        .optional(),
})

export type companyFormData = z.infer<typeof companySchema>

export const regionOptions = [
    { value: "us-east-1", label: "North Virginia (us-east-1)", countryCode: "US" },
    { value: "us-west-2", label: "Oregon (us-west-2)", countryCode: "US" },
    { value: "eu-west-1", label: "Ireland (eu-west-1)", countryCode: "IE" },
    { value: "eu-central-1", label: "Frankfurt (eu-central-1)", countryCode: "DE" },
    { value: "ap-southeast-1", label: "Singapore (ap-southeast-1)", countryCode: "SG" },
    { value: "ap-northeast-1", label: "Tokyo (ap-northeast-1)", countryCode: "JP" },
    { value: "ap-south-1", label: "Mumbai (ap-south-1)", countryCode: "IN" },
    { value: "sa-east-1", label: "São Paulo (sa-east-1)", countryCode: "BR" },
] as const

export const domainSchema = z.object({
    domain: z
        .string()
        .min(1, "Domain is required")
        .regex(/^[a-zA-Z0-9][a-zA-Z0-9.-]*\.[a-zA-Z]{2,}$/, "Please enter a valid domain"),
    region: z
        .string()
        .min(1, "Region is required"),
})

export type domainFormData = z.infer<typeof domainSchema>

export const roleOptions = [
    { value: "member", label: "Member" },
    { value: "admin", label: "Admin" },
    { value: "viewer", label: "Viewer" },
] as const

export const inviteTeamSchema = z.object({
    members: z.array(z.object({
        email: z.string().email("Please enter a valid email").or(z.literal("")),
        role: z.string().min(1),
    })),
})

export type inviteTeamFormData = z.infer<typeof inviteTeamSchema>
