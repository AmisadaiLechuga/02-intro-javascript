
//Funciones en JS


////--------------Funcion Normal 
//////// -----NO SE RECOMIENDA UTILIZAR
const saludar = function ( nombre ){

    return `Hola, ${ nombre }`;
}
//---------------------------


//---------------Funcion de Flecha
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`; ///Se simplifica de esta forma porque no esta impriendo
//mucha informacion en consola

const saludar4 = () => `Ejemplo sin argumento`;


console.log( saludar('Estes es un ejemplo de una funcion Normal') );
console.log( saludar2('Estes es un ejemplo de una funcion de Flecha') );
console.log( saludar3('Este es un ejemplo de funcion de flecha simplificada') );
console.log( saludar4() );


//----Funcion sin argumento, envio de objeto

const getUser = () => {
    return{
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}
console.log( getUser() );
//--------

//----Funcion sin argumento, envio de objeto sin 
//usar el return u objeto implicito
// se quita {} despues del =>
const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_papi1502'
    });
console.log( getUser2() );
///--------------------


///------Ejemplo Funcion de Flecha
const getUsuarioActivo = ( nombre ) => {

    return {
        uid: 'ABC567',
        usernmae: nombre
    }
}

const usuarioActivo = getUsuarioActivo( 'Amisadai' );
console.log( usuarioActivo );
////----------------------------------------------


//Ejemplo Objeto Implicito---------------


const getUsuarioActivo2 = ( nombre ) => ({
        uid: 'ABC567',
        usernmae: nombre
    });
const usuarioActivo2 = getUsuarioActivo2( 'Amisadai2' );
console.log( usuarioActivo2 );

///-------------------