var buttons = document.querySelectorAll(".drum");
for (i= buttons.length - 1 ; i>-1; i--) {
    buttons[i].addEventListener('click', handelClick);
}
function handelClick() {
    alert("I got Click");
}