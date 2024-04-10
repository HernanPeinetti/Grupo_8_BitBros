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

        const name = form.name;
        const divName = document.getElementById('div-name')

        if (name.value === "") {
            viewError(name, divName, "Tienes que ingresar un nombre")
            errores = true
        } else if (name.value.length < 2) {
            viewError(name, divName, "El nombre debe contener al menos 2 caracteres")
            errores = true
        } else {
            hiddenError(name, divName)
        }


        const birth = form.birth;
        const divBirth = document.getElementById('div-birth')

        if (birth.value === "") {
            viewError(birth, divBirth, "Tienes que ingresar una fecha de nacimiento")
            errores = true
        } else {
            hiddenError(birth, divBirth)
        }


        const email = form.email;
        const divEmail = document.getElementById('div-email')
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value === "") {
            viewError(email, divEmail, "Tienes que ingresar un email")
            errores = true
        } else if (emailRegex.test(email.value) === false) {
            viewError(email, divEmail, "Debes ingresar un correo valido")
            errores = true
        } else {
            hiddenError(email, divEmail)
        }


        const password = form.password;
        const divPassword = document.getElementById('div-password')
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/ //filtro que requiera que el texto contenga una mayuscula, minusculas, un numero y carácter especial

        if (password.value === "") {
            viewError(password, divPassword, "Tienes que ingresar una contraseña")
            errores = true
        } else if (password.value.length < 8) {
            viewError(password, divPassword, "La contraseña debe contener al menos 8 caracteres")
            errores = true
        } else if (regexPassword.test(password.value) === false) { //con el test evalauo si el password es seguro
            viewError(password, divPassword, "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial")
            errores = true
        } else {
            hiddenError(password, divPassword)
        }

        const profileImg = form.profile_img;
        const divProfileImg = document.getElementById('div-img-profile')
        const regexImg = /\.(jpg|jpeg|png|gif)$/i //filtro para detectar la extension de un archivo

        // aqui traigo el nombre del archivo y el metodo es con files que trae un array con el nombre del archivo y hago el test con el regex
        if (form.profile_img.files[0] !== undefined && regexImg.test(form.profile_img.files[0].name) === false) {
            viewError(profileImg, divProfileImg, "Las extensiones de archivo permitidas son .jpg, .jpeg, .png, .gif")
            errores = true
        } else {
            hiddenError(profileImg, divProfileImg)
        }

        if (!errores) {
            form.submit();
        }
    })

})
