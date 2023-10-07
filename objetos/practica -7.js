
//Creando objetos Javascript dos
//Escribe una función que tome dos cadenas (a y b) como argumentos. Cree un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'. Devuelve el objeto.

const myFunction = (a, b) => {

return { [a] : b }
}

console.log(myFunction('a','b'))
console.log(myFunction('z','x'))
console.log(myFunction('b','w'))

// se crea un objeto con una propiedad cuyo nombre es a y cuyo valor es b, la notacion [a], se utiliza para generar una propiedad dinamicaen el objeto, donde el nombre de la propiedad se toma del valor de a.