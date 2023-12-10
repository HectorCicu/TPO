/**En este js recupero datos desde la API OMDB para incluir tanto en la página principal como carousel
 * y también en la página infoVideos para mostrar los datos
 */

const carousel = document.querySelector("#carousel-examples");

let omdbKey =  "2677da8c";

/**
 * genero los atributos del principio y fin del carousel de posters de
 * películas a mostrar en index.html
 */
var armado = `<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner">`;
var finArmado = "</div>";

var html = "";

// Genero un Random para mostrar una página distinta
const pagina = Math.round(Math.random() * 20, 0);
//console.log(pagina);
var parametro = 0;
var busqueda = "";
var tipoVideo = "";

/**genero un número al azar, si es par, busco videos sino busco películas en la API
 * para el carousel de index.html
 */
if (Math.round(Math.random() * 1000, 0) % 2 == 0) {
  tipoVideo = "movie";
} else {
  tipoVideo = "series";
}
console.log(tipoVideo);

////  comienzo la carga de las películas //////

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await generoFetch(tipoVideo);
  } catch (error) {
    console.log(error);
  }
});

///////////////////////////
async function generoFetch(tipoV) {
  //console.log("entre en generofetch")

  //hago búsquedas 'randoms' para mostrar diferentes películas cuando se ingresa o refresca la página

  parametro = Math.round(Math.random() * 1000, 0) % 5;

  switch (parametro) {
    case 1:
      busqueda = "the";
      break;
    case 2:
      busqueda = "and";
      break;
    case 3:
      busqueda = "war";
      break;
    case 4:
      busqueda = "why";
      break;
    default:
      busqueda = "for";
  }

  const response = await fetch(
    `https://www.omdbapi.com/?&apikey=${omdbKey}&s="${busqueda}"&page=${pagina}&type=${tipoV}`
  );
  const result = await response.json();
  console.log(document.title);
  if (document.title == "TPO Grupo 18 - Index") {
    console.log("entro por armar1");
    armar1(result);
  } else if (document.title == "TPO Grupo 18 - InfoVideos") {
    //console.log("result " + result);
    listar(result); //esta función está en el archivo videos.js
  }
}

//////// creo la tarjeta con el atributo poster del json /////////////////////

function crearTarjeta(e) {
  //armo la tarjeta que contendrá la película en el carousel

  return `
     <img src="${e.Poster}" class="d-block w-45" alt="${e.Title}">
        </div>`;
}

/// Armo el carousel con las tarjetas  ///
const armar1 = (result) => {
  for (let i = 0; i < result.Search.length; ++i) {
    //  console.log(result.Search[i].Title);
    if (i == 0) {
      html +=
        `<div class="carousel-item active">` + crearTarjeta(result.Search[i]); //se genera la tarjeta con que comienza el carousel
    } else {
      html += `<div class="carousel-item">` + crearTarjeta(result.Search[i]);
    }
  }
  var nuevaCard = document.createElement("div");
  carousel.innerHTML = armado + html + finArmado;
};
/**Genero una tabla con películas o series */

/// limpio la tabla para cuando se realiza búsqueda en infoVideos.html

const limpiarTabla = () => {
  let tabla = document.getElementById("tbody-table");
 // if (cant == 0) {
    // Eliminar todas las filas (tr) de la tabla
    while (tabla.firstChild) {
      tabla.removeChild(tabla.firstChild);
    }
  //}
};
