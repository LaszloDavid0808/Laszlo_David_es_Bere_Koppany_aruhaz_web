function addToCart(productName) {
    alert(`${productName} a kosárba került!`);
}



window.addEventListener('scroll', () => {

    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {

        const productPosition = product.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1.3;

        if (productPosition < screenPosition) {

            product.classList.add('visible');

        }

    });

});