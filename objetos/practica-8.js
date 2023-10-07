
//Creando objetos Javascript tres
//Escribe una función que tome dos matrices (a y b) como argumentos. Cree un objeto que tenga propiedades con claves 'a' y valores correspondientes 'b'. Devuelve el objeto.

const myFunction = (a, b) => {

return a.reduce((acc, cur, i) =>({...acc, [cur]: b[i] }), {})
}

console.log(myFunction(['a','b','c'],[1,2,3]))
console.log(myFunction(['w','x','y','z'],[10,9,5,2]))
console.log(myFunction([1,'b'],['a',2]))

//en resumen, toma 2 array a y b y utiliza el meto reduce para crear un objeto donde las propiedades son el elemento a y los valores corresponden al elento b, el objeto resultante se devuelve como resultado de la funcion.