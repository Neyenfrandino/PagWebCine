function buscarPorId(elementoID){
    let objetoId = document.getElementById(elementoID);
    return objetoId;

}

function configuracionEscuchador(elementoID, parrafoBtnFocus){
    let elementoClickFocus = buscarPorId(parrafoBtnFocus);
    elementoClickFocus.addEventListener('click', function(){
        elementoFocus(elementoID);
    })
 }

 function elementoFocus(elementoID){
    let elementoDeFocus = buscarPorId(elementoID);
    elementoDeFocus.focus();
 }

 function btnComedia(){
    let btn = buscarPorId('botonComedia');
    let edad = buscarPorId ('cajaEdad');
    
    btn.addEventListener('click', function(){
        let valorEdad = edad.value;
        if(valorEdad >= 16){
            let imgPelicula1 = document.getElementById('miImagen3')
            imgPelicula1.classList.add('ImgPeliculaTheWolfofWallStreet')
            imgPelicula1.style.display = 'inline-block';

            let imgPelicula = document.getElementById('miImagen')
            imgPelicula.classList.add('ImgPeliculaVolverAlFuturo')
            imgPelicula.style.display = 'inline-block';

        } else {
            if(valorEdad >= 13){
                let imgPelicula2 = document.getElementById('miImagen2')
                imgPelicula2.classList.add('ImgPeliculaTheTrumanShow')
                imgPelicula2.style.display = 'inline-block';

                let imgPelicula = document.getElementById('miImagen')
                imgPelicula.classList.add('ImgPeliculaVolverAlFuturo')
                imgPelicula.style.display = 'inline-block';
            } else {
                let mensajeFinal = buscarPorId('mensajeFinal');
                mensajeFinal.textContent = 'No hay peliculas disponibles para tu edad';
                
            }
           
        }
    })
    
    
 }

 function btnCrimen(){
    let btn = buscarPorId('botonCrimen');
    let edad = buscarPorId ('cajaEdad');
    
    btn.addEventListener('click', function(){
        let valorEdad = edad.value;
        if(valorEdad >= 16){
            let imgPelicula1 = document.getElementById('miImagen5')
            imgPelicula1.classList.add('ImgPeliculaTheGodfather')
            imgPelicula1.style.display = 'inline-block';

            let imgPelicula = document.getElementById('miImagen4')
            imgPelicula.classList.add('ImgPeliculaElSecretoDeSusOjos')
            imgPelicula.style.display = 'inline-block';

        } else {
            if(valorEdad >= 13){
                let imgPelicula2 = document.getElementById('miImagen4')
                imgPelicula2.classList.add('ImgPeliculaElSecretoDeSusOjos')
                imgPelicula2.style.display = 'inline-block';

            } else {
                let mensajeFinal = buscarPorId('mensajeFinal');
                mensajeFinal.textContent = 'No hay peliculas disponibles para tu edad';
                
            }
           
        }
    })
    
    
 }
 
 btnComedia();
 btnCrimen()
 configuracionEscuchador('cajaEdad', 'tituloSelectorEdad');
 configuracionEscuchador('cajaEdad', 'tituloSelectorEdad');
 configuracionEscuchador('cajaEdad', 'botonCrimen')



