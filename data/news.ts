export type Article = { slug: string; title: string; summary: string; author: string; date: string; category: string; image: string; body: string[] };

export const newsItems: Article[] = [];

export const latestArticle: Article = {
  slug: "",
  title: "Aucune actualité pour le moment",
  summary: "Importez une sauvegarde ou ajoutez un article pour commencer à raconter votre carrière.",
  author: "FM QuywiX",
  date: "En attente de données",
  category: "Actualités",
  image: "/images/decathlon-arena-hero.png",
  body: []
};
