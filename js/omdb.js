const carousel = document.querySelector("#carousel-examples");

let omdbKey = "2677da8c";
// let url = "http://www.omdbapi.com/?i=tt3896198&apikey=";
// let url2 = "http://www.omdbapi.com/?apikey=";
// let urlEjemplo =
//   'http://www.omdbapi.com/?apikey=2677da8c&&s="the"&plot=full&page=20&type="series"';

const divOpen = "";
var armado = `<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner">`;
var finArmado = "</div>";
var armadoTotal = "";
var html = "";
const pagina = Math.round(Math.random() * 20, 0);
console.log(pagina);
var parametro = 0;
var busqueda = "";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    parametro = Math.round(Math.random() * 1000, 0) % 5;
    console.log(parametro);
    switch (
      parametro //hago búsquedas 'randoms'
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
    // console.log(`http://www.omdbapi.com/?&apikey=${omdbKey}&s="${busqueda}"&plot=full&page=${pagina}&type="movie"`)

    const response = await fetch(
      `http://www.omdbapi.com/?&apikey=${omdbKey}&s="${busqueda}"&plot=full&page=${pagina}&type="movie"` // noticias de Argentina
    );
    const result = await response.json();
    console.log(result);

    //   for (let i = 0; i < result.Search.length; ++i) {
    // //  console.log(result.Search[i].Title);
    //     if (i == 0) {
    //       html +=
    //         `<div class="carousel-item active">` + crearTarjeta(result.Search[i]);
    //     } else {
    //       html += `<div class="carousel-item">` + crearTarjeta(result.Search[i]);
    //     }
    //   }
    if (urlInfo.includes("index.html")) {
      armar1(result);
    } else if (urlInfo.includes("infoVideos.html")) {
      listar(result);
    }
  } catch (error) {
    console.error(error);
  }

  // var nuevaCard = document.createElement("div");
  // carousel.innerHTML = armado + html + finArmado;
});

///////////////////////////

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
/////////////////////////////

function crearTarjeta(e) {
  //armo la tarjeta que contendrá la película en el carousel

  return `
     <img src="${e.Poster}" class="d-block w-45" alt="${e.Title}">
        </div>`;
}

const listar = (result) => {};//armar la lista de peliculas para mostrar
