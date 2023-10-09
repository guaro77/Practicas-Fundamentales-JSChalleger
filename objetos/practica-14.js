
//Multiplica todos los valores de los objetos por x
//Escribe una función que tome un objeto (a) y un número (b) como argumentos. Multiplica todos los valores de 'a' por 'b'. Devuelve el objeto resultante.

const myFunction = (a, b) => {

return Object.entries(a).reduce((acc, [key, val]) => {
    return {...acc, [key]:val * b};
},{})
}

console.log(myFunction({a:1,b:2,c:3},3))
console.log(myFunction({j:9,i:2,x:3,z:4},10))
console.log(myFunction({w:15,x:22,y:13},6))