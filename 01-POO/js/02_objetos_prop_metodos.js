/* -------------------------------------------------------------------------- */
/*                                  OBJECTOS                                  */
/*  Es una colección de propiedades y métodos.                                */
/* -------------------------------------------------------------------------- */

// Una propiedad es una asociación entre un nombre y un valor
// El método es una función dentro de un objecto

const objecto = {
    nombre: 'Clara',
    edad: 20,
    descripcion: function() {
        console.log(`Su nombre es: ${this.nombre} y tiene ${this.edad} años`)
    },
    saludar: function(saludo) {
        console.log(`${saludo} ${objecto.nombre}`)
    }
}

objecto.descripcion();
console.log(objecto.nombre)

objecto.saludar('Hola');

/* -------------------------------------------------------------------------- */
/*                             OBJETOS PRIMITIVOS                             */
/* -------------------------------------------------------------------------- */

// El objeto Date se utiliza para trabajar con fechas y horas.

let d = new Date();
console.log("Fecha y hora actual: ", d);

let anio = d.getFullYear();
console.log(`Año actual ${anio}`)