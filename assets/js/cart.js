// Lógica global de Carrinho, Wishlist e Toasts - iPhocell

// 🔒 SEGURANÇA: Função de sanitização simples para prevenir DOM XSS ao injetar texto no HTML
function sanitizeHTML(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// 🔒 SEGURANÇA: Validação estrita do estado vindo de localStorage para prevenir Prototype Pollution / Malicious Data Injection
function getSafeJSON(key, defaultValue) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    
    // 🔒 SEGURANÇA: Utiliza uma função reviver no JSON.parse para detectar chaves proibidas
    // antes que elas possam poluir o protótipo global do Object.
    const parsed = JSON.parse(raw, (k, v) => {
      if (k === '__proto__' || k === 'constructor' || k === 'prototype') {
        throw new Error('Tentativa de poluição de protótipo detectada');
      }
      return v;
    });
    
    if (typeof parsed !== 'object' || parsed === null) {
      return defaultValue;
    }
    
    return parsed;
  } catch (e) {
    console.warn(`[Segurança] Dados inválidos ou tentativa de ataque detectada no localStorage para a chave: ${key}`);
    localStorage.removeItem(key);
    return defaultValue;
  }
}

// Estado global
let cartState = getSafeJSON('iphocell_cart', []);
let wishlistState = getSafeJSON('iphocell_wishlist', []);

// Inicialização do Carrinho e Wishlist
document.addEventListener('DOMContentLoaded', () => {
  initCartDOM();
  updateNavbarCounters();
  renderCartItems();
});

// Atualizar contadores do Header
function updateNavbarCounters() {
  const cartCounters = document.querySelectorAll('.cart-count');
  const wishlistCounters = document.querySelectorAll('.wishlist-count');
  
  const totalItems = cartState.reduce((sum, item) => sum + item.quantity, 0);
  
  cartCounters.forEach(counter => {
    counter.textContent = totalItems;
    counter.style.display = totalItems > 0 ? 'flex' : 'none';
  });
  
  wishlistCounters.forEach(counter => {
    counter.textContent = wishlistState.length;
    counter.style.display = wishlistState.length > 0 ? 'flex' : 'none';
  });
}

// Inicializar elementos do Carrinho lateral (Drawer)
function initCartDOM() {
  // Criar elemento de overlay do carrinho caso não exista
  if (!document.querySelector('.cart-overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    overlay.innerHTML = `
      <div class="cart-drawer">
        <div class="cart-header">
          <h3>Sacola de Compras</h3>
          <button class="close-cart" aria-label="Fechar carrinho">&times;</button>
        </div>
        <div class="cart-items-list"></div>
        <div class="cart-footer">
          <div class="cart-summary-row">
            <span>Subtotal</span>
            <span class="cart-subtotal-val">R$ 0,00</span>
          </div>
          <div class="shipping-alert"></div>
          <button class="btn btn-primary btn-full checkout-btn">Finalizar Compra</button>
          <a href="#" class="cart-continue-link">Continuar comprando</a>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  
  // Triggers de abertura/fechamento
  const openCartBtns = document.querySelectorAll('.open-cart-btn');
  const closeCartBtn = document.querySelector('.close-cart');
  const cartOverlay = document.querySelector('.cart-overlay');
  const continueLink = document.querySelector('.cart-continue-link');
  const checkoutBtn = document.querySelector('.checkout-btn');
  
  openCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  });
  
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }
  
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }
  
  if (continueLink) {
    continueLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeCart();
    });
  }
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', handleCheckout);
  }
}

function openCart() {
  const cartOverlay = document.querySelector('.cart-overlay');
  if (cartOverlay) {
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; // impede scroll de fundo
  }
}

function closeCart() {
  const cartOverlay = document.querySelector('.cart-overlay');
  if (cartOverlay) {
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Renderizar itens no painel lateral
function renderCartItems() {
  const listContainer = document.querySelector('.cart-items-list');
  if (!listContainer) return;
  
  if (cartState.length === 0) {
    listContainer.innerHTML = `
      <div class="cart-empty-state">
        <i class="bi bi-bag-x" style="color: var(--accent); opacity: 0.8;"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></i>
        <p>Sua sacola está vazia.</p>
        <p style="font-size: 0.8rem; margin-top: 8px;">Explore nossos produtos e encontre a melhor evolução Apple para você!</p>
      </div>
    `;
    updateSubtotal(0);
    return;
  }
  
  let html = '';
  cartState.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;
    
    // 🔒 SEGURANÇA: Sanitização de variáveis textuais para prevenir XSS
    const safeName = sanitizeHTML(product.name);
    const safeColor = sanitizeHTML(item.color || product.color);
    const safeStorage = sanitizeHTML(item.storage || product.storage);
    const safeImg = sanitizeHTML(product.images[0]);
    const safeId = sanitizeHTML(item.id);
    
    const itemTotal = product.price * item.quantity;
    
    html += `
      <div class="cart-item" data-id="${safeId}">
        <div class="cart-item-img">
          <img src="${safeImg}" alt="${safeName}">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-title-row">
            <h4 class="cart-item-name">${safeName}</h4>
            <button class="cart-item-remove" onclick="removeItemFromCart('${safeId}')" aria-label="Remover item">✕</button>
          </div>
          <p class="cart-item-meta">${safeColor} / ${safeStorage}</p>
          <div class="cart-item-bottom-row">
            <div class="cart-item-qty">
              <button class="cart-item-qty-btn" onclick="adjustQty('${safeId}', -1)">-</button>
              <span class="cart-item-qty-val">${item.quantity}</span>
              <button class="cart-item-qty-btn" onclick="adjustQty('${safeId}', 1)">+</button>
            </div>
            <span class="cart-item-price">R$ ${itemTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>
    `;
  });
  
  listContainer.innerHTML = html;
  
  const subtotal = cartState.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  
  updateSubtotal(subtotal);
}

