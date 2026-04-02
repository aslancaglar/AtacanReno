import { v } from "convex/values";
import { query, mutation } from "./_generated/server";
import { api } from "./_generated/api";

// List all devis, optionally filtered by status
export const list = query({
  args: {
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.status) {
      return await ctx.db
        .query("devis")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc")
        .collect();
    }
    return await ctx.db.query("devis").order("desc").collect();
  },
});

// Get recent devis (last N)
export const listRecent = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 5;
    return await ctx.db.query("devis").order("desc").take(limit);
  },
});

// Get a single devis by ID
export const getById = query({
  args: { id: v.id("devis") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get stats for dashboard
export const getStats = query({
  handler: async (ctx) => {
    const all = await ctx.db.query("devis").collect();
    const nouveau = all.filter((d) => d.status === "nouveau").length;
    const enCours = all.filter((d) => d.status === "en_cours").length;
    const termine = all.filter((d) => d.status === "termine").length;
    const refuse = all.filter((d) => d.status === "refuse").length;
    return {
      total: all.length,
      nouveau,
      enCours,
      termine,
      refuse,
    };
  },
});

// Create a new devis (called from public form)
export const create = mutation({
  args: {
    serviceSlug: v.string(),
    propertyType: v.string(),
    surface: v.optional(v.string()),
    budget: v.optional(v.string()),
    timeline: v.optional(v.string()),
    description: v.optional(v.string()),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    city: v.optional(v.string()),
    referral: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("devis", {
      ...args,
      status: "nouveau",
      createdAt: Date.now(),
    });

    // Schedule the email notification action
    await ctx.scheduler.runAfter(0, api.emails.sendNewDevisEmail, {
      devisId: id,
      name: args.name,
      email: args.email,
      phone: args.phone,
      serviceSlug: args.serviceSlug,
      propertyType: args.propertyType,
      budget: args.budget,
      description: args.description,
    });

    return id;
  },
});

// Update devis status
export const updateStatus = mutation({
  args: {
    id: v.id("devis"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });
  },
});

// Delete a devis
export const remove = mutation({
  args: { id: v.id("devis") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
