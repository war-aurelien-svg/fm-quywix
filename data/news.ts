export type Article = { slug: string; title: string; summary: string; author: string; date: string; category: string; image: string; body: string[] };

export const newsItems: Article[] = [
  {
    slug: "aurelien-quywix-nouveau-selectionneur-kosovo",
    title: "Le Kosovo confie sa sélection à Aurélien Quywix",
    summary: "Deux jours après le sacre du Maroc face à l'Équateur à New York, Aurélien Quywix a été nommé sélectionneur du Kosovo.",
    author: "FM QuywiX",
    date: "21 juillet 2026",
    category: "Sélection nationale",
    image: "/images/aurelien-quywix-kosovo-intronisation.png",
    body: [
      "Deux jours après le sacre du Maroc face à l'Équateur en finale à New York, une finale d'outsiders qui a marqué les esprits, la Fédération kosovare a officialisé l'arrivée d'Aurélien Quywix à la tête de sa sélection nationale.",
      "Le nouveau sélectionneur se voit confier une mission claire : donner une nouvelle dimension au Kosovo et installer une équipe capable de rivaliser durablement sur la scène européenne.",
      "La première étape sera la Ligue des Nations. Aurélien Quywix veut remporter le groupe 4 de la division C, face à l'Arménie, au Kazakhstan et à la Lituanie, afin de lancer son mandat par une dynamique positive.",
      "À plus long terme, l'ambition est historique : qualifier pour la première fois le Kosovo à une grande compétition internationale. L'Euro 2028 et la Coupe du monde 2030 sont déjà dans toutes les têtes.",
      "Pour y parvenir, le sélectionneur compte s'appuyer sur plusieurs cadres, dont Edon Zhegrova, Amir Rrahmani, Milot Rashica et Vedat Muriqi.",
      "La première liste d'Aurélien Quywix est attendue dans un peu plus d'un mois, avec les premiers rendez-vous de la Ligue des Nations en ligne de mire."
    ]
  }
];

export const latestArticle: Article = newsItems[0]!;
