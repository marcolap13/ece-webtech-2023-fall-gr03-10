export const db = [{
  slug: 'chaise-en-bois',
  title: 'Chaise en bois vintage',
  message: 'Une chaise en bois massif avec un design vintage. Parfaite pour compléter votre salle à manger.'
}, {
  slug: 'lampe-de-chevet',
  title: 'Lampe de chevet moderne',
  message: 'Une lampe élégante avec un abat-jour en tissu. Parfaite pour éclairer votre chambre à coucher.'
}, {
  slug: 'table-basse',
  title: 'Table basse en verre trempé',
  message: 'Une table basse contemporaine avec un plateau en verre trempé. Idéale pour votre salon.'
}, {
  slug: 'canape-modulable',
  title: 'Canapé modulable en cuir',
  message: 'Un canapé en cuir confortable et modulable qui s\'adapte à votre espace de vie.'
}
]

export default function handler(req, res) {
  res.status(200).json(db)
}
