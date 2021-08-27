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

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _articleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleFactory */ \"./js/articleFactory.js\");\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ \"./js/repository.js\");\n\r\n\r\n\r\n// createur de l'article \r\nfunction fabrique(data){\r\n     const article = document.createElement('article')\r\n     article.className = 'article'\r\n     article.id = data.id\r\n     const header =  new _articleFactory__WEBPACK_IMPORTED_MODULE_0__.ArticleFactory(\"header\", data)\r\n     const texte = new _articleFactory__WEBPACK_IMPORTED_MODULE_0__.ArticleFactory('text', data)\r\n     const link = new _articleFactory__WEBPACK_IMPORTED_MODULE_0__.ArticleFactory('link', data)\r\n     article.appendChild(header.getContent())\r\n     article.appendChild(texte.getContent())\r\n     article.appendChild(link.getContent())\r\n     return article\r\n}\r\n\r\n// permet d'afficher le json\r\nasync function affichage(){\r\n     const photographers = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getPhotographers)()\r\n     for(let i=0;i<photographers.length; i++){\r\n          let article = fabrique(photographers[i])\r\n          let section = document.querySelector('.article-container')\r\n          section.appendChild(article)\r\n     }\r\n}\r\n\r\naffichage()\r\n\r\n/* Filtre par tag */ \r\n\r\nconst tag = document.querySelectorAll('.tag')\r\n\r\ntag.forEach(el =>{\r\n     el.addEventListener('click',event => {\r\n     const tagActuel = event.currentTarget.id\r\n     affichagefiltre(tagActuel)\r\n     })\r\n})\r\n\r\nasync function affichagefiltre(tagActuel){\r\n     const photographers = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getPhotographers)()\r\n     let section = document.querySelector('.article-container')\r\n     section.innerHTML = \"\"\r\n     for (let i = 0; i < photographers.length; i++) {\r\n          const tags = photographers[i].tags\r\n          if(tags.includes(tagActuel)){\r\n               let section = document.querySelector('.article-container')\r\n               let article = fabrique(photographers[i])\r\n               section.appendChild(article)\r\n          }\r\n     }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/app.js?");

/***/ }),

/***/ "./js/articleFactory.js":
/*!******************************!*\
  !*** ./js/articleFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleFactory\": () => (/* binding */ ArticleFactory)\n/* harmony export */ });\nclass ArticleFactory{\r\n     constructor(type, data){\r\n          switch(type){\r\n               case 'header' :\r\n                    return new ArticleHeader(data)\r\n               case 'text':\r\n                    return new ArticleText(data)\r\n               case 'link' :\r\n                    return new ArticleLink(data)\r\n               default :\r\n                    throw new Error('Entrez un parametre valide')\r\n          }\r\n     }\r\n}\r\n\r\nclass ArticleHeader{\r\n     content = null;\r\n     constructor(data){\r\n          this.content = this.header(data.portrait, data.name , data.id)\r\n     }\r\n// creation du header d'un article photographe ( image cliquable )\r\n    header(nameImg, tag, id) {\r\n          const articleHeader = document.createElement('div')\r\n          articleHeader.className = 'article-header'\r\n          const linkImg = document.createElement('a')\r\n          linkImg.className = 'img-container'\r\n          linkImg.href = `./photographe.html?id=${id}`\r\n          const img = document.createElement('img')\r\n          img.src = `./images/PhotographersID/${nameImg}`\r\n          img.alt = tag\r\n          linkImg.appendChild(img)\r\n          const titre = document.createElement('h4')\r\n          titre.innerText = tag\r\n          articleHeader.appendChild(linkImg)\r\n          articleHeader.appendChild(titre)\r\n          return articleHeader\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n     \r\n}\r\n// creation des infos texte d'un article photographe \r\nclass ArticleText{\r\n     content = null;\r\n     constructor(data){\r\n          this.content = this.texte(data.city,data.country, data.tagline , data.price)\r\n     }\r\n\r\n     texte(city,country, tagline, price){\r\n          const articleText = document.createElement('div')\r\n          articleText.className = 'article-texte'\r\n          const ville = document.createElement('p')\r\n          ville.innerText =`${city} , ${country}`\r\n          const description = document.createElement('p')\r\n          description.innerText = tagline\r\n          const prix = document.createElement('p')\r\n          prix.innerText = `${price}€/jour`\r\n          articleText.appendChild(ville)\r\n          articleText.appendChild(description)\r\n          articleText.appendChild(prix)\r\n          return articleText\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n}\r\n// creation des tags d'un article photographe \r\nclass ArticleLink{\r\n     content = null\r\n     constructor(data){\r\n          this.content = this.link(data.tags)\r\n     }\r\n     link(tags){\r\n          const articleLink = document.createElement('div')\r\n          articleLink.className ='article-link'\r\n          for(let i=0;i<tags.length;i++){\r\n               const link = document.createElement('span')\r\n               link.className ='tags'\r\n               const href = document.createElement('a')\r\n               href.href = '#'\r\n               href.innerText = `#${tags[i]}`\r\n               link.appendChild(href)\r\n               articleLink.appendChild(link)\r\n          }\r\n          return articleLink\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/articleFactory.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;