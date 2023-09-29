
// Accediendo a las propiedades del objeto tres
// Escribe una función que tome un objeto con dos propiedades y una cadena como argumentos. Debería devolver el valor de la propiedad con clave igual al valor de la cadena.

const myFunction = (obj, key) => {

return obj[key]
}

console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'))
console.log(myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country'))

// este algoritmo toma dos parametros un objeto y una clave, devuelve le valor de la clave en el objeto El algoritmo funciona primero comprobando si el objeto tiene la clave. Si no la tiene, devuelve `undefined`.

// Si el objeto tiene la clave, el algoritmo devuelve el valor de la clave.
