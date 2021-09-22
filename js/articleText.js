// creation des infos texte d'un article photographe
export default class ArticleText {
  constructor(data) {
    this.content = this.texte(data.city, data.country, data.tagline, data.price);
  }

  // create text of home article
  texte(city, country, tagline, price) {
    this.articleText = document.createElement('div');
    this.articleText.className = 'article-texte';
    const ville = document.createElement('p');
    ville.innerText = `${city} , ${country}`;
    const description = document.createElement('p');
    description.innerText = tagline;
    const prix = document.createElement('p');
    prix.innerText = `${price}€/jour`;
    this.articleText.appendChild(ville);
    this.articleText.appendChild(description);
    this.articleText.appendChild(prix);
    return this.articleText;
  }

  getContent() {
    return this.content;
  }
}
