
// Devuelve el promedio de una serie de números
// Escribe una función que tome una serie de números como argumento. Debería devolver el promedio de los números.

const myFunction = (arr) => {

return arr.reduce((acc, cur) => acc + cur) / arr.length
}

console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000]))
console.log(myFunction([-50,0,50,200]))