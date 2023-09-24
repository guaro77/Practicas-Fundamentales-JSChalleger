

//Ordenar una serie de números en orden descendente
// Escribe una función que tome una serie de números como argumento. Debería devolver una matriz con los números ordenados en orden descendente.

const myFunction = (arr) => {

return arr.sort((a, b) => b - a)
}

console.log(myFunction([1,3,2]))
console.log(myFunction([4,2,3,1]))