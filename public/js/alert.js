// Obtén el formulario y el botón de submit
document.addEventListener("DOMContentLoaded", function (e) {
    var forms = document.getElementsByClassName("formAlert");
    var buttons = document.getElementsByClassName("btnAlert");

    // Convierte las colecciones HTML en arrays
    var formsArray = Array.from(forms);
    var buttonsArray = Array.from(buttons);

    // Verifica si hay al menos un formulario y un botón
    if (formsArray.length > 0 && buttonsArray.length > 0) {
        formsArray.forEach(function (form, index) {
            var btn = buttonsArray[index];

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
                        form.submit();
                    }
                });
            });
        });
    }
});
