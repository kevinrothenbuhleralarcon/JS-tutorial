function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function game() {
    const number = getRandomInt(100)
    let nbTry = 3
    let isNumberFound = false
    let message = "Devinez le nombre compris entre 0 et 100"

    while(!isNumberFound && nbTry > 0) {
        nbTry--
        let guess = parseInt(window.prompt(message))
        if(isNaN(guess)) {
            message = "Vous devez entrer un nombre entier"
        }else {
            if (guess == number) {
                isNumberFound = true
                return nbTry
            } else if (guess < number) {
                message = `Le nombre est plus grand, votre essai: ${guess}`
            } else {
                message = `Le nombre est plus petit, votre essai: ${guess}`
            }
        }       
    }
}

let endMessage

do {
    let remainingTry = game()
    if (remainingTry > 0) {
        endMessage = "Bravo, vous avez trouvez le nombre.\nVoulez vous continuer à jouer?"
    } else {
        endMessage = "Votre nombre d'essai est dépassé.\nVoulez vous continuer à jouer?"
    }

} while (window.confirm(endMessage))
