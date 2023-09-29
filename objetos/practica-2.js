
// Accediendo a las propiedades del objeto dos
// Escribe una función que tome un objeto con dos propiedades como argumento. Debería devolver el valor de la propiedad con la clave 'prop-2'. Sugerencia: es posible que desee utilizar el descriptor de acceso de propiedad de corchetes

const myFunction = (obj) => {

return obj["prop-2"]
}

console.log(myFunction({  one: 1,  'prop-2': 2}))
console.log(myFunction({  'prop-2': 'two',  prop: 'test'}))

// como la propiedad contiene mas de una palabra se debe utilizar corchetes, ya que si se utiliza na notacion de punto no funciona para acceder