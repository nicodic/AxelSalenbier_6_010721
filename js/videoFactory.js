/* eslint-disable eqeqeq */
import openLightbox from './lightbox';

export default class MediaVideo {
  constructor(data) {
    this.content = this.video(data);
  }

  // create video media
  video(data) {
    this.params = data;
    const mediaVideo = document.createElement('article');
    mediaVideo.className = 'media';
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';
    const video = document.createElement('video');
    const name = document.getElementsByClassName('photographe-name')[0].outerText;
    // ELie-Rose -> enlever le tirer
    const namesplit = name.split(' ')[0];
    if (namesplit == 'Ellie-Rose') {
      const Ellie = namesplit.replace('-', '');
      video.src = `./images/${Ellie}/${this.params.video}`;
    } else {
      video.src = `./images/${namesplit}/${this.params.video}`;
    }
    video.setAttribute('alt', this.params.title);
    const mediaInfo = document.createElement('div');
    mediaInfo.className = 'media-infos';
    const titre = document.createElement('h4');
    titre.innerHTML = this.params.title;
    const like = document.createElement('span');
    like.innerHTML = `${this.params.likes}<i class="fas fa-heart"></i>`;
    video.addEventListener('click', () => { openLightbox(this.params); window.scrollTo(0, 0); });
    video.setAttribute('controls', 'true');
    videoContainer.appendChild(video);
    mediaVideo.appendChild(videoContainer);
    mediaInfo.appendChild(titre);
    mediaInfo.appendChild(like);
    mediaVideo.appendChild(mediaInfo);
    return mediaVideo;
  }

  getContent() {
    return this.content;
  }
}
