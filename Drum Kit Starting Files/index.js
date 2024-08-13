var buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', reproduceAudio);
}
function reproduceAudio() {
    let style = window.getComputedStyle(this);
    let image_url = style.getPropertyValue("background-image");
    let image_file_name = image_url.split("/").slice(-1)[0];
    let sound_url = image_file_name.split(".")[0];
    sound_url = "./sounds/" + sound_url + ".mp3";
    let sound = new Audio(sound_url)
    sound.play()
}

function reproduceAudioFromKey(event) {
var buttonInnetHtml = event.key;

    switch (buttonInnetHtml) {
        case "w" :
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "a" :
            var crash = new Audio("./sounds/kick.mp3");
            crash.play();
            break;
        
        case "s" :
            var crash = new Audio("./sounds/snare.mp3");
            crash.play();
            break;  

        case "d" :
            var crash = new Audio("./sounds/tom1.mp3");
            crash.play();
            break;  

        case "j" :
            var crash = new Audio("./sounds/tom2.mp3");
            crash.play();
            break;  
            
        case "k" :
            var crash = new Audio("./sounds/tom3.mp3");
            crash.play();
            break;  

        case "l" :
            var crash = new Audio("./sounds/tom4.mp3");
            crash.play();
            break;  
        
        default: console.log(this)
    }
}


document.addEventListener('keydown', reproduceAudioFromKey)

function reproduceAudioFromKey(event) {
var buttonInnetHtml = event.key;

    switch (buttonInnetHtml) {
        case "w" :
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "a" :
            var crash = new Audio("./sounds/kick.mp3");
            crash.play();
            break;
        
        case "s" :
            var crash = new Audio("./sounds/snare.mp3");
            crash.play();
            break;  

        case "d" :
            var crash = new Audio("./sounds/tom1.mp3");
            crash.play();
            break;  

        case "j" :
            var crash = new Audio("./sounds/tom2.mp3");
            crash.play();
            break;  
            
        case "k" :
            var crash = new Audio("./sounds/tom3.mp3");
            crash.play();
            break;  

        case "l" :
            var crash = new Audio("./sounds/tom4.mp3");
            crash.play();
            break;  
        
        default: console.log(this)
    }
}
