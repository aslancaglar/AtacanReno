"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD || "atacan2024";

  if (password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 jours
      path: "/",
    });
    return { success: true };
  } else {
    return { success: false, error: "Mot de passe incorrect" };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  // We don't use redirect here if called from a generic button, or we can.
  // Actually, we can return success and redirect on client, or redirect here.
  redirect("/login");
}
