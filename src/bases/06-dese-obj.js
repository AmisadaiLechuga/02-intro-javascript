//Desetructuración
//Asignación desestructurante

///---------Objeto
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};
///-------------

//----------Desestructuracion
const { nombre, edad, clave } = persona;
//---------------------------

console.log( persona.nombre + ' Forma tradicionl ' );
console.log( persona.edad + ' Forma tradicionl ' );
console.log( persona.clave + ' Forma tradicionl ' );

console.log( nombre + ' Desestructuración ' );
console.log( edad + ' Desestructuración ' );
console.log( clave + ' Desestructuración ' );


//------------Ejemplo 2 desestructuracion en funcion de flecha--------------------------

///---------Objeto
const persona2 = {
    nombre: 'Peter',
    edad: 20,
    clave: 'Spiderman'
};
///-------------

///-------------------------Funcion de Flecha
const retornaPersona = ( usuario ) => {
    
    console.log( usuario );

}
retornaPersona( persona2 );
///-----------------------------------------



//---------------------------------FIN DE EJEMPLO 2-------------------------------------


//-----------------------Ejemplo 3 Desestructuracion dentro de la funcion de flecha----------------------

///---------Objeto
const persona3 = {
    nombre: 'Eddie',
    edad: 29,
    clave: 'Venom'
};
///-------------

///-------------------------Funcion de Flecha
const retornaPersona2 = ( usuario2 ) => {
    const { edad, clave, nombre, } = usuario2;
    console.log( nombre, edad, clave );
}
retornaPersona2( persona3 );
///-----------------------------------------



//------------------FIN DE EJEMPLO 3-----------------------------------------------------------------------------



//-----------------------Ejemplo 4 Desestructuracion dentro de la funcion de flecha dentro de sus argumentos---------------------

///---------Objeto
const persona4 = {
    nombre: 'Matt',
    edad: 35,
    clave: 'Daradevil'
};
///-------------

///-------------------------Funcion de Flecha
const retornaPersona3 = ({ nombre, edad, rango = 'Capitan' }) => {
    
    console.log( nombre, edad, rango );
}
retornaPersona3( persona4 );
///-----------------------------------------



//------------------FIN DE EJEMPLO 4-----------------------------------------------------------------------------


//-----------------------Ejemplo 5 Desestructuracion dentro de la funcion de flecha dentro de sus argumentos---------------------

///---------Objeto
const persona5 = {
    nombre: 'Logan',
    edad: 80,
    clave: 'Wolverine'
};
///-------------

///-------------------------Funcion de Flecha
const retornaPersona4 = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232

        }
    }


}

const { nombreClave, anios, latlng: { lat, lng} } = retornaPersona4 ( persona5 );
console.log( nombreClave, anios );
console.log( lat, lng );
///-----------------------------------------



//------------------FIN DE EJEMPLO 5-----------------------------------------------------------------------------