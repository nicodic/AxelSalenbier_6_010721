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
  }
}
