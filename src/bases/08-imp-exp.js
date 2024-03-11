//import { heroes } from './data/heroes';
//import { heroes } from './data/heroes'

//----------herencia de un archivo a otro
import heroes, { owners } from "../data/heroes";
//----------------------------------------

//------------Metodo Find---------------
//ejemplo1
const getHeroeById = (id) => {

    return heroes.find( (heroe) => {
        if ( heroe.id === id ) {
            return true;            
        }else{
            return false;
        }
    } );
}
//console.log( getHeroeById(2));
//---------------------------------------


//ejemplo 2
//-----------Optimizar metodo find ejemplo 1-------------------


const getHeroeById2 = (id) => {

    return heroes.find( (heroe) => heroe.id === id );
}
//console.log( getHeroeById2(3));

//--------------------------------------------------------------


//ejemplo 3
//--------------------Optimizar metodo find ejemplo 3--------------------------

const getHeroeById3 = (id) => heroes.find( (heroe) => heroe.id === id );

//console.log( getHeroeById3(4));

//------------------------------------------------------------------------------


//Ejemplo 4
//-------------------Metoto Filter

const getHeroesByOwner = ( owner ) =>  heroes.filter( (heroe) => heroe.owner === owner );

//console.log(getHeroesByOwner('DC'));

export default getHeroeById3;
