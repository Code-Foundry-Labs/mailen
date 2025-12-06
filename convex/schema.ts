import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    workspaces: defineTable({
        name: v.string(),
        slug: v.string(),
        ownerId: v.string(), // Storing auth user ID
    }).index("by_slug", ["slug"])
        .index("by_owner", ["ownerId"]),
    companies: defineTable({
        workspaceId: v.id("workspaces"),
        website: v.optional(v.string()),
        industry: v.optional(v.string()),
        companySize: v.optional(v.string()),
        userId: v.string(), // Auth user ID
    }).index("by_workspace", ["workspaceId"]),
    domains: defineTable({
        workspaceId: v.id("workspaces"),
        domain: v.string(),
        region: v.string(),
        status: v.string(), // e.g. "pending", "verified"
        userId: v.string(),
    }).index("by_workspace", ["workspaceId"]),
});
