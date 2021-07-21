export class ArticleFactory{
     constructor(type, data){
          switch(type){
               case 'header' :
                    return new ArticleHeader(data)
               case 'text':
                    return new ArticleText(data)
               case 'link' :
                    return new ArticleLink(data)
               default :
                    throw new Error('Entrez un parametre valide')
          }
     }
}

class ArticleHeader{
     content = null;
     constructor(data){
          this.content = this.header(data.portrait, data.name , data.id)
     }
// creation du header d'un article photographe ( image cliquable )
    header(nameImg, tag, id) {
          const articleHeader = document.createElement('div')
          articleHeader.className = 'article-header'
          const linkImg = document.createElement('a')
          linkImg.className = 'img-container'
          linkImg.href = `./photographe.html?id=${id}`
          const img = document.createElement('img')
          img.src = `./images/PhotographersID/${nameImg}`
          img.alt = tag
          linkImg.appendChild(img)
          const titre = document.createElement('h4')
          titre.innerText = tag
          articleHeader.appendChild(linkImg)
          articleHeader.appendChild(titre)
          return articleHeader
     }
     getContent(){
          return this.content
     }
     
}
// creation des infos texte d'un article photographe 
class ArticleText{
     content = null;
     constructor(data){
          this.content = this.texte(data.city,data.country, data.tagline , data.price)
     }

     texte(city,country, tagline, price){
          const articleText = document.createElement('div')
          articleText.className = 'article-texte'
          const ville = document.createElement('p')
          ville.innerText =`${city} , ${country}`
          const description = document.createElement('p')
          description.innerText = tagline
          const prix = document.createElement('p')
          prix.innerText = `${price}€/jour`
          articleText.appendChild(ville)
          articleText.appendChild(description)
          articleText.appendChild(prix)
          return articleText
     }
     getContent(){
          return this.content
     }
}
// creation des tags d'un article photographe 
class ArticleLink{
     content = null
     constructor(data){
          this.content = this.link(data.tags)
     }
     link(tags){
          const articleLink = document.createElement('div')
          articleLink.className ='article-link'
          for(let i=0;i<tags.length;i++){
               const link = document.createElement('span')
               link.className ='tags'
               const href = document.createElement('a')
               href.href = '#'
               href.innerText = `#${tags[i]}`
               link.appendChild(href)
               articleLink.appendChild(link)
          }
          return articleLink
     }
     getContent(){
          return this.content
     }
}