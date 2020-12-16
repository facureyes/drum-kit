function playSound(key){
    console.log(key)
    switch (key) {
        case "w":
            new Audio('sounds/crash.mp3').play();
            break;
        case "a":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        case "s":
            new Audio('sounds/snare.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "j":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "k":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "l":
            new Audio('sounds/tom-4.mp3').play();
            break;
        default:
            break;
    }
}

document.addEventListener("keydown", function (event){
    console.log(event);
    playSound(event.key)});

var buttons = document.querySelectorAll(".drum");
for (var i in buttons) {
    buttons[i].addEventListener("click",function () {
         playSound(this.innerHTML)});
}



// var audio = new Audio('sounds/crash.mp3');
//     audio.play();