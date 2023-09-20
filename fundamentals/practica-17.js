
// Operadores de multiplicación, división y comparación.
// Escribe una función que tome dos números (a y b) como argumentos. Si a es menor que b, divida a entre b. De lo contrario, multiplica ambos números. Devuelve el valor resultante

const myFunction = (a, b) => {

return a < b ? a / b : a * b
}

console.log(myFunction(10, 100))
console.log(myFunction(90, 45))
console.log(myFunction(8, 20))
console.log(myFunction(2, 0.5))

