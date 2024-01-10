const {body} = require ('express-validator')

module.exports= [
    body ('nombre').notEmpty().withMessage('El nombre del producto no debe estar vacio').bail().isLength({min: 2}).withMessage('El nombre debe tener como minimo 2 caracteres'),

    body ('image').notEmpty().withMessage('No puede crear un producto sin la imagen').bail(),

    body ('categoria').notEmpty().withMessage('Seleccione una categoria para el producto').bail(),

    body ('tamañoYmedida').notEmpty().withMessage('Debe especificar las medidas del producto').bail().isLength({min: 4}).withMessage('Debe contener numero y unidad'),

    body ('precio').notEmpty().withMessage('El precio del producto no debe estar vacio').bail().isNumeric().withMessage('El precio debe ser un numero'),

    body ('stock').notEmpty().withMessage('El Stock del producto no debe estar vacio').bail(),

    body ('colores').notEmpty().withMessage('El nombre del color no debe estar vacio').bail().isLength({min: 2}).withMessage('El nombre debe tener como minimo 2 caracteres'),

    body ('descripcion').notEmpty().withMessage('La descripcion del producto no debe estar vacio').bail().isLength({min: 10}).withMessage('El nombre debe tener como minimo 10 caracteres'),
]