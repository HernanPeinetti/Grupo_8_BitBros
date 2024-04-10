document.addEventListener('load', function(e){

    const form = document.getElementById('form-cart');
    console.log(form);
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
    });
    alert('hola')

})

function alertCart() {
    // alert('hola')
    console.log()
}