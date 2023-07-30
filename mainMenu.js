const btn = document.getElementById("btn");
const audio = new Audio("click.wav");
btn.addEventListener("click", myFunc);

function myFunc(){
    audio.play();
    alert("button was clicked");
}