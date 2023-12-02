const URLp = "http://127.0.0.1:5000/";
var usuario = localStorage.getItem("username");
  //Agrego nombre de usuario al header
  let cliente = document.querySelector("#cliente");
  cliente.innerHTML = `<h3 id="cliente1">BIENVENIDO!  ${usuario}</h3>`;
// usuario = "usuario001";
fetch(URLp + "/listadoPeliculas/" + usuario) // Obtener los productos
  .then((res) => res.json()) // Convertir la respuesta a JSON
  .then((data) => {
    // Mostrar los datos en consola
    let html = ""; // Variable para guardar el HTML

    data.forEach((element) => {
      var fecha = new Date(element[0]);

      var dia = fecha.getDate();
      var mes = fecha.getMonth() + 1; 
      var anio = fecha.getFullYear();
      var fecha_n= ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + anio;
      //Bucktick `` para concatenar , interpolacion de variables ${}

      html =
        html +
        `<tr id="datos">
            <td>${fecha_n}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td>${element[3]}</td>
            <td id="importe">$${element[4]}</td>
            
        </tr>`;
    });

    document.getElementById("peliculas").innerHTML = html;
  });
