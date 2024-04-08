function validateEditCreate(form) {

    const divName = document.getElementById('div-name')
    const name = form.name.value

    if (name === "") {
        form.name.classList.add('is-invalid');
        if (!divName.classList.contains('invalid-feedback')) {
            divName.classList.add('invalid-feedback')
        }
        divName.innerText = 'Tienes que ingresar un nombre para el producto';
    } else {
        form.submit();
    }

}
