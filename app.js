'use strict';

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchBtn = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
const img = document.querySelector("img");
const feedback = document.querySelector("p");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
const API_Key = "uTKUl3qvX7eArVjvzWAjgKXGbnf66Iyy"

fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_Key}&s=party`,
    { mode: "cors" }
  ).then((res) => console.log(res));

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");