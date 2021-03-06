import Chair from './Assets/Images/chaise.jpg'
import Chair2 from './Assets/Images/chaise2.jpg'
import Pull from './Assets/Images/pull.jpg'
import Pull2 from './Assets/Images/pull2.jpg'
import Phone1 from './Assets/Images/phone.jpg'
import Phone2 from './Assets/Images/phone2.jpg'
import Hat from './Assets/Images/chapeau.jpg'
import Hat2 from './Assets/Images/chapeau2.jpg'
import Book1 from './Assets/Images/radiguet.jpg'
import Tucson1 from './Assets/Images/tucson1.jpg'
import Tucson2 from './Assets/Images/tucson2.jpg'
import Renault1 from './Assets/Images/renault1.jpg'
import Renault2 from './Assets/Images/renault2.jpg'
import Iphone1 from './Assets/Images/iphone.jpg'
import Iphone2 from './Assets/Images/iphone2.jpg'
import Aqua1 from './Assets/Images/aquarelle.jpg'
import Aqua2 from './Assets/Images/aquarelle2.jpg'
import Peindre1 from './Assets/Images/peindre1.jpg'
import Peindre2 from './Assets/Images/peindre2.jpg'
import Meuble1 from './Assets/Images/meuble1.jpg'
import Meuble2 from './Assets/Images/meuble2.jpg'
import Jazz1 from './Assets/Images/jazz1.jpg'
import Jazz2 from './Assets/Images/jazz2.jpg'
import Ricken1 from './Assets/Images/ricken1.jpg'
import Ricken2 from './Assets/Images/ricken2.jpg'
import Soutien1 from './Assets/Images/soutien1.jpg'
import Soutien2 from './Assets/Images/soutien2.jpg'
import Theatre1 from './Assets/Images/theatre.jpg'
import Theatre2 from './Assets/Images/theatre2.jpg'
import Evaluation1 from './Assets/Images/rate1.png'

