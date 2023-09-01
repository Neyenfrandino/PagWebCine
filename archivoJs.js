let datosJson;

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

// Obtén una referencia al botón de búsqueda y agrega un oyente de eventos
let boton = buscarPorId('miBotonDeBusqueda');
boton.addEventListener('click', buscar);

// Obtén una referencia al campo de entrada y a la lista donde se mostrarán los resultados
let campoInput = buscarPorId('cajaEdad');
let lista = buscarPorId('miLista');

// Función para realizar la búsqueda y mostrar los resultados en la lista
function buscar() {
    // Limpia la lista antes de agregar nuevos elementos
    lista.innerHTML = '';

    // Realiza la solicitud fetch al archivo JSON
    fetch('json.json')
    .then(respuesta => respuesta.json())
    .then(function(salida) {
      let valorInput = campoInput.value.toUpperCase();
      for (let categoria of salida.categorias) {
        for (let tipo of categoria.tipos) {
          for (let opcion of tipo.opciones) {
            if (opcion.titulo.toUpperCase().startsWith(valorInput)) {
              // Crea un elemento <p> para mostrar la sinopsis
              let p = document.createElement('p');
              p.innerHTML = opcion.sinopsis;
              p.style.display ='block';
              
              // Crea un elemento <li> para mostrar el nombre
              let li = document.createElement('li');
              li.innerHTML = opcion.titulo;
              li.addEventListener('mousemove', function(){
              p.style.display = 'block';
              });
              li.addEventListener('mouseout', function(){
                  p.style.display = 'none';
              }); 

              // Agrega el elemento <p> al <li> y el <li> a la lista
              li.appendChild(p);
              lista.appendChild(li);
            }
          }
        }
      }
    });
}

function eventoPersonalizadoParrafo(parrafo) {
    let originalContent = parrafo.innerHTML;
      
    parrafo.addEventListener('mouseover', function () {
        let contenedor = parrafo.closest('.contenedor-opcion');
        if (contenedor) {
            parrafo.innerHTML = `
              Tipo: ${parrafo.getAttribute('data-tipo')}<br>
              Título: ${parrafo.getAttribute('data-titulo')}<br>
              Sinopsis: ${parrafo.getAttribute('data-sinopsis')}
            `;
          }
        });
      
    parrafo.addEventListener('mouseout', function () {
          let contenedor = parrafo.closest('.contenedor-opcion');
          if (contenedor) {
            parrafo.innerHTML = originalContent;
          }
        });
      }   

function cambioSelect(){
    let nombreSelect = buscarPorId('selectSeriePeliculas');
    let btn = buscarPorId('botonComedia');
    let botonTerror = buscarPorId('botonTerror');
    let botonDrama = buscarPorId('botoDrama');
    let botonCrecimientoPersonal = buscarPorId('botonCrecimientoPersonal');
    
    
    nombreSelect.addEventListener('change', function(){
        
        let selectUsiario = buscarPorId('select');
        let h3TituloUsuario = document.createElement('h3');
        h3TituloUsuario.className = 'h3TituloUsuario'
        h3TituloUsuario.textContent = nombreSelect.value;


        selectUsiario.appendChild(h3TituloUsuario);

        let categoriaSeleccionada = datosJson.categorias.find(categoria => categoria.nombre === nombreSelect.value);
        console.log(nombreSelect.value + 'este mensaje');
        if(categoriaSeleccionada){
            btn.addEventListener('click', function(){
                if(categoriaSeleccionada.nombre == 'Películas'){
                    btnComedia('Películas');
                   
                }else if(categoriaSeleccionada.nombre == 'Series'){
                // codigo de series...
                btnComedia('Series');
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
                    btnCrecimientoPersonal('Series');
                }
            });
        };
    });
};

function btnComedia(categoriaSeleccUsuario) {
    let div1 = buscarPorId('div1');
    div1.innerHTML = "";

    // Acceder a las categorías
    datosJson.categorias.forEach(categoria => {
        if (categoria.nombre === categoriaSeleccUsuario) {
            // Acceder a los tipos dentro de la categoría de películas
            categoria.tipos.forEach(tipo => {
                if (tipo.nombre === 'Comedia') {
                    tipo.opciones.forEach(opcion => {
                        let contenedorOpcion = document.createElement('div');
                        contenedorOpcion.className = 'contenedor-opcion';
                        contenedorOpcion.id = 'contenedor-opcion';

                        let imagenElemet = document.createElement('img');
                        imagenElemet.src = opcion.imagenes;
                        imagenElemet.className = 'ClaseImagenes';

                        let textoElemet = document.createElement('p');
                        textoElemet.className = 'parrafoLista';
                        textoElemet.textContent = `Mas informacion`;

                        contenedorOpcion.appendChild(imagenElemet);
                        contenedorOpcion.appendChild(textoElemet);

                        // Agregar atributos de datos para eventoPersonalizadoParrafo
                        textoElemet.setAttribute('data-tipo', tipo.nombre);
                        textoElemet.setAttribute('data-titulo', opcion.titulo);
                        textoElemet.setAttribute('data-sinopsis', opcion.sinopsis);

                        div1.appendChild(contenedorOpcion);
                        eventoPersonalizadoParrafo(textoElemet);
                    });
                }
            });
        }
    });
}

