
//Fusionar dos objetos con claves coincidente
//Escribe una función que tome dos objetos como argumentos. Lamentablemente, la propiedad 'b' del segundo objeto tiene la clave incorrecta. En su lugar, debería llamarse 'd'. Fusione ambos objetos y corrija el nombre de propiedad incorrecto. Devuelve el objeto resultante. Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'.

const myFunction = (x, y) => {

y["d"] = y["b"]
delete y.b
    return{...x, ...y} 

}

console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))
console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }))
