
//se crea la variable de tipo string
var texto = "CODIGOS, DE PROGRAMACION";
console.log(texto);
console.log(texto.length);
var posicion = texto.indexOf(",");
console.log(posicion);
//se utiliza el metodo length para saber la longitud del string
//se utiliza el metodo  indexOf  busca el carácter ","
// dentro de la cadena texto y devuelve la posición donde se encuentra el primer carácter "," en la cadena original


// se crea la variable de tipo numero 
var numero = 42;
// Método toFixed: redondea y devuelve una cadena con una cantidad específica de decimales
console.log(numero.toFixed(2)); 
// Método toString: convierte el número en una cadena
console.log(numero.toString()); 


//se crea la variable de tipo bool
var bool = true;
// Método toString: convierte el booleano en una cadena
console.log(bool.toString()); 
// Método valueOf: devuelve el valor primitivo del booleano
console.log(bool.valueOf());

//creamos la variable de tipo array
var array = [1, 2, 3];
// Método push: agrega elementos al final del array
array.push(4, 5);
// Método join: convierte los elementos del array en una cadena separada por un delimitador
console.log(array.join("-"));

//creamos la variable con el tipo de dato objeto
var objeto = {
    nombre: "juan",
    edad: 30
};
// Método keys: devuelve un array con las claves del objeto
console.log(Object.keys(objeto));
// Método hasOwnProperty: verifica si el objeto tiene una propiedad específica
console.log(objeto.hasOwnProperty("nombre"));

///////////////////////////// ahora usaremos lo metodo de ejemplo que son el freeze y el seal 


var objeto = {
    nombre: "Juan",
    edad: 30
  };
  
  // Método freeze congela el objeto, evitando modificaciones en sus propiedades existentes
  Object.freeze(objeto);
  
  objeto.edad = 31;
  console.log(objeto); //no se realiza la modificación
  

  objeto.direccion = "Calle 123";
  console.log(objeto); //no se agrega la nueva propiedad
  
  // Método seal permite modificar sus propiedades existentes pero no agregar ni eliminar propiedades
  Object.seal(objeto);
  

  objeto.edad = 31;
  console.log(objeto); //  se modifica
  

  objeto.direccion = "Calle 456";
  console.log(objeto); // se agrega la nueva propiedad
  