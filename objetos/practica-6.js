
//Creando objetos Javascript uno
//Escribe una función que tome una cadena como argumento. Cree un objeto que tenga una propiedad con la clave 'clave' y un valor igual a la cadena. Devuelve el objeto.

const myFunction = (a) => {

return {key : a}
}
console.log(myFunction('a'))
console.log(myFunction('z'))
console.log(myFunction('b'))

// se crea un objeto literal con una propiedad llamada key y un valor a a, el objeto se crea usando la sintaxis { key : a}, donde key es el nombre de la propiedad y a es el valor asignado a esa propiedad.