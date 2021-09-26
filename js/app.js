import ArticleFactory from './articleFactory';
import { getPhotographers } from './repository';

let photographers = []
const section = document.querySelector('.article-container')

// create article
const createArticle = (data) => {
  const articleElm = document.createElement('article');
  
  const header = new ArticleFactory('header', data).getContent();
  const texte = new ArticleFactory('text', data).getContent();
  const link = new ArticleFactory('link', data).getContent();
  
  articleElm.className = 'article';
  articleElm.id = data.id;
  articleElm.append(header, texte, link);
  
  return articleElm;
}

// display json
const displayArticles = (selectedTag) => {
  photographers.forEach((photographer) => {
    if (selectedTag && !photographer.tags.includes(selectedTag)) return;
    
    section.append(createArticle(photographer));
  })
}

const init = async () => {
  photographers = await getPhotographers();
  
  displayArticles();
  
  document.querySelectorAll('.tag').forEach((el) => {
    el.addEventListener('click', () => {
      displayArticles(el.id);
    });
  });
}

init();
