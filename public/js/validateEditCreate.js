function validateEditCreate(form) {

    let errores = false;

        // Función de validación genérica
        function validarCampo(campo, divCampo, mensajeError) {
            if (campo.value === "") {
                campo.classList.add('is-invalid');
                if (!divCampo.classList.contains('invalid-feedback')) {
                    divCampo.classList.add('invalid-feedback');
                }
                divCampo.innerText = mensajeError;
                errores = true;
            } else {
                campo.classList.remove('is-invalid');
                divCampo.classList.remove('invalid-feedback');
                divCampo.innerText = '';
            }
        }

        // Validar cada campo del formulario llamando a la función de validación genérica
        validarCampo(form.name, document.getElementById('div-name'), 'Tienes que ingresar un nombre para el producto');
        validarCampo(form.category, document.getElementById('div-category'), 'Tienes que ingresar una categoría para el producto');
        validarCampo(form.price, document.getElementById('div-price'), 'Tienes que ingresar un precio para el producto');
        validarCampo(form.stock, document.getElementById('div-stock'), 'Tienes que ingresar un stock para el producto');
        validarCampo(form.brand, document.getElementById('div-brand'), 'Tienes que ingresar una marca para el producto');
        validarCampo(form.color, document.getElementById('div-color'), 'Tienes que elegir un color');
        validarCampo(form.description, document.getElementById('div-description'), 'Tienes que ingresar una descripción para el producto');

        if (!errores) {
            form.submit();
        }

}
