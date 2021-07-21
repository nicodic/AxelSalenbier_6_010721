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

/***/ "./js/mediaFactory.js":
/*!****************************!*\
  !*** ./js/mediaFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediaFactory\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\nclass MediaFactory{\r\n     constructor(type,data){\r\n          switch(type){\r\n               case  'photo' :\r\n                    return new MediaPhoto(data)\r\n               case 'video' : \r\n                    return new MediaVideo(data)\r\n                    default :\r\n                    throw new Error('Entrez un parametre valide')\r\n          }\r\n     }\r\n}\r\n\r\nclass MediaPhoto{\r\n     content = null\r\n     constructor(data){\r\n          this.content = this.photo(data)\r\n     }\r\n     photo(data){\r\n          const media = document.createElement('article')\r\n           media.className = 'media'\r\n           const imgcontainer = document.createElement('div')\r\n           imgcontainer.className = 'img-container'\r\n           const img = document.createElement('img')\r\n           const name = document.getElementsByClassName('photographe-name')[0].outerText\r\n           //ELie-Rose -> enlever le tirer\r\n           const namesplit = name.split(\" \")[0]\r\n           if(namesplit == \"Ellie-Rose\"){\r\n               const Ellie = namesplit.replace('-','')\r\n               img.src = `./images/${Ellie}/${data.image}`\r\n          }\r\n          else{\r\n               img.src = `./images/${namesplit}/${data.image}`\r\n          }\r\n          const mediaInfo = document.createElement('div')\r\n          mediaInfo.className = \"media-infos\"\r\n          const titre = document.createElement('h4')\r\n          titre.innerHTML = data.title\r\n          const like = document.createElement('span')\r\n          like.innerText = data.likes\r\n          imgcontainer.appendChild(img)\r\n          mediaInfo.appendChild(titre)\r\n          mediaInfo.appendChild(like)\r\n          media.appendChild(imgcontainer)\r\n          \r\n          media.appendChild(mediaInfo)\r\n          return media\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n}\r\n\r\nclass MediaVideo{\r\n     content = null\r\n     constructor(data){\r\n          this.content = this.video(data)\r\n     }\r\n     video(data){\r\n          const mediaVideo = document.createElement('article')\r\n          mediaVideo.className = 'media'\r\n          const videoContainer = document.createElement('div')\r\n          videoContainer.className ='video-container'\r\n          const video = document.createElement('video')\r\n          const name = document.getElementsByClassName('photographe-name')[0].outerText\r\n           //ELie-Rose -> enlever le tirer\r\n          const namesplit = name.split(\" \")[0]\r\n          if(namesplit == \"Ellie-Rose\"){\r\n               const Ellie = namesplit.replace('-','')\r\n               video.src = `./images/${Ellie}/${data.video}`\r\n          }\r\n          else{\r\n               video.src = `./images/${namesplit}/${data.video}`\r\n          }\r\n          \r\n          video.setAttribute(\"controls\",\"true\")\r\n          videoContainer.appendChild(video)\r\n          mediaVideo.appendChild(videoContainer)\r\n          return mediaVideo\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/mediaFactory.js?");

/***/ }),

/***/ "./js/photographe.js":
/*!***************************!*\
  !*** ./js/photographe.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mediaFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediaFactory */ \"./js/mediaFactory.js\");\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ \"./js/repository.js\");\n\r\n\r\n\r\n\r\n\r\nfunction recupereId() {\r\n  const urlSearchParams = new URLSearchParams(window.location.search)\r\n  const params = Object.fromEntries(urlSearchParams.entries())\r\n  const id = params.id\r\n  affichage(id)\r\n}\r\nrecupereId()\r\n\r\n\r\nfunction fabriqueMedia(data) {\r\n  const photo = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.MediaFactory('photo', data)\r\n  return photo.getContent()\r\n}\r\n\r\nfunction fabriqueMediaVideo(data) {\r\n  const video = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.MediaFactory('video', data)\r\n  return video.getContent()\r\n}\r\n\r\nasync function affichage(id) {\r\n  const photographer = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getPhotographer)(id)\r\n  const medias = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getMediaByPhotographer)(id)\r\n  const test = new Photographe(photographer)\r\n  for (let i = 0; i < medias.length; i++) {\r\n    if ('image' in medias[i]){\r\n     let article = fabriqueMedia(medias[i])\r\n     fabriqueMedia(medias[i])\r\n     let mediaSection = document.querySelector('.media-container')\r\n     mediaSection.appendChild(article)\r\n    }\r\n    else if ('video' in medias[i]){\r\n      let articleVideo = fabriqueMediaVideo(medias[i])\r\n      fabriqueMediaVideo(medias[i])\r\n      let mediaSection = document.querySelector('.media-container')\r\n      mediaSection.appendChild(articleVideo)\r\n    }\r\n    else{\r\n      return\r\n    }\r\n  }\r\n}\r\n\r\nclass Photographe {\r\n  constructor({ name, city, country, tags, tagline, price, portrait }) {\r\n    this.name = name\r\n    ;(this.city = city), (this.country = country)\r\n    this.tags = tags\r\n    this.tagline = tagline\r\n    this.price = price\r\n    this.portrait = portrait\r\n\r\n    this.createPhotographe = function () {\r\n      new Photographe()\r\n    }\r\n    document.title = `Profil de ${this.name}`\r\n    document.getElementsByClassName('photographe-name')[0].innerText = this.name\r\n    document.getElementsByClassName(\r\n      'photographe-city',\r\n    )[0].innerText = `${this.city},${this.country}`\r\n    document.getElementsByClassName(\r\n      'photographe-line',\r\n    )[0].innerText = this.tagline\r\n    this.tags.forEach(tag => {\r\n      let span = document.createElement('span')\r\n      span.className = 'tags'\r\n      span.innerText = `#${tag}`\r\n      document.getElementsByClassName('photographe-tags-container')[0].appendChild(span)\r\n    });\r\n    document.getElementsByClassName(\r\n      'photographe-img',\r\n    )[0].src = `./images/PhotographersID/${this.portrait}`;\r\n    document.getElementsByClassName('prix')[0].innerText = `${price}/jours`\r\n  }\r\n}\r\n\r\n/* Modal Contact */ \r\n\r\nconst submit = document.getElementById('submit')\r\nconst modal = document.getElementById(\"modal\")\r\nconst btnOpenModal = document.getElementById('btn-openModal')\r\n\r\nbtnOpenModal.addEventListener('click', function (e){\r\n  e.preventDefault()\r\n  modal.style.display = 'block'\r\n})\r\n\r\n\n\n//# sourceURL=webpack://fisheye/./js/photographe.js?");

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