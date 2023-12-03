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
          window.location.href = "/";
        } else {
          alert("Usted ha sido dado de Alta!");
          localStorage.setItem("username", data.nombre);
          window.location.href = "/infoVideos";
        }
      });
  });
}
