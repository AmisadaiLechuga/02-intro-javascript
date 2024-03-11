import getHeroeById3 from './bases/08-imp-exp.js';


////--------------------ejemplo 1------------------------------------
//const promesa = new Promise ( ( resolve, reject ) => {
//    setTimeout( () => {
//       //console.log('2 segundos despues')
//       //const heroe = getHeroeById3(2);
//       const p1 = getHeroeById3(2);
 //      resolve( p1 );
 //      //
 //      //reject( 'No se pudo encontrar al heroe' );
 //   }, 2000 )
//} );

//promesa.then( ( heroe ) => {

 //   console.log('heroe', heroe);
//})
//.catch( err => console.warn( err ) );

////--------------------------------------------------------------



//-------------------------Ejemplo 2---------------------------------

const getHeroeByIdAsync = ( id ) => {

    return new Promise ( ( resolve, reject ) => {
        setTimeout( () => {
           const p1 = getHeroeById3( id );
           if ( p1 ) {
            resolve( p1 );               
           }else{
            reject( 'No se puedo encontrar el héroe' );
           }
           
        
       }, 2000 )
    } );
}
getHeroeByIdAsync(1)
    //.then( heroe => console.log('Heroe', heroe ))
    .then( console.log)
    //.catch( err => console.warn( err ) )
    .catch( console.warn )

//-------------------------------------------------------------------