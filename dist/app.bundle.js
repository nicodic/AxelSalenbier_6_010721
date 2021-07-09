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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _articleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleFactory */ \"./js/articleFactory.js\");\n\r\n\r\n// createur de l'article \r\nfunction fabrique(data){\r\n     const article = document.createElement('article')\r\n     article.className = 'article'\r\n     article.id = data.id\r\n     const header =  new _articleFactory__WEBPACK_IMPORTED_MODULE_0__.ArticleFactory(\"header\", data)\r\n     const texte = new _articleFactory__WEBPACK_IMPORTED_MODULE_0__.ArticleFactory('text', data)\r\n     const link = new _articleFactory__WEBPACK_IMPORTED_MODULE_0__.ArticleFactory('link', data)\r\n     article.appendChild(header.getContent())\r\n     article.appendChild(texte.getContent())\r\n     article.appendChild(link.getContent())\r\n     return article\r\n}\r\n\r\n// permet d'afficher le json\r\nfunction affichage(){\r\n     fetch('./js/data.json').then(response => {\r\n          return response.json();\r\n        }).then(data => {\r\n          console.log(data);\r\n          for(let i=0;i<data.photographers.length; i++){\r\n               let article = fabrique(data.photographers[i])\r\n               let section = document.querySelector('.article-container')\r\n               section.appendChild(article)\r\n          }\r\n        }).catch(err => {\r\n          console.log(err)\r\n        });\r\n}\r\n\r\naffichage()\r\n\r\n// const test = () => {\r\n//      const header = new ArticleFactory('link')\r\n//      console.log(header)\r\n// }\r\n// test()\r\n\r\n\r\n\n\n//# sourceURL=webpack://fisheye/./js/app.js?");

/***/ }),

/***/ "./js/articleFactory.js":
/*!******************************!*\
  !*** ./js/articleFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleFactory\": () => (/* binding */ ArticleFactory)\n/* harmony export */ });\nclass ArticleFactory{\r\n     constructor(type, data){\r\n          switch(type){\r\n               case 'header' :\r\n                    return new ArticleHeader(data)\r\n               case 'text':\r\n                    return new ArticleText(data)\r\n               case 'link' :\r\n                    return new ArticleLink(data)\r\n               default :\r\n                    throw new Error('Entrez un parametre valide')\r\n          }\r\n     }\r\n}\r\n\r\nclass ArticleHeader{\r\n     content = null;\r\n     constructor(data){\r\n          this.content = this.header(data.portrait, data.name , data.id)\r\n     }\r\n// creation du header d'un article photographe ( image cliquable )\r\n    header(nameImg, tag, id) {\r\n          const articleHeader = document.createElement('div')\r\n          articleHeader.className = 'article-header'\r\n          const imgContainer = document.createElement('div')\r\n          imgContainer.className = 'img-container'\r\n          const linkImg = document.createElement('a')\r\n          linkImg.href = './photographe.html'\r\n          const img = document.createElement('img')\r\n          img.src = `./images/PhotographersID/${nameImg}`\r\n          img.addEventListener('click', function(){\r\n               localStorage.setItem('id', id)\r\n          })\r\n          img.alt = tag\r\n          linkImg.appendChild(img)\r\n          imgContainer.appendChild(linkImg)\r\n          const titre = document.createElement('h4')\r\n          titre.innerText = tag\r\n          articleHeader.appendChild(imgContainer)\r\n          articleHeader.appendChild(titre)\r\n          return articleHeader\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n     \r\n}\r\n// creation des infos texte d'un article photographe \r\nclass ArticleText{\r\n     content = null;\r\n     constructor(data){\r\n          this.content = this.texte(data.city,data.country, data.tagline , data.price)\r\n     }\r\n\r\n     texte(city,country, tagline, price){\r\n          const articleText = document.createElement('div')\r\n          articleText.className = 'article-texte'\r\n          const ville = document.createElement('p')\r\n          ville.innerText =`${city} , ${country}`\r\n          const description = document.createElement('p')\r\n          description.innerText = tagline\r\n          const prix = document.createElement('p')\r\n          prix.innerText = `${price}€/jour`\r\n          articleText.appendChild(ville)\r\n          articleText.appendChild(description)\r\n          articleText.appendChild(prix)\r\n          return articleText\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n}\r\n// creation des tags d'un article photographe \r\nclass ArticleLink{\r\n     content = null\r\n     constructor(data){\r\n          this.content = this.link(data.tags)\r\n     }\r\n     link(tags){\r\n          const articleLink = document.createElement('div')\r\n          articleLink.className ='article-link'\r\n          for(let i=0;i<tags.length;i++){\r\n               const link = document.createElement('span')\r\n               link.className ='tags'\r\n               const href = document.createElement('a')\r\n               href.href = '#'\r\n               href.innerText = `#${tags[i]}`\r\n               link.appendChild(href)\r\n               articleLink.appendChild(link)\r\n          }\r\n          return articleLink\r\n     }\r\n     getContent(){\r\n          return this.content\r\n     }\r\n}\n\n//# sourceURL=webpack://fisheye/./js/articleFactory.js?");

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