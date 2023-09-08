
// Escribe una función que tome una cadena (a) como argumento. Elimine los primeros 3 caracteres de a. Devolver el resultado

const myFunction = (a) => {

return a.slice(3)
}

console.log(myFunction('abcdefg'))
console.log(myFunction('1234'))
console.log(myFunction('fgedcba'))

// se utiliza el metodo slice que devuelve una parte del array en un nuevo array