
// Fusionar un número arbitrario de matrices
// Escriba una función que tome argumentos en un número arbitrario de matrices. Debería devolver una matriz que contenga los valores de todas las matrices.

const myFunction = (...arrays) => {

return [].concat(...arrays)
}

console.log(myFunction([1, 2, 3], [4, 5, 6]))
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]))
console.log(myFunction([true, true], [1, 2], ['a', 'b']))


// se usa el operador de propagacion (...) junto con el metodo concat() para combinar los valores de multiples matrices