import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: { onlyVisible: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    if (args.onlyVisible) {
      return await ctx.db
        .query("portfolio")
        .withIndex("by_visible", (q) => q.eq("visible", true))
        .order("desc")
        .collect();
    }
    return await ctx.db.query("portfolio").order("desc").collect();
  },
});

export const getById = query({
  args: { id: v.id("portfolio") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    location: v.string(),
    category: v.string(),
    imageUrl: v.string(),
    beforeImageUrl: v.optional(v.string()),
    description: v.optional(v.string()),
    visible: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("portfolio", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("portfolio"),
    title: v.string(),
    location: v.string(),
    category: v.string(),
    imageUrl: v.string(),
    beforeImageUrl: v.optional(v.string()),
    description: v.optional(v.string()),
    visible: v.boolean(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
  },
});

export const toggleVisibility = mutation({
  args: { id: v.id("portfolio") },
  handler: async (ctx, args) => {
    const item = await ctx.db.get(args.id);
    if (item) {
      await ctx.db.patch(args.id, { visible: !item.visible });
    }
  },
});

export const remove = mutation({
  args: { id: v.id("portfolio") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
