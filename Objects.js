import Chair from './Assets/Images/chaise.jpg'
import Pull from './Assets/Images/pull.jpg'
import Phone1 from './Assets/Images/phone.jpg'
import Phone2 from './Assets/Images/samsung.jpg'
import Hat from './Assets/Images/chapeau.jpg'
import Book1 from './Assets/Images/radiguet.jpg'
import Evaluation1 from './Assets/Images/rate1.png'

export const Objects = [
  {
    id: 1,
    title: "Chaise de bureau",
    categorie: "Mobilier",
    categorieId: 4,
    description: "Cette chaise permet une assise vraiment hors-norme qui dépasserait presque l'entendement.",
    img: Chair,
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
    owner: "Margaux Mirel",
    email: "margaux23000@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Occasion",
    latitude: 47.217371,
    longitude: -1.543621,
    distance: "3km",
  },
];