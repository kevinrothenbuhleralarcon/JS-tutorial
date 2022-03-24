// recup user https://jsonplaceholder.typicode.com/users
// Recup arcticle https://jsonplaceholder.typicode.com/comments?userId={id}

//
let get = function(url) {
    return new Promise((resolve, reject) => {
        let xhr = new window.XMLHttpRequest()

        // On écoute le changement de status de l'objet pour savoir si on a un status de type 4 qui indique que la requête est bien finie
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                // on check si le status est bien un code 200 (succès), dans ce cas on retourne le callback succès, sinon l'error
                if (xhr.status === 200) {
                    resolve(xhr.response)
                } else {
                    reject(xhr)
                }
                
            }
        }
        xhr.open("GET", url, true)
        xhr.send()
    })
}

/*get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        console.log(response)
    })
    .catch(reject => {
        console.log("Error ajax", reject)
    })*/


let catchError = function(error){
    console.error("Erreur ajax", error)
}


let getPosts = function() {
    return get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            let users = JSON.parse(response)
            return get(`https://jsonplaceholder.typicode.com/comments?userId=${users[0].id}`)
                .then(response => {
                    let posts = JSON.parse(response)
                    return posts
                })
        })
}

getPosts()
    .then(posts => {
        console.log(posts[0])
    })
    .catch(catchError)
    .then(() => {
        console.log("Fin des requetes ajax")
    })
