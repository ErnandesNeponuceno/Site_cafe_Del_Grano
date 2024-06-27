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

document.addEventListener('DOMContentLoaded', loadProductData);

// criação das tabs
const tabs = [
    { id: 'espresso', label: 'Expresso', active: true },
    { id: 'cappuccino', label: 'Shakes', active: false },
    { id: 'iced-coffee', label: 'Café Gelado', active: false },
    { id: 'specials', label: 'Especiais', active: false }
  ];
  
  function createTab(tab) {
    return `
      <li class="nav-item" role="presentation">
        <button class="nav-link ${tab.active ? 'active' : ''}" id="${tab.id}-tab" data-bs-toggle="tab" data-bs-target="#${tab.id}-tab-pane"
          type="button" role="tab" aria-controls="${tab.id}-tab-pane" aria-selected="${tab.active}">${tab.label}</button>
      </li>
    `;
  }
  
  const tabList = document.getElementById('myTab');
  tabList.innerHTML = tabs.map(createTab).join('');
  

// criação das navs 
const navs = [
    {href: '#', label: 'Início', active: true},
    {href: '#about', label: 'Sobre Nós', active: false},
    {href: '#menu', label: 'Cardápio', active: false},
    {href: '#local', label: 'Local', active: false}
];

function createNav(nav) {
    return `
    <li class="nav-item">
        <a class="nav-link ${nav.active ? 'active' : ''}" href="${nav.href}" ${nav.active ? 'aria-current="page"' : ''}>
            ${nav.label}
        </a>
    </li>
    `;
}

const navList = document.getElementById('myNav');
navList.innerHTML = navs.map(createNav).join('');
