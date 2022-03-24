"use strict"

const scrollY = function() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

const fixedElements = document.querySelectorAll("[data-fixed]")
fixedElements.forEach(element => {
    let elementRect = element.getBoundingClientRect()
    let elementTop = elementRect.top + scrollY()

    const offset = Number(element.getAttribute("data-offset")) || 0
    const constraint = document.querySelector(element.getAttribute("data-constraint")) || document.body
    const constraintRect = constraint.getBoundingClientRect()
    const constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - elementRect.height
    const fakeElement = document.createElement("div")
    reSizeFakeelement()

    function reSizeFakeelement() {
        fakeElement.style.width = elementRect.width + "px"
        fakeElement.style.height = elementRect.height + "px"
    }

    const onScroll = function() {
        if(scrollY() > constraintBottom && element.style.position != "absolute") {
            element.classList.remove("fixed")
            element.style.position = "absolute"
            element.style.bottom = "0"
            element.style.top = "auto"
        }else if(scrollY() > elementTop - offset && scrollY() < constraintBottom && element.style.position != "fixed") {
            element.parentNode.insertBefore(fakeElement, element)
            element.classList.add("fixed")
            element.style.position = "fixed"
            element.style.bottom = "auto"
            element.style.top = offset + "px"
            element.style.width = elementRect.width + "px"
        } else if (scrollY() < elementTop - offset && element.style.position != "static") {
            element.classList.remove("fixed")
            element.style.position = "static"
            if(element.parentNode.contains(fakeElement)) {
                element.parentNode.removeChild(fakeElement)
            }
        }
    }

    const onResize = function() {
        element.style.width = "auto"
        element.classList.remove("fixed")
        fakeElement.style.display = "none"
        elementRect = element.getBoundingClientRect()
        elementTop = elementRect.top + scrollY()
        reSizeFakeelement()
        fakeElement.style.display = "block"
        onScroll()
    }

    window.addEventListener("scroll", onScroll)
    window.addEventListener("resize", onResize)
})