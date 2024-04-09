window.addEventListener('load', () => {

    const form = document.getElementById('formulario')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let errores = false;

        // Validar cada campo del formulario llamando a la función de validación genérica
        errores = validateIsEmpty(form.email, document.getElementById('div-email'), 'Tienes que ingresar un email', errores);
        errores = validateIsEmpty(form.password, document.getElementById('div-password'), 'Tienes que ingresar una contraseña', errores);

        errores = validateIsEmail(form.email, document.getElementById('div-email'), 'Debes ingresar un correo valido', errores);
        errores = validateIsLength({min: 8}, form.password, document.getElementById('div-password'), 'La contraseña debe contener al menos 8 caracteres', errores);

        if (!errores) {
            form.submit();
        }
    })

})
