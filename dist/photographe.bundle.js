/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/lightbox.js":
/*!************************!*\
  !*** ./js/lightbox.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openLightbox\": () => (/* binding */ openLightbox)\n/* harmony export */ });\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repository */ \"./js/repository.js\");\n\r\nlet result = []\r\nlet index = 0\r\nconst openLightbox = async (media) => {\r\n  result = await (0,_repository__WEBPACK_IMPORTED_MODULE_0__.getMediaByPhotographer)(media.photographerId)\r\n  let lightbox = document.querySelector('.lightbox')\r\n  let body = document.querySelector('.body')\r\n  lightbox.className = 'active lightbox'\r\n  lightbox.classList.contains('active') ? body.classList.add('overflowhide') : body.classList.remove('overflowhide')\r\n  \r\n  showSlides(media)\r\n  showMedias(media)\r\n}\r\n\r\nasync function showSlides(media) {\r\n  index = result.findIndex((currentMedia)=>{return currentMedia.id === media.id})\r\n  const nombreslide = document.querySelector('.numbertext')\r\n  nombreslide.innerText = `${index + 1 }/${result.length}`\r\n}\r\n\r\nasync function showMedias(media){\r\n  index = result.findIndex((currentMedia)=>{return currentMedia.id === media.id})\r\n  const currentImage = document.querySelector('#currentSlideImg')\r\n  const currentVideo = document.querySelector('#currentSlideVideo')\r\n  const name = document.getElementsByClassName('photographe-name')[0].outerText\r\n  const namesplit = name.split(\" \")[0]\r\n  const containerVideo = document.querySelector('.lightbox-container-video')\r\n  const containerImage = document.querySelector('.lightbox-container-img')\r\n  const titreMedia = document.querySelector('.media-titre')\r\n  titreMedia.innerText = media.title\r\n  \r\n if(media.video){\r\n  currentImage.style.display = 'none'\r\n  currentVideo.style.display = 'block'\r\n  containerImage.style.display = 'none'\r\n  containerVideo.style.display = 'block'\r\n  if(namesplit == \"Ellie-Rose\"){\r\n    const Ellie = namesplit.replace('-','')\r\n    currentVideo.src = `./images/${Ellie}/${media.video}`\r\n}\r\nelse{\r\n    currentVideo.src = `./images/${namesplit}/${media.video}`\r\n}\r\n }\r\n else if(media.image){\r\n  currentVideo.style.display = 'none'\r\n  currentImage.style.display = 'block'\r\n  containerVideo.style.display = 'none'\r\n  containerImage.style.display = 'block'\r\n  if(namesplit == \"Ellie-Rose\"){\r\n    const Ellie = namesplit.replace('-','')\r\n    currentImage.src = `./images/${Ellie}/${media.image}`\r\n}\r\nelse{\r\n    currentImage.src = `./images/${namesplit}/${media.image}`\r\n}\r\n }\r\n else{\r\n   return\r\n }\r\n}\r\n\r\n//close lightbox\r\nlet lightbox = document.querySelector('.lightbox')\r\nlet closebtn = document.querySelector('.close')\r\nlet body = document.querySelector('.body')\r\nclosebtn.addEventListener('click', function(){\r\n  lightbox.classList.remove('active')\r\n  body.classList.remove('overflowhide')\r\n})\r\n\r\n//arrow control\r\nlet prev = document.querySelector('.prev')\r\nprev.addEventListener('click', function(){\r\n  index--\r\n  if(index<0){\r\n    index = result.length - 1\r\n  }\r\n  showMediaByIndex(index)\r\n})\r\n\r\nlet next = document.querySelector('.next')\r\nnext.addEventListener('click', function(){\r\n  index++\r\n  if(index==result.length){\r\n    index = 0\r\n  }\r\n  showMediaByIndex(index)\r\n})\r\n\r\nfunction showMediaByIndex(index){\r\n  let media = result[index]\r\n  showMedias(media)\r\n  showSlides(media)\r\n}\n\n//# sourceURL=webpack://fisheye/./js/lightbox.js?");

/***/ }),

