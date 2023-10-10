const carousel = document.querySelector("#carousel-ofertas");
let result;
let resulta;
var contador;
var html = "";
var imagen;
var armado =
  '<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner">';
var finArmado = "</div>";
var armadoTotal = "";

async function getDrinksByCategory() {
  const resp = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
  );
  const data = await resp.json();
  //console.log("DATA   " + data.drinks);

  return data.drinks;
}
var tarjeta = "";


async function actualizarCarousel() {
  const cocktails = await getDrinksByCategory();


  let coct = Object.values(cocktails);
  //console.log("coct  ---<" + coct[1].strDrinkThumb);
  contador = 0;
  coct.forEach((element) => {
    contador++;
    if (contador < 10) {
      if (contador == 1) {
        html +=
          `<div class="carousel-item active">` + crearTarjeta(coct[contador]);
      } else {
        html += `<div class="carousel-item">` + crearTarjeta(coct[contador]);
      }
    }

  });
  var nuevaCard = document.createElement("div");
  carousel.innerHTML = armado + html + finArmado;
  //console.log(carousel);
}


function crearTarjeta(e) {
 // console.log("Crear Tarjeta" + e.strDrink);
  return `
  <img src="${e.strDrinkThumb}" class="d-block w-60" alt="${e.strDrink}">
 
 </div>`;
}
actualizarCarousel();

