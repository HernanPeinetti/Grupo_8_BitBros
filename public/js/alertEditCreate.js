// Obtén el formulario y el botón de submit
document.addEventListener("DOMContentLoaded", function (e) {
    const formularios = document.getElementsByClassName("formAlert");
    const botones = document.getElementsByClassName("btnAlert");

    // Convierte las colecciones HTML en arrays
    const arrayDeFormularios = Array.from(formularios);
    const arrayDeBotones = Array.from(botones);

    // Verifica si hay al menos un formulario y un botón
    if (arrayDeFormularios.length > 0 && arrayDeBotones.length > 0) {
        arrayDeFormularios.forEach(function (form, index) {
            const btn = arrayDeBotones[index];

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
                        validateEditCreate(form)
                    }
                });
            });
        });
    }
});
