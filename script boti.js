
document.addEventListener('DOMContentLoaded', () => {
    
   
    const productsSection = document.getElementById('products');
    const productList = document.querySelector('.product-list');
    
    const searchWrapper = document.createElement('div');
    searchWrapper.style.textAlign = 'center';
    searchWrapper.style.marginBottom = '30px';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '🔍 Buscar cerveza...';
    searchInput.style.padding = '10px 15px';
    searchInput.style.width = '100%';
    searchInput.style.maxWidth = '400px';
    searchInput.style.borderRadius = '20px';
    searchInput.style.border = '1px solid #ccc';
    searchInput.style.fontSize = '1rem';
    searchInput.style.outline = 'none';

    searchWrapper.appendChild(searchInput);
    
    productsSection.insertBefore(searchWrapper, productList);

    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const productItems = document.querySelectorAll('.product-item');

        productItems.forEach(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            
            
            if (productName.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });


    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const beerName = item.querySelector('h3').textContent;
            console.log(`El usuario está interesado en: ${beerName}`);
            
        });
    });
});