/***/ "./js/mediaFactory.js":
/*!****************************!*\
  !*** ./js/mediaFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediaFactory\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox */ \"./js/lightbox.js\");\n\r\n\r\nclass MediaFactory{\r\n     constructor(type,data){\r\n          switch(type){\r\n               case  'photo' :\r\n                    return new MediaPhoto(data)\r\n               case 'video' : \r\n                    return new MediaVideo(data)\r\n                    default :\r\n                    throw new Error('Entrez un parametre valide')\r\n          }\r\n     }\r\n}\r\n\r\nclass MediaPhoto{\r\n     content = null\r\n     constructor(data){\r\n          this.content = this.photo(data)\r\n     }\r\n     photo(data){\r\n          const media = document.createElement('article')\r\n           media.className = 'media'\r\n           const imgcontainer = document.createElement('div')\r\n           imgcontainer.className = 'img-container'\r\n           const img = document.createElement('img')\r\n           const name = document.getElementsByClassName('photographe-name')[0].outerText\r\n           //ELie-Rose -> enlever le tirer\r\n           const namesplit = name.split(\" \")[0]\r\n           if(namesplit == \"Ellie-Rose\"){\r\n               const Ellie = namesplit.replace('-','')\r\n               img.src = `./images/${Ellie}/${data.image}`\r\n          }\r\n          else{\r\n               img.src = `./images/${namesplit}/${data.image}`\r\n          }\r\n          img.addEventListener('click',()=>{(0,_lightbox__WEBPACK_IMPORTED_MODULE_0__.openLightbox)(data);window.scrollTo(0,0)})\r\n          const mediaInfo = document.createElement('div')\r\n          mediaInfo.className = \"media-infos\"\r\n          const titre = document.createElement('h4')\r\n          titre.innerHTML = data.title\r\n          const like = document.createElement('span')\r\n          like.innerHTML = `${data.likes}<i class=\"fas fa-heart\"></i>`\r\n          imgcontainer.appendChild(img)\r\n          mediaInfo.appendChild(titre)\r\n          mediaInfo.appendChild(like)\r\n          media.appendChild(imgcontainer)\r\n          media.appendChild(mediaInfo)\r\n          return media\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n}\r\n\r\nclass MediaVideo{\r\n     content = null\r\n     constructor(data){\r\n          this.content = this.video(data)\r\n     }\r\n     video(data){\r\n          const mediaVideo = document.createElement('article')\r\n          mediaVideo.className = 'media'\r\n          const videoContainer = document.createElement('div')\r\n          videoContainer.className ='video-container'\r\n          const video = document.createElement('video')\r\n          const name = document.getElementsByClassName('photographe-name')[0].outerText\r\n           //ELie-Rose -> enlever le tirer\r\n          const namesplit = name.split(\" \")[0]\r\n          if(namesplit == \"Ellie-Rose\"){\r\n               const Ellie = namesplit.replace('-','')\r\n               video.src = `./images/${Ellie}/${data.video}`\r\n          }\r\n          else{\r\n               video.src = `./images/${namesplit}/${data.video}`\r\n          }\r\n          const mediaInfo = document.createElement('div')\r\n          mediaInfo.className = \"media-infos\"\r\n          const titre = document.createElement('h4')\r\n          titre.innerHTML = data.title\r\n          const like = document.createElement('span')\r\n          like.innerHTML = `${data.likes}<i class=\"fas fa-heart\"></i>`\r\n          video.addEventListener('click',()=>{;(0,_lightbox__WEBPACK_IMPORTED_MODULE_0__.openLightbox)(data);window.scrollTo(0,0)})\r\n          video.setAttribute(\"controls\",\"true\")\r\n          videoContainer.appendChild(video)\r\n          mediaVideo.appendChild(videoContainer)\r\n          mediaInfo.appendChild(titre)\r\n          mediaInfo.appendChild(like)\r\n          mediaVideo.appendChild(mediaInfo)\r\n          return mediaVideo\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/mediaFactory.js?");

/***/ }),

