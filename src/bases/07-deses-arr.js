

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//--------------------Ejemepli 1
//Desestructuracion de arrglos
const [ p1 ] = personajes;
console.log('-' + p1 );

const [ , p2 ] = personajes;
console.log( p2 );

const [ , , p3 ] = personajes;
console.log( p3 );
//--------------------------------



//---------------Ejemplo 2
const retornaArreglo = () => {
    return ['ABC', 123];
}

const arr = retornaArreglo();
console.log(arr);

//Desestructuracion 
const[ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);
//-----------------------------------


//-------------------------Ejemplo 3
const estado = ( valor ) => {
    return [valor, ()=> { console.log('Hola Mundo') }];
}

const [ nombre, setNombre ] = estado ( 'Goku' );
console.log( nombre );
setNombre();




