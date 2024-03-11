//Pormesas

//const getImagenPromsa = () => {
//  return new Promise ((resolve, reject) => {
//    resolve('http://asafasdfasdfsdf.com')
//  })
//}

//getImagenPromsa().then( console.log )

///-------------------Ejmplo 1 con async-------------------
const getImagen = async() => {
    return 'http://asafasdfasdfsdf.com';
}

getImagen().then( console.log );

///--------------------------------------------------------


///-------------------Ejemplo 2 con async y await-----------

const getImagen2 = async() => {

    try {
        
        const apiKey = 'phzrJUN1aivPsHx2ilTh0vznzPljVzMZ';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );


    } catch (error) {
        console.error(error)
    }


    
}

getImagen2();