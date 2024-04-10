function viewError(campo, divCampo, mensajeError) {
    campo.classList.add('is-invalid');
    if (!divCampo.classList.contains('invalid-feedback')) {
        divCampo.classList.add('invalid-feedback');
    }
    divCampo.innerText = mensajeError;
}

function hiddenError(campo, divCampo) {
    if (campo.classList.contains('is-invalid')) {
        campo.classList.remove('is-invalid');
        if (divCampo.classList.contains('invalid-feedback')) {
            divCampo.classList.remove('invalid-feedback');
            divCampo.innerText = '';
        }
    }
}

window.addEventListener('load', () => {

    const form = document.getElementById('formulario')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        let errores = false;

        // traigo las variables de email
        const email = form.email;
        const divEmail = document.getElementById('div-email')
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //funciona para validar si el email es valido

        // aqui verifico si esta vacio
        if (email.value === "") {
            viewError(email, divEmail, "Tienes que ingresar un email")
            errores = true // si hay un error la variable errores cambia a true para evitar el envio del form
        } else if (emailRegex.test(email.value) === false) { //aqui en el caso que sea valido el email devolvera true
            viewError(email, divEmail, "Debes ingresar un correo valido")
            errores = true
        } else {
            hiddenError(email, divEmail) //uso la funcion para que me agrege las clases necesarias para marcar el error
        }

        const password = form.password;
        const divPassword = document.getElementById('div-password')

        if (password.value === "") {
            viewError(password, divPassword, "Tienes que ingresar una contraseña")
            errores = true
        } else if (password.value.length < 8) { //si la contraseña es menor a ocho mostrara el error
            viewError(password, divPassword, "La contraseña debe contener al menos 8 caracteres")
            errores = true
        } else {
            hiddenError(password, divPassword)
        }

        if (!errores) { //evalua si la variable errores no esta en true y envia el form
            form.submit();
        }
    })

})
