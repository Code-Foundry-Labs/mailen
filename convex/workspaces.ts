import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";

export const checkSlug = query({
    args: { slug: v.string() },
    handler: async (ctx, args) => {
        // If slug is empty, don't return false positive
        if (!args.slug) return true;

        const existing = await ctx.db
            .query("workspaces")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();
        return !existing;
    },
});

export const create = mutation({
    args: { name: v.string(), slug: v.string() },
    handler: async (ctx, args) => {
        const user = await authComponent.getAuthUser(ctx);
        if (!user) throw new Error("Unauthorized");

        // Double check slug uniqueness
        const existing = await ctx.db
            .query("workspaces")
            .withIndex("by_slug", (q) => q.eq("slug", args.slug))
            .first();

        if (existing) throw new Error("Slug already taken");

        const workspaceId = await ctx.db.insert("workspaces", {
            name: args.name,
            slug: args.slug,
            ownerId: user._id,
        });

        return workspaceId;
    },
});

export const getUserWorkspace = query({
    args: {},
    handler: async (ctx) => {
        const user = await authComponent.getAuthUser(ctx);
        if (!user) return null;

        const workspace = await ctx.db
            .query("workspaces")
            .withIndex("by_owner", (q) => q.eq("ownerId", user._id))
            .first();

        return workspace;
    },
});
