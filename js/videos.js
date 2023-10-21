/** este js es para buscar películas o series */

document.addEventListener("DOMContentLoaded", async () => {
  
    let elijoPeli = document.getElementById("movies");
    let elijoSerie = document.getElementById("series");  elijoSerie.addEventListener("click", (e) => {
    e.preventDefault();
    try {
      console.log("vamos por series");
      generoFetch("series");
    } catch (error) {
      console.log(error);
    }
  });

  elijoPeli.addEventListener("click", (e) => {
    e.preventDefault();
    try {
      generoFetch("movie");
    } catch (error) {
      console.log(error);
    }
  });
  let buscarTitulo = document.getElementById("busqueda");

  buscarTitulo.addEventListener("input", async (e) => {
    const ingresoLetra = e.target.value;
    try {
      if (ingresoLetra.length >= 3) {
        const res = await fetch(
          `http://www.omdbapi.com/?&apikey=${omdbKey}&s="${ingresoLetra}&type=${tipoVideo}`
        );
        const resultado = await res.json();
        console.log(ingresoLetra);
        console.log(resultado);
        listar(resultado);
      }
    } catch (error) {
      console.log(error);
    }
  });
});
