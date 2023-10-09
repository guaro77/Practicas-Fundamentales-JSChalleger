
//Devolver propiedad de objeto anidado
//Escribe una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas. Devuelve la propiedad 'b' del objeto 'a' dentro del objeto original si existe. Si no, regresa indefinido

const myFunction = (obj) => {

return obj && obj.a ? obj.a.b : undefined
}

console.log(myFunction({a:1}))
console.log(myFunction({a:{b:{c:3}}}))
console.log(myFunction({b:{a:1}}))
console.log(myFunction({a:{b:2}}))

