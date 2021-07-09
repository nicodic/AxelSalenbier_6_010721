/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/photographe.js":
/*!***************************!*\
  !*** ./js/photographe.js ***!
  \***************************/
/***/ (() => {

eval("function recupereId(){\r\n     const id = localStorage.getItem('id')\r\n     affichage(id)\r\n     console.log(id)\r\n}\r\n\r\nrecupereId()\r\n\r\n\r\n\r\nfunction affichage(id){\r\n    fetch('./js/data.json').then(response => {\r\n        return response.json();\r\n        }).then(data => {\r\n          const photographe = data.photographers.find((user)=>user.id == id);     \r\n          const photos = data.media.filter((item) => item.photographerId == id);\r\n          console.log(photographe) \r\n          console.log(photos)\r\n          const test = new Photographe(photographe)\r\n          console.log(test.name)\r\n        }).catch(err => {\r\n          console.log(err)\r\n        });\r\n}\r\n\r\nclass Photographe {\r\n  constructor({name, city, country, tags, tagline, price, portrait}){\r\n    this.name = name;\r\n    this.city = city,\r\n    this.country = country;\r\n    this.tags = tags;\r\n    this.tagline = tagline;\r\n    this.price = price;\r\n    this.portrait = portrait\r\n\r\n    this.createPhotographe = function(){\r\n      new Photographe()\r\n    }\r\n\r\n    document.getElementsByClassName('photographe-name')[0].innerText = this.name\r\n  }\r\n}\r\n\r\n// function fabriqueInfosPhotographe(){\r\n//   const section = document.createElement('section')\r\n//   const info = fabriqueInfos(data.portrait, data.name , data.id)\r\n//   const boutton = fabriqueboutton()\r\n//   const image = fabriqueImage(data.portrait)\r\n//   section.appendChild(info)\r\n//   section.appendChild(boutton)\r\n//   section.appendChild(image)\r\n//   return section\r\n// }\r\n\r\n// creation du info\r\n// function fabriqueInfos(nameImg, tag, id){\r\n//   const articleinfo = document.createElement('div')\r\n//   articleinfo.className = 'article-info'\r\n//   const imgContainer = document.createElement('div')\r\n//   imgContainer.className = 'img-container'\r\n//   const imageImg = document.createElement('a')\r\n//   imageImg.href = './photographe.html'\r\n//   const img = document.createElement('img')\r\n//   img.src = `./images/PhotographersID/${nameImg}`\r\n//   img.addEventListener('click', function(){\r\n//        sendId(id)\r\n//   })\r\n//   img.alt = tag\r\n//   imageImg.appendChild(img)\r\n//   imgContainer.appendChild(imageImg)\r\n//   const titre = document.createElement('h4')\r\n//   titre.innerText = tag\r\n//   articleinfo.appendChild(imgContainer)\r\n//   articleinfo.appendChild(titre)\r\n//   return articleinfo\r\n// }\r\n\r\n// // creation du boutton de l'article\r\n// function fabriqueboutton(city, tagline, price){\r\n//   const articleText = document.createElement('div')\r\n//   articleText.className = 'article-boutton'\r\n//   const ville = document.createElement('p')\r\n//   ville.innerText = city\r\n//   const description = document.createElement('p')\r\n//   description.innerText = tagline\r\n//   const prix = document.createElement('p')\r\n//   prix.innerText = price\r\n//   articleText.appendChild(ville)\r\n//   articleText.appendChild(description)\r\n//   articleText.appendChild(prix)\r\n//   return articleText\r\n// }\r\n\r\n// // creation de l'image de l'article\r\n// function fabriqueImage(tags){\r\n//   const articleimage = document.createElement('div')\r\n//   articleimage.className ='article-image'\r\n//   for(let i=0;i<tags.length;i++){\r\n//        const image = document.createElement('span')\r\n//        image.className ='image'\r\n//        const href = document.createElement('a')\r\n//        href.href = '#'\r\n//        href.innerText = `#${tags[i]}`\r\n//        image.appendChild(href)\r\n//        articleimage.appendChild(image)\r\n//   }\r\n//   return articleimage\r\n// }\r\n\n\n//# sourceURL=webpack://fisheye/./js/photographe.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/photographe.js"]();
/******/ 	
/******/ })()
;