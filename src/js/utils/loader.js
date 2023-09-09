// funcion para mostrar el loader en el index
export function mostrarLoader() {
    Swal.fire({
        title: 'Cargando...',
        allowOutsideClick: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });

    setTimeout(() => {
        Swal.close();
        window.location.href = 'influcardStats.html';
    }, 2000);
}