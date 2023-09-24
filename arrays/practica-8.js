
// //Cuente el número de valores negativos en la matriz
// Escribe una función que tome una serie de números como argumento. Devuelve el número de valores negativos en la matriz.
const myFunction = (a) => {

return a.filter(item => item < 0).length
}

console.log(myFunction([1,-2,2,-4]))
console.log(myFunction([0,9,1]))
console.log(myFunction([4,-3,2,1,0]))
