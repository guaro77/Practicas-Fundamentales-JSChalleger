// Accediendo a las propiedades del objeto uno
// Escribe una función que tome un objeto con dos propiedades como argumento. Debería devolver el valor de la propiedad con el país clave.

const myFunction = (obj) => {

return obj.country
}

console.log(myFunction({ continent: 'Asia', country: 'Japan' }))
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }))

// para acceder a la propiedad de un objeto lo realizo con la notacion de punto