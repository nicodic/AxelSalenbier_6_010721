import { getMediaByPhotographer } from "./repository"
let result = []
let index = 0
export const openLightbox = async (media) => {
  result = await getMediaByPhotographer(media.photographerId)
  let lightbox = document.querySelector('.lightbox')
  lightbox.style.display = 'block'
  showSlides(media)
  showMedias(media)
     
}

async function showSlides(media) {
  index = result.findIndex((currentMedia)=>{return currentMedia.id === media.id})
  const nombreslide = document.querySelector('.numbertext')
  nombreslide.innerText = `${index + 1 }/${result.length}`
}

async function showMedias(media){
  index = result.findIndex((currentMedia)=>{return currentMedia.id === media.id})
  const currentImage = document.querySelector('#currentSlideImg')
  const currentVideo = document.querySelector('#currentSlideVideo')
  const name = document.getElementsByClassName('photographe-name')[0].outerText
  const namesplit = name.split(" ")[0]
  
 if(media.video){
  currentImage.style.display = 'none'
  currentVideo.style.display = 'block'
  if(namesplit == "Ellie-Rose"){
    const Ellie = namesplit.replace('-','')
    currentVideo.src = `./images/${Ellie}/${media.video}`
}
else{
    currentVideo.src = `./images/${namesplit}/${media.video}`
}
 }
 else if(media.image){
  currentVideo.style.display = 'none'
  currentImage.style.display = 'block'
  if(namesplit == "Ellie-Rose"){
    const Ellie = namesplit.replace('-','')
    currentImage.src = `./images/${Ellie}/${media.image}`
}
else{
    currentImage.src = `./images/${namesplit}/${media.image}`
}
 }
 else{
   return
 }
}

//close lightbox
let lightbox = document.querySelector('.lightbox')
let closebtn = document.querySelector('.close')
closebtn.addEventListener('click', function(){
  lightbox.style.display = 'none'
})

//arrow control
let prev = document.querySelector('.prev')
prev.addEventListener('click', function(){
  index--
  if(index<0){
    index = result.length - 1
  }
  showMediaByIndex(index)
})

let next = document.querySelector('.next')
next.addEventListener('click', function(){
  index++
  if(index==result.length){
    index = 0
  }
  showMediaByIndex(index)
})

function showMediaByIndex(index){
  let media = result[index]
  showMedias(media)
  showSlides(media)
}