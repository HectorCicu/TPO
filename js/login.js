function loginRegister_Ingresar() {
  let usuario;
  let password;
  var btnLogin = document.querySelector("#buttonI1");
  var btnForgotPass = document.querySelector("#buttonFP");
  console.log("entre en loginregister2");
  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    let usuario1 = document.getElementById("usuarioIngreso").value;
    // alert(usuario1);
    let password1 = document.getElementById("password01").value;
    // alert(password1);
    if (usuario1 != "usuario001") {
      alert("Usuario incorrecto");
      aside1.innerHTML = formularioIngreso;
    } else if (password1 != "p1234") {
      alert("Contraseña Incorrecta");
      aside1.innerHTML = formularioIngreso;
    }
    sessionStorage.setItem('usuario', usuario1)
    sessionStorage.setItem('password', password1)
    window.location.href = "infoVideos.html"; //redirigir a la página de muestra de videos
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
