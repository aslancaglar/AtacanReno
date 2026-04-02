"use client";

import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  className?: string;
  aspectRatio?: string;
}

export default function ImageUpload({
  value,
  onChange,
  label = "Image",
  className = "",
  aspectRatio = "aspect-[4/3]",
}: ImageUploadProps) {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const getUrl = useMutation(api.files.getUrl);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // 1. Get signed upload URL
      const uploadUrl = await generateUploadUrl();

      // 2. Upload file to Convex storage
      const result = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      const { storageId } = await result.json();

      // 3. Get the public URL
      const publicUrl = await getUrl({
        storageId: storageId as Id<"_storage">,
      });

      if (publicUrl) {
        onChange(publicUrl);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className={className}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
        id={`image-upload-${label}`}
      />

      {value ? (
        <div
          className={`relative ${aspectRatio} rounded-xl overflow-hidden border border-border bg-muted/30 group`}
        >
          <img src={value} alt={label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-2 rounded-xl bg-white/90 text-nav hover:bg-white transition-colors"
              disabled={uploading}
            >
              {uploading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Upload className="w-4 h-4" />
              )}
            </button>
            <button
              type="button"
              onClick={() => onChange("")}
              className="p-2 rounded-xl bg-white/90 text-red-500 hover:bg-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className={`w-full ${aspectRatio} rounded-xl border-2 border-dashed border-border hover:border-primary/40 bg-muted/30 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-2 text-muted-foreground cursor-pointer`}
        >
          {uploading ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
              <span className="text-xs font-medium">Envoi en cours...</span>
            </>
          ) : (
            <>
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <ImageIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Cliquez pour ajouter</span>
              <span className="text-[10px] text-muted-foreground/60">
                JPG, PNG, WebP
              </span>
            </>
          )}
        </button>
      )}
    </div>
  );
}
