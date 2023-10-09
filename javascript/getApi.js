const carousel = document.querySelector("#carousel-ofertas");
let result;
let resulta;

async function getDrinksByCategory() {
  let resp = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
  );
  const data = await resp.json();
  console.log("DATA   " + data.drinks);
  //console.log(JSON.stringify(data, null, 2));
  return data;
}
var tarjeta = "";
async function armarTarjetas() {
  // let cuerpo = document.getElementById("principal");
  var nuevaCard = document.createElement("div");
  let cards = await getDrinksByCategory();
  // console.dir("CARDS      " + JSON.stringify(data, null, 2));
  // console.log("typeof   " + typeof cards);

  // console.log("ARMARTARJETA - TARJETA: " + cards);

  // for (let i in cards.drinks) {
  //   console.log("consolelog  " + i.strDrink)
  // }

  return cards;
}
//armarTarjetas();

// function agregarImg(n) {
//   m = "./img/Logo.png";

//   imagen = `<img src="${n.images[0]}" class="d-block w-40" alt="${n.title}" />`;
//   //console.log("IMAGEN =" + imagen);
//   //document.body.appendChild(img)
//   return imagen;
// }

var imagen;
var armado = '<div class="carousel-item active">';
var finArmado = "</div>";
var armadoTotal = "";
var nuevaCard = "";
// function incorporoImg() {
//   let a = async function () {};
// }
var app = "";
document.addEventListener("DOMContentLoaded", async function () {
  var nuevaCard = document.querySelector("#carousel-ofertas");
  var resulta = await armarTarjetas();
  //console.log("RESULTA   " + resulta);
  let contador = 0;
  for (let e of resulta.drinks) {
    nuevaCard.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${e.strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${e.strDrink}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">${e.strDrink}</a>
  </div>
  </div>`;
    console.log("EEEEE  " + e.strDrink);
    console.log("EEEEE1  " + e.strDrinkThumb);
    console.log("nuevaCard " + nuevaCard);
    //cuerpo.appendChild(nuevaCard);
    //cuerpo.appendChild(nuevaCard.cloneNode(true));
    //}
    contador++;
    if (contador < 8) {
      armadoTotal = armadoTotal + armado + nuevaCard + finArmado;
    }
  }
  carousel.innerHTML = armadoTotal;
  console.log("armadoTotal " + armadoTotal);
});
