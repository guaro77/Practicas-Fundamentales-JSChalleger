
//Calcular la suma de una serie de números.
//Escribe una función que tome una serie de números como argumento. Debería devolver la suma de los números.

const myFunction = (a) => {

return a.reduce((acc, cur) => acc + cur )
}
console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000,1]))
console.log(myFunction([-50,0,50,200]))
