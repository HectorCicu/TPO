const carousel = document.querySelector("#carousel-examples");

let omdbKey = "2677da8c";


var armado = `<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner">`;
var finArmado = "</div>";
var armadoTotal = "";
var html = "";
const pagina = Math.round(Math.random() * 20, 0);
console.log(pagina);
var parametro = 0;
var busqueda = "";
var tipoVideo = "series";

////  comienzo la carga de las películas //////
document.addEventListener("DOMContentLoaded", async () => {
  try {
  
    generoFetch(tipoVideo);
  } catch (error) {
    console.error(error);
  }
});

///////////////////////////
async function generoFetch(tipoV) {
  parametro = Math.round(Math.random() * 1000, 0) % 5;
  console.log(parametro);
  switch (
    parametro //hago búsquedas 'randoms' para mostrar diferentes películas cuando se ingresa o refresca la página
  ) {
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

  if (urlInfo.includes("index.html")) {
    armar1(result);
  } else if (urlInfo.includes("infoVideos.html")) {
    console.log("result " + result);
    listar(result);
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
        `<div class="carousel-item active">` + crearTarjeta(result.Search[i]);
    } else {
      html += `<div class="carousel-item">` + crearTarjeta(result.Search[i]);
    }
  }
  var nuevaCard = document.createElement("div");
  carousel.innerHTML = armado + html + finArmado;
};
/**Genero una tabla con películas o series */





/// limpio la tabla para cuando se realiza búsqueda 

const limpiarTabla = () => {
  let tabla = document.getElementById("tbody-table");

  // Eliminar todas las filas (tr) de la tabla
  while (tabla.firstChild) {
    tabla.removeChild(tabla.firstChild);
  }
};




/** Genero los eventos para ver si presiono ver películas o series */
