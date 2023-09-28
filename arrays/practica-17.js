

// Fusionar dos matrices con valores duplicados
// Escribe una función que tome dos matrices como argumentos. Fusione ambas matrices y elimine los valores duplicados. Ordene el resultado de la combinación en orden ascendente. Devuelve la matriz resultante

const myFunction = (a, b) => {

return [...new Set([...a, ...b])].sort((a,b) => a - b)
}

console.log(myFunction([1, 2, 3], [3, 4, 5]))
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))

// se utiliza el objeto New set que nos permite almacenar valores unicos, por lo que nos elimina los duplicados y (...) el operador de propagacion para unir ambas matrices y al final se utiliza el sort para ordenar de forma ascendente