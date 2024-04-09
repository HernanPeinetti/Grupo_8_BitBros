function validateEditCreate(form) {

    let errores = false;

    // Validar cada campo del formulario llamando a la función de validación genérica
    errores = validateIsEmpty(form.name, document.getElementById('div-name'), 'Tienes que ingresar un nombre para el producto', errores);
    errores = validateIsEmpty(form.category, document.getElementById('div-category'), 'Tienes que ingresar una categoría para el producto', errores);
    errores = validateIsEmpty(form.price, document.getElementById('div-price'), 'Tienes que ingresar un precio para el producto', errores);
    errores = validateIsEmpty(form.stock, document.getElementById('div-stock'), 'Tienes que ingresar un stock para el producto', errores);
    errores = validateIsEmpty(form.brand, document.getElementById('div-brand'), 'Tienes que ingresar una marca para el producto', errores);
    errores = validateIsEmpty(form.color, document.getElementById('div-color'), 'Tienes que elegir un color', errores);
    errores = validateIsEmpty(form.description, document.getElementById('div-description'), 'Tienes que ingresar una descripción para el producto', errores);

    if (!errores) {
        form.submit();
    }

}
