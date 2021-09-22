// creation des tags d'un article photographe
export default class ArticleLink {
  constructor(data) {
    this.content = this.link(data.tags);
  }

  // create links of home article
  link(tags) {
    this.articleLink = document.createElement('div');
    this.articleLink.className = 'article-link';
    for (let i = 0; i < tags.length; i += 1) {
      const link = document.createElement('span');
      link.className = 'tags';
      const href = document.createElement('a');
      href.href = '#';
      href.innerText = `#${tags[i]}`;
      link.appendChild(href);
      this.articleLink.appendChild(link);
    }
    return this.articleLink;
  }

  getContent() {
    return this.content;
  }
}
