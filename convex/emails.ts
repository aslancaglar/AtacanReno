import { v } from "convex/values";
import { action } from "./_generated/server";

export const sendNewDevisEmail = action({
  args: {
    devisId: v.id("devis"),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    serviceSlug: v.string(),
    propertyType: v.string(),
    budget: v.optional(v.string()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const resendApiKey = process.env.RESEND_API_KEY;
    // Default email to receive notifications. Must match Resend account email for testing domain!
    const adminEmail = process.env.ADMIN_EMAIL || "caslanfedev@gmail.com"; 

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY non configurée. Impossible d'envoyer l'email.");
      return;
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #2F6146; border-bottom: 2px solid #2F6146; padding-bottom: 10px;">Nouvelle Demande de Devis</h2>
        <p>Une nouvelle demande de devis a été soumise sur votre site <strong>ATC Rénovation</strong>.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Nom Complet</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${args.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${args.email}">${args.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Téléphone</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:${args.phone}">${args.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Type de Projet</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${args.serviceSlug}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Type de Bien</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${args.propertyType}</td>
          </tr>
          ${args.budget ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Budget Estimé</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${args.budget}</td>
          </tr>` : ''}
        </table>

        ${args.description ? `
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #D4AF37; margin-bottom: 20px;">
          <h4 style="margin-top: 0;">Description du projet :</h4>
          <p style="white-space: pre-line; margin-bottom: 0;">${args.description}</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 30px;">
          <a href="https://atacan-renovation.fr/admin/devis/${args.devisId}" style="background-color: #2F6146; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">Voir dans le Dashboard</a>
        </div>
      </div>
    `;

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          // The 'from' address must be a verified domain on Resend (like onboarding@resend.dev for testing 
          // or a real domain you verified like devis@atacan-renovation.fr)
          from: "ATC Rénovation <onboarding@resend.dev>",
          to: adminEmail,
          subject: `Nouvelle Demande de Devis : ${args.serviceSlug} - ${args.name}`,
          html: htmlContent
        })
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Erreur lors de l'envoi de l'email via Resend:", error);
      } else {
        console.log(`Email de notification envoyé avec succès pour le devis ${args.devisId}`);
      }
    } catch (error) {
      console.error("Exception lors de l'envoi de l'email:", error);
    }
  }
});
