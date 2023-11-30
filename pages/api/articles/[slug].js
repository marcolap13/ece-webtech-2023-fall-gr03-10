export default function handler(req, res) {
  const db = require('../articles.js');
  const article = db.find( article => article.slug === req.query.slug)
  if( !article ) return res.status(404).json('Wrong article')
  res.status(200).json(article)
}
