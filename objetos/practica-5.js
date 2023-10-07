
// Compruebe si la propiedad existe en el objeto y es veraz
// Escribe una función que tome un objeto (a) y una cadena (b) como argumento. Devuelve verdadero si el objeto tiene una propiedad con la clave 'b', pero solo si tiene un valor verdadero. En otras palabras, no debe ser nulo, indefinido o falso. Devuelve falso en caso contrario.

const myFunction = (a, b) => {

return  a [b] ? true : false
}

console.log(myFunction({a:1,b:2,c:3},'b'))
console.log(myFunction({x:'a',y:null,z:'c'},'y'))
console.log(myFunction({x:'a',b:'b',z:undefined},'z'))