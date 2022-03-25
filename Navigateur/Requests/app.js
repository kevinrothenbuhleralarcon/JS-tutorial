"use strict"

const links = document.querySelectorAll("a")
const resultDiv = document.querySelector("#result")

const getWeather = async function(city) {
    resultDiv.innerHTML = "Chargement..."
    try {
        const response = await fetch("http://localhost:8080/" + city)
        if (response.ok) {
            let data = await response.text()
            resultDiv.innerHTML = data
        }
    } catch(err) {
        console.log(err)
    }
}

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        getWeather(link.getAttribute("href"))
    })
})


const form = document.querySelector("#test")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    form.reset()
})