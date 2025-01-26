function createProductCard(imageSrc, title, price) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    const productImage = document.createElement('img');
    productImage.src = imageSrc;
    productImage.alt = 'Product Image';
    productImage.className = 'product-image';

    const productInfo = document.createElement('div');
    productInfo.className = 'product-info';

    const productTitle = document.createElement('h2');
    productTitle.className = 'product-title';
    productTitle.textContent = title;

    const productPrice = document.createElement('span');
    productPrice.className = 'product-price';
    productPrice.textContent = `✯ ${price}`;

    const productBuy = document.createElement('button');
    productBuy.className = 'product-buy';
    productBuy.textContent = 'Добавить в корзину';

    productInfo.appendChild(productTitle);
    productInfo.appendChild(productPrice);
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    productCard.appendChild(productBuy);

    productBuy.addEventListener('click', function() {
        alert('Товар добавлен в корзину!');
    });

    return productCard;
}

var productContainer = document.getElementById('product-container');
var newProductCard = createProductCard('termokruzhka.jpg', 'Термокружка', '1599');
productContainer.appendChild(newProductCard);

var productContainer = document.getElementById('product-container1');
var newProductCard = createProductCard('socks.jpg', 'Носки', '189');
productContainer.appendChild(newProductCard);

var productContainer = document.getElementById('product-container2');
var newProductCard = createProductCard('podstavka.jpg', 'Подставка', '499');
productContainer.appendChild(newProductCard);