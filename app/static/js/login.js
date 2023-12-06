const URL = "http://127.0.0.1:5000/";

/**conecto con la api de py para traer los clientes */
async function buscarCliente(cliente) {
  const clien = await fetch(URL + "validar_cliente");
  const clientes = await clien.json();

  var cli1=[]
  for (let i = 0; i < clientes.clientes.length; ++i) {
    
    // console.log(clientes.clientes[i].username + "      USERNAME");
    // console.log(cliente + '   zzzzz cliente cargado del form')
    if (clientes.clientes[i].username == cliente) {

       cli1 = [clientes.clientes[i].username, clientes.clientes[i].password ];

    }
  }
  return cli1;
}
async function loginRegister_Ingresar() {
  
  let usuario;
  let password;
  var btnLogin = document.querySelector("#buttonI1");
  var btnForgotPass = document.querySelector("#buttonFP");
  //console.log("entre en loginregister2");
  btnLogin.addEventListener("click", async (e) => {
    e.preventDefault();
    let usuario1 = document.getElementById("usuarioIngreso").value;
    //  alert(usuario1);
    let password1 = document.getElementById("password01").value;
    // alert(password1);
    var cli = await buscarCliente(usuario1);
 
    if (usuario1 != cli[0]) {

      alert("Usuario incorrecto");
      aside1.innerHTML = formularioIngreso;
    } else if (password1 != cli[1]) {
      alert("Contraseña Incorrecta");
      aside1.innerHTML = formularioIngreso;
    }
    // sessionStorage.setItem("usuario", usuario1);
    // sessionStorage.setItem("password", password1);
    //infoVideos()
    localStorage.setItem("username",cli[0])
    window.location.href = "/infoVideos";
   
  });
  btnForgotPass.addEventListener("click", (e) => {
    e.preventDefault();

    let forgotPassw = `<div class="container" id="forgotP">
<h3 id="h3-recuperarPass">Recuperar Contraseña</h3>
<form
  action="https://formspree.io/f/xrgwrdny"
  method="POST"
>
  
<label for="input-recoverPass">Email</label>

<input type="email" name="email" id="input-recoverPass">
<button type="submit" id="button-forgotPassword">Enviar</button>
<textarea name="message" id="recover-msg">Recupero de contraseña - 
Trabajo práctico - grupo 18
comisión #23526</textarea>
 
</form>
</div>`;
    aside1.innerHTML = forgotPassw;
  });
}
