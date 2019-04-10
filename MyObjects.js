import Chair from './Assets/Images/chaise.jpg'
import Pull from './Assets/Images/pull.jpg'
import Evaluation1 from './Assets/Images/rate1.png'

export const MyObjects = [
  {
    id: 1,
    title: "Chaise de bureau",
    categorie: "Mobilier",
    categorieId: 4,
    description: "Cette chaise permet une assise vraiment hors-norme qui dépasserait presque l'entendement.",
    img: Chair,
    owner: "Pierre Cormier",
    email: "cormierpierre@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Bon état",
    latitude: 47.218371,
    longitude: -1.553621,
  },
  {
    id: 2,
    title: "Pull col roulé",
    categorie: "Vêtement",
    categorieId: 1,
    description: "Petit pull bien chaud qui ne paye pas trop de mine vu comme ça mais qui vaut vraiment le détour.",
    img: Pull,
    owner: "Pierre Cormier",
    email: "cormierpierre@gmail.com",
    evaluationOwner: Evaluation1,
    condition: "Comme neuf",
    latitude: 47.237371,
    longitude: -1.543621,
  },
];
