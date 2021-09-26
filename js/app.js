import ArticleFactory from './articleFactory';
import { getPhotographers } from './repository';



// create article
function fabrique(data) {
  const article = document.createElement('article');
  
  const header = new ArticleFactory('header', data).getContent();
  const texte = new ArticleFactory('text', data).getContent();
  const link = new ArticleFactory('link', data).getContent();
  
  article.className = 'article';
  article.id = data.id;
  article.append(header, texte, link);
  
  return article;
}

// display json
async function affichage() {
  const photographers = await getPhotographers();
  
  photographers.forEach(photographer => {
    document.querySelector('.article-container').append(fabrique(photographer));
  })
}

affichage();

/* Filter by tag */

const tag = document.querySelectorAll('.tag');

async function affichagefiltre(tagActuel) {
  const photographers = await getPhotographers();
  const section = document.querySelector('.article-container');
  
  section.innerHTML = '';
  
  photographers.forEach(photographer => {
    if (!photographer.tags.includes(tagActuel)) return
    
    section.append(fabrique(photographer));
  })
}

tag.forEach((el) => {
  el.addEventListener('click', (event) => {
    affichagefiltre(event.currentTarget.id);
  });
});
