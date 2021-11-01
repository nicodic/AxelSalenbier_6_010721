import ArticleHeader from './articleHeader';
import ArticleText from './articleText';
import ArticleLink from './articleLink';

// Create article factory with differents sub-article parts
export default class ArticleFactory {
  constructor(type, data) {
    switch (type) {
      case 'header':
        return new ArticleHeader(data);
      case 'text':
        return new ArticleText(data);
      case 'link':
        return new ArticleLink(data);
      default:
        throw new Error('Entrez un parametre valide');
    }
    /*
    Rien de grave juste je préfère le else if plutôt que switch à cause de sa synthaxe trop spécifique (souvent tu vas devoir checker google pour savoir comment l'écrire ^^)
    
    if(type === 'header') {
        return new ArticleHeader(data);
    } else if(type === 'text') {
        return new ArticleText(data);
    } else if(type === 'link') {
        return new ArticleLink(data);
    } else {
        throw new Error('Entrez un parametre valide');
    }
    */
}
