window.addEventListener('load', () => {

    const form = document.getElementById('formulario-edit')

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
            divName.innerText = 'Tienes que ingresar un nombre para el producto - front';
        } else {
            form.submit();
        }
    })

})
