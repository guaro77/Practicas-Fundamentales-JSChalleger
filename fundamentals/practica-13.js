
// Escribe una función que tome dos cadenas (a y b) como argumentos. Si a contiene b, agregue b al comienzo de a. Si no, añádelo al final. Devolver la concatenación


const myFunction = (a, b) => {

return a.includes(b) ? b + a : a + b
}

console.log(myFunction('cheese', 'cake'))
console.log(myFunction('lips', 's'))
console.log(myFunction('Java', 'script'))
console.log(myFunction(' think, therefore I am', 'I'))
