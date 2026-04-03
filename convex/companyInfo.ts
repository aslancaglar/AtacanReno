import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    // Return the first (and only) settings document
    const info = await ctx.db.query("companyInfo").first();
    // Default values if table is empty
    if (!info) {
      return {
        email: "contact@atacan-renovation.fr",
        phone: "03 83 XX XX XX",
        address: "54000 Nancy, France",
        workingHours: "Lun – Ven : 8h00 – 18h00\nSam : 9h00 – 13h00",
        whatsappNumber: "0612345678",
        description: "Spécialiste de la rénovation d'intérieur « clé en main » sur Nancy et sa région depuis plus de 10 ans. De la conception à la réalisation, nous transformons votre intérieur.",
        instagramUrl: "",
        facebookUrl: "",
      };
    }
    return info;
  },
});

export const update = mutation({
  args: {
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    workingHours: v.optional(v.string()),
    whatsappNumber: v.optional(v.string()),
    description: v.optional(v.string()),
    instagramUrl: v.optional(v.string()),
    facebookUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db.query("companyInfo").first();
    
    if (existing) {
      await ctx.db.patch(existing._id, {
        ...args,
        updatedAt: Date.now(),
      });
    } else {
      await ctx.db.insert("companyInfo", {
        ...args,
        updatedAt: Date.now(),
      });
    }
  },
});
