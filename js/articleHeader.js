export default class ArticleHeader {
  constructor(data) {
    this.content = this.header(data);
  }

  // create header ( image clickable ) of home article
  header({nameImg, tag, id}) {
    const html = `<div>
        <a class="img-container" href="./photographe.html?id=${id}">
          <img src="./images/PhotographersID/${nameImg}" alt="${tag}">
        </a>
        <h4>${tag}</h4>
      </div>`
    
    this.articleHeader = document.createRange().createContextualFragment(html).firstChild;
    
    return this.articleHeader;
  }

  getContent() {
    return this.content;
  }
}
