"use strict"


/*const btnShow = document.querySelector(".spoiler button")
btnShow.addEventListener("click", e => {
    btnShow.nextElementSibling.classList.add("visible")
    btnShow.parentNode.removeChild(btnShow)
})*/


const createSpoiler = function(spoiler) {
    // Create the hidden span
    const hideSpan = document.createElement("span")
    hideSpan.classList.add("spoiler-content")
    hideSpan.innerHTML = spoiler.innerHTML


    // Create the button to show the spoiler
    const button = document.createElement("button")
    button.textContent="Afficher le spoiler"
    button.addEventListener("click", () => {
        hideSpan.classList.add("visible")
        spoiler.removeChild(button)
    })

    //Remove previous html content and add the hidden span and the button
    spoiler.innerHTML = ""
    spoiler.appendChild(hideSpan)
    spoiler.appendChild(button)
}

const spoilers = document.querySelectorAll(".spoiler")
spoilers.forEach(spoiler => {
    createSpoiler(spoiler)    
})