function btnTerror(categoriaSeleccUsuario) {
    let div1 = buscarPorId('div1');
    div1.innerHTML = "";

    // Acceder a las categorías
    datosJson.categorias.forEach(categoria => {
        if (categoria.nombre === categoriaSeleccUsuario) {
            // Acceder a los tipos dentro de la categoría de películas
            categoria.tipos.forEach(tipo => {
                if (tipo.nombre === 'Terror') {
                    tipo.opciones.forEach(opcion => {
                        let contenedorOpcion = document.createElement('div');
                        contenedorOpcion.className = 'contenedor-opcion';
                        contenedorOpcion.id = 'contenedor-opcion';

                        let imagenElemet = document.createElement('img');
                        imagenElemet.src = opcion.imagenes;
                        imagenElemet.className = 'ClaseImagenes';

                        let textoElemet = document.createElement('p');
                        textoElemet.className = 'parrafoLista';
                        textoElemet.textContent = `Mas informacion`;

                        contenedorOpcion.appendChild(imagenElemet);
                        contenedorOpcion.appendChild(textoElemet);

                        // Agregar atributos de datos para eventoPersonalizadoParrafo
                        textoElemet.setAttribute('data-tipo', tipo.nombre);
                        textoElemet.setAttribute('data-titulo', opcion.titulo);
                        textoElemet.setAttribute('data-sinopsis', opcion.sinopsis);

                        div1.appendChild(contenedorOpcion);
                        eventoPersonalizadoParrafo(textoElemet);
                    });
                }
            });
        }
    });
}

function btnCrecimientoPersonal(categoriaSeleccUsuario) {
    let div1 = buscarPorId('div1');
    div1.innerHTML = "";

    // Acceder a las categorías
    datosJson.categorias.forEach(categoria => {
        if (categoria.nombre === categoriaSeleccUsuario) {
            // Acceder a los tipos dentro de la categoría de películas
            categoria.tipos.forEach(tipo => {
                if (tipo.nombre === 'Crecimiento personal') {
                    tipo.opciones.forEach(opcion => {
                        let contenedorOpcion = document.createElement('div');
                        contenedorOpcion.className = 'contenedor-opcion';
                        contenedorOpcion.id = 'contenedor-opcion';

                        let imagenElemet = document.createElement('img');
                        imagenElemet.src = opcion.imagenes;
                        imagenElemet.className = 'ClaseImagenes';

                        let textoElemet = document.createElement('p');
                        textoElemet.className = 'parrafoLista';
                        textoElemet.textContent = `Mas informacion`;

                        contenedorOpcion.appendChild(imagenElemet);
                        contenedorOpcion.appendChild(textoElemet);

                        // Agregar atributos de datos para eventoPersonalizadoParrafo
                        textoElemet.setAttribute('data-tipo', tipo.nombre);
                        textoElemet.setAttribute('data-titulo', opcion.titulo);
                        textoElemet.setAttribute('data-sinopsis', opcion.sinopsis);

                        div1.appendChild(contenedorOpcion);
                        eventoPersonalizadoParrafo(textoElemet);
                    });
                }
            });
        }
    });
}

function btnDrama(categoriaSeleccUsuario) {
    let div1 = buscarPorId('div1');
    div1.innerHTML = "";

    // Acceder a las categorías
    datosJson.categorias.forEach(categoria => {
        if (categoria.nombre === categoriaSeleccUsuario) {
            // Acceder a los tipos dentro de la categoría de películas
            categoria.tipos.forEach(tipo => {
                if (tipo.nombre === 'Drama') {
                    tipo.opciones.forEach(opcion => {
                        let contenedorOpcion = document.createElement('div');
                        contenedorOpcion.className = 'contenedor-opcion';
                        contenedorOpcion.id = 'contenedor-opcion';

                        let imagenElemet = document.createElement('img');
                        imagenElemet.src = opcion.imagenes;
                        imagenElemet.className = 'ClaseImagenes';

                        let textoElemet = document.createElement('p');
                        textoElemet.className = 'parrafoLista';
                        textoElemet.textContent = `Mas informacion`;

                        contenedorOpcion.appendChild(imagenElemet);
                        contenedorOpcion.appendChild(textoElemet);

                        // Agregar atributos de datos para eventoPersonalizadoParrafo
                        textoElemet.setAttribute('data-tipo', tipo.nombre);
                        textoElemet.setAttribute('data-titulo', opcion.titulo);
                        textoElemet.setAttribute('data-sinopsis', opcion.sinopsis);

                        div1.appendChild(contenedorOpcion);
                        eventoPersonalizadoParrafo(textoElemet);
                    });
                }
            });
        }
    });
}

    
