window.addEventListener('load', () => {

    const form = document.getElementById('formulario')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        // input name
        const name = form.name.value
        const divName = document.getElementById('div-name')

        if (name === "") {
            form.name.classList.add('is-invalid');
            if (!divName.classList.contains('invalid-feedback')) {
                divName.classList.add('invalid-feedback')
            }
            divName.innerText = 'Tienes que ingresar un nombre - front';
        } else {
            form.submit();
        }


        // input birth
        const birth = form.birth.value
        const divBirth = document.getElementById('div-birth')

        if (birth === "") {
            form.birth.classList.add('is-invalid');
            if (!divBirth.classList.contains('invalid-feedback')) {
                divBirth.classList.add('invalid-feedback')
            }
            divBirth.innerText = 'Tienes que ingresar una fecha de nacimiento - front';
        } else {
            form.submit();
        }


        // input email
        const email = form.email.value
        const divEmail = document.getElementById('div-email')

        if (email === "") {
            form.email.classList.add('is-invalid');
            if (!divEmail.classList.contains('invalid-feedback')) {
                divEmail.classList.add('invalid-feedback')
            }
            divEmail.innerText = 'Debes ingresar un email para el producto - front';
        } else {
            form.submit();
        }


        // input password
        const password = form.password.value
        const divPassword = document.getElementById('div-password')

        if (password === "") {
            form.password.classList.add('is-invalid');
            if (!divPassword.classList.contains('invalid-feedback')) {
                divPassword.classList.add('invalid-feedback')
            }
            divPassword.innerText = 'Tienes que ingresar una contraseña - front';
        } else {
            form.submit();
        }
    })

})
