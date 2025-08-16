/* -------------------------------------------------------------------------- */
/*                                   CLASES                                   */
/* Las clases, sin funciones constructoras y siempre las vamos a inciar con   */
/* mayúsculas.                                                                */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                              CLASES PRIMITIVAS                             */
/* -------------------------------------------------------------------------- */

// CLASE STRING
let cadena = new String("Esto es una string"); // ahora no es necesario poner String
console.log(cadena);

// Clase Number
let number = new Number(12); // ahora no es necesario poner Number
console.log(number)

//Clases booleanas
let boleanas = Boolean(false); // ahora no es necesario poner Boolean
console.log(boleanas);

/* -------------------------------------------------------------------------- */
/*                              CLASES COMPUESTAS                             */
/* -------------------------------------------------------------------------- */

// Clase Array
let array = new Array('rojo', 'amarillo', 'verde'); // ahora no es necesario poner Array
console.log(array)

//Clase Object
let object = new Object({nombre: 'Gonzalo', edad: 33});
console.log(object)

/* -------------------------------------------------------------------------- */
/*                      CLASES CREADAS POR EL PROGRAMADOR                     */
/* -------------------------------------------------------------------------- */
// Creamos el prototipo

function Persona() {
    // Propiedades Públicas
    this.nombre;
    this.edad;
}

let persona1 = new Persona();
persona1.nombre = 'Diana';
persona1.edad = 40;

console.log("Persona 1 ", persona1)

// Clases con parámetros
function Animales(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
}

let mascota = new Animales("Zeus", "Siberiano Haski");
console.log(mascota)