import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { authComponent } from "./auth";

export const create = mutation({
    args: {
        workspaceId: v.id("workspaces"),
        website: v.optional(v.string()),
        industry: v.optional(v.string()),
        companySize: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const user = await authComponent.getAuthUser(ctx);
        if (!user) throw new Error("Unauthorized");

        const companyId = await ctx.db.insert("companies", {
            workspaceId: args.workspaceId,
            website: args.website,
            industry: args.industry,
            companySize: args.companySize,
            userId: user._id,
        });

        return companyId;
    },
});
