
//Escribe una función que tome una matriz (a) como argumento. Elimina los primeros 3 elementos de 'a'. Devolver el resultado

const myFunction = (a) => {

return a.slice(3)
}

console.log(myFunction([1,2,3,4]))
console.log(myFunction([5,4,3,2,1,0]))
console.log(myFunction([99,1,1]))
