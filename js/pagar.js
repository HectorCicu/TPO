document.addEventListener("DOMContentLoaded", (e) => {
  console.log("date");
  let precio = localStorage.getItem("precioAlquiler");
  let importeAPagar = document.getElementById("importeAPagar");
  let nombreCC = document.getElementById("nameCC");
  let cardNumber = document.getElementById("cardNumber");
  let validDate = document.getElementById("validDate");
  let nombreIngresado = document.getElementById("password-field");

  document.addEventListener("input", (e) => {
    e.preventDefault();
    const ingresoDato = e.target.value;

    if (e.target.id == "password_field") {
      console.log(e.target.id);
      nombreCC.innerHTML = ingresoDato;
    }
    if (e.target.id == "password_field1") {
      console.log(e.target.id);
       cardNumber.innerHTML = ingresoDato;
    }
    if (e.target.id == "password_field2") {
      console.log(e.target.id);
      validDate.innerHTML = ingresoDato;
    }
    
  });
});
