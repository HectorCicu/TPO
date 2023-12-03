/** este js es para buscar películas o series */

/** 
 * con esta sentencia voy a la página principal si pulso desde 'Quienes somos' sin 
 * estar loggeado 
 */
console.log(localStorage.getItem("username") + "   --username de alquiler");
if (!localStorage.getItem("username")) {
  window.location.href = "/";
}

// para agregar el nombre del usuario en el header
let cliente = document.querySelector("#cliente");
let clien = localStorage.getItem("username");
cliente.innerHTML = `<h3 id="cliente1">BIENVENIDO!  ${clien}</h3>`;



const listar = (result) => {
  console.log("limpio tABLA");
  limpiarTabla();

  let tabla = document.getElementById("tbody-table");

  /**
   * voy armando la tabla por cada película encontrada (10)
   */
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

    //agrego un botón para seleccionar cualquiera de los videos listado y mostrar en el aside sus datos.
    let td5 = document.createElement("td");
    let boton = document.createElement("button");
    boton.textContent = `Detalle`;
    boton.id = `botonBuscarVideo`;
    //agrego como propiedad de valor de cada botón el código de IMDB, y así al presionar busco en la API por ese código
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
  let director = document.getElementById("director");
  let elenco = document.getElementById("elenco");
  let resumen = document.getElementById("resumen");

  fetch(
    `https://www.omdbapi.com/?i=${button}&apikey=${omdbKey}&y=&plot=short&r=json`
  )
    .then((response) => response.json())
    .then((data) => {
      if (!data.Error) {
        h2InfoVideos.innerHTML = data.Title;
        imgVideo.innerHTML = ` <img src=${data.Poster} alt=${data.Title} id="poster">`;
        genero.innerHTML = `<strong>Género:</strong>  ${data.Genre}`;
        pais.innerHTML = `<strong>País:</strong>  ${data.Country}`;
        elenco.innerHTML = `<strong>Elenco:</strong>  ${data.Actors}`;
        director.innerHTML = `<strong>Director:</strong>  ${data.Director}`;
        resumen.innerHTML = `<strong>Resumen:</strong>  ${data.Plot}`;
        document.getElementById(
          "anio"
        ).innerHTML = `<strong>Año: </strong>${data.Year}`;
        document.getElementById(
          "valueIMDB"
        ).innerHTML = `<strong>IMDB: </strong>${data.Ratings[0].Value}`;
      } else {
        alert("No se ha podido encontrar el titulo");
      }
    });

  console.log("Botón presionado: " + button);
  // Realiza cualquier otra acción necesaria
}
document.addEventListener("DOMContentLoaded", async () => {
  let buscarTitulo = document.getElementById("busqueda");

  let elijoPeli = document.getElementById("movies");
  let elijoSerie = document.getElementById("series");

  elijoSerie.addEventListener("click", (e) => {
    e.preventDefault();
    buscarTitulo.value = "";
    try {
      tipoVideo = "series";

      // console.log("vamos por series");
      generoFetch(tipoVideo);
    } catch (error) {
      console.log(error);
    }
  });

  elijoPeli.addEventListener("click", (e) => {
    e.preventDefault();
    buscarTitulo.value = "";
    try {
      tipoVideo = "movie";
      generoFetch(tipoVideo);
    } catch (error) {
      console.log(error);
    }
  });

  buscarTitulo.addEventListener("input", async (e) => {
    e.preventDefault();
    const ingresoLetra = e.target.value;

    try {
      if (ingresoLetra.length >= 3) {
        const res = await fetch(
          `https://www.omdbapi.com/?&apikey=${omdbKey}&s="${ingresoLetra}&type=${tipoVideo}`
        );
        const resultado = await res.json();
        // console.log(ingresoLetra);
        // console.log(resultado);
        listar(resultado);
      }
    } catch (error) {
      console.log(error);
    }
  });
});
