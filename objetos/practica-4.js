
// Comprobar si la propiedad existe en el objeto
// Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con clave 'b'. Devuelve falso en caso contrario. Sugerencia: el caso de prueba 3 es un poco complicado porque el valor de la propiedad 'z' no está definido. Pero la propiedad en sí existe.

const myFunction = (a, b) => {

return b in a
}

console.log(myFunction({a:1,b:2,c:3},'b'))
console.log(myFunction({x:'a',y:'b',z:'c'},'a'))
console.log(myFunction({x:'a',y:'b',z:undefined},'z'))

// se utiliza el operador in el cual sirve para comprobar si una propiedad existe en un objeto