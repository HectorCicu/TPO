

const carousel = document.querySelector("#carousel-ofertas");
let result;
let resulta;

async function getAllProducts() {
  
  // let response = await fetch("https://api.escuelajs.co/api/v1/products");
  let response = await fetch("https://api.escuelajs.co/api/v1/products");
  let results = await response.json();
  console.log(results);

  //console.log( "datos " + data);
  // results.forEach((e) => {
  //   console.log("imagenes " + e.images[0]);
  // });

  return results;
}

function agregarImg(n) {
  m = "./img/Logo.png";
  
  imagen = `<img src="${n.images[0]}" class="d-block w-40" alt="${n.title}" />`;
  //console.log("IMAGEN =" + imagen);
  //document.body.appendChild(img)
  return imagen;
}

var imagen;
var armado = '<div class="carousel-item active">';
var finArmado = "</div>";
var armadoTotal = "";
// function incorporoImg() {
//   let a = async function () {};
// }
var app = '';
document.addEventListener("DOMContentLoaded", async function () {
  var resulta = await getAllProducts();
  let contador = 0;
  resulta.forEach((e) => {
    ++contador;

    if (contador < 8) {
    
      armadoTotal = armadoTotal + armado + agregarImg(e) + finArmado;

    }
  });
  carousel.innerHTML = armadoTotal;
  console.log("armado " +armadoTotal);
});
