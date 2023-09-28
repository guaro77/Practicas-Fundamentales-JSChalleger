
// Ordenar matriz por propiedad de objeto
// Escribe una función que tome una serie de objetos como argumento. Ordene la matriz por propiedad b en orden ascendente. Devuelve la matriz ordenada

const myFunction = (arr) => {

return arr.sort((a,b) => a.b - b.b)
}

console.log(myFunction([{a:1,b:2},{a:5,b:4}]))
console.log(myFunction([{a:2,b:10},{a:5,b:4}]))
console.log(myFunction([{a:1,b:7},{a:2,b:1}]))

// para ordenar una matriz se utiliza el metodo sort(), luego se aplica la condicion para comparar el valor entre a y b