
// Devuelve la cadena más larga de una matriz de cadenas
// Escribe una función que tome una serie de cadenas como argumento. Devuelve la cadena más larga.

const myFunction = (arr) => {

return arr.reduce((acc, cur) => acc.length > cur.length ? acc : cur)
}

console.log(myFunction(['help', 'me']))
console.log(myFunction(['I', 'need', 'candy']))
