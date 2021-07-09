function recupereId(){
     const id = localStorage.getItem('id')
     affichage(id)
     console.log(id)
}

recupereId()



function affichage(id){
    fetch('./js/data.json').then(response => {
        return response.json();
        }).then(data => {
          const photographe = data.photographers.find((user)=>user.id == id);     
          const photos = data.media.filter((item) => item.photographerId == id);
          console.log(photographe) 
          console.log(photos)
          const test = new Photographe(photographe)
          console.log(test.name)
        }).catch(err => {
          console.log(err)
        });
}

class Photographe {
  constructor({name, city, country, tags, tagline, price, portrait}){
    this.name = name;
    this.city = city,
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait

    this.createPhotographe = function(){
      new Photographe()
    }

    document.getElementsByClassName('photographe-name')[0].innerText = this.name
  }
}

// function fabriqueInfosPhotographe(){
//   const section = document.createElement('section')
//   const info = fabriqueInfos(data.portrait, data.name , data.id)
//   const boutton = fabriqueboutton()
//   const image = fabriqueImage(data.portrait)
//   section.appendChild(info)
//   section.appendChild(boutton)
//   section.appendChild(image)
//   return section
// }

// creation du info
// function fabriqueInfos(nameImg, tag, id){
//   const articleinfo = document.createElement('div')
//   articleinfo.className = 'article-info'
//   const imgContainer = document.createElement('div')
//   imgContainer.className = 'img-container'
//   const imageImg = document.createElement('a')
//   imageImg.href = './photographe.html'
//   const img = document.createElement('img')
//   img.src = `./images/PhotographersID/${nameImg}`
//   img.addEventListener('click', function(){
//        sendId(id)
//   })
//   img.alt = tag
//   imageImg.appendChild(img)
//   imgContainer.appendChild(imageImg)
//   const titre = document.createElement('h4')
//   titre.innerText = tag
//   articleinfo.appendChild(imgContainer)
//   articleinfo.appendChild(titre)
//   return articleinfo
// }

// // creation du boutton de l'article
// function fabriqueboutton(city, tagline, price){
//   const articleText = document.createElement('div')
//   articleText.className = 'article-boutton'
//   const ville = document.createElement('p')
//   ville.innerText = city
//   const description = document.createElement('p')
//   description.innerText = tagline
//   const prix = document.createElement('p')
//   prix.innerText = price
//   articleText.appendChild(ville)
//   articleText.appendChild(description)
//   articleText.appendChild(prix)
//   return articleText
// }

// // creation de l'image de l'article
// function fabriqueImage(tags){
//   const articleimage = document.createElement('div')
//   articleimage.className ='article-image'
//   for(let i=0;i<tags.length;i++){
//        const image = document.createElement('span')
//        image.className ='image'
//        const href = document.createElement('a')
//        href.href = '#'
//        href.innerText = `#${tags[i]}`
//        image.appendChild(href)
//        articleimage.appendChild(image)
//   }
//   return articleimage
// }
