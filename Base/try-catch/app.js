var a = {}

try {
    a.maMethode()
} catch (e) {
    console.log("An error occured " + e)
} finally{
    console.log("finally")
}
console.log("Salut")


var demo = function(nombre) {
    if (nombre > 5) {
        throw new Error("Le nombre ne peut être suppérieur à 5")
    }
    return nombre *2
}

try{
    demo(6)
} catch (e) {

}

try {
    try {
        throw new Error("erreur")
    } catch (e) {
        console.log("Catch")
    } finally {
        console.log("Finally")
    }
} catch (e) {
    console.log("parent Catch")
} finally {
    console.log("Parent finally")
}
