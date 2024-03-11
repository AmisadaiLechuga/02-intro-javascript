

const nombre   = 'Amisadai';
const apellido = 'Lechuga';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${ nombre } ${ apellido } `;

console.log( nombreCompleto );

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Esre es un texto: ${ getSaludo( nombre ) }` );