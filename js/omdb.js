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

    if (urlInfo.includes("index.html")) {
      armar1(result);
    } else if (urlInfo.includes("infoVideos.html")) {
      console.log("result " + result);
      listar(result);
    }
  } catch (error) {
    console.error(error);
  }
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

const listar = (result) => {
  let tabla = document.getElementById("tbody-table");

  for (let i = 0; i < result.Search.length; ++i) {
    console.log(result.Search[i].Title);
    console.log(result.Search[i].Year);
    console.log(result.Search[i].imdbID);
    console.log(result.Search[i].Type);
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = result.Search[i].Title;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = result.Search[i].Year;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = result.Search[i].imdbID;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.textContent = result.Search[i].Type;
    tr.appendChild(td4);
    //agrego un botón para seleccionar cualquiera de los
    let td5 = document.createElement("td");
    let boton = document.createElement("button");
    boton.textContent = `Buscar`;
    boton.id = `${result.Search[i].imdbID}`;
    boton.value = `${result.Search[i].imdbID}`;
    boton.onclick = () => {
      buttonClicked(boton.value);
    };
    td5.appendChild(boton);
    tr.appendChild(td5);

    tabla.appendChild(tr);
  }
}; //armar la lista de peliculas para mostrar

function buttonClicked(button) {
  let aside = document.getElementById("aside2");
  let h2InfoVideos = document.getElementById("titpeli");
  let imgVideo = document.getElementById("imgPeli");
  fetch(
    `http://www.omdbapi.com/?i=${button}&apikey=${omdbKey}&y=&plot=short&r=json`
  )
    .then((response) => response.json())
    .then((data) => {
      if (!data.Error) {
        h2InfoVideos.innerHTML = data.Title;
       imgVideo.innerHTML= ` <img src=${data.Poster} alt=${data.Title}>`;
        console.log(data);
      } else {
        alert("No se ha podido encontrar el titulo");
      }
    });

  console.log("Botón presionado: " + button);
  // Realiza cualquier otra acción necesaria
}
