let demo = () => {
    console.log("Demo")
}

let i = 0
const intervalId = window.setInterval(() => {
    i++
    console.log(i)
    if (i === 10) {
        window.clearInterval(intervalId)
    }
}, 1000)
