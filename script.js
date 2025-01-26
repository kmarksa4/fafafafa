// Данные о новостях
const newsList = [{
        imgSrc: "news1.jpg",
        title: "Новость 1",
        description: "Текст новости 1. Это краткое описание первой новости."
    },
    {
        imgSrc: "news2.jpg",
        title: "Новость 2",
        description: "Текст новости 2. Это краткое описание второй новости."
    },
];

// Данные о товарах
const products = [{
        imgSrc: "merch1.jpg",
        title: "Товар 1",
        description: "Описание товара 1.",
        price: 1200,
    },
    {
        imgSrc: "merch2.jpg",
        title: "Товар 2",
        description: "Описание товара 2.",
        price: 800,
    },
    {
        imgSrc: "merch3.jpg",
        title: "Товар 3",
        description: "Описание товара 3.",
        price: 1500,
    },
    // Можно добавлять больше товаров
];

// Функция для создания блока новостей
function createNewsItem(news) {
    const item = document.createElement("article");
    item.classList.add("news-item");

    // Создание содержимого новостного блока
    item.innerHTML = `
        <img src="${news.imgSrc}" alt="${news.title}">
        <h3>${news.title}</h3>
        <p>${news.description}</p>
    `;

    return item;
}

// Отрисовка новостей на странице
const newsContainer = document.getElementById("news-container");

newsList.forEach(news => {
    const newsItem = createNewsItem(news);
    newsContainer.appendChild(newsItem);
});

// Функция для создания карточки товара
function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Создание содержимого карточки
    card.innerHTML = `
        <img src="${product.imgSrc}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p class="price">Цена: ${product.price} руб.</p>
        <button class="add-to-cart">Добавить в корзину</button>
    `;

    // Добавляем обработчик события для кнопки
    card.querySelector(".add-to-cart").addEventListener("click", () => {
        alert('Товар добавлен в корзину!');
    });

    return card;
}

// Отрисовка карточек товаров на странице
const productCardsContainer = document.getElementById("product-cards");

products.forEach(product => {
    const productCard = createProductCard(product);
    productCardsContainer.appendChild(productCard);
});