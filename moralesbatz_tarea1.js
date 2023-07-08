
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
    nombre: "HUGO",
    edad: 30
};
// Método keys: devuelve un array con las claves del objeto EN ESTE CASO SON NOMBRE Y EDAD
console.log(Object.keys(objeto));
// Método hasOwnProperty: verifica si el objeto tiene una propiedad específica, COMO POR EJEMPLO EN ESTE CASO
//VERIFICA SI TIENE LA PROPIEDAD "NOMBRE"
console.log(objeto.hasOwnProperty("nombre"));

///////////////////////////// ahora usaremos lo metodo de ejemplo que son el freeze y el seal 


var objeto = {
    nombre: "HUGO",
    edad: 30
  };
  
  
  // Método seal permite modificar sus propiedades existentes pero no agregar ni eliminar propiedades
  Object.seal(objeto);
  
  
  objeto.edad = 31;
  console.log(objeto); //  se modifica
  
  
  objeto.direccion = "CHIMALTENANGO";
  console.log(objeto); // NO se agrega la nueva propiedad


  // Método freeze congela el objeto, evitando modificaciones en sus propiedades existentes
  Object.freeze(objeto);
  
  objeto.edad = 31;
  console.log(objeto); //no se realiza la modificación
  

  objeto.direccion = "GUATEMALA, ZONA 3";
//   console.log(objeto); //no se agrega la nueva propiedad
  
  
  // se crea la variable con tipo de dato null, este tipo de dato no  metodos asociandos directamente
  
  var variable = null;
//verificamos con el metodo type of si la variable es igual a HOLA
  console.log(typeof variable === "HOLA");
  //verificamos si la variable igual a null
  console.log(variable === null);


  // se crea la variable con un tipo de dato undefined
  var variable;

  console.log(variable === undefined);

  console.log(typeof variable === "undefined")