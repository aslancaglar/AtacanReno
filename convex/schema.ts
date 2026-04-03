import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  devis: defineTable({
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
    status: v.string(), // "nouveau" | "en_cours" | "termine" | "refuse"
    createdAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_createdAt", ["createdAt"]),

  clients: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    city: v.optional(v.string()),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_name", ["name"])
    .index("by_createdAt", ["createdAt"]),

  portfolio: defineTable({
    title: v.string(),
    location: v.string(),
    category: v.string(),
    imageUrl: v.string(),
    beforeImageUrl: v.optional(v.string()),
    description: v.optional(v.string()),
    visible: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_category", ["category"])
    .index("by_visible", ["visible"])
    .index("by_createdAt", ["createdAt"]),

  reviews: defineTable({
    name: v.string(),
    avatarUrl: v.optional(v.string()),
    text: v.string(),
    rating: v.number(),
    project: v.string(),
    imageUrl: v.optional(v.string()),
    visible: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_visible", ["visible"])
    .index("by_createdAt", ["createdAt"]),

  companyInfo: defineTable({
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    description: v.optional(v.string()),
    instagramUrl: v.optional(v.string()),
    facebookUrl: v.optional(v.string()),
    updatedAt: v.number(),
  }),
});
