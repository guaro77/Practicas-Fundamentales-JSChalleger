
//Escribe una función que tome un número (a) como argumento. Redondea a al segundo dígito después del punto decimal. Devuelve el número redondeado

const myFunction = (a) => {

return Number(a.toFixed(2))

}

console.log(myFunction(2.12397))
console.log(myFunction(3.136))
console.log(myFunction(1.12397))
console.log(myFunction(26.1379))

