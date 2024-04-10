// Obtén el formulario y el botón de submit
document.addEventListener("DOMContentLoaded", function (e) {
    const form = document.getElementById('formulario');
    const btn = document.getElementById('btnAlert');

    // sweet alert para confirmar ya sea el crear o al editar un producto
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        Swal.fire({
            text: "¿Estás seguro de realizar esta acción?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.value) {
                validateEditCreate(form) //si presiono en confirmar el usuario, valida el form y recien lo envia
            }
        });
    });
});
