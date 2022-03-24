const ps = document.querySelectorAll("p")

ps.forEach(p => {
    p.addEventListener("mouseover", () => {
        p.classList.add("red")
    })
    p.addEventListener("mouseout", () => {
        p.classList.remove("red")
    })
})

const externalLink = document.querySelectorAll(".external")
externalLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.stopPropagation()
        console.log("J'ai clicker sur le lien", e)
        if (!window.confirm("Attention vous aller quitter le site local.\nVoulez vous continuer?")) {
            e.preventDefault()
        }
       
    })
})

const onPClick = function(e) {
    if (!this.classList.contains("red")) {
        this.classList.add("red")
    }
}

document.querySelector(".clickable").addEventListener("click", onPClick)
//document.querySelector(".clickable").removeEventListener("click", onPClick)

const lis = document.querySelectorAll("li")
lis.forEach(li => {
    li.addEventListener("click", onPClick)
})


const txtA = document.querySelector("#a")
txtA.addEventListener("keydown", (e) => {
    console.log(e)
    let letter = String.fromCharCode(e.keyCode)
    if(letter != "A") {
        e.preventDefault()
    }
})

txtA.addEventListener("input", (e) => {
    console.log("test")
    
})

const form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
    if (form.cp.value.length != 4) {
        window.alert("Le code postal n'est pas bon!")
        e.preventDefault()
    }
    if (!form.mention.checked) {
        window.alert("Vous devez accepter les conditions d'utilisation avent de continuer")
        e.preventDefault()
    }
    if(form.age.selectedOptions[0].value < 20) {
        window.alert("Vous devez avoir plus de 20 ans pour continuer")
        e.preventDefault()
    }
    let radio = document.querySelector("input[name=animal]:checked").value
    console.log(radio)
    e.preventDefault()
})

