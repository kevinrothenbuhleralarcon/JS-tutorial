// recup user https://jsonplaceholder.typicode.com/users
// Recup arcticle https://jsonplaceholder.typicode.com/comments?userId={id}

//
let get = function(url, success, error) {
    let xhr = new window.XMLHttpRequest()

    // On écoute le changement de status de l'objet pour savoir si on a un status de type 4 qui indique que la requête est bien finie
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            // on check si le status est bien un code 200 (succès), dans ce cas on retourne le callback succès, sinon l'error
            if (xhr.status === 200) {
                success(xhr.response)
            } else {
                error(xhr)
            }
            
        }
    }
    xhr.open("GET", url, true)
    xhr.send()
}


let getPosts = function(success, error) {
    get("https://jsonplaceholder.typicode.com/users", response => {
        let users = JSON.parse(response)
        get(`https://jsonplaceholder.typicode.com/comments?userId=${users[0].id}`, response => {
            let posts = JSON.parse(response)
            success(posts)
        }, errorGet => {
            error("Error ajax", errorGet)
        })
    }, errorGet => {
        error("Error ajax", errorGet)
    })
}

getPosts(posts => {
    console.log("Le premier post: " , posts[0])
}, error => {
    console.error(error)
})