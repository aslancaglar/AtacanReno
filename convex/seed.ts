import { mutation } from "./_generated/server";

export const seedAll = mutation({
  handler: async (ctx) => {
    const existingPortfolio = await ctx.db.query("portfolio").first();
    const existingReviews = await ctx.db.query("reviews").first();
    let seededPortfolio = 0;
    let seededReviews = 0;

    // ─── Portfolio Items ───
    const portfolioItems = [
      {
        title: "Suite Parentale de Luxe",
        location: "Nancy Centre",
        category: "Salles de bain",
        imageUrl: "/images/real-1.jpg",
        beforeImageUrl: "/images/before-1.jpg",
        description: "Rénovation complète d'une suite parentale avec douche à l'italienne en mosaïque et double vasque sur mesure.",
        visible: true,
        createdAt: Date.now() - 6 * 86400000,
      },
      {
        title: "Rénovation Complète T4",
        location: "Vandoeuvre-lès-Nancy",
        category: "Salons",
        imageUrl: "/images/real-2.jpg",
        beforeImageUrl: "/images/before-2.jpg",
        description: "Rénovation intégrale d'un appartement T4 : sols, murs, cuisine, salle de bains, électricité.",
        visible: true,
        createdAt: Date.now() - 5 * 86400000,
      },
      {
        title: "Loft Parisien Contemporain",
        location: "Nancy Vieille Ville",
        category: "Salons",
        imageUrl: "/images/real-3.jpg",
        description: "Transformation d'un espace classique en un loft contemporain lumineux.",
        visible: true,
        createdAt: Date.now() - 4 * 86400000,
      },
      {
        title: "Renovation Design Epuré",
        location: "Laxou",
        category: "Salons",
        imageUrl: "/images/real-4.jpg",
        beforeImageUrl: "/images/before-4.jpg",
        description: "Rénovation avec un design épuré et des matériaux nobles.",
        visible: true,
        createdAt: Date.now() - 3 * 86400000,
      },
      {
        title: "Concept Loft Central",
        location: "Nancy Centre",
        category: "Cuisines",
        imageUrl: "/images/real-5.jpg",
        description: "Cuisine ouverte avec îlot central en quartz et rangements optimisés.",
        visible: true,
        createdAt: Date.now() - 2 * 86400000,
      },
      {
        title: "Harmonie et Lumière",
        location: "Essey-lès-Nancy",
        category: "Cuisines",
        imageUrl: "/images/real-6.jpg",
        description: "Cuisine baignée de lumière naturelle avec finitions haut de gamme.",
        visible: true,
        createdAt: Date.now() - 1 * 86400000,
      },
    ];

    if (!existingPortfolio) {
      for (const item of portfolioItems) {
        await ctx.db.insert("portfolio", item);
      }
      seededPortfolio = portfolioItems.length;
    }

    // ─── Reviews ───
    const reviews = [
      {
        name: "Sophie Laurent",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
        text: "Nous avons confié à Atacan la rénovation complète de notre salle de bains. Le résultat est spectaculaire : douche à l'italienne en mosaïque, double vasque sur mesure, et une finition irréprochable. L'équipe a respecté chaque détail de notre vision tout en apportant des conseils précieux. Un chantier propre, des délais tenus, un budget respecté. Nous recommandons sans hésiter !",
        rating: 5,
        project: "Rénovation Salle de Bains",
        imageUrl: "/images/real-1.jpg",
        visible: true,
        createdAt: Date.now() - 6 * 86400000,
      },
      {
        name: "Jean-Pierre Morel",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        text: "Atacan a pris en charge la rénovation intégrale de notre appartement T4 à Vandoeuvre. Tout a été refait : sols, murs, cuisine, salle de bains, électricité. Le suivi de chantier était exemplaire avec un seul interlocuteur du début à la fin. Le rapport qualité-prix est excellent et le résultat dépasse largement ce que nous imaginions. Merci à toute l'équipe pour ce travail remarquable.",
        rating: 5,
        project: "Rénovation Appartement T4",
        imageUrl: "/images/real-2.jpg",
        visible: true,
        createdAt: Date.now() - 5 * 86400000,
      },
      {
        name: "Marie Dubois",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        text: "Notre vieille cuisine fermée a été transformée en un espace ouvert, moderne et lumineux. L'îlot central en quartz est magnifique, les rangements sont optimisés et la crédence en carreaux de ciment apporte un vrai cachet. L'équipe a su gérer la plomberie, l'électricité et la pose de cuisine avec une coordination parfaite. On adore cuisiner maintenant !",
        rating: 5,
        project: "Cuisine Ouverte Sur Mesure",
        imageUrl: "/images/real-3.jpg",
        visible: true,
        createdAt: Date.now() - 4 * 86400000,
      },
      {
        name: "Thomas Renard",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        text: "Isolation des combles réalisée par Atacan dans le cadre de MaPrimeRénov'. Dossier d'aides monté par leurs soins, travaux propres et rapides. On sent vraiment la différence de confort thermique cet hiver. Entreprise certifiée RGE, sérieuse et compétente.",
        rating: 5,
        project: "Isolation Combles RGE",
        imageUrl: "/images/real-4.jpg",
        visible: true,
        createdAt: Date.now() - 3 * 86400000,
      },
      {
        name: "Isabelle Martin",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
        text: "Atacan a refait toute la peinture de notre salon et posé un magnifique papier peint panoramique. Le travail de préparation des murs était minutieux et le rendu final est sublime. Les conseils en colorimétrie nous ont beaucoup aidés à faire les bons choix.",
        rating: 5,
        project: "Peinture & Décoration",
        imageUrl: "/images/real-5.jpg",
        visible: true,
        createdAt: Date.now() - 2 * 86400000,
      },
      {
        name: "François Petit",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        text: "Aménagement complet de nos combles en suite parentale avec salle d'eau. Un vrai travail d'orfèvre pour optimiser chaque centimètre sous les rampants. Pose de Velux, isolation, placo, carrelage, peinture — tout a été géré par une seule équipe. Résultat parfait.",
        rating: 5,
        project: "Aménagement Combles",
        imageUrl: "/images/real-6.jpg",
        visible: true,
        createdAt: Date.now() - 1 * 86400000,
      },
    ];

    if (!existingReviews) {
      for (const review of reviews) {
        await ctx.db.insert("reviews", review);
      }
      seededReviews = reviews.length;
    }

    return {
      message: `Seeded ${seededPortfolio} portfolio items and ${seededReviews} reviews.`,
    };
  },
});
