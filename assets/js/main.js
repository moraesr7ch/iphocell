// Arquivo principal de interações e lógica de páginas - iPhocell

document.addEventListener('DOMContentLoaded', () => {
  // Inicialização do Lenis Smooth Scroll
  if (typeof Lenis !== 'undefined') {
    window.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time) {
      window.lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  initGlobalFeatures();
  
  // Detectar em qual página estamos e carregar a lógica específica (compatível com Clean URLs na hospedagem)
  const path = window.location.pathname.toLowerCase().replace(/\/$/, "");
  const page = path.substring(path.lastIndexOf('/') + 1);
  
  if (page === '' || page === 'index' || page === 'index.html') {
    initHomePage();
  } else if (page === 'catalogo' || page === 'catalogo.html') {
    initCatalogPage();
  } else if (page === 'produto' || page === 'produto.html') {
    initProductDetailPage();
  } else if (page === 'manutencao' || page === 'manutencao.html') {
    initMaintenancePage();
  } else if (page === 'sobre' || page === 'sobre.html') {
    initAboutPage();
  }
  
  // Animações ao rolar a página
  initScrollAnimations();

  // Animações de palavras de entrada
  initWordAnimations();
});

/* ==========================================================================
   1. FUNCIONALIDADES GLOBAIS
   ========================================================================== */
function initGlobalFeatures() {
  // Controle de Rolagem da Navbar
  const header = document.querySelector('.header');
  if (header) {
    if (window.lenis) {
      window.lenis.on('scroll', () => {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    } else {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }

    // Monitora as seções escuras para alternar o header para o modo escuro ao passar por elas
    const darkSections = document.querySelectorAll('#iphone12-intro-section, #iphone12-details-section');
    if (darkSections.length > 0) {
      const darkHeaderObserverOptions = {
        root: null,
        rootMargin: '0px 0px -95% 0px', // Observa apenas a linha do header no topo do viewport
        threshold: 0
      };

      const darkHeaderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            header.classList.add('header-on-dark');
          } else {
            // Só remove se nenhuma outra seção escura estiver sob o header
            const isAnyDarkVisible = Array.from(darkSections).some(sectionEl => {
              const bounds = sectionEl.getBoundingClientRect();
              return bounds.top <= 80 && bounds.bottom >= 0;
            });
            
            if (!isAnyDarkVisible) {
              header.classList.remove('header-on-dark');
            }
          }
        });
      }, darkHeaderObserverOptions);

      darkSections.forEach(sectionEl => darkHeaderObserver.observe(sectionEl));
    }
  }

  // Menu Mobile (Hambúrguer)
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'mobile-nav-overlay';
  mobileOverlay.innerHTML = `
    <ul class="mobile-nav-links">
      <li><a href="index.html">Início</a></li>
      <li><a href="catalogo.html">Catálogo</a></li>
      <li><a href="manutencao.html">Manutenção</a></li>
      <li><a href="sobre.html">Sobre Nós</a></li>
    </ul>
  `;
  document.body.appendChild(mobileOverlay);

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      mobileOverlay.classList.toggle('open');
      document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Botão Flutuante do WhatsApp
  if (!document.querySelector('.whatsapp-float')) {
    const waFloat = document.createElement('a');
    waFloat.className = 'whatsapp-float';
    waFloat.href = 'https://api.whatsapp.com/send?phone=5515999999999&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20iPhocell%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.';
    waFloat.target = '_blank';
    waFloat.rel = 'noopener noreferrer';
    waFloat.setAttribute('aria-label', 'Falar no WhatsApp');
    waFloat.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`;
    document.body.appendChild(waFloat);
  }

  // Lógica de Busca ao Vivo (Dropdown) no Header
  const searchInput = document.querySelector('.header-search-input');
  if (searchInput) {
    // Criar container de dropdown caso não exista
    const searchWrapper = searchInput.closest('.search-input-wrapper');
    const dropdown = document.createElement('div');
    dropdown.className = 'search-results-dropdown';
    searchWrapper.appendChild(dropdown);

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length < 2) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
      }

      // Filtrar produtos que correspondem ao nome ou modelo
      const matches = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.model.toLowerCase().includes(query)
      ).slice(0, 5); // 🔒 SEGURANÇA: Limita a quantidade de nós renderizados (Prevenção de DoS no DOM)

      if (matches.length === 0) {
        dropdown.innerHTML = `<div class="search-no-results">Nenhum produto encontrado para "${sanitizeHTML(query)}"</div>`;
      } else {
        let html = '';
        matches.forEach(item => {
          const safeId = sanitizeHTML(item.id);
          const safeName = sanitizeHTML(item.name);
          const safePrice = item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          const safeImg = sanitizeHTML(item.images[0]);
          const safeCond = sanitizeHTML(item.condition.toUpperCase());
          
          html += `
            <div class="search-result-item" onclick="navigateToProduct('${safeId}')">
              <img src="${safeImg}" alt="${safeName}">
              <div class="search-result-info">
                <div class="search-result-name">${safeName}</div>
                <div class="search-result-meta">${safeCond} / ${sanitizeHTML(item.storage)}</div>
              </div>
              <div class="search-result-price">R$ ${safePrice}</div>
            </div>
          `;
        });
        dropdown.innerHTML = html;
      }
      dropdown.classList.add('open');
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', (e) => {
      if (!searchWrapper.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  }
}

// Auxiliar de navegação
window.navigateToProduct = function(id) {
  window.location.href = `produto.html?id=${id}`;
};

/* ==========================================================================
   2. ANIMAÇÕES AO ROLAR A PÁGINA (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target); // Anima apenas uma vez
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in-scroll');
  animatedElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   3. PÁGINA HOME (`index.html`)
   ========================================================================== */
function initHomePage() {
  const scrollContainer = document.querySelector('.products-scroll-container') || document.querySelector('.horizontal-scroll-container');
  const accessoriesContainer = document.querySelector('.accessories-scroll-container');
  if (!scrollContainer) return;

  // Filtrar apenas iPhones mais recentes (Destaques)
  const featuredModels = ["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"];
  const featured = products.filter(p => featuredModels.includes(p.model));

  // Inicializa o Flip 3D do celular quebrado para consertado em loop contínuo
  const assistanceSection = document.getElementById('assistance-premium-section');
  const flipCard = document.getElementById('phone-flip-card');
  if (assistanceSection && flipCard) {
    const phoneObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Inicia o loop infinito após 2 segundos no viewport
          setTimeout(() => {
            runPhoneLoop();
          }, 2000);
          phoneObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.2
    });
    phoneObserver.observe(assistanceSection);

    function runPhoneLoop() {
      // Passo 1: Gira para exibir o celular consertado (verso do card)
      flipCard.classList.add('state-fixed');
      
      // Passo 2: Mantém consertado por 4.5 segundos (1.6s transição + 2.9s exibição) e depois volta para o quebrado
      setTimeout(() => {
        flipCard.classList.remove('state-fixed');
        
        // Passo 3: Mantém quebrado por 3.5 segundos (1.6s transição + 1.9s exibição) e repete o loop
        setTimeout(() => {
          runPhoneLoop();
        }, 3500);
      }, 4500);
    }
  }

  let html = '';
  featured.forEach(product => {
    const isFav = isInWishlist(product.id);
    const favClass = isFav ? 'active' : '';
    const condLabel = product.condition === 'novo' ? 'Novo' : product.condition === 'seminovo' ? 'Seminovo' : 'Lacrado';
    const condClass = product.condition;
    const installmentsVal = (product.price / product.installments).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    const safeId = sanitizeHTML(product.id);
    const safeName = sanitizeHTML(product.name);
    const safeImg = sanitizeHTML(product.images[0]);
    const safeColor = sanitizeHTML(product.color);
    const safeStorage = sanitizeHTML(product.storage);
    
    html += `
      <div class="product-card">
        <button class="card-wishlist-btn ${favClass}" onclick="toggleWishlist('${safeId}'); this.classList.toggle('active');" aria-label="Favoritar"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
        <div class="product-card-img-wrapper" onclick="navigateToProduct('${safeId}')">
          <img src="${safeImg}" alt="${safeName}">
          <div class="card-badges">
            <span class="badge-condicao ${condClass}">${condLabel}</span>
          </div>
        </div>
        <div class="product-card-content">
          <div>
            <h3 class="product-card-title" onclick="navigateToProduct('${safeId}')">${safeName}</h3>
            ${(product.color && product.color !== 'N/A') || (product.storage && product.storage !== 'N/A') ? `
            <div class="product-card-meta">
              ${product.color && product.color !== 'N/A' ? `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${safeColor}</span>` : ''}
              ${product.storage && product.storage !== 'N/A' ? `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> ${safeStorage}</span>` : ''}
            </div>` : ''}
          </div>
          <div>
            <div class="product-card-price-row">
              <span class="card-price-label">A partir de</span>
              <span class="card-price-val">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              <span class="card-price-installments">ou 12x de <span>R$ ${installmentsVal}</span> sem juros</span>
            </div>
            <div class="product-card-actions">
              <button class="btn btn-outline" onclick="navigateToProduct('${safeId}')">Ver detalhes</button>
              <button class="btn btn-primary" onclick="addToCart('${safeId}', 1)">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  scrollContainer.innerHTML = html;

  // Renderizar Acessórios em Destaque
  if (accessoriesContainer) {
    const featuredAccessories = products.filter(p => p.category === 'acessorios');
    let accessoriesHtml = '';
    
    featuredAccessories.forEach(product => {
      const isFav = isInWishlist(product.id);
      const favClass = isFav ? 'active' : '';
      const condLabel = product.condition === 'novo' ? 'Novo' : product.condition === 'seminovo' ? 'Seminovo' : 'Lacrado';
      const condClass = product.condition;
      const installmentsVal = (product.price / product.installments).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      
      const safeId = sanitizeHTML(product.id);
      const safeName = sanitizeHTML(product.name);
      const safeImg = sanitizeHTML(product.images[0]);
      const safeColor = sanitizeHTML(product.color);
      const safeStorage = sanitizeHTML(product.storage);
      
      accessoriesHtml += `
        <div class="product-card">
          <button class="card-wishlist-btn ${favClass}" onclick="toggleWishlist('${safeId}'); this.classList.toggle('active');" aria-label="Favoritar"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
          <div class="product-card-img-wrapper" onclick="navigateToProduct('${safeId}')">
            <img src="${safeImg}" alt="${safeName}">
            <div class="card-badges">
              <span class="badge-condicao ${condClass}">${condLabel}</span>
            </div>
          </div>
          <div class="product-card-content">
            <div>
              <h3 class="product-card-title" onclick="navigateToProduct('${safeId}')">${safeName}</h3>
              ${(product.color && product.color !== 'N/A') || (product.storage && product.storage !== 'N/A') ? `
              <div class="product-card-meta">
                ${product.color && product.color !== 'N/A' ? `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${safeColor}</span>` : ''}
                ${product.storage && product.storage !== 'N/A' ? `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> ${safeStorage}</span>` : ''}
              </div>` : ''}
            </div>
            <div>
              <div class="product-card-price-row">
                <span class="card-price-label">A partir de</span>
                <span class="card-price-val">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                <span class="card-price-installments">ou ${product.installments}x de <span>R$ ${installmentsVal}</span> sem juros</span>
              </div>
              <div class="product-card-actions">
                <button class="btn btn-outline" onclick="navigateToProduct('${safeId}')">Ver detalhes</button>
                <button class="btn btn-primary" onclick="addToCart('${safeId}', 1)">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    
    accessoriesContainer.innerHTML = accessoriesHtml;
  }
  // Inicialização do vídeo do iPhone 12 Pro (reproduz apenas quando visível na tela)
  const video = document.getElementById('iphone12-video');
  const section = document.getElementById('iphone12-intro-section');
  const staticImg = document.querySelector('.iphone12-static-img');
  if (video && section) {
    let hasPlayed = false;

    // Garante que a imagem estática comece invisível e totalmente oculta
    if (staticImg) {
      staticImg.style.opacity = '0';
      staticImg.style.visibility = 'hidden';
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Inicia o play quando 15% da seção estiver na tela
    };

    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasPlayed) {
          hasPlayed = true; // Impede múltiplas reproduções ao rolar a página
          
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.then(() => {
              // Iniciou a reprodução com sucesso
            }).catch(error => {
              // Se o autoplay for bloqueado pelo navegador, exibe a imagem estática de fallback
              console.warn("Play do vídeo do iPhone 12 Pro foi bloqueado ou falhou:", error);
              video.style.opacity = '0';
              video.style.display = 'none';
              if (staticImg) {
                staticImg.style.visibility = 'visible';
                staticImg.style.opacity = '1';
              }
            });
          }
          
          // Uma vez disparado o play, encerramos a observação desta seção
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    videoObserver.observe(section);

    // Oculta o vídeo quando ele terminar
    video.addEventListener('ended', () => {
      video.style.opacity = '0';
      // Exibe a imagem estática com fade-in suave
      if (staticImg) {
        staticImg.style.visibility = 'visible';
        staticImg.style.opacity = '1';
      }
      // Após o fade-out do vídeo (0.8s), ocultamos o elemento
      setTimeout(() => {
        video.style.display = 'none';
      }, 800);
    });
  }

  // Scroll Reveal para a seção do iPhone 12 Pro (implementação simples do zero)
  setTimeout(() => {
    const revealElements = document.querySelectorAll('.iphone12-reveal');

    const revealObserverOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // Aciona um pouco antes do elemento cruzar totalmente a borda inferior
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, revealObserverOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  }, 200);
}

/* ==========================================================================
   4. PÁGINA CATÁLOGO (`catalogo.html`)
   ========================================================================== */
function initCatalogPage() {
  const gridContainer = document.querySelector('.products-grid-catalog');
  if (!gridContainer) return;

  // Estado dos Filtros do Catálogo
  let currentFilters = {
    category: 'todos',
    condition: [],
    priceMax: 10000,
    models: []
  };
  
  let currentSort = 'menor-preco';
  let viewMode = 'grid'; // grid ou list

  // Elementos do DOM do Filtro
  const categoryBtns = document.querySelectorAll('.category-filter-btn');
  const conditionCheckboxes = document.querySelectorAll('.condition-checkbox');
  const priceSlider = document.querySelector('.price-slider-el');
  const priceMaxValText = document.querySelector('.price-max-val');
  const modelCheckboxes = document.querySelectorAll('.model-checkbox');
  
  // Elementos do DOM do Topbar
  const sortSelect = document.getElementById('catalog-sort-select');
  const gridToggleBtn = document.querySelector('.btn-view-grid');
  const listToggleBtn = document.querySelector('.btn-view-list');
  const resultsCountText = document.querySelector('.catalog-results-count-val');
  const catalogSearchInput = document.querySelector('.catalog-top-search-input');

  // Inicializar escutadores de filtros
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilters.category = btn.dataset.category;
      applyFiltersAndRender();
    });
  });

  conditionCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const conds = [];
      conditionCheckboxes.forEach(c => {
        if (c.checked) conds.push(c.value);
      });
      currentFilters.condition = conds;
      applyFiltersAndRender();
    });
  });

  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      currentFilters.priceMax = val;
      if (priceMaxValText) {
        priceMaxValText.textContent = `R$ ${val.toLocaleString('pt-BR')}`;
      }
      applyFiltersAndRender();
    });
  }

  modelCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const models = [];
      modelCheckboxes.forEach(c => {
        if (c.checked) models.push(c.value);
      });
      currentFilters.models = models;
      applyFiltersAndRender();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', () => {
      applyFiltersAndRender();
    });
  }

  if (gridToggleBtn && listToggleBtn) {
    gridToggleBtn.addEventListener('click', () => {
      gridToggleBtn.classList.add('active');
      listToggleBtn.classList.remove('active');
      viewMode = 'grid';
      gridContainer.classList.remove('list-view');
      applyFiltersAndRender();
    });

    listToggleBtn.addEventListener('click', () => {
      listToggleBtn.classList.add('active');
      gridToggleBtn.classList.remove('active');
      viewMode = 'list';
      gridContainer.classList.add('list-view');
      applyFiltersAndRender();
    });
  }

  // Filtragem e Ordenação dos Produtos
  function applyFiltersAndRender() {
    let filtered = products;

    // Busca rápida
    if (catalogSearchInput) {
      const query = catalogSearchInput.value.trim().toLowerCase();
      if (query) {
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.model.toLowerCase().includes(query)
        );
      }
    }

    // Filtragem por categoria
    if (currentFilters.category !== 'todos') {
      filtered = filtered.filter(p => p.category === currentFilters.category);
    }

    // Filtragem por condição
    if (currentFilters.condition.length > 0) {
      filtered = filtered.filter(p => currentFilters.condition.includes(p.condition));
    }

    // Filtragem por modelo
    if (currentFilters.models.length > 0) {
      filtered = filtered.filter(p => currentFilters.models.includes(p.model));
    }

    // Filtragem por preço
    filtered = filtered.filter(p => p.price <= currentFilters.priceMax);

    // Ordenação
    if (currentSort === 'menor-preco') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'maior-preco') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'mais-recente') {
      // Como o array products já está ordenado cronologicamente na declaração (do 11 ao 16),
      // invertemos o array para "mais recente" (com fatiamento pra não alterar o original)
      filtered.reverse();
    }

    // Contador de resultados
    if (resultsCountText) {
      resultsCountText.textContent = filtered.length;
    }

    renderCatalogGrid(filtered);
  }

  function renderCatalogGrid(items) {
    if (items.length === 0) {
      gridContainer.innerHTML = `
        <div class="catalog-empty-state">
          <i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></i>
          <h3>Nenhum resultado encontrado</h3>
          <p>Tente ajustar os filtros laterais ou a busca superior.</p>
        </div>
      `;
      gridContainer.style.display = 'block';
      return;
    }

    // Restaurar layout do grid/list
    gridContainer.style.display = viewMode === 'grid' ? 'grid' : 'flex';

    let html = '';
    items.forEach(product => {
      const isFav = isInWishlist(product.id);
      const favClass = isFav ? 'active' : '';
      const condLabel = product.condition === 'novo' ? 'Novo' : product.condition === 'seminovo' ? 'Seminovo' : 'Lacrado';
      const condClass = product.condition;
      const installmentsVal = (product.price / product.installments).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      
      const safeId = sanitizeHTML(product.id);
      const safeName = sanitizeHTML(product.name);
      const safeImg = sanitizeHTML(product.images[0]);
      const safeColor = sanitizeHTML(product.color);
      const safeStorage = sanitizeHTML(product.storage);
      
      html += `
        <div class="product-card">
          <button class="card-wishlist-btn ${favClass}" onclick="toggleWishlist('${safeId}'); this.classList.toggle('active');" aria-label="Favoritar"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
          <div class="product-card-img-wrapper" onclick="navigateToProduct('${safeId}')">
            <img src="${safeImg}" alt="${safeName}">
            <div class="card-badges">
              <span class="badge-condicao ${condClass}">${condLabel}</span>
            </div>
          </div>
          <div class="product-card-content">
            <div>
              <h3 class="product-card-title" onclick="navigateToProduct('${safeId}')">${safeName}</h3>
            ${(product.color && product.color !== 'N/A') || (product.storage && product.storage !== 'N/A') ? `
            <div class="product-card-meta">
              ${product.color && product.color !== 'N/A' ? `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${safeColor}</span>` : ''}
              ${product.storage && product.storage !== 'N/A' ? `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> ${safeStorage}</span>` : ''}
            </div>` : ''}
            </div>
            <div>
              <div class="product-card-price-row">
                <span class="card-price-label">A partir de</span>
                <span class="card-price-val">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                <span class="card-price-installments">ou ${product.installments}x de <span>R$ ${installmentsVal}</span> sem juros</span>
              </div>
              <div class="product-card-actions">
                <button class="btn btn-outline" onclick="navigateToProduct('${safeId}')">Ver detalhes</button>
                <button class="btn btn-primary" onclick="addToCart('${safeId}', 1)">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    gridContainer.innerHTML = html;
  }

  // Primeira renderização
  applyFiltersAndRender();
}

/* ==========================================================================
   5. PÁGINA DETALHES DO PRODUTO (`produto.html`)
   ========================================================================= */
function initProductDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  // Encontrar produto correspondente ou redirecionar/mostrar erro seguro
  const product = products.find(p => p.id === productId);
  if (!product) {
    const detailContainer = document.querySelector('.product-detail-container');
    if (detailContainer) {
      detailContainer.innerHTML = `
        <div class="catalog-empty-state" style="grid-column: 1 / -1;">
          <i><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></i>
          <h3>Produto não encontrado</h3>
          <p>O produto que você tentou acessar não existe ou foi removido do catálogo.</p>
          <a href="catalogo.html" class="btn btn-primary" style="margin-top: 16px;">Voltar ao Catálogo</a>
        </div>
      `;
    }
    return;
  }

  // Estado local do seletor
  let selectedColor = product.color;
  let selectedStorage = product.storage;

  // Renderizar detalhes dinâmicos na página
  document.getElementById('breadcrumb-product-name').textContent = product.name;
  
  // Categoria
  const categoryLink = document.getElementById('breadcrumb-category-link');
  if (categoryLink) {
    categoryLink.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    categoryLink.href = `catalogo.html`;
  }

  // Badges e nome do produto
  const badge = document.getElementById('detail-cond-badge');
  badge.className = `badge-condicao ${product.condition}`;
  badge.textContent = product.condition === 'novo' ? 'Novo' : product.condition === 'seminovo' ? 'Seminovo' : 'Lacrado';

  document.getElementById('detail-title').textContent = product.name;
  
  // Disponibilidade em estoque
  const stockText = document.getElementById('detail-stock-status');
  if (product.condition === 'seminovo') {
    stockText.className = 'stock-status'; // vermelho para última unidade
    stockText.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> Última unidade disponível!`;
  } else {
    stockText.className = 'stock-status in-stock';
    stockText.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Em estoque (Pronta Entrega)`;
  }

  // Preço e parcelamento
  document.getElementById('detail-price-val').textContent = `R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  const installmentsVal = (product.price / product.installments).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('detail-price-installments').innerHTML = `ou em até <strong>${product.installments}x de R$ ${installmentsVal}</strong> sem juros`;

  // Renderizar miniaturas e imagem principal
  const mainImage = document.getElementById('detail-main-img');
  mainImage.src = product.images[0];
  mainImage.alt = product.name;

  const thumbsContainer = document.querySelector('.gallery-thumbnails');
  if (thumbsContainer) {
    let thumbsHtml = '';
    // Gerar miniaturas simuladas repetindo as imagens disponíveis para preencher as 4 miniaturas
    const imagesToUse = [...product.images, ...product.images, ...product.images, ...product.images].slice(0, 4);
    
    imagesToUse.forEach((img, idx) => {
      const activeClass = idx === 0 ? 'active' : '';
      thumbsHtml += `
        <button class="gallery-thumb-btn ${activeClass}" onclick="changeGalleryImage(this, '${sanitizeHTML(img)}')">
          <img src="${sanitizeHTML(img)}" alt="Miniautra ${idx + 1}">
        </button>
      `;
    });
    thumbsContainer.innerHTML = thumbsHtml;
  }

  // Função global de alteração de imagem da galeria
  window.changeGalleryImage = function(btn, imgSrc) {
    document.querySelectorAll('.gallery-thumb-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    mainImage.src = imgSrc;
  };

  // Seletor de cores
  const colorList = document.querySelector('.color-variant-list');
  if (colorList) {
    colorList.style.setProperty('--color-hex', product.colorHex);
    colorList.innerHTML = `
      <div class="color-variant-dot active" style="--color-hex: ${product.colorHex}">
        <span class="color-name-tooltip">${sanitizeHTML(product.color)}</span>
      </div>
    `;
  }

  // Seletor de armazenamento
  const storageList = document.querySelector('.storage-variant-list');
  if (storageList) {
    const storages = ["64GB", "128GB", "256GB", "512GB"];
    let storageHtml = '';
    
    storages.forEach(st => {
      // iPhone 11 com 64GB ativo por padrão, outros modelos com 128GB ou 256GB ativos
      const isActive = product.storage === st ? 'active' : '';
      storageHtml += `
        <button class="storage-variant-btn ${isActive}" onclick="selectStorage(this, '${st}')">${st}</button>
      `;
    });
    storageList.innerHTML = storageHtml;
  }

  window.selectStorage = function(btn, storage) {
    document.querySelectorAll('.storage-variant-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedStorage = storage;
  };

  // Lógica das abas
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.dataset.tab;

      tabLinks.forEach(l => l.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      link.classList.add('active');
      document.getElementById(`tab-${tabId}`).classList.add('active');
    });
  });

  // Tabela de Especificações
  const specs = product.specs;
  document.getElementById('spec-chip').textContent = specs.chip;
  document.getElementById('spec-camera').textContent = specs.camera;
  document.getElementById('spec-battery').textContent = specs.battery;
  document.getElementById('spec-screen').textContent = specs.screen;
  document.getElementById('spec-os').textContent = specs.os;

  // Botões de Ação
  const addToCartBtn = document.getElementById('detail-add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      addToCart(product.id, 1, selectedColor, selectedStorage);
    });
  }

  const buyNowBtn = document.getElementById('detail-buy-now');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      addToCart(product.id, 1, selectedColor, selectedStorage);
      openCart();
    });
  }

  const askBtn = document.getElementById('detail-ask-btn');
  if (askBtn) {
    askBtn.addEventListener('click', () => {
      const msg = `Olá, iPhocell! Estou visualizando o produto *${product.name}* no site e gostaria de tirar algumas dúvidas sobre ele.`;
      const url = `https://api.whatsapp.com/send?phone=5515999999999&text=${encodeURIComponent(msg)}`;
      const newWin = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWin) newWin.opener = null;
    });
  }

  // Renderizar Recomendados (Produtos relacionados da mesma categoria)
  renderRelatedProducts(product);
}

