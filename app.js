"use strict";

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let searchBtn = document.getElementById("submitSearch");
let searchInput = document.getElementById("searchWord");
let img = document.querySelector("img");
let feedback = document.querySelector("p");

// Exercise 2 & 3 Section
console.log("EXERCISE 2/3:\n==========\n");
const API_Key = "uTKUl3qvX7eArVjvzWAjgKXGbnf66Iyy";

searchBtn.addEventListener("click", fetchGIF);

/*
function fetchGIF() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_Key}&s=${searchInput}`,
    {
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}
*/

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function fetchGIF() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_Key}&s=${searchInput.value}`,
    {
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then(function (res) {
      console.log(searchInput.value);
      img.setAttribute("src", res.data.images.original.url);
      searchInput.value = "";
      feedback =
        "Open the Browser Console to view your work (Right-Click => Inspect or fn+F12)";
    })
    .catch((err) => (feedback = err.message));
}
