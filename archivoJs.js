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

            let imgPelicula2 = document.getElementById('miImagen2')
                imgPelicula2.classList.add('ImgPeliculaTheTrumanShow')
                imgPelicula2.style.display = 'inline-block';

        } else {
            let ImgDesaparece = buscarPorId('miImagen3');
            ImgDesaparece.style.display = 'none'

            if(valorEdad >= 13){
                let imgPelicula2 = document.getElementById('miImagen2')
                imgPelicula2.classList.add('ImgPeliculaTheTrumanShow')
                imgPelicula2.style.display = 'inline-block';

                let imgPelicula = document.getElementById('miImagen')
                imgPelicula.classList.add('ImgPeliculaVolverAlFuturo')
                imgPelicula.style.display = 'inline-block';
            } else {
                let ImgDesaparece = buscarPorId('miImagen2');
                ImgDesaparece.style.display = 'none'
                
                if(valorEdad >=7 ){
                    let imgPelicula = document.getElementById('miImagen')
                    imgPelicula.classList.add('ImgPeliculaVolverAlFuturo')
                    imgPelicula.style.display = 'inline-block';
            } else{
                let ImgDesaparecee = buscarPorId('miImagen');
                ImgDesaparecee.style.display = 'none'

                let mensajeFinal = buscarPorId('mensajeFinal');
                mensajeFinal.textContent = 'No hay peliculas disponibles para tu edad';
                setTimeout(function(){
                    let mensajeFinal = buscarPorId('mensajeFinal');
                    mensajeFinal.style.display ='none';
                }, 5000)
            
            }
          }
        }
    });
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
            let ImgDesaparece = buscarPorId('miImagen5');
            ImgDesaparece.style.display = 'none';

            if(valorEdad >= 13){
                let imgPelicula2 = document.getElementById('miImagen4')
                imgPelicula2.classList.add('ImgPeliculaElSecretoDeSusOjos')
                imgPelicula2.style.display = 'inline-block';

            } else {
                let ImgDesaparece = buscarPorId('miImagen2');
                ImgDesaparece.style.display = 'none'

                let mensajeFinal = buscarPorId('mensajeFinal');
                mensajeFinal.textContent = 'No hay peliculas disponibles para tu edad';
                setTimeout(function(){
                    let mensajeFinal = buscarPorId('mensajeFinal');
                    mensajeFinal.style.display ='none';
                }, 5000)
                
            }
           
        }
    })
    
    
 }

 function btnDrama(){
    let btn = buscarPorId('botoDrama');
    let edad = buscarPorId ('cajaEdad');
    
    btn.addEventListener('click', function(){
        let valorEdad = edad.value;
        if(valorEdad >= 16){
            let imgPelicula1 = document.getElementById('miImagen8')
            imgPelicula1.classList.add('ImgPeliculaTaxiDriver')
            imgPelicula1.style.display = 'inline-block';

            let imgPelicula2 = document.getElementById('miImagen7')
            imgPelicula2.classList.add('ImgPeliculaTheShawshankRedemption')
            imgPelicula2.style.display = 'inline-block';

            let imgPelicula = document.getElementById('miImagen6')
            imgPelicula.classList.add('ImgPeliculaCasBlancaATP')
            imgPelicula.style.display = 'inline-block';

        } else {
            let ImgDesaparece = buscarPorId('miImagen8');
            ImgDesaparece.style.display = 'none';

            if(valorEdad >= 13){
                let imgPelicula2 = document.getElementById('miImagen7')
                imgPelicula2.classList.add('ImgPeliculaTheShawshankRedemption')
                imgPelicula2.style.display = 'inline-block';

                let imgPelicula = document.getElementById('miImagen6')
                imgPelicula.classList.add('ImgPeliculaCasBlancaATP')
                imgPelicula.style.display = 'inline-block';

            } else {
                let ImgDesaparece = buscarPorId('miImagen7');
                ImgDesaparece.style.display = 'none'

                if(valorEdad >=7 ){
                    let imgPelicula = document.getElementById('miImagen6')
                    imgPelicula.classList.add('ImgPeliculaVolverAlFuturo')
                    imgPelicula.style.display = 'inline-block';
            } else{
                    let ImgDesaparecee = buscarPorId('miImagen6');
                    ImgDesaparecee.style.display = 'none'

                    let mensajeFinal = buscarPorId('mensajeFinal');
                    mensajeFinal.textContent = 'No hay peliculas disponibles para tu edad';
                    setTimeout(function(){
                        let mensajeFinal = buscarPorId('mensajeFinal');
                        mensajeFinal.style.display ='none';
                    }, 5000)
                }   
            } 
        }
    })
    
    
 }


 function btnMusical(){
    let btn = buscarPorId('botonMusical');
    let edad = buscarPorId ('cajaEdad');
    
    btn.addEventListener('click', function(){
        let valorEdad = edad.value;
        if(valorEdad >= 16){
            let imgPelicula1 = document.getElementById('miImagen11')
            imgPelicula1.classList.add('ImgPeliculaTheRockyHorrorPictureShow')
            imgPelicula1.style.display = 'inline-block';

            let imgPelicula2 = document.getElementById('miImagen10')
            imgPelicula2.classList.add('ImgPeliculaLesMiserables')
            imgPelicula2.style.display = 'inline-block';

            let imgPelicula = document.getElementById('miImagen9')
            imgPelicula.classList.add('ImgPeliculaLaLaLand')
            imgPelicula.style.display = 'inline-block';

        } else {
            let ImgDesaparece = buscarPorId('miImagen11');
            ImgDesaparece.style.display = 'none';

            if(valorEdad >= 13){
                let imgPelicula2 = document.getElementById('miImagen10')
                imgPelicula2.classList.add('ImgPeliculaLesMiserables')
                imgPelicula2.style.display = 'inline-block';

                let imgPelicula = document.getElementById('miImagen9')
                imgPelicula.classList.add('ImgPeliculaLaLaLand')
                imgPelicula.style.display = 'inline-block';

            } else {
                let ImgDesaparece = buscarPorId('miImagen10');
                ImgDesaparece.style.display = 'none'

                if(valorEdad >=7 ){
                    let imgPelicula = document.getElementById('miImagen9')
                    imgPelicula.classList.add('ImgPeliculaLaLaLand')
                    imgPelicula.style.display = 'inline-block';
            } else{
                    let ImgDesaparecee = buscarPorId('miImagen9');
                    ImgDesaparecee.style.display = 'none'

                    let mensajeFinal = buscarPorId('mensajeFinal');
                    mensajeFinal.textContent = 'No hay peliculas disponibles para tu edad';
                    setTimeout(function(){
                        let mensajeFinal = buscarPorId('mensajeFinal');
                        mensajeFinal.style.display ='none';
                    }, 5000)
                }   
            } 
        }
    })
    
    
 }




 btnMusical();
 btnDrama();
 btnComedia();
 btnCrimen();
 configuracionEscuchador('cajaEdad', 'tituloSelectorEdad');
 configuracionEscuchador('cajaEdad', 'tituloSelectorEdad');
 configuracionEscuchador('cajaEdad', 'botonCrimen');
 configuracionEscuchador('cajaEdad', 'botonComedia');

