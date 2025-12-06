import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { authComponent } from "./auth";

export const create = mutation({
    args: {
        workspaceId: v.id("workspaces"),
        domain: v.string(),
        region: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await authComponent.getAuthUser(ctx);
        if (!user) throw new Error("Unauthorized");

        const domainId = await ctx.db.insert("domains", {
            workspaceId: args.workspaceId,
            domain: args.domain,
            region: args.region,
            status: "pending",
            userId: user._id,
        });

        return domainId;
    },
});
