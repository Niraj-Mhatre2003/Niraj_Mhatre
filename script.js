// typing animation

const text = "Niraj Mhatre";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,100);

}

}

typing();


// dark mode toggle

const toggle = document.getElementById("themeToggle");

toggle.onclick = function(){

document.body.classList.toggle("light-mode");

}

