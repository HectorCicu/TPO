document.addEventListener("DOMContentLoaded", (e) => {
  console.log("date");
  let nombrePeli = localStorage.getItem("nombrePeli");
  let precio = localStorage.getItem("precioAlquiler");
  let nroFormateado = "";
  let validez = "";
  let codCVV;
  let importeAPagar = document.getElementById("importeAPagar");
  let nombreCC = document.getElementById("nameCC");
  let cardNumber = document.getElementById("cardNumber");
  let validDate = document.getElementById("validDate");
  let cvv = document.querySelector(".code");
  let botonPago = document.querySelector(".purchase--btn");
  importeAPagar.innerHTML = `${nombrePeli}  - U$S ${parseFloat(precio).toFixed(
    2
  )}`;
  document.addEventListener("input", (e) => {
    e.preventDefault();
    try {
      const ingresoDato = e.target.value;

      if (e.target.id == "password_field") {
        // console.log(e.target.id);
        nombreCC.innerHTML = ingresoDato;
      }
      if (e.target.id == "password_field1") {
        // console.log(e.target.id);
        nroFormateado =
          ingresoDato.substring(0, 4) +
          " " +
          ingresoDato.substring(4, 8) +
          " " +
          ingresoDato.substring(8, 12) +
          " " +
          ingresoDato.substring(12, 16);

        cardNumber.innerHTML = nroFormateado;
      }
      if (e.target.id == "password_field2") {
        validez =
          ingresoDato.substring(0, 2) + "/" + ingresoDato.substring(2, 4);
        validDate.innerHTML = validez;
      }
      if (e.target.id == "password_field3") {
        codCVV = ingresoDato
        cvv.innerHTML = ingresoDato;
        console.log("CVV---   " ,cvv, " " , codCVV)
          
      }
    } catch (er) {
      console.log(er);
    }
  });

  /**
   * Agrego las funcionalidades del botón de pago
   */
  botonPago.addEventListener("click", (eve) => {
    eve.preventDefault();
    try {
      if (!nombreCC || !nroFormateado || !validez || !codCVV) {
        window.alert("Faltan datos de la Tarjeta - Verficar");
      } else {
        console.log("pagaste!");
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

        window.open("../html/ventanaPago.html", "test", params);
     
      }
    } catch (err) {
      console.log(err);
    }
  });
});