/***/ "./js/photographe.js":
/*!***************************!*\
  !*** ./js/photographe.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mediaFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediaFactory */ \"./js/mediaFactory.js\");\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ \"./js/repository.js\");\n\r\n\r\n\r\nlet medias = []\r\n\r\nfunction recupereId() {\r\n  const urlSearchParams = new URLSearchParams(window.location.search)\r\n  const params = Object.fromEntries(urlSearchParams.entries())\r\n  const id = params.id\r\n  affichage(id)\r\n}\r\nrecupereId()\r\n\r\n\r\nfunction fabriqueMedia(data) {\r\n  const photo = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.MediaFactory('photo', data)\r\n  return photo.getContent()\r\n}\r\n\r\nfunction fabriqueMediaVideo(data) {\r\n  const video = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.MediaFactory('video', data)\r\n  return video.getContent()\r\n}\r\n\r\nasync function affichage(id) {\r\n  const photographer = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getPhotographer)(id)\r\n  medias = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getMediaByPhotographer)(id)\r\n  const test = new Photographe(photographer)\r\n  triPopularite()\r\n\r\n}\r\n\r\nfunction afficheMedias(tableauMedia) {\r\n  let mediaSection = document.querySelector('.media-container')\r\n  mediaSection.innerHTML = \"\"\r\n  const totalLike = medias.reduce((sommetotal, media)=>{\r\n    return sommetotal + media.likes\r\n  },0)\r\n  document.getElementsByClassName('total-like')[0].innerHTML = `${totalLike} <i class=\"fas fa-heart\"></i>`\r\n  for (let i = 0; i < medias.length; i++) {\r\n    if ('image' in medias[i]){\r\n     let article = fabriqueMedia(medias[i])\r\n     fabriqueMedia(medias[i])\r\n     mediaSection.appendChild(article)\r\n    }\r\n    else if ('video' in medias[i]){\r\n      let articleVideo = fabriqueMediaVideo(medias[i])\r\n      fabriqueMediaVideo(medias[i])\r\n      mediaSection.appendChild(articleVideo)\r\n    }\r\n    else{\r\n      return\r\n    }\r\n  }\r\n}\r\n\r\nclass Photographe {\r\n  constructor({ name, city, country, tags, tagline, price, portrait }) {\r\n    this.name = name\r\n    ;(this.city = city), (this.country = country)\r\n    this.tags = tags\r\n    this.tagline = tagline\r\n    this.price = price\r\n    this.portrait = portrait\r\n\r\n    this.createPhotographe = function () {\r\n      new Photographe()\r\n    }\r\n    document.title = `Profil de ${this.name}`\r\n    document.getElementsByClassName('photographe-name')[0].innerText = this.name\r\n    document.getElementsByClassName(\r\n      'photographe-city',\r\n    )[0].innerText = `${this.city},${this.country}`\r\n    document.getElementsByClassName(\r\n      'photographe-line',\r\n    )[0].innerText = this.tagline\r\n    this.tags.forEach(tag => {\r\n      let span = document.createElement('span')\r\n      span.className = 'tags'\r\n      span.innerText = `#${tag}`\r\n      document.getElementsByClassName('photographe-tags-container')[0].appendChild(span)\r\n    });\r\n    document.getElementsByClassName(\r\n      'photographe-img',\r\n    )[0].src = `./images/PhotographersID/${this.portrait}`;\r\n    document.getElementsByClassName('prix')[0].innerText = `${price}€/jour`\r\n    const formTitre = document.querySelector('.form-titre')\r\n    formTitre.innerHTML = `Contactez-moi<br/>${this.name}`\r\n    \r\n  }\r\n}\r\n\r\n/* filtre medias */ \r\nconst options = document.querySelectorAll('.option')\r\nconst select = document.getElementById('select')\r\n\r\nselect.addEventListener('change', function (e) {\r\n  console.log(e.target.value)\r\n  switch (e.target.value) {\r\n    case 'Date':\r\n      triDate()\r\n      break;\r\n\r\n    case 'Popularité':\r\n      triPopularite()\r\n      break;\r\n\r\n    case 'Titre':\r\n      triTitre()\r\n      break\r\n\r\n    default:\r\n      break;\r\n  }\r\n})\r\n\r\nfunction triDate() {\r\n  const mediasGlobal = medias.sort(function (media1, media2){\r\n    const date = new Date(media1.date)\r\n    const date2 = new Date(media2.date)\r\n    return date>date2 ? -1 : 1\r\n  })\r\n afficheMedias(mediasGlobal)\r\n}\r\n\r\nfunction triTitre() {\r\n  const mediasGlobal = medias.sort(function (media1, media2){\r\n   return media1.title.localeCompare(media2.title)\r\n  })\r\n afficheMedias(mediasGlobal)\r\n}\r\n\r\nfunction triPopularite() {\r\n  const mediasGlobal = medias.sort(function (media1, media2){\r\n   return media1.likes>media2.likes ? -1 : 1\r\n  })\r\n afficheMedias(mediasGlobal)\r\n}\r\n\r\n/* Modal Contact */ \r\nconst submit = document.getElementById('submit')\r\nconst modal = document.getElementById(\"modal\")\r\nconst btnOpenModal = document.getElementById('btn-openModal')\r\nconst croix = document.querySelector('.form-close')\r\nconst body = document.querySelector('.body')\r\n\r\nbtnOpenModal.addEventListener('click', function (e){\r\n  e.preventDefault()\r\n  modal.style.display = 'block'\r\n  body.classList.add('overflowhide')\r\n})\r\n\r\ncroix.addEventListener('click', function (e){\r\n  e.preventDefault()\r\n  modal.style.display = 'none'\r\n  body.classList.remove('overflowhide')\r\n})\r\n\r\n\n\n//# sourceURL=webpack://fisheye/./js/photographe.js?");

/***/ }),

/***/ "./js/repository.js":
/*!**************************!*\
  !*** ./js/repository.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers),\n/* harmony export */   \"getMediaByPhotographer\": () => (/* binding */ getMediaByPhotographer),\n/* harmony export */   \"getPhotographer\": () => (/* binding */ getPhotographer)\n/* harmony export */ });\nconst getAll =  async () => {\r\n     const data = await reader()\r\n     return data\r\n}\r\nconst getPhotographers = async () => {\r\n    const data = await reader()\r\n    return data.photographers\r\n}\r\nconst getMediaByPhotographer = async (id) => {\r\n    const data = await reader()\r\n    const medias = data.media.filter((item) => item.photographerId == id);\r\n    return medias\r\n}\r\nconst getPhotographer = async (id) => {\r\n     const data = await reader()\r\n     const photographe = data.photographers.find((user)=>user.id == id); \r\n     return photographe\r\n}\r\n/**\r\n * \r\n * @returns {photographers: [], medias: [] }\r\n */\r\nasync function reader() {\r\n     try {\r\n          const response = await fetch('./js/data.json')\r\n          const data = await  response.json()\r\n          return data\r\n     } catch (error) {\r\n          console.log(error)\r\n     }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/repository.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/photographe.js");
/******/ 	
/******/ })()
;