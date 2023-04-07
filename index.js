let tom1 = new Audio("sounds/tom-1.mp3")
let tom2 = new Audio("sounds/tom-2.mp3")
let tom3 = new Audio("sounds/tom-3.mp3")
let tom4 = new Audio("sounds/tom-4.mp3")
let snare = new Audio("sounds/snare.mp3")
let kick = new Audio("sounds/kick-bass.mp3")
let crash = new Audio("sounds/crash.mp3")

let drumElements = document.querySelectorAll(".drum");

for (let i = 0; i < drumElements.length; i++) {
    drumElements[i].addEventListener("click", handleClick);
}


function handleClick(){
    tom1.play();
}


