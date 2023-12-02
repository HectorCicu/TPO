const URLp = "http://127.0.0.1:5000/";
var usuario = localStorage.getItem("username");
usuario = 'usuario001'
fetch(URLp + "/listadoPeliculas/" + usuario) // Obtener los productos
  .then((res) => res.json()) // Convertir la respuesta a JSON
  .then((data) => {
    // Mostrar los datos en consola
    let html = ""; // Variable para guardar el HTML

    data.forEach((element) => {
      //Bucktick `` para concatenar , interpolacion de variables ${}
      html =
        html +
        `<tr>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td>${element[2]}</td>
            <td>${element[3]}</td>
            <td>${element[4]}</td>
            
        </tr>`;
    });

    document.getElementById("peliculas").innerHTML = html;
  });
