/**
 * modelo el navbar y footer para no tener que repetirlo en cada página
 */
function alquilarPeliculas() {
  window.location.href = "/alquilarPeliculas";
}

let navbar1 = document.querySelector(".navBar");
// <img src="../img/film.jpg" alt="Logo Compañía" id="logoCia" />
const CABECERA = `<div id="logoCia"></div><div id="titulo">
<h1 class="titulo-principal">Portal de Videos</h1>
<div id="cliente"></div></div>
<div class="container" id="suscr">
  <div  id="btns">
    <button id="login">Ingresar</button>
    <button id="signIn">Registrarse</button>
    <button id="quienes">Quienes Somos / Contacto</button>
    
    <!-- </div> -->
  </div>
  <ul class="menubar">
    <li><a href="" id="movies" value="movie" class="menu11">Peliculas</a></li>
    <li><a href="" id="series" value="series" class="menu11">Series</a></li>
    <li><a href='/alquilarPeliculas' id="alquilar" value="alquilar"  class="menu11">Alquilar Película</a></li>
    <li><a href='/infoVideos' id="infoVideo" value="infoVideo" class="menu2">Consultar Peliculas y Series</a></li>
    <li><a href='/'>Salir</a></li>
    
  </ul>
</div>
<div class="container" id="hamburguesa">
  <input type="checkbox" id="menu">
  <label for="menu" id="label-hamburguesa"> ☰ </label>
  <ul id="ul-hamburguesa">
    <li id="li-hamburguesa"><a href='/listaPeliculas'}}>Películas Alquiladas</a></li>
    <li id="li-hamburguesa"><a href='/quienesSomos'>Quienes Somos</a></li>
   
        
  </ul>
</div>`;

navbar1.innerHTML = CABECERA;



/**
 * prepara el footer para no tener que copiarlo en cada página
 */

var footer1 = document.querySelector(".piePagina");
const ANIO = new Date().getFullYear();
let pieDePagina = `  <div>&copy ${ANIO} -  Héctor Hugo Cicutti  - TPO "Grupo 18" | Todos los derechos reservados</div>
`;
footer1.innerHTML = pieDePagina;

let ingreso = document.querySelector("#login");
let registro = document.querySelector("#signIn");
let quienes = document.querySelector("#quienes");
let aside1 = document.querySelector("#aside1");

/** En esta parte traigo el dato de la página en la que estoy
 * para mostrar u ocultar los distintos botones o accesos.
 */
let menubar = document.querySelector(".menubar");
let movies1 = document.getElementById("movies");
let series1 = document.getElementById("series");
let alquilar1 = document.getElementById("alquilar");
let infoVideo = document.getElementById("infoVideo");
let quienesSomos = document.getElementById("quienesSomos");
let botones = document.querySelector("#btns");
let imgLogo = document.getElementById("logoCia");
let menuHamb = document.getElementById("hamburguesa");

/**
 * busco la página en la que estoy localizado, para
 * poder determinar cuáles atributos mostrar o no
 *
 * Además también varío las opciones del navbar para acceder a otro sitio o consultar
 * entre películas y series
 */


if (document.title == "TPO Grupo 18 - Index") {
  localStorage.removeItem("username");
  imgLogo.innerHTML = `<img src='./static/img/film.jpg' alt="Logo Compañía" id="logoCia" />`;
  menubar.style.display = "none";
  menuHamb.style.display = "none";

} else if (document.title == "TPO Grupo 18 - InfoVideos") {
  imgLogo.innerHTML = `<img src='./static/img/film.jpg' alt="Logo Compañía" id="logoCia" />`;
  botones.style.display = "none";
  infoVideo.style.display = "none";

} else if (document.title == "TPO Grupo 18 - Alquilar Peliculas") {
  imgLogo.innerHTML = `<img src='./static/img/film.jpg' alt="Logo Compañía" id="logoCia" />`;
  botones.style.display = "none";
  movies1.style.display = "none";
  series1.style.display = "none";
  alquilar1.style.display = "none";

} else if (document.title == "TPO Grupo 18 - Quienes Somos") {
  imgLogo.innerHTML = `<img src='./static/img/film.jpg' alt="Logo Compañía" id="logoCia" />`;
  botones.style.display = "none";
  movies1.style.display = "none";
  series1.style.display = "none";

} else if (document.title == "TPO Grupo 18 - Pago Alquiler") {
  imgLogo.innerHTML = `<img src='./static/img/film.jpg' alt="Logo Compañía" id="logoCia" />`;
  botones.style.display = "none";
  movies1.style.display = "none";
  series1.style.display = "none";

} else if (document.title == "TPO Grupo 18 - ListaVideos") {
  imgLogo.innerHTML = `<img src='./static/img/film.jpg' alt="Logo Compañía" id="logoCia" />`;
  botones.style.display = "none";
  movies1.style.display = "none";
  series1.style.display = "none";
  alquilar1.style.display = "none";
}



/** ************************************************************
 * genero formulario de nuevo usuario 
 */
registro.addEventListener("click", () => {
  let formularioIngreso = `<form class="form" id="nuevoUsuario" action="https://formspree.io/f/mgejrbwa"
  method="POST"> 
      <p id="heading">Nuevo Usuario</p> 
      <div class="field">   
       
        <input autocomplete="off" placeholder="Nombre usuario"  class="input-field" type="text" name="nombreUsuario"/>  
      </div>  
      <div class="field">    
      <svg class="input-icon"  xmlns="http://www.w3.org/2000/svg"      width="14"      height="14"      fill="currentColor"      viewBox="0 0 16 16"    >
      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
      </path>
    </svg>          <input placeholder="email" class="input-field" name="email" type="email" />
      </div>
        <div class="field">
          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
            </path>
          </svg>
          <input placeholder="Contraseña" class="input-field" type="password" name="passw"/>
        </div>  
        <div class="btn">
          <button class="button1" id="buttonR" type="submit" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Registrarse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
        </div>
        <textarea name="message" id="txt-registro">Solicitud de nuevo usuario - TPO - Grupo18 - Comisión #23526</textarea>
        </form>`;
  aside1.innerHTML = formularioIngreso;

  nuevoUsuario();
});

/************************************************************
 * Genero formulario de ingreso
 */
ingreso.addEventListener(
  "click",
  () => {
    let formulario = `<form class="form">
  <p id="heading">Ingreso</p>
     <div class="field">
       <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 14 14">
         <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z">
         </path>
       </svg>
         <input autocomplete="off" placeholder="Nombre usuario (usuario001)" class="input-field" type="text" id="usuarioIngreso">
      </div>
      <div class="field">
         <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
           <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z">
           </path>
         </svg>
         <input placeholder="Password = p1234" class="input-field" type="password" id="password01">
      </div>
      <div class="btn">
        <button class="button1" id="buttonI1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ingresar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
        <button class="button3" id="buttonFP">Olvidó su Contraseña?
        </button>
      </div>
</form>`;
    aside1.innerHTML = formulario;
    loginRegister_Ingresar();
  },

/**
 * voy a la página "quienes somos" cuando presiono el botón.
 */
  quienes.addEventListener("click", (e) => {
    e.preventDefault;
    window.location.href = "/quienesSomos";
  })
);
// });
