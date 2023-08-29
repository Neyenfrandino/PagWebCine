let datosJson;
let categoriaSeleccionada = null;

fetch('json.json')
.then(res => res.json())
.then((salida) => {
    datosJson = salida;
    console.log('Datos cargados:', datosJson); // Verifica si los datos se cargaron correctamente
    cambioSelect(); // Llamar a la función para manejar el cambio de categoría
})
.catch(function(error) {
    alert(error);
});

function buscarPorId(elementoID){
    let objetoId = document.getElementById(elementoID);
    return objetoId;
} 

function cambioSelect(){
    let nombreSelect = buscarPorId('selectSeriePeliculas');
    let btn = buscarPorId('botonComedia');
    let botonTerror = buscarPorId('botonTerror');
    let botonDrama = buscarPorId('botoDrama');
    let botonCrecimientoPersonal = buscarPorId('botonCrecimientoPersonal');
    
    nombreSelect.addEventListener('change', function(){
        categoriaSeleccionada = datosJson.categorias.find(categoria => categoria.nombre === nombreSelect.value);
        console.log(categoriaSeleccionada + 'este mensaje');
        if(categoriaSeleccionada){
            btn.addEventListener('click', function(){
                if(categoriaSeleccionada.nombre == 'Películas')
                btnComedia('Películas')
            else if(categoriaSeleccionada.nombre == 'Series'){
                // codigo de series...
                btnComedia('Series')
                }
            })
            botonTerror.addEventListener('click', function(){
                if(categoriaSeleccionada.nombre  == 'Películas'){
                    btnTerror('Películas');
                } else if (categoriaSeleccionada.nombre == 'Series'){
                    btnTerror('Series')
                };
            });
            botonDrama.addEventListener('click', function(){
                if(categoriaSeleccionada.nombre == 'Películas'){
                    btnDrama('Películas');
                } else if (categoriaSeleccionada.nombre == 'Series'){
                    btnDrama('Series');
                };;
                
            });
            botonCrecimientoPersonal.addEventListener('click', function() {
                if (categoriaSeleccionada.nombre === 'Películas') {
                    btnCrecimientoPersonal('Películas');
                } else if (categoriaSeleccionada.nombre === 'Series') {
                    btnTerror('Series');
                }
            });
        };
    });
};
function btnComedia(categoriaSeleccUsuario) {

    let div1 = buscarPorId('div1');
    let divHijo = buscarPorId('divHijo');
    div1.innerHTML = categoriaSeleccUsuario + ":\n";

    // Acceder a las categorías
    datosJson.categorias.forEach(categoria => {
        if (categoria.nombre === categoriaSeleccUsuario) {
            // Acceder a los tipos dentro de la categoría de películas
            categoria.tipos.forEach(tipo => {
                if (tipo.nombre === 'Comedia') {
                    // Acceder a las opciones dentro de la categoría de comedia
                    tipo.opciones.forEach(opcion => {
                        let contenedorOpcion = document.createElement('div');
                        contenedorOpcion.className = 'contenedor-opcion';

                        let imagenElemet = document.createElement('img');
                        imagenElemet.src = opcion.imagenes;
                        imagenElemet.className = 'ClaseImagenes';

                        let textoElemet = document.createElement('p');
                        textoElemet.className = 'parrafoLista';
                        textoElemet.textContent = `Tipo: ${tipo.nombre},
                                                  Título: ${opcion.titulo},\n
                                                  Sinopsis: ${opcion.sinopsis}`;

                        contenedorOpcion.appendChild(imagenElemet);
                        contenedorOpcion.appendChild(textoElemet);

                        div1.appendChild(contenedorOpcion);

                        contenedorOpcion.addEventListener('mouseover', function () {
                            textoElemet.style.display = 'block';

                        });

                        contenedorOpcion.addEventListener('mouseout', function () {
                            textoElemet.style.display = 'none';
                        });
                    });
                }
            });
        }
    });
}



function btnTerror(categoriaSeleccUsuario){
    let elemetodiv1 = buscarPorId('div1');
    elemetodiv1.innerHTML = categoriaSeleccUsuario +":\n";

    // Acceder a las categorías
    datosJson.categorias.forEach(categoria => {
        if (categoria.nombre === categoriaSeleccUsuario) { // Filtrar solo las películas
            // Acceder a los tipos dentro de la categoría de películas
            categoria.tipos.forEach(tipo => {
                if (tipo.nombre === 'Terror') { // Filtrar solo las películas de comedia
                    // Acceder a las opciones dentro de la categoría de comedia
                    tipo.opciones.forEach(opcion => {
                        console.log(`Título: ${opcion.titulo}`);
                        console.log(`Sinopsis: ${opcion.sinopsis}`);
                        let listItem = document.createElement('li');
                        listItem.textContent = `Tipo: ${tipo.nombre},
                                               Título: ${opcion.titulo}
                                               Sinopsis: ${opcion.sinopsis}
                                               Imagen: ${opcion.imagenes}`;
                        elemetodiv1.appendChild(listItem);
                    });
                }
            });
        }
    });
}

function btnDrama(categoriaSeleccUsuario){
    let elemetodiv1 = buscarPorId('div1');
    elemetodiv1.innerHTML = categoriaSeleccUsuario +":\n";

    // Acceder a las categorías
    datosJson.categorias.forEach(categoria => {
        if (categoria.nombre === categoriaSeleccUsuario) { // Filtrar solo las películas
            // Acceder a los tipos dentro de la categoría de películas
            categoria.tipos.forEach(tipo => {
                if (tipo.nombre === 'Drama') { // Filtrar solo las películas de comedia
                    // Acceder a las opciones dentro de la categoría de comedia
                    tipo.opciones.forEach(opcion => {
                        console.log(`Título: ${opcion.titulo}`);
                        console.log(`Sinopsis: ${opcion.sinopsis}`);
                        let listItem = document.createElement('li');
                        listItem.textContent = `Tipo: ${tipo.nombre},
                                               Título: ${opcion.titulo}
                                               Sinopsis: ${opcion.sinopsis}
                                               Imagen: ${opcion.imagenes}`;
                        elemetodiv1.appendChild(listItem);
                    });
                }
            });
        }
    });
}

function btnCrecimientoPersonal(categoriaSeleccUsuario){
    let elemetodiv1 = buscarPorId('div1');
    elemetodiv1.innerHTML = categoriaSeleccUsuario +":\n";

    // Acceder a las categorías
    datosJson.categorias.forEach(categoria => {
        if (categoria.nombre === categoriaSeleccUsuario) { // Filtrar solo las películas
            // Acceder a los tipos dentro de la categoría de películas
            categoria.tipos.forEach(tipo => {
                if (tipo.nombre === 'Crecimiento personal') { // Filtrar solo las películas de comedia
                    // Acceder a las opciones dentro de la categoría de comedia
                    tipo.opciones.forEach(opcion => {
                        console.log(`Título: ${opcion.titulo}`);
                        console.log(`Sinopsis: ${opcion.sinopsis}`);
                        let listItem = document.createElement('li');
                        listItem.textContent = `Tipo: ${tipo.nombre},
                                               Título: ${opcion.titulo}
                                               Sinopsis: ${opcion.sinopsis}
                                               Imagen: ${opcion.imagenes}`;
                        elemetodiv1.appendChild(listItem);
                    });
                }
            });
        }
    });
}

