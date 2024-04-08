window.addEventListener('load', () => {

    const form = document.getElementById('formulario')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        // input email
        const email = form.email.value
        const divEmail = document.getElementById('div-email')

        if (email === "") {
            form.email.classList.add('is-invalid');
            if (!divEmail.classList.contains('invalid-feedback')) {
                divEmail.classList.add('invalid-feedback')
            }
            divEmail.innerText = 'Debes ingresar un email para el producto';
        } else {
            form.submit();
        }
    })

})
