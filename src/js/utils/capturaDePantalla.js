// Modulo para crear capturas de pantalla, si hubiese tenido mas tiempo estos modulos no los habria
// encadenado al proyecto y los habria hecho validos para todo tipo de casos para asi aprovechar la
// modularidad.

// asignamos las variables
const marcaDeAgua = document.getElementById("marcaDeAgua");
const headerBotones = document.getElementById("header__botones");

// funcion para realizar la captura de pantalla y descargarla nombrandola segun el influencer,
// he añadido un date al principio sin formatear (a bonito) para que siempre que descarguemos una ficha
// se pueda ordenar de mayor a menor segun el momento en el que ha sido descargado y evitar duplicidades.
function capturarYDescargarPantalla(usernameInfluencer) {
  const elementoCapturar = document.body;

  html2canvas(elementoCapturar, {
    useCors: true,
  }).then(function (canvas) {
    const imagenURL = canvas.toDataURL("image/png");

    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = imagenURL;
    enlaceDescarga.download =
      Date.now() + " - Ficha de " + usernameInfluencer + ".png";

    enlaceDescarga.click();
  });
}

// funcion para notificar con modal y setear el entorno para la captura de pantalla 
export function hacerCaptura(username) {
  headerBotones.classList.add("oculto");
  marcaDeAgua.classList.remove("oculto");
  capturarYDescargarPantalla(username);

  Swal.fire({
    title: "Exportando...",
    html: "<h3>¡Enseguida tendras tu plantilla!</h3>",
    allowOutsideClick: false,
    showConfirmButton: false,
    onBeforeOpen: () => {
      Swal.showLoading();
    },
  });

  setTimeout(() => {
    headerBotones.classList.remove("oculto");
    marcaDeAgua.classList.add("oculto");
    Swal.close();
  }, 2000);
}
