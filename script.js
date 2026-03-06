particlesJS.load('particles-js','https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json')

const toggle = document.getElementById("theme-toggle")

toggle.onclick = () => {

document.body.classList.toggle("light")

}
