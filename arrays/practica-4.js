
//Escribe una función que tome una matriz (a) como argumento. Extrae los primeros 3 elementos de a. Devuelve la matriz resultante

const myFunction = (a) => {

return a.slice(0, 3);
}

console.log(myFunction([1,2,3,4]))
console.log(myFunction([5,4,3,2,1,0]))
console.log(myFunction([99,1,1]))
