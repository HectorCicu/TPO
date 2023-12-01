/** este js es para alquilar películas  */

/** OJO!! falta hacer el botón de compra! */
const listar = (result) => {
  limpiarTabla();
  let tabla = document.getElementById("tbody-table");

  for (let i = 0; i < result.Search.length; ++i) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.id = "td-id";
    td1.textContent = result.Search[i].Title;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.id = "td-anio";
    td2.textContent = result.Search[i].Year;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.id = "td-imdb";
    td3.textContent = result.Search[i].imdbID;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.id = "td-tipo";
    td4.textContent = result.Search[i].Type;
    tr.appendChild(td4);
    //agrego un botón para seleccionar cualquiera de los
    let td5 = document.createElement("td");
    let boton = document.createElement("button");
    boton.textContent = `Detalle`;
    boton.id = `botonBuscarVideo`;
    boton.value = `${result.Search[i].imdbID}`;
    boton.onclick = () => {
      botonClickeado(boton.value);
    };
    td5.appendChild(boton);
    tr.appendChild(td5);

    tabla.appendChild(tr);
  }
}; //armar la lista de peliculas para mostrar

function botonClickeado(button) {
  let aside = document.getElementById("aside2");
  let h2InfoVideos = document.getElementById("titpeli");
  let imgVideo = document.getElementById("imgPeli");
  let genero = document.getElementById("genre");
  let pais = document.getElementById("pais");
  let elenco = document.getElementById("elenco");
  let resumen = document.getElementById("resumen");
  let anio = document.getElementById("anio");
  let califIMDB = document.getElementById("valueIMDB");
  let valorAlquiler = document.querySelector("#precio");
  let botonAlquilar = document.getElementById("botonAlquilar");
  let director = document.getElementById("director");

  fetch(
    `https://www.omdbapi.com/?i=${button}&apikey=${omdbKey}&y=&plot=short&r=json`
  )
    .then((response) => response.json())
    .then((data) => {
      if (!data.Error) {
        /** busco la posición de la barra en la calificación de IMDB, para determinar el valor
         * que se le asignará a cada video en alquiler. En la linea siguiente, extraigo el valor.
         */
        let posicBarraIMDB = data.Ratings[0].Value.indexOf("/");
        let calificacionIMDB = parseInt(
          data.Ratings[0].Value.substring(0, posicBarraIMDB)
        );

        // console.log("calificacion imdb " + calificacionIMDB);

        let anioPeli = parseInt(data.Year);
        const ANIOACTUAL = new Date().getFullYear(); // recupero el año actual para calcular coef. pago
        let coefAnio = 0;
        console.log(ANIOACTUAL - anioPeli);
        /** Agrego un coeficiente por "edad" de la película para combinar con el alquiler */
        if (ANIOACTUAL - anioPeli >= 30) {
          coefAnio = 0.6;
        } else if (ANIOACTUAL - anioPeli < 30 && ANIOACTUAL - anioPeli >= 20) {
          coefAnio = 0.7;
        } else if (ANIOACTUAL - anioPeli < 20 && ANIOACTUAL - anioPeli >= 10) {
          coefAnio = 0.8;
        } else if (ANIOACTUAL - anioPeli < 10 && ANIOACTUAL - anioPeli >= 5) {
          coefAnio = 0.9;
        } else {
          coefAnio = 1;
        }

        /** precio según la calificación de IMDB */
        let precio = 0;
        if (calificacionIMDB < 4) {
          precio = 3.2 * coefAnio;
        } else if (calificacionIMDB < 7) {
          precio = 4.0 * coefAnio;
        } else {
          precio = 4.6 * coefAnio;
        }

        let nombrePelicula = data.Title;
        h2InfoVideos.innerHTML = data.Title;
        imgVideo.innerHTML = ` <img src=${data.Poster} alt=${data.Title} id="poster">`;
        genero.innerHTML = `<strong>Género:</strong>  ${data.Genre}`;
        pais.innerHTML = `<strong>País:</strong>  ${data.Country}`;
        elenco.innerHTML = `<strong>Elenco:</strong>  ${data.Actors}`;
        director.innerHTML = `<strong>Director:</strong>  ${data.Director}`;
        resumen.innerHTML = `<strong>Resumen:</strong>  ${data.Plot}`;
        anio.innerHTML = `<strong>Año: </strong>${data.Year}`;
        califIMDB.innerHTML = `<strong>IMDB: </strong>${data.Ratings[0].Value}`;
        valorAlquiler.innerHTML = `<div id="precio-alquiler"><strong>Alquilar por: U$S ${precio.toFixed(
          2
        )}</strong></div>`;

        localStorage.setItem("nombrePeli", nombrePelicula);
        localStorage.setItem("precioAlquiler", precio);
        localStorage.setItem("imdbID", data.imdbID);
        localStorage.setItem("titulo",data.Title);
        localStorage.setItem("genero",data.Genre);
        localStorage.setItem("anio",data.Year);
        botonAlquilar.innerHTML = `<button id="btn-alquilar" onclick= pagar()>Alquilar</button>`;
      } else {
        alert("No se ha podido encontrar el titulo");
      }
    });

  console.log("Botón presionado: " + button);
}
document.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault;
  let buscarTitulo = document.getElementById("busqueda");

  tipoVideo = "movie";
  generoFetch(tipoVideo);

  buscarTitulo.addEventListener("input", async (e) => {
    const ingresoLetra = e.target.value;

    try {
      if (ingresoLetra.length >= 3) {
        const res = await fetch(
          `https://www.omdbapi.com/?&apikey=${omdbKey}&s="${ingresoLetra}&type=${tipoVideo}`
        );
        const resultado = await res.json();

        listar(resultado);
      }
    } catch (error) {
      console.log(error);
    }
  });
});

function pagar() {
  window.location.href = "/pagoAlquiler";
}
