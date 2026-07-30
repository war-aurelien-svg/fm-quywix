export type Article = {
  slug: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  category: string;
  image: string;
  body: string[];
};

export const newsItems: Article[] = [
  { slug:"losc-renverse-marseille", title:"Le LOSC renverse Marseille au bout du suspense", summary:"Menés puis bousculés, les Lillois ont trouvé les ressources pour s’imposer 3–2 dans les dernières minutes.", author:"Rédaction sportive", date:"Publié après LOSC — Marseille", category:"Ligue 1", image:"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1800&q=85", body:["Longtemps, la soirée a semblé échapper aux Lillois. Face à une équipe marseillaise agressive, le LOSC a d’abord couru après le score avant de reprendre progressivement le contrôle du ballon.","La seconde période a changé le visage de la rencontre. Plus précis dans les derniers mètres et porté par une Decathlon Arena en fusion, Lille a trouvé l’égalisation avant de faire basculer la partie dans un final irrespirable.","Le troisième but, inscrit dans les dernières minutes, a déclenché une explosion de joie dans les tribunes. Au-delà des trois points, cette victoire raconte la solidité d’un groupe qui refuse de renoncer.","Dans la course au titre, le LOSC envoie un message clair. La saison est encore longue, mais cette soirée pourrait compter parmi celles dont on se souvient au mois de mai."] },
  { slug:"lucas-martin-prolonge", title:"Le jeune Lucas Martin prolonge jusqu’en 2028", summary:"La direction sécurise l’un des symboles de son centre de formation.", author:"Rédaction QuywiX", date:"Hier", category:"Club", image:"https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=1800&q=85", body:["Le LOSC a officialisé la prolongation de Lucas Martin. Le jeune milieu offensif s’inscrit désormais dans la durée avec le club.","Considéré comme l’un des visages de la nouvelle génération, il a convaincu le staff par sa régularité à l’entraînement et son calme dans les moments importants.","Cette signature confirme la volonté lilloise de bâtir un effectif compétitif sans perdre le lien avec sa formation."] },
  { slug:"le-losc-prepare-son-ete", title:"Le LOSC prépare déjà son été", summary:"Trois postes ciblés pour poursuivre la progression de l’effectif.", author:"Rédaction QuywiX", date:"Lundi", category:"Mercato", image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1800&q=85", body:["Alors que la fin de saison approche, la cellule de recrutement a déjà identifié plusieurs priorités.","Un latéral, un milieu capable de casser les lignes et un attaquant polyvalent figurent parmi les profils suivis. La direction entend avancer sans précipitation.","Le mercato devra préserver l’équilibre financier tout en donnant davantage de profondeur à l’effectif."] }
];

export const latestArticle = newsItems[0];
