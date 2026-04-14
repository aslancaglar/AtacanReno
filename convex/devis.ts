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
    const qualifie = all.filter((d) => d.status === "qualifie").length;
    const envoye = all.filter((d) => d.status === "envoye").length;
    const accepte = all.filter((d) => d.status === "accepte").length;
    const refuse = all.filter((d) => d.status === "refuse").length;
    return {
      total: all.length,
      nouveau,
      qualifie,
      envoye,
      accepte,
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

// Update devis status — auto-creates client when accepted
export const updateStatus = mutation({
  args: {
    id: v.id("devis"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { status: args.status });

    if (args.status === "accepte") {
      const devis = await ctx.db.get(args.id);
      if (!devis) return;

      // Check if client with same email already exists
      const existing = await ctx.db
        .query("clients")
        .filter((q) => q.eq(q.field("email"), devis.email))
        .first();

      if (!existing) {
        await ctx.db.insert("clients", {
          name: devis.name,
          email: devis.email,
          phone: devis.phone,
          city: devis.city,
          notes: `Ajouté automatiquement — devis accepté: ${devis.serviceSlug}`,
          createdAt: Date.now(),
        });
      }
    }
  },
});

// Delete a devis
export const remove = mutation({
  args: { id: v.id("devis") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