function renderRelatedProducts(currentProduct) {
  const container = document.querySelector('.related-products-grid');
  if (!container) return;

  // Filtrar produtos da mesma categoria, excluindo o atual
  const related = products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4);

  let html = '';
  related.forEach(product => {
    const condLabel = product.condition === 'novo' ? 'Novo' : product.condition === 'seminovo' ? 'Seminovo' : 'Lacrado';
    const condClass = product.condition;
    const installmentsVal = (product.price / product.installments).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    const safeId = sanitizeHTML(product.id);
    const safeName = sanitizeHTML(product.name);
    const safeImg = sanitizeHTML(product.images[0]);
    const safeColor = sanitizeHTML(product.color);
    const safeStorage = sanitizeHTML(product.storage);
    
    html += `
      <div class="product-card">
        <div class="product-card-img-wrapper" onclick="navigateToProduct('${safeId}')">
          <img src="${safeImg}" alt="${safeName}">
          <div class="card-badges">
            <span class="badge-condicao ${condClass}">${condLabel}</span>
          </div>
        </div>
        <div class="product-card-content">
          <div>
            <h3 class="product-card-title" onclick="navigateToProduct('${safeId}')">${safeName}</h3>
            ${(product.color && product.color !== 'N/A') || (product.storage && product.storage !== 'N/A') ? `
            <div class="product-card-meta">
              ${product.color && product.color !== 'N/A' ? `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> ${safeColor}</span>` : ''}
              ${product.storage && product.storage !== 'N/A' ? `<span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg> ${safeStorage}</span>` : ''}
            </div>` : ''}
          </div>
          <div>
            <div class="product-card-price-row">
              <span class="card-price-label">A partir de</span>
              <span class="card-price-val">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              <span class="card-price-installments">ou 12x de <span>R$ ${installmentsVal}</span> sem juros</span>
            </div>
            <div class="product-card-actions">
              <button class="btn btn-outline btn-full" onclick="navigateToProduct('${safeId}')">Ver detalhes</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* ==========================================================================
   6. PÁGINA MANUTENÇÃO (`manutencao.html`)
   ========================================================================== */
function initMaintenancePage() {
  // Configuração dos Botões de Agendamento do Grid de Serviços
  const askServiceBtns = document.querySelectorAll('.btn-ask-service');
  askServiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceName = btn.dataset.service;
      const price = btn.dataset.price;
      const msg = `Olá, iPhocell! Gostaria de agendar o serviço de *${serviceName}* (${price}) que vi no site de vocês. Como posso fazer?`;
      const url = `https://api.whatsapp.com/send?phone=5515999999999&text=${encodeURIComponent(msg)}`;
      const newWin = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWin) newWin.opener = null;
    });
  });

  //FAQ Accordion
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const faqItem = trigger.closest('.faq-item');
      const content = faqItem.querySelector('.faq-content');
      
      const isOpen = faqItem.classList.contains('active');
      
      // Fechar todos
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-content').style.maxHeight = null;
      });
      
      if (!isOpen) {
        faqItem.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   7. PÁGINA SOBRE NÓS (`sobre.html`)
   ========================================================================== */
function initAboutPage() {
  const mapPlaceholder = document.querySelector('.map-embed-placeholder');
  if (mapPlaceholder) {
    // Carregar um iframe do google maps seguro para a localização no Centro de Cerquilho - SP
    const address = "R. Dr. Campos, 67 - Centro, Cerquilho - SP";
    const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    
    // 🔒 SEGURANÇA: Sandbox no iframe para prevenir scripts externos de rodar no nosso domínio
    mapPlaceholder.innerHTML = `
      <iframe 
        width="100%" 
        height="100%" 
        id="gmap_canvas" 
        src="${embedUrl}" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0"
        sandbox="allow-scripts allow-same-origin allow-popups"
        title="Localização física da iPhocell em Cerquilho">
      </iframe>
    `;
  }
}

/* ==========================================================================
   8. ANIMAÇÕES DE ENTRADA PALAVRA POR PALAVRA (EFEITO APPLE STAGGER)
   ========================================================================== */
function initWordAnimations() {
  const heroTitle = document.querySelector('.hero-overlay-title');
  const assistanceTitle = document.querySelector('.assistance-apple-title');

  // Garante que os elementos ganham a classe de animação caso não estejam no HTML
  if (heroTitle) heroTitle.classList.add('word-animate-target');
  if (assistanceTitle) assistanceTitle.classList.add('word-animate-target');

  // Prepara o elemento dividindo seu texto em spans individuais recursivamente, mantendo tags internas (ex: highlights)
  function prepareElement(element) {
    if (!element) return null;
    const wordSpans = [];

    function processNode(node) {
      if (node.nodeType === 3) { // Text Node
        const text = node.nodeValue;
        // Divide o texto por espaços em branco mantendo-os no array final para não alterar o espaçamento
        const parts = text.split(/(\s+)/);
        const fragment = document.createDocumentFragment();

        parts.forEach(part => {
          if (part.trim() === '') {
            fragment.appendChild(document.createTextNode(part));
          } else {
            const span = document.createElement('span');
            span.className = 'animate-word-span';
            span.textContent = part;
            
            // Estilização inline para opacidade e movimento inicial
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(15px)';
            span.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            
            fragment.appendChild(span);
            wordSpans.push(span);
          }
        });

        node.parentNode.replaceChild(fragment, node);
      } else if (node.nodeType === 1) { // Element Node (como spans de destaque)
        const children = Array.from(node.childNodes);
        children.forEach(child => processNode(child));
      }
    }

    const originalChildren = Array.from(element.childNodes);
    originalChildren.forEach(child => processNode(child));

    // Ativa a visibilidade do container principal e deixa que os spans individuais controlem a opacidade
    element.classList.remove('word-animate-target');
    element.classList.add('word-animate-ready');

    return {
      play: (baseDelay = 100, staggerInterval = 80) => {
        wordSpans.forEach((span, index) => {
          setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
          }, baseDelay + index * staggerInterval);
        });
      }
    };
  }

  // Prepara as animações
  const heroAnimation = prepareElement(heroTitle);
  const assistanceAnimation = prepareElement(assistanceTitle);

  // Executa a animação da Hero na carga da página
  if (heroAnimation) {
    setTimeout(() => {
      heroAnimation.play(200, 110);
    }, 150);
  }

  // Executa a animação da seção de assistência ao entrar no viewport (Intersection Observer)
  if (assistanceAnimation && assistanceTitle) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            assistanceAnimation.play(100, 110);
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    observer.observe(assistanceTitle);
  }
}

