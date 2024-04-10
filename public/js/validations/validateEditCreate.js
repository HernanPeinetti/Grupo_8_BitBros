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

function validateEditCreate(form) { //aqui recibo como parametro el form que me manda el alertEditCreate

    let errores = false;

    const name = form.name;
    const divName = document.getElementById('div-name')

    if (name.value === "") {
        viewError(name, divName, "Tienes que ingresar un nombre para el producto")
        errores = true
    } else if (name.value.length < 5) {
        viewError(name, divName, "El nombre del producto debe contener al menos 5 caracteres")
        errores = true
    } else {
        hiddenError(name, divName)
    }

    const image = form.image;
    const imageInput = document.getElementById('input-image')
    const divImageProduct = document.getElementById('div-image-product')
    const regexImg = /\.(jpg|jpeg|png|gif)$/i 

    if (form.image.files[0] !== undefined && regexImg.test(form.image.files[0].name) === false) {
        viewError(image, divImageProduct, "Las extensiones de archivo permitidas son .jpg, .jpeg, .png, .gif")
        imageInput.classList.add('is-invalid')
        errores = true
    } else {
        hiddenError(image, divImageProduct)
        if(imageInput.classList.contains('is-invalid')) {
            imageInput.classList.remove('is-invalid')
        }
    }


    const category = form.category;
    const divCategory = document.getElementById('div-category')

    if (category.value === "") {
        viewError(category, divCategory, "Tienes que ingresar una categoría para el producto")
        errores = true
    } else {
        hiddenError(category, divCategory)
    }


    const price = form.price;
    const divPrice = document.getElementById('div-price')

    if (price.value === "") {
        viewError(price, divPrice, "Tienes que ingresar un precio para el producto")
        errores = true
    } else if (!isNaN(price.value) === false) {
        viewError(price, divPrice, "El precio debe ser un número")
        errores = true
    } else {
        hiddenError(price, divPrice)
    }


    const stock = form.stock;
    const divStock = document.getElementById('div-stock')

    if (stock.value === "") {
        viewError(stock, divStock, "Tienes que ingresar un stock para el producto")
        errores = true
    } else if (!isNaN(stock.value) === false) {
        viewError(stock, divStock, "El stock debe ser un número")
        errores = true
    } else {
        hiddenError(stock, divStock)
    }


    const brand = form.brand;
    const divBrand = document.getElementById('div-brand')

    if (brand.value === "") {
        viewError(brand, divBrand, "Tienes que ingresar una marca para el producto")
        errores = true
    } else {
        hiddenError(brand, divBrand)
    }

    const color = form.color;
    const divColor = document.getElementById('div-color')

    if (color.value === "") {
        viewError(color, divColor, "Tienes que elegir un color")
        errores = true
    } else {
        hiddenError(color, divColor)
    }


    const description = form.description;
    const divDescription = document.getElementById('div-description')
    
    if (description.value === "") {
        viewError(description, divDescription, "Tienes que ingresar una descripción para el producto")
        errores = true
    } else if (description.value.length < 20) {
        viewError(description, divDescription, "La descripción debe contener al menos 20 caracteres")
        errores = true
    } else {
        hiddenError(description, divDescription)
    }

    if (!errores) {
        form.submit();
    }

}
