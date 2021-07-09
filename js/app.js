import { ArticleFactory } from "./articleFactory"

// createur de l'article 
function fabrique(data){
     const article = document.createElement('article')
     article.className = 'article'
     article.id = data.id
     const header =  new ArticleFactory("header", data)
     const texte = new ArticleFactory('text', data)
     const link = new ArticleFactory('link', data)
     article.appendChild(header.getContent())
     article.appendChild(texte.getContent())
     article.appendChild(link.getContent())
     return article
}

// permet d'afficher le json
function affichage(){
     fetch('./js/data.json').then(response => {
          return response.json();
        }).then(data => {
          console.log(data);
          for(let i=0;i<data.photographers.length; i++){
               let article = fabrique(data.photographers[i])
               let section = document.querySelector('.article-container')
               section.appendChild(article)
          }
        }).catch(err => {
          console.log(err)
        });
}

affichage()

// const test = () => {
//      const header = new ArticleFactory('link')
//      console.log(header)
// }
// test()


