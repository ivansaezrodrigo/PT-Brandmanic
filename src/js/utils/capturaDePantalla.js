const marcaDeAgua = document.getElementById('marcaDeAgua');
const headerBotones = document.getElementById('header__botones');


function capturarYDescargarPantalla(usernameInfluencer) {
    const elementoCapturar = document.body; 

        html2canvas(elementoCapturar,{
            useCors: true,
        }).then(function(canvas) {
            
            const imagenURL = canvas.toDataURL('image/png');

            const enlaceDescarga = document.createElement('a');
            enlaceDescarga.href = imagenURL;
            enlaceDescarga.download = Date.now()+' - Ficha de '+usernameInfluencer+'.png';

            enlaceDescarga.click();
        });
}


export function hacerCaptura(username){
    headerBotones.classList.add('oculto');
    marcaDeAgua.classList.remove('oculto');
    capturarYDescargarPantalla(username)

    Swal.fire({
        title: 'Exportando...',
        html: '<h3>¡Enseguida tendras tu plantilla!</h3>',
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });

    setTimeout(() => {   
        headerBotones.classList.remove('oculto');
        marcaDeAgua.classList.add('oculto');
        Swal.close();
    }, 2000);
}