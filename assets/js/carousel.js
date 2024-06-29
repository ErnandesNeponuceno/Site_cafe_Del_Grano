const carouselData = [
    {
      "src": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "Grãos de café sobre a mesa",
      "title": "Os melhores grãos",
      "description": "Trabalhamos com ingredientes selecionados, da melhor qualidade, do jeito que você merece!"
    },
    {
      "src": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "Interior da loja",
      "title": "A melhor experiência gastronômica de café",
      "description": "Você vai experimentar os melhores cafés do Brasil e do mundo."
    },
    {
      "src": "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "alt": "Interior da loja com consumidores interagindo",
      "title": "Um ambiente pensado para você e sua família",
      "description": "Nosso café foi pensado para te fornecer um ambiente confortável, tranquilo e leve."
    }
  ];
  
  function createCarouselItem(item, isActive) {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    if (isActive) {
      carouselItem.classList.add('active');
    }
  
    carouselItem.innerHTML = `
      <img src="${item.src}" class="d-block w-100" alt="${item.alt}">
      <div class="carousel-caption d-md-block">
        <h5>${item.title}</h5>
        <p>${item.description}</p>
      </div>
    `;
  
    return carouselItem;
  }
  
  // Função para renderizar os itens do carrossel
  function renderCarouselItems(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o container
  
    items.forEach((item, index) => {
      const carouselItem = createCarouselItem(item, index === 0);
      container.appendChild(carouselItem);
    });
  }
  
  renderCarouselItems('carousel-container', carouselData);
  