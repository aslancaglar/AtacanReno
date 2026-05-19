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
        email: "contact@atcrenovation.com",
        phone: "06 29 04 72 72",
        address: "123 Rue de Nancy, 54630 Flavigny-sur-Moselle",
        workingHours: "Lun – Ven : 8h00 – 18h00\nSam : 9h00 – 13h00",
        whatsappNumber: "0629047272",
        description: "Spécialiste de la rénovation d'intérieur « clé en main » sur Nancy et sa région depuis plus de 20 ans. De la conception à la réalisation, nous transformons votre intérieur.",
        instagramUrl: "",
        facebookUrl: "",
        interventionZones: "Nancy (54000)\nVandœuvre-lès-Nancy\nLaxou & Villers-lès-Nancy\nEssey & Saint-Max\nMalzéville & Tomblaine\nJarville & Heillecourt\nSaint-Nicolas-de-Port\nPont-à-Mousson & Toul",
        vacationStartDate: "",
        vacationEndDate: "",
        vacationMessage: "",
        siret: "82369837800028",
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
    interventionZones: v.optional(v.string()),
    vacationStartDate: v.optional(v.string()),
    vacationEndDate: v.optional(v.string()),
    vacationMessage: v.optional(v.string()),
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
