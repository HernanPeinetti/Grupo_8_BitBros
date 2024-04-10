function mostrarError(campo, divCampo, mensajeError) {
    campo.classList.add('is-invalid');
    if (!divCampo.classList.contains('invalid-feedback')) {
        divCampo.classList.add('invalid-feedback');
    }
    divCampo.innerText = mensajeError;
}

function quitarError(campo, divCampo, mensajeError) {
    campo.classList.remove('is-invalid');
    divCampo.classList.remove('invalid-feedback');
    divCampo.innerText = '';
}

// para validar si esta vacio el campo
function validateIsEmpty(campo, divCampo, mensajeError, errores) {
    if (campo.value === "") {
        mostrarError(campo, divCampo, mensajeError)
        return true;
    } else {
        quitarError(campo, divCampo, mensajeError)
        return errores;
    }
}
function validateIsEmail(campo, divCampo, mensajeError, errores) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(campo)) {
        mostrarError(campo, divCampo, mensajeError)
        return true;
    } else {
        quitarError(campo, divCampo, mensajeError)
        return errores;
    }
}
function validateIsLength(objeto, campo, divCampo, mensajeError, errores) {
    if (objeto.min && objeto.max) {
        if ((objeto.min && objeto.min >= campo.value) && (objeto.max && objeto.max <= campo.value)) {
            mostrarError(campo, divCampo, mensajeError)
            return true;
        } else {
            quitarError(campo, divCampo, mensajeError)
            return errores;
        }
    } else if (objeto.min || objeto.max) {
        if ((objeto.min && objeto.min >= campo.value) || (objeto.max && objeto.max <= campo.value)) {
            mostrarError(campo, divCampo, mensajeError)
            return true;
        } else {
            quitarError(campo, divCampo, mensajeError)
            return errores;
        }
    }
}