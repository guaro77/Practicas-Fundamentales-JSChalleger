
// Escribe una función que tome una cadena como argumento. Extrae los últimos 3 caracteres de la cadena. Devolver el resultado

const myFunction = (str) => {

return str.slice(-3)
}

console.log(myFunction('abcdefg'))
console.log(myFunction('1234'))
console.log(myFunction('fgedcba'))

// se utiliza el metodo slice que devuelve una parte del array en un nuevo array