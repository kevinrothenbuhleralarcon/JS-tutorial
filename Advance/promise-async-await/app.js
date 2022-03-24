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


let catchError = function(error){
    console.error("Erreur ajax", error)
}


let getPosts = async function() {
    let response = await get("https://jsonplaceholder.typicode.com/users")
    let users = JSON.parse(response)
    response = await get(`https://jsonplaceholder.typicode.com/comments?userId=${users[0].id}`)
    let posts = JSON.parse(response)
    return posts
}

let getFirstPost = async function() {
    let posts = await getPosts()
    return posts[0]
}

/*getPosts()
    .then(posts => {
        console.log(posts[0])
    })
    .catch(catchError)
    .then(() => {
        console.log("Fin des requetes ajax")
    })*/

// Pour attendre que plusieurs fonction async soient finie, on utilise un Promise.all
Promise.all([getPosts(), getFirstPost()])
    .then(array => {
        console.log(array)
    })

