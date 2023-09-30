let carousel = document.getElementById("carousel-ofertas");
async function getAllProducts() {
  let response = await fetch(" https://api.escuelajs.co/api/v1/products");
  let { results } = await response.json();
  return results;
  console.log(results);
}
console.log("uno");
var imagen;
var armado = '<div class="carousel-item active">';
var finArmado = "</div>";
var armadoTotal;
function agregarImg(n) {
  console.log("dos");
  imagen = document.createElement("img");
  imagen.src = n;
  imagen.alt = n;
  return imagen;
}
console.log("tres");
var results;
function incorporoImg() {
  console.log("cuatro");
  let a = async function () {
    results = await getAllProducts();
    console.log(1);
    console.log(results);
    let contador = 0;
    results.forEach((e) => {
      ++contador;
      armadoTotal =
        armadoTotal + armado + agregarImg(e.category.image) + finArmado;
    });
    carousel.innerHTML = armadoTotal;
  };
}
