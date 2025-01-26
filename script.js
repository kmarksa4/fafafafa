// Пример данных о товарах
const productsList = [{
        imgSrc: "socks.jpg",
        title: "Товар 1",
        description: "Описание товара 1.",
        price: "500 ₽"
    },
    {
        imgSrc: "podstavka.jpg",
        title: "Товар 2",
        description: "Описание товара 2.",
        price: "750 ₽"
    },
    {
        imgSrc: "termokruzhka.jpg",
        title: "Товар 3",
        description: "Описание товара 3.",
        price: "1000 ₽"
    }
];

// Пример данных о новостях
const newsList = [{
        imgSrc: "news1.jpg",
        title: "Новость 1",
        description: "Текст новости 1."
    },
    {
        imgSrc: "news2.jpg",
        title: "Новость 2",
        description: "Текст новости 2."
    }
];

// Функция для создания карточки товара
function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${product.imgSrc}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Цена: ${product.price}</p>
        <button>Добавить в корзину</button>
    `;
    return card;
}

// Функция для создания новости
function createNewsItem(news) {
    const item = document.createElement("div");
    item.classList.add("news-item");
    item.innerHTML = `
        <img src="${news.imgSrc}" alt="${news.title}">
        <h3>${news.title}</h3>
        <p>${news.description}</p>
    `;
    return item;
}

// Отрисовка товаров на странице
const productCardsContainer = document.getElementById("product-cards");
productsList.forEach(product => {
    const productCard = createProductCard(product);
    productCardsContainer.appendChild(productCard);
});

// Отрисовка новостей на странице
const newsContainer = document.getElementById("news-container");
newsList.forEach(news => {
    const newsItem = createNewsItem(news);
    newsContainer.appendChild(newsItem);
});