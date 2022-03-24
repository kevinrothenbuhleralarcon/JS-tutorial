"use strict"

const tabsLinks = document.querySelectorAll(".tab-header a")

const showTab = function(a, animations = true) {
    // Get the div that contains the whole tab
    const tabDiv = a.parentNode.parentNode.parentNode

    // If we click the current active link we do nothing
    if (a.parentNode.classList.contains("active")) {
        return false
    }

    // Get current active tab, remove it and add active to clicked tab
    const activeLink = tabDiv.querySelector(".tab-header .active")
    activeLink.classList.remove("active")
    a.parentNode.classList.add("active")

    // Get current active tab content, remove it and add active to clicked tab content
    const activeContent = tabDiv.querySelector(".tabs-content .active")
    const selectedTabContent = tabDiv.querySelector(`.tabs-content ${a.hash}`)
    if (animations) {
        // Add a fade animation to the active tab content
        activeContent.classList.add("fade")
        activeContent.classList.remove("in")
    
        activeContent.addEventListener("transitionend", () => {
            //remove the active and fade on the active tab
            activeContent.classList.remove("active", "fade")

            //add the active and fade on the selected tab
            selectedTabContent.classList.add("active", "fade")
            selectedTabContent.offsetWidth // Trick needed to force the browser to apply the class set before
            selectedTabContent.classList.add("in") // Fire the fadein on the selected tab
        },
        {once: true}) // Supprime automatiquement le listener après l'appel
    } else {
        activeContent.classList.remove("active")
        selectedTabContent.classList.add("active")
    } 
}

// for each tab links we show the correct tab
tabsLinks.forEach(a => {
    a.addEventListener("click", () => {
        showTab(a)
    })
})

// When the page un reloaded, we chack if we have an active tab and we display it
const hashChanged = function () {
    const hash = window.location.hash
    const a = document.querySelector("a[href='" + hash + "']")
    if (a != null && !a.parentNode.classList.contains("active")) {
        showTab(a, false)
    }
}

// Support the navigation with go back and go forward
window.addEventListener("hashchange", hashChanged)

// On page reload detect if a tab is displayed, if yes show it
hashChanged()