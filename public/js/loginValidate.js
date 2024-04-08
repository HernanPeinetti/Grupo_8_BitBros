window.addEventListener('load', () => {

    const form = document.getElementById('formulario')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

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
        validarCampo(form.email, document.getElementById('div-email'), 'Tienes que ingresar un email');
        validarCampo(form.password, document.getElementById('div-password'), 'Tienes que ingresar una contraseña');
        
        if (!errores) {
            form.submit();
        }
    })

})
