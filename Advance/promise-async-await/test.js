document.getElementById("myform").addEventListener("submit", event => {
    event.preventDefault()
    console.log(this.name.value)
    console.log(this.firstname.value)
    console.log(this.email.value)
})

const processData = (form) => {
    console.log(form)
    console.log(form.name.value)
    console.log(form.firstname.value)
    console.log(form.email.value)
}