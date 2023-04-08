
let tom2 = new Audio("sounds/tom-2.mp3")
let tom3 = new Audio("sounds/tom-3.mp3")
let tom4 = new Audio("sounds/tom-4.mp3")
let snare = new Audio("sounds/snare.mp3")
let kick = new Audio("sounds/kick-bass.mp3")
let crash = new Audio("sounds/crash.mp3")

let drumElements = document.querySelectorAll(".drum");

for (let i = 0; i < drumElements.length; i++) {
    drumElements[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                let tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                let kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            default:
        }
    });
}


document.addEventListener("keydown", function(event) {
    console.log(event);
})

function keyCheck() {
    
}