function updateSubtotal(subtotal) {
  const subtotalVal = document.querySelector('.cart-subtotal-val');
  const shippingAlert = document.querySelector('.shipping-alert');
  
  if (subtotalVal) {
    subtotalVal.textContent = `R$ ${subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  
  if (shippingAlert) {
    if (subtotal === 0) {
      shippingAlert.innerHTML = '';
    } else if (subtotal >= 500) {
      shippingAlert.innerHTML = `Parabéns! Você ganhou <span>Frete Grátis</span>!`;
    } else {
      const remaining = 500 - subtotal;
      shippingAlert.innerHTML = `Adicione mais <span>R$ ${remaining.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> para ganhar Frete Grátis!`;
    }
  }
}

// Ajustar quantidade de um item (+/-)
window.adjustQty = function(id, offset) {
  const itemIndex = cartState.findIndex(item => item.id === id);
  if (itemIndex === -1) return;
  
  cartState[itemIndex].quantity += offset;
  
  if (cartState[itemIndex].quantity <= 0) {
    cartState.splice(itemIndex, 1);
    showToast("Produto removido do carrinho");
  }
  
  saveCart();
  renderCartItems();
  updateNavbarCounters();
};

// Remover item do carrinho totalmente
window.removeItemFromCart = function(id) {
  const itemIndex = cartState.findIndex(item => item.id === id);
  if (itemIndex === -1) return;
  
  cartState.splice(itemIndex, 1);
  saveCart();
  renderCartItems();
  updateNavbarCounters();
  showToast("Produto removido do carrinho ✓");
};

// Salvar no localStorage com consistência
function saveCart() {
  localStorage.setItem('iphocell_cart', JSON.stringify(cartState));
}

function saveWishlist() {
  localStorage.setItem('iphocell_wishlist', JSON.stringify(wishlistState));
}

// API Pública de manipulação do Carrinho
window.addToCart = function(productId, quantity = 1, selectedColor = null, selectedStorage = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const color = selectedColor || product.color;
  const storage = selectedStorage || product.storage;
  
  // Chave identificadora única do item com variantes
  const cartItemId = product.id; 
  
  const existingItemIndex = cartState.findIndex(item => item.id === cartItemId);
  
  if (existingItemIndex > -1) {
    cartState[existingItemIndex].quantity += quantity;
  } else {
    cartState.push({
      id: cartItemId,
      quantity: quantity,
      color: color,
      storage: storage
    });
  }
  
  saveCart();
  renderCartItems();
  updateNavbarCounters();
  openCart();
  showToast("Produto adicionado ao carrinho ✓");
};

// API de Wishlist (Favoritos)
window.toggleWishlist = function(productId) {
  const index = wishlistState.indexOf(productId);
  let msg = '';
  
  if (index > -1) {
    wishlistState.splice(index, 1);
    msg = "Removido dos favoritos";
  } else {
    wishlistState.push(productId);
    msg = "Adicionado aos favoritos ✓";
  }
  
  saveWishlist();
  updateNavbarCounters();
  showToast(msg);
  
  // Dispara evento global para componentes da página atual se atualizarem
  document.dispatchEvent(new CustomEvent('wishlistUpdated', { detail: { productId, inWishlist: index === -1 } }));
};

window.isInWishlist = function(productId) {
  return wishlistState.includes(productId);
};

// Finalizar Compra - Converte dados e envia para WhatsApp
function handleCheckout() {
  if (cartState.length === 0) {
    showToast("Adicione produtos ao carrinho primeiro");
    return;
  }
  
  let msg = `Olá, iPhocell! Gostaria de finalizar o meu pedido pelo site:\n\n`;
  let total = 0;
  
  cartState.forEach((item, idx) => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;
    
    const sub = product.price * item.quantity;
    total += sub;
    
    msg += `${idx + 1}. *${product.name}*\n`;
    msg += `   • Quantidade: ${item.quantity}\n`;
    msg += `   • Cor: ${item.color || product.color} | Armazenamento: ${item.storage || product.storage}\n`;
    msg += `   • Valor: R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (Subtotal: R$ ${sub.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})\n\n`;
  });
  
  msg += `*Subtotal:* R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n`;
  msg += `*Frete:* ${total >= 500 ? 'Grátis' : 'A combinar'}\n\n`;
  msg += `Como posso proceder com o pagamento e entrega?`;
  
  const phone = "5515999999999";
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
  
  // 🔒 SEGURANÇA: Prevenir Tabnabbing abrindo nova aba com rel="noopener"
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}

// Sistema global de Notificações Toast
window.showToast = function(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  // 🔒 SEGURANÇA: Sanitização de variáveis textuais para prevenir DOM XSS
  const safeMsg = sanitizeHTML(message);
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-text">${safeMsg}</span>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
};
