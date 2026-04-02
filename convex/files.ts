import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Generate an upload URL for the client to upload a file to
export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

// Get the public URL for a stored file
export const getUrl = mutation({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
