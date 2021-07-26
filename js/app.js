import { ArticleFactory } from "./articleFactory"
import { getPhotographers } from './repository'

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
async function affichage(){
     const photographers = await getPhotographers()
     for(let i=0;i<photographers.length; i++){
          let article = fabrique(photographers[i])
          let section = document.querySelector('.article-container')
          section.appendChild(article)
     }
}

affichage()

/* Filtre par tag */ 

const tag = document.querySelectorAll('.tag')

tag.forEach(el => el.addEventListener('click',event => {
     const tagActuel = event.path[0].innerText
     let section = document.querySelector('.article-container')
     section.innerHTML = ""

     async function affichagefiltre(){
          const photographers = await getPhotographers()
          for (let i = 0; i < photographers.length; i++) {
               const tags = photographers[i].tags
               if(tags.includes(tagActuel)){
                    let section = document.querySelector('.article-container')
                    let article = fabrique(photographers[i])
                    section.appendChild(article)
               }
          }
          
     }
     affichagefiltre()
}))

