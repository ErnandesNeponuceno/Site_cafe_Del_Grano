// Função para criar um card de produto de café
function createCoffeeCard(product) {
    const col = document.createElement('div');
    col.className = 'col';

    const card = document.createElement('div');
    card.className = 'card card-menu';

    const img = document.createElement('img');
    img.src = product.imageUrl;
    img.className = 'card-img-top';
    img.alt = 'café';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = product.title;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = product.price;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);

    return col;
}

// Função para renderizar os cards de produtos de café
function renderCoffeeCards(containerId, products) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o container

    products.forEach(product => {
        const coffeeCard = createCoffeeCard(product);
        container.appendChild(coffeeCard);
    });
}

// Função para carregar os dados dos produtos a partir de um arquivo JSON
function loadProductData() {
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            renderCoffeeCards('espresso-container', data.espresso);
            renderCoffeeCards('cappuccino-container', data.cappuccino);
            renderCoffeeCards('gelado-container', data.icedCoffee);
            renderCoffeeCards('especial-container', data.specials);
        })
        .catch(error => console.error('Erro ao carregar os dados dos produtos:', error));
}

// Carregar os dados dos produtos quando a página for carregada
document.addEventListener('DOMContentLoaded', loadProductData);