export const Objects = [
  {
    id: 1,
    title: "Chaise de bureau",
    categorie: "Mobilier",
    categorieId: 4,
    description: "Cette chaise permet une assise vraiment hors-norme. A venir tester, le plus rapidement possible.",
    img: Chair,
    img2: Chair2,
    owner: "Marc Lebon",
    email: "marc.lebon@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Bon état",
    latitude: 47.218371,
    longitude: -1.553621,
    distance: "500m",
  },
  {
    id: 2,
    title: "Pull col roulé",
    categorie: "Vêtement",
    categorieId: 1,
    description: "Petit pull bien chaud qui ne paye pas trop de mine vu comme ça mais qui vaut vraiment le détour.",
    img: Pull,
    img2: Pull2,
    owner: "Alain Taco",
    email: "taco@laposte.net",
    evaluationOwner: Evaluation1,
    condition: "Comme neuf",
    latitude: 47.237371,
    longitude: -1.543621,
    distance: "800m",
  },
  {
    id: 3,
    title: "Chapeau en paille",
    categorie: "Vêtement",
    categorieId: 1,
    description: "Chapeau en paille jamais porté. Taille grand.",
    img: Hat,
    img2: Hat2,
    owner: "Eric Plantier",
    email: "eric-plantier2@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Neuf",
    latitude: 47.287371,
    longitude: -1.541621,
    distance: "1,4km",
  },
  {
    id: 4,
    title: "Téléphone portable",
    categorie: "Multimedia",
    categorieId: 3,
    description: "Téléphone clairement désuet mais hautement fonctionnel. La fonction sms ne fonctionne plus.",
    img: Phone1,
    img2: Phone2,
    owner: "Margaux Mirel",
    email: "margaux23000@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Occasion",
    latitude: 47.02371,
    longitude: -1.983621,
    distance: "2km",
  },
  {
    id: 5,
    title: "Cours de théâtre",
    categorie: "Service",
    categorieId: 6,
    description: "Je propose de donner des cours de théâtre pour enfants de 6 à 8 ans.",
    img: Theatre1,
    img2: Theatre2,
    owner: "Margaux Mirel",
    email: "margaux23000@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "",
    latitude: 47.218371,
    longitude: -1.549621,
    distance: "3km",
  },
  {
    id: 6,
    title: "Hyundai Tucson",
    categorie: "Véhicules",
    categorieId: 5,
    description: "A vendre pour pièces : injecteurs HS et problèmes de lubrification moteur, avec 4 pneus PIRELLI.",
    img: Tucson1,
    img2: Tucson2,
    owner: "Maxime Lorat",
    email: "max26000@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Occasion",
    latitude: 47.217971,
    longitude: -1.543221,
    distance: "800m",
  },
  {
    id: 7,
    title: "Renault Captur",
    categorie: "Véhicules",
    categorieId: 5,
    description: "Renault Capture 1.5 DCI 90 energy interns eco2 - 18/04/2013 - 4cv. Eligible prime à la conversion.",
    img: Renault1,
    img2: Renault2,
    owner: "Didier Gourin",
    email: "d.gourin@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Bon état",
    latitude: 47.217981,
    longitude: -1.545261,
    distance: "400m",
  },
  {
    id: 8,
    title: "Iphone 6s",
    categorie: "Multimedia",
    categorieId: 3,
    description: "Iphone 6s 16Go gris silver. Aucune rayure ni impact. Fonctionne parfaitement.",
    img: Iphone1,
    img2: Iphone2,
    owner: "Fred Faucon",
    email: "f.faucon@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Bon état",
    latitude: 47.2178,
    longitude: -1.56865,
    distance: "600m",
  },
  {
    id: 9,
    title: "Leçon d'aquarelle",
    categorie: "Livre",
    categorieId: 2,
    description: "Apprendre à peindre à l'aqurelle, les paysages urbains et l'art d'encadrer. ",
    img: Aqua1,
    img2: Aqua2,
    owner: "Habib Soufi",
    email: "soufi@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Bon état",
    latitude: 47.2118,
    longitude: -1.56065,
    distance: "2km",
  },
  {
    id: 10,
    title: "Peindre à l'huile",
    categorie: "Livre",
    categorieId: 2,
    description: "'Peindre à l'huile' : techniques et applications en 10 leçons, 128 pages.",
    img: Peindre1,
    img2: Peindre2,
    owner: "Marc Montcalme",
    email: "marco@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Comme neuf",
    latitude: 47.981081,
    longitude: -1.118211,
    distance: "3km",
  },
  {
    id: 11,
    title: "Meuble TV",
    categorie: "Mobilier",
    categorieId: 4,
    description: "Meuble TV en chêne massif comprenant 3 portes dont une centrale vitrée et un plateau tournant. Dim L110*l50*H84",
    img: Meuble1,
    img2: Meuble2,
    owner: "Romain Mistou",
    email: "romain@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Bon état",
    latitude: 47.081081,
    longitude: -1.918211,
    distance: "1km",
  },
  {
    id: 12,
    title: "Fender Jazzmaster",
    categorie: "Musique",
    categorieId: 7,
    description: "Guitare électrique Fender Jazzmaster. Chevalet en tusq, bloc cordes, stop buzz.",
    img: Jazz1,
    img2: Jazz2,
    owner: "Marc Chome",
    email: "marc@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Comme neuf",
    latitude: 47.011081,
    longitude: -1.018211,
    distance: "2km",
  },
  {
    id: 13,
    title: "Soutien scolaire",
    categorie: "Service",
    categorieId: 6,
    description: "Je propose des cours en mathématiques et physique chimie niveau collège.",
    img: Soutien1,
    img2: Soutien2,
    owner: "Jeanne Rougier",
    email: "rougier@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "",
    latitude: 47.23081,
    longitude: -1.5418211,
    distance: "1.2km",
  },
  {
    id: 14,
    title: "Rickenbacker",
    categorie: "Musique",
    categorieId: 7,
    description: "Guitare électrique RickenBacker. Chevalet en tusq, bloc cordes, stop buzz.",
    img: Ricken1,
    img2: Ricken2,
    owner: "Marc Chome",
    email: "marc@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Occasion",
    latitude: 47.819081,
    longitude: -1.0618211,
    distance: "200m",
  },

];
