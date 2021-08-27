import { openLightbox } from "./lightbox"

export class MediaFactory{
     constructor(type,data,handleLikeChange){
          switch(type){
               case  'photo' :
                    return new MediaPhoto(data, handleLikeChange)
               case 'video' : 
                    return new MediaVideo(data, handleLikeChange)
                    default :
                    throw new Error('Entrez un parametre valide')
          }
     }
}

class MediaPhoto{
     content = null
     constructor(data, handleLikeChange){
          console.log(handleLikeChange)
          this.content = this.photo(data, handleLikeChange)
     }
     photo(data, handleLikeChange){
          const media = document.createElement('article')
           media.className = 'media'
           const imgcontainer = document.createElement('a')
           imgcontainer.className = 'img-container'
           imgcontainer.href = "#"
           const img = document.createElement('img')
           const name = document.getElementsByClassName('photographe-name')[0].outerText
           //ELie-Rose -> enlever le tirer
           const namesplit = name.split(" ")[0]
           if(namesplit == "Ellie-Rose"){
               const Ellie = namesplit.replace('-','')
               img.src = `./images/${Ellie}/${data.image}`
          }
          else{
               img.src = `./images/${namesplit}/${data.image}`
          }
          imgcontainer.addEventListener('click',()=>{openLightbox(data);window.scrollTo(0,0)})
          const mediaInfo = document.createElement('a')
          mediaInfo.href = "#"
          mediaInfo.className = "media-infos"
          const titre = document.createElement('h4')
          titre.innerHTML = data.title
          const like = document.createElement('span')
          const datalike = document.createElement('span')
          datalike.innerText = data.likes
          const coeur = document.createElement('i')
          coeur.className = "fas fa-heart"
          coeur.addEventListener('click', ()=>{
               data.likes++
               datalike.innerText = data.likes
               handleLikeChange()
          })
          like.appendChild(datalike)
          like.appendChild(coeur)
          imgcontainer.appendChild(img)
          mediaInfo.appendChild(titre)
          mediaInfo.appendChild(like)
          media.appendChild(imgcontainer)
          media.appendChild(mediaInfo)
          return media
     }
     getContent(){
          return this.content
     }
}

class MediaVideo{
     content = null
     constructor(data){
          this.content = this.video(data)
     }
     video(data){
          const mediaVideo = document.createElement('article')
          mediaVideo.className = 'media'
          const videoContainer = document.createElement('div')
          videoContainer.className ='video-container'
          const video = document.createElement('video')
          const name = document.getElementsByClassName('photographe-name')[0].outerText
           //ELie-Rose -> enlever le tirer
          const namesplit = name.split(" ")[0]
          if(namesplit == "Ellie-Rose"){
               const Ellie = namesplit.replace('-','')
               video.src = `./images/${Ellie}/${data.video}`
          }
          else{
               video.src = `./images/${namesplit}/${data.video}`
          }
          const mediaInfo = document.createElement('div')
          mediaInfo.className = "media-infos"
          const titre = document.createElement('h4')
          titre.innerHTML = data.title
          const like = document.createElement('span')
          like.innerHTML = `${data.likes}<i class="fas fa-heart"></i>`
          video.addEventListener('click',()=>{openLightbox(data);window.scrollTo(0,0)})
          video.setAttribute("controls","true")
          videoContainer.appendChild(video)
          mediaVideo.appendChild(videoContainer)
          mediaInfo.appendChild(titre)
          mediaInfo.appendChild(like)
          mediaVideo.appendChild(mediaInfo)
          return mediaVideo
     }
     getContent(){
          return this.content
     }
}