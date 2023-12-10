function nuevoUsuario() {
  // const URLc = "http://127.0.0.1:5000/";
  const documento = document.getElementById("nuevoUsuario");
  console.log(documento);

  documento.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(documento); // Obtener los datos del formulario
    // console.log(formData + "  formdata");
    fetch(URL + "/nuevoCliente", {
      // Enviar los datos al servidor
      method: "POST", // Metodo de envio
      body: formData, // Los datos del formulario
    })
      .then((res) => res.json()) // Convertir la respuesta a JSON
      .then((data) => {
        // Mostrar los datos en consola
        console.log(data);
        if (data.mensaje == "1") {
          alert("El usuario ya Existe");
          login(1, "");
          // window.location.href = "/";
        } else {
          //alert("Usted ha sido dado de Alta! " + data.nombre);
          login(0, data.nombre);
          localStorage.setItem("username", data.nombre);
          // window.location.href = "/infoVideos";
        }
      });
  });
}

function login(valor, nombre) {

  if (valor == 0) {
    const cartel = document.getElementById("cartel");
    let info = `      <div id="modal">
  <div id="cartelOk">
  <img src="../static/img/ok2.png" alt="" id="imgOk" />
  <h1> ${nombre}  ha sido dado de alta!</h1> </div>
<button id="botonOK" type="submit">Pulse aquí para continuar</button>
</div>`;
    cartel.innerHTML = info;
    document.getElementById("botonOK").addEventListener("click", () => {
      window.location.href = "/infoVideos";
    });
  }else {
    const cartel = document.getElementById("cartel");
    let info = `<div id="modal2">
    <div id="cartelnoOk">
    <img src="../static/img/alerta.png" alt="" id="imgnoOk" />
    <h1>Ese nombre de usuario ya Existe</h1>
  </div>
  <button id="botonOK" type="submit">Pulse aquí para continuar</button>
</div>`;
    cartel.innerHTML = info;
    document.getElementById("botonOK").addEventListener("click", () => {
      window.location.href = "/";
    });
  }
}
