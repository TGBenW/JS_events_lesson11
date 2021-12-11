"use strict";

const btn = document.getElementById('btn');
const btnCircle = document.getElementById('e_btn');
const textInput = document.getElementById('text');
const rangeInput = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');
const square = document.getElementById('square');
const circle = document.getElementById('circle');

const loader = function () {
  rangeInput.value = 75;
  loggerCircle();
};

const loggerColor = function () {
  if (textInput.value.trim() !== "") {
    square.style.backgroundColor = textInput.value;
  }
};

const loggerCircle = function () {
  circle.style.height = rangeInput.value + "%";
  circle.style.width = rangeInput.value + "%";
  rangeSpan.textContent = rangeInput.value;
};

window.addEventListener('load', loader);
btn.addEventListener('click', loggerColor); //1
btnCircle.style.display = 'none'; //2
rangeInput.addEventListener('mousemove', loggerCircle); //3