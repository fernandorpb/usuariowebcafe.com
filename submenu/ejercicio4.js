// solicitar al usuario una palabra y mostrar por consola el numero de consonates  ,vocalesy longitud de la palabra.

//lowercase hace q la palabra s econvierta en minuscula
const palabra = prompt("Escriba su palabra").toLocaleLowerCase()
let consonantes = 0
let vocales = 0
//cuenta cada vocal
for( const i of palabra){
    //ponemos en el caso de las vocales ; para usar "o" se una "||"
    if(i == "a" || i =="e" || i=="i" || i=="o" || i=="u")
    //las vocales se contaran de uno en uno
    vocales++
    else consonantes++
}
//console.log(`tu palabra tiene ${vocales} vocales ,${consonantes} consonantes y tiene en total ${palabra.length} letras`)
//length contara cantidad de palabras 
document.write(`Tu palabra tiene ${vocales} vocales ,${consonantes} consonantes y tiene en total ${palabra.length} letras.`)