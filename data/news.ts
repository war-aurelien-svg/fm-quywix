export type Article = { slug: string; title: string; summary: string; author: string; date: string; category: string; image: string; body: string[] };

export const newsItems: Article[] = [
  {
    slug: "aurelien-quywix-devoile-premiere-liste-kosovo",
    title: "Aurélien Quywix dévoile sa première liste avec le Kosovo",
    summary: "Le sélectionneur kosovar a convoqué 23 joueurs pour quatre rendez-vous de Ligue des Nations, avec une place accordée à la jeunesse.",
    author: "FM QuywiX",
    date: "20 septembre 2026",
    category: "Sélection nationale",
    image: "/images/kosovo-premiere-liste-septembre-2026.png",
    body: [
      "Deux mois après sa prise de fonction, Aurélien Quywix a dévoilé sa toute première liste à la tête du Kosovo. Vingt-trois joueurs ont été appelés pour une séquence importante de Ligue des Nations, qui doit donner le ton du nouveau mandat.",
      "Le programme s'annonce chargé avec quatre rencontres : un déplacement en Lettonie, les réceptions de la Biélorussie et de l'Irlande du Nord, puis un voyage en Bulgarie pour y retrouver la Biélorussie. Cette dernière ne peut toujours pas accueillir de match UEFA sur son territoire en raison du conflit entre la Russie et l'Ukraine.",
      "Le nouveau sélectionneur a choisi de rajeunir le groupe tout en conservant ses cadres. Hamza Muqaj et Mustafë Abdullahu découvrent ainsi le rassemblement pour la première fois. À 23 ans, le défenseur Andi Hoti effectue lui son retour et pourrait obtenir sa deuxième sélection.",
      "Autour de ces nouveaux visages, les leaders Edon Zhegrova, Amir Rrahmani, Milot Rashica et Vedat Muriqi restent les repères d'une équipe qui veut prendre un nouveau départ.",
      "Cette première fenêtre internationale permettra à Aurélien Quywix de poser ses principes et de mesurer rapidement la capacité de son groupe à répondre aux ambitions annoncées lors de son arrivée."
    ]
  },
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
