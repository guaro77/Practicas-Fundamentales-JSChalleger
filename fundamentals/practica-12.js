
// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos. Suma a y b. Luego resta por c. Luego multiplica por d y divide por e. Finalmente eleva a la potencia de f y devuelve el resultado. Sugerencia: tenga en cuenta el orden.

const myFunction = (a, b, c, d, e, f) => {

return (((a + b) - c) * d / e) ** f 
}

console.log(myFunction(6,5,4,3,2,1))
console.log(myFunction(6,2,1,4,2,3))
console.log(myFunction(2,3,6,4,2,3))

