import { MediaFactory } from './mediaFactory'
import {
  getPhotographer,
  getMediaByPhotographer,
  getPhotographers,
} from './repository'

let medias = []

function recupereId() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  const id = params.id
  affichage(id)
}
recupereId()


function fabriqueMedia(data) {
  const photo = new MediaFactory('photo', data)
  return photo.getContent()
}

function fabriqueMediaVideo(data) {
  const video = new MediaFactory('video', data)
  return video.getContent()
}

async function affichage(id) {
  const photographer = await getPhotographer(id)
  medias = await getMediaByPhotographer(id)
  const test = new Photographe(photographer)
  triPopularite()

}

function afficheMedias(tableauMedia) {
  let mediaSection = document.querySelector('.media-container')
  mediaSection.innerHTML = ""
  const totalLike = medias.reduce((sommetotal, media)=>{
    return sommetotal + media.likes
  },0)
  document.getElementsByClassName('total-like')[0].innerHTML = `${totalLike} <i class="fas fa-heart"></i>`
  for (let i = 0; i < medias.length; i++) {
    if ('image' in medias[i]){
     let article = fabriqueMedia(medias[i])
     fabriqueMedia(medias[i])
     mediaSection.appendChild(article)
    }
    else if ('video' in medias[i]){
      let articleVideo = fabriqueMediaVideo(medias[i])
      fabriqueMediaVideo(medias[i])
      mediaSection.appendChild(articleVideo)
    }
    else{
      return
    }
  }
}

class Photographe {
  constructor({ name, city, country, tags, tagline, price, portrait }) {
    this.name = name
    ;(this.city = city), (this.country = country)
    this.tags = tags
    this.tagline = tagline
    this.price = price
    this.portrait = portrait

    this.createPhotographe = function () {
      new Photographe()
    }
    document.title = `Profil de ${this.name}`
    document.getElementsByClassName('photographe-name')[0].innerText = this.name
    document.getElementsByClassName(
      'photographe-city',
    )[0].innerText = `${this.city},${this.country}`
    document.getElementsByClassName(
      'photographe-line',
    )[0].innerText = this.tagline
    this.tags.forEach(tag => {
      let span = document.createElement('span')
      span.className = 'tags'
      span.innerText = `#${tag}`
      document.getElementsByClassName('photographe-tags-container')[0].appendChild(span)
    });
    document.getElementsByClassName(
      'photographe-img',
    )[0].src = `./images/PhotographersID/${this.portrait}`;
    document.getElementsByClassName('prix')[0].innerText = `${price}€/jour`
    
  }
}

/* filtre medias */ 
const options = document.querySelectorAll('.option')
const select = document.getElementById('select')

select.addEventListener('change', function (e) {
  console.log(e.target.value)
  switch (e.target.value) {
    case 'Date':
      triDate()
      break;

    case 'Popularité':
      triPopularite()
      break;

    case 'Titre':
      triTitre()
      break

    default:
      break;
  }
})

function triDate() {
  const mediasGlobal = medias.sort(function (media1, media2){
    const date = new Date(media1.date)
    const date2 = new Date(media2.date)
    return date>date2 ? -1 : 1
  })
 afficheMedias(mediasGlobal)
}

function triTitre() {
  const mediasGlobal = medias.sort(function (media1, media2){
   return media1.title.localeCompare(media2.title)
  })
 afficheMedias(mediasGlobal)
}

function triPopularite() {
  const mediasGlobal = medias.sort(function (media1, media2){
   return media1.likes>media2.likes ? -1 : 1
  })
 afficheMedias(mediasGlobal)
}

/* Modal Contact */ 
const submit = document.getElementById('submit')
const modal = document.getElementById("modal")
const btnOpenModal = document.getElementById('btn-openModal')

btnOpenModal.addEventListener('click', function (e){
  e.preventDefault()
  modal.style.display = 'block'
})
