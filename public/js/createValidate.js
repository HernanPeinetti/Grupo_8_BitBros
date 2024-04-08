window.onload = () => {

const form = document.getElementById('formulario-create')

form.onsubmit = (e) => {
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
            console.log("1")
        } else {
            form.submit();
        }
    }

}
