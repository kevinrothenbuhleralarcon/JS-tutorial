//https://jsonplaceholder.typicode.com/posts


const getUsers = async function() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (response.ok) {
            let data = await response.json()
            console.log(data)
        } else {
            console.error("Server response", response.status)
        }
    } catch (e) {
        console.log(e)
    }

}

getUsers()

const insertPost = async function(data) {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    let responseData = await response.json()
    console.log(responseData)
}

insertPost({
    name: "Jean",
    äge: 29
})