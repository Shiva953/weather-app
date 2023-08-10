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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("// require('dotenv').config()\n// First, perform the backend stuff\n// 2. form input validation(take the city name)\n// 3. then put the city name as the query param for the API call and fetch the data\n// 4. Display the data in the DOM and then styling frontend stuff\n\nconst cityForm = document.getElementsByClassName(\"city-form\")[0];\nconst cityInput = document.getElementById(\"cityname\");\nconst api_key = \"92c5ff33f1944affb0a105019230908\"\nconst defaultCity = 'Copenhagen'\n\ndocument.addEventListener(\"DOMContentLoaded\", fetchWeatherData(defaultCity));\n\ncityForm.addEventListener(\"submit\", function(event) {\n    event.preventDefault(); \n    const cityName = cityInput.value;\n    fetchWeatherData(cityName);\n  });\n\nasync function fetchWeatherData(city){\n    try{\n    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=yes`) //fetching the promise and resolving it\n    const data = await response.json(); //.json() converts response into json format and returns another promise, resolving it and then taking the final value(JSON object)\n    DOMDisplay(data)\n    }\n    catch(err){\n        alert('Incorrect Location.')\n    }\n}\n\nfunction DOMDisplay(data){\n    const condition = document.getElementsByClassName(\"condition\")[0]\n    const temperature = document.getElementsByClassName(\"temperature\")[0]\n    const city = document.getElementsByClassName(\"city-name\")[0]\n    const feelsLike = document.getElementById(\"feels-like\")\n    const humidity = document.getElementById(\"humidity\")\n    const rain = document.getElementById(\"chance-of-rain\")\n    const windSpeed = document.getElementById(\"wind-speed\")\n    feelsLike.innerHTML = data.current.feelslike_c + \"°C\";\n    humidity.textContent = data.current.humidity + \"%\";\n    rain.textContent = data.current.precip_in + \"%\";\n    windSpeed.textContent = data.current.gust_mph + \"mph\";\n\n    condition.textContent = data.current.condition.text;\n    temperature.textContent = data.current.temp_c + '°C';\n    city.textContent = data.location.name + \", \" + data.location.region;\n\n}\n\n//# sourceURL=webpack://rizzyweatherapp/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;