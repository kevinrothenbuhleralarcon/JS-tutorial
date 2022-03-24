/*const div = document.getElementById("demo")
console.log(div.outerText)

const paragraphs = document.getElementsByClassName("paragraph")
console.log(paragraphs)

const tagsP = document.getElementsByTagName("p")
console.log(tagsP)

const selectorDivP = document.querySelector("#demo p")
console.log("Query:")
console.log(selectorDivP)

const selectorP = document.querySelectorAll("p")
console.log("Query all:")
console.log(selectorP)

const paragraphClass = document.querySelector(".paragraph")
paragraphClass.className = "paragraph blue"

if(paragraphClass.classList.contains("blue")) {
    console.log("Contains blue")
    console.log("Remove blue")
    paragraphClass.classList.remove("blue")
    console.log("Add red")
    paragraphClass.classList.add("red")
}

paragraphClass.style.fontSize = "20px"

console.log(paragraphClass.innerHTML) // affiche le contenu actuel (lorem)
paragraphClass.innerHTML = "<strong>Salut</strong> les gens" // remplace le contenu

let demo = document.querySelector("#demo")
if(demo.textContent) {
    demo.textContent = "Salut"
} else {
    demo.innerText = "Salut"
}*/

/*const pList = document.querySelectorAll("p")
pList.forEach(p => {
    window.setInterval(() => {
        p.classList.toggle("blue")
    }, 1000)
})

const ul = document.querySelector("ul")
const thirdLi = ul.querySelector("li:nth-child(3)")


console.log(thirdLi)



console.log(ul.children)
console.log(ul.childNodes)*/

const li = document.querySelector("li")
li.parentElement.removeChild(li)
console.log("removed")
console.log("re-added")
li.parentElement.appendChild(li)

