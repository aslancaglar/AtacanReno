import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const list = query({
  args: { onlyVisible: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    if (args.onlyVisible) {
      return await ctx.db
        .query("reviews")
        .withIndex("by_visible", (q) => q.eq("visible", true))
        .order("desc")
        .collect();
    }
    return await ctx.db.query("reviews").order("desc").collect();
  },
});

export const getById = query({
  args: { id: v.id("reviews") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    avatarUrl: v.optional(v.string()),
    text: v.string(),
    rating: v.number(),
    project: v.string(),
    imageUrl: v.optional(v.string()),
    visible: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("reviews", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("reviews"),
    name: v.string(),
    avatarUrl: v.optional(v.string()),
    text: v.string(),
    rating: v.number(),
    project: v.string(),
    imageUrl: v.optional(v.string()),
    visible: v.boolean(),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
  },
});

export const toggleVisibility = mutation({
  args: { id: v.id("reviews") },
  handler: async (ctx, args) => {
    const item = await ctx.db.get(args.id);
    if (item) {
      await ctx.db.patch(args.id, { visible: !item.visible });
    }
  },
});

export const remove = mutation({
  args: { id: v.id("reviews") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
