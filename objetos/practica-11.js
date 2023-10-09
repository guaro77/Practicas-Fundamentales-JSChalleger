
//Valores de objetos de suma
//Escribe una función que tome un objeto (a) como argumento. Devuelve la suma de todos los valores del objeto.

const myFunction = (a) => {

return Object.values(a).reduce((total, num) => total + num)
}

console.log(myFunction({a:1,b:2,c:3}))
console.log(myFunction({j:9,i:2,x:3,z:4}))
console.log(myFunction({w:15,x:22,y:13}))