window.addEventListener('load', () => {

    const form = document.getElementById('formulario')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let errores = false;

        // Validar cada campo del formulario llamando a la función de validación genérica
        errores = validateIsEmpty(form.name, document.getElementById('div-name'), 'Tienes que ingresar un nombre', errores);
        errores = validateIsEmpty(form.birth, document.getElementById('div-birth'), 'Tienes que ingresar una fecha de nacimiento', errores);
        errores = validateIsEmpty(form.email, document.getElementById('div-email'), 'Debes ingresar un email válido', errores);
        errores = validateIsEmpty(form.password, document.getElementById('div-password'), 'Tienes que ingresar una contraseña', errores);

        if (!errores) {
            form.submit();
        }
    })

})
