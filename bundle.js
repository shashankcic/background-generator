(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// var _ = require('lodash');

// var array = [1,2,3,4,5,6,7,8];
// console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// // console.log(css);
// // console.log(color1);
// // console.log(color2);

function setGradient() {
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent=body.style.background + ";";
}
body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
css.textContent=body.style.background + ";";


// // color1.addEventListener("input",function(){
// // 	// console.log(color1.value);
// // 	body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
// // })

// // color2.addEventListener("input",function(){
// // 	// console.log(color2.value);
// // 	body.style.background = "linear-gradient(to right,"+color1.value+", "+color2.value+")";
// // })

// color1.addEventListener("input",setGradient);
// color2.addEventListener("input",setGradient);
},{}]},{},[1]);
