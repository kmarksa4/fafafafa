// Пример данных о товарах
const productsList = [{
        imgSrc: "socks.jpg",
        title: "Носки Неймарк",
        description: "Теплые, но с вентеляцией.",
        price: "500 ₽"
    },
    {
        imgSrc: "podstavka.jpg",
        title: "Подставка омега класс",
        description: "Поставить телефон пока кушаешь.",
        price: "750 ₽"
    },
    {
        imgSrc: "termokruzhka.jpg",
        title: "Термостакан",
        description: "Чтобы тело было тепло.",
        price: "1000 ₽"
    }
];

// Пример данных о новостях
const newsList = [{
        imgSrc: "news1.jpg",
        title: "Интенсив",
        description: "НЕЙМАРК.ИНТЕНСИВ в самом разгаре."
    },
    {
        imgSrc: "news2.jpg",
        title: "Отбор",
        description: "Начался отбор на новую ИТ-Академию по BIM-моделированию."
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
// Пример данных о тестах
const testikiList = [{
    title: "Тест по программированию",
    description: "Проверьте свои знания в программировании.",
    link: "#programming-test" // Ссылка на тест (замените на реальную)
}];

// Функция для создания карточки теста
function createTestCard(test) {
    const card = document.createElement("div");
    card.classList.add("testiki-card");
    card.innerHTML = `
        <h3>${test.title}</h3>
        <p>${test.description}</p>
        <button onclick="window.location.href='${test.link}'">Пройти тест</button>
    `;
    return card;
}

// Отрисовка тестов на странице
const testikiContainer = document.getElementById("testiki-container");
testikiList.forEach(test => {
    const testCard = createTestCard(test);
    testikiContainer.appendChild(testCard);
});

// Пример данных о Telegram-канале
const tgMessages = [
    "Подписывайтесь на наш телеграм-канал для получения актуальных новостей.",
    "Получайте уведомления о новых тестах и акциях прямо в своем мессенджере."
];

// Функция для добавления сообщений о Telegram
function addTgMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("tg-message");
    messageDiv.innerText = message;
    return messageDiv;
}

// Отрисовка сообщений о Telegram на странице
const tgContainer = document.getElementById("tg-container");
tgMessages.forEach(message => {
    const tgMessage = addTgMessage(message);
    tgContainer.appendChild(tgMessage);
});
