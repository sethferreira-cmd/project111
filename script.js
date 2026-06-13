/* =========================================================
   BRAND EARTHEN — script.js
   ========================================================= */

'use strict';

// ── PRODUCT DATA ──────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: 'AuraX Pro Headphones',
    category: 'audio',
    categoryLabel: 'Audio',
    price: 289,
    tag: 'Bestseller',
    desc: 'Studio-grade wireless headphones with adaptive noise cancellation and 40-hour battery.',
    longDesc: 'The AuraX Pro redefines what wireless headphones can sound like. Featuring 40mm custom-tuned drivers and Adaptive Noise Cancellation 3.0, these cans deliver concert-hall clarity wherever you are. Crafted with warm walnut accents and premium leather cushions.',
    features: ['40-hour battery life', 'Adaptive Noise Cancellation 3.0', 'Multipoint Bluetooth 5.3', 'Foldable walnut-accented frame', 'USB-C fast charging (15 min = 5 hrs)'],
    img: 'https://placehold.co/600x400/D4A878/1A1714?text=AuraX+Pro+Headphones',
  },
  {
    id: 2,
    name: 'Pebble S23 Smartphone',
    category: 'phones',
    categoryLabel: 'Phones',
    price: 749,
    tag: 'New',
    desc: 'Ultra-thin flagship with a 6.4" OLED display and 200MP camera system.',
    longDesc: 'The Pebble S23 is built for those who demand precision. Its ceramic-matte back resists fingerprints while absorbing drops. The 200MP triple-camera array uses AI subject detection to ensure every frame looks intentional.',
    features: ['200MP triple-camera system', '6.4" 120Hz ProOLED display', 'Ceramic matte back', '5000mAh + 65W fast charge', 'IP68 water resistance'],
    img: 'https://placehold.co/600x400/C4956A/F8F5F0?text=Pebble+S23+Smartphone',
  },
  {
    id: 3,
    name: 'Terran Watch Ultra',
    category: 'wearables',
    categoryLabel: 'Wearables',
    price: 399,
    tag: 'Featured',
    desc: 'Titanium smartwatch with 14-day battery and full health monitoring suite.',
    longDesc: 'Inspired by the natural topography of the earth, the Terran Watch Ultra features a sapphire crystal face and recycled titanium case. Track everything from blood oxygen to sleep stages with medical-grade accuracy.',
    features: ['14-day battery life', 'Sapphire crystal display', 'ECG & blood oxygen sensor', 'GPS + offline maps', 'Titanium recycled frame'],
    img: 'https://placehold.co/600x400/9E8E82/F8F5F0?text=Terran+Watch+Ultra',
  },
  {
    id: 4,
    name: 'Stone 65W GaN Charger',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 49,
    desc: 'Compact 3-port GaN charger. Powers your laptop, phone, and tablet simultaneously.',
    longDesc: 'The Stone 65W uses Gallium Nitride technology to pack triple-port charging into a cube barely larger than a golf ball. It auto-distributes power where it\'s needed most, so you never have to think about watts again.',
    features: ['65W total output', '3 ports: 2× USB-C + 1× USB-A', 'GaN III chip', 'Foldable plug', 'Universal voltage (100–240V)'],
    img: 'https://placehold.co/600x400/E8E0D5/6B5E52?text=Stone+65W+GaN',
  },
  {
    id: 5,
    name: 'Echo Portable Speaker',
    category: 'audio',
    categoryLabel: 'Audio',
    price: 179,
    tag: 'Popular',
    desc: 'Dustproof 360° speaker with 24-hour playtime. Built for the outdoors.',
    longDesc: 'The Echo is our homage to the sounds of nature. IP67-rated and crafted with a cork-wrapped body that gives every surface grip. Its dual 2.5" drivers fire 360° for a soundstage that fills any space.',
    features: ['IP67 dustproof & waterproof', 'Cork-wrapped body', '24-hour battery', '360° dual-driver audio', 'Party link: chain up to 100 units'],
    img: 'https://placehold.co/600x400/C4956A/1A1714?text=Echo+Speaker',
  },
  {
    id: 6,
    name: 'Slate Laptop Stand',
    category: 'laptops',
    categoryLabel: 'Laptops',
    price: 89,
    desc: 'Aluminium ergonomic stand with 6-angle adjustment. Compatible with any laptop.',
    longDesc: 'The Slate stand is machined from a single block of aircraft-grade aluminium and inspired by the smooth geometry of stone plateaus. Six angle presets snap into place with satisfying precision, keeping your posture right all day.',
    features: ['Single-piece aluminium', '6 height/angle presets', 'Non-slip silicone pads', 'Foldable for travel (0.9kg)', 'Fits laptops up to 17"'],
    img: 'https://placehold.co/600x400/9E8E82/E8E0D5?text=Slate+Laptop+Stand',
  },
  {
    id: 7,
    name: 'Drift TWS Earbuds',
    category: 'audio',
    categoryLabel: 'Audio',
    price: 149,
    desc: 'True wireless earbuds with spatial audio and IPX5 sweat resistance.',
    longDesc: 'Drift earbuds weigh just 4.8g each and disappear into your ears. Spatial audio processing transforms any stereo track into a three-dimensional soundscape, while the IPX5 rating makes them unafraid of rain or a hard workout.',
    features: ['4.8g per earbud', 'Spatial audio processing', 'IPX5 sweat resistance', '8hr + 24hr case = 32hr total', 'Wireless charging case'],
    img: 'https://placehold.co/600x400/D4A878/1A1714?text=Drift+TWS+Earbuds',
  },
  {
    id: 8,
    name: 'Orbit X Smartwatch',
    category: 'wearables',
    categoryLabel: 'Wearables',
    price: 229,
    desc: 'Slim AMOLED smartwatch with rotating crown and all-day health tracking.',
    longDesc: 'The Orbit X is built for everyday elegance. Its 1.45" round AMOLED display is protected by hardened Gorilla Glass 5, and the rotating crown gives tactile control that touchscreens can\'t replicate. Available with genuine leather or recycled ocean-plastic straps.',
    features: ['1.45" round AMOLED', 'Rotating crown navigation', 'Gorilla Glass 5', 'Heart rate + SpO2 + stress', '5-day battery'],
    img: 'https://placehold.co/600x400/6B5E52/F8F5F0?text=Orbit+X+Watch',
  },
  {
    id: 9,
    name: 'Nomad Phone Case',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 39,
    desc: 'MagSafe-compatible walnut wood and polycarbonate hybrid case.',
    longDesc: 'The Nomad case pairs real walnut veneer with a polycarbonate shell that meets military drop-test standards. The wood grain on every case is unique — no two are alike. Full MagSafe compatibility for wireless charging and accessories.',
    features: ['Real walnut veneer', 'MIL-SPEC drop protection', 'MagSafe compatible', 'Fits iPhone 15 series', 'Biodegradable packaging'],
    img: 'https://placehold.co/600x400/C4956A/F8F5F0?text=Nomad+Phone+Case',
  },
  {
    id: 10,
    name: 'Mesh Pro Laptop Bag',
    category: 'laptops',
    categoryLabel: 'Laptops',
    price: 129,
    tag: 'New',
    desc: 'Water-resistant 16" laptop bag with recycled fabric and hidden pockets.',
    longDesc: 'The Mesh Pro is made from 100% recycled PET bottles — each bag repurposes roughly 12 plastic bottles. A TSA-ready laptop sleeve sits beside a spacious main compartment and three hidden RFID-blocking pockets for your cards and passport.',
    features: ['100% recycled PET construction', 'Fits up to 16" laptops', 'TSA-approved laptop sleeve', 'RFID-blocking card pockets', 'Waterproof base panel'],
    img: 'https://placehold.co/600x400/9E8E82/1A1714?text=Mesh+Pro+Bag',
  },
  {
    id: 11,
    name: 'Clay 10 Smartphone',
    category: 'phones',
    categoryLabel: 'Phones',
    price: 499,
    desc: 'Compact 6.1" OLED with a matte ceramic back and 3-day battery life.',
    longDesc: 'The Clay 10 proves you don\'t need to go large to go premium. Its 6.1" OLED panel punches above its size, and the matte ceramic back has a unique tactile texture you\'ll never want to put down. The 5500mAh battery genuinely lasts three days.',
    features: ['6.1" 90Hz OLED display', 'Matte ceramic back', '5500mAh battery (3-day)', '64MP triple-camera', 'Gorilla Glass Victus 2'],
    img: 'https://placehold.co/600x400/D4A878/F8F5F0?text=Clay+10+Phone',
  },
  {
    id: 12,
    name: 'Bark Wireless Charger',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 59,
    desc: '15W Qi2 wireless charging pad with natural bamboo finish.',
    longDesc: 'The Bark charger pairs 15W Qi2 fast wireless charging with a polished bamboo top surface that grips your phone in place. A single indicator LED keeps things quiet at night. Compatible with all Qi and Qi2 devices including latest iPhone and Samsung.',
    features: ['15W Qi2 fast charging', 'Polished bamboo surface', 'Silent mode (dim LED)', 'Qi backward-compatible', 'USB-C included cable'],
    img: 'https://placehold.co/600x400/C4956A/1A1714?text=Bark+Charger',
  },
];

// ── STATE ────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('be_cart') || '[]');
let activeFilter = 'all';
let searchQuery = '';

// ── DOM REFERENCES ────────────────────────────────────────
const productGrid   = document.getElementById('productGrid');
const noResults     = document.getElementById('noResults');
const cartBadge     = document.getElementById('cartBadge');
const cartItems     = document.getElementById('cartItems');
const cartEmpty     = document.getElementById('cartEmpty');
const cartFooter    = document.getElementById('cartFooter');
const cartSubtotal  = document.getElementById('cartSubtotal');
const cartTotal     = document.getElementById('cartTotal');
const cartSidebar   = document.getElementById('cartSidebar');
const cartBtn       = document.getElementById('cartBtn');
const cartClose     = document.getElementById('cartClose');
const overlay       = document.getElementById('overlay');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose    = document.getElementById('modalClose');
const modalBody     = document.getElementById('modalBody');
const searchInput   = document.getElementById('searchInput');
const filterBtns    = document.getElementById('filterBtns');
const navbar        = document.getElementById('navbar');
const hamburger     = document.getElementById('hamburger');
const navLinks      = document.getElementById('navLinks');
const darkToggle    = document.getElementById('darkToggle');
const toggleIcon    = document.getElementById('toggleIcon');
const toast         = document.getElementById('toast');

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  initTheme();
  initNavScroll();
  initSearchAndFilter();
  initNav();
  initHeroAddBtn();
});

// ── HERO "Add to Cart" ────────────────────────────────────
function initHeroAddBtn() {
  // done via inline onclick in HTML, but alias here for safety
  window.addToCartById = (id) => {
    const p = PRODUCTS.find(p => p.id === id);
    if (p) addToCart(p);
  };
}

// ── RENDER PRODUCTS ───────────────────────────────────────
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const matchCat = activeFilter === 'all' || p.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  productGrid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.classList.add('visible');
    return;
  }
  noResults.classList.remove('visible');

  filtered.forEach((p, i) => {
    const card = createProductCard(p, i);
    productGrid.appendChild(card);
  });
}

function createProductCard(p, delay) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.animationDelay = `${delay * 0.06}s`;
  card.innerHTML = `
    <div class="product-img-wrap">
      ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ''}
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
    <div class="product-body">
      <p class="product-category">${p.categoryLabel}</p>
      <h3 class="product-name">${p.name}</h3>
      <p class="product-desc">${p.desc}</p>
      <div class="product-footer">
        <span class="product-price">$${p.price}</span>
        <button class="add-to-cart-btn" aria-label="Add ${p.name} to cart">Add to Cart</button>
      </div>
    </div>
  `;

  // Click card body → open modal
  card.querySelector('.product-img-wrap').addEventListener('click', () => openModal(p));
  card.querySelector('.product-name').addEventListener('click', () => openModal(p));
  card.querySelector('.product-desc').addEventListener('click', () => openModal(p));

  // Add to cart button
  card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(p);
  });

  return card;
}

// ── SEARCH & FILTER ───────────────────────────────────────
function initSearchAndFilter() {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  filterBtns.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderProducts();
  });
}

// ── PRODUCT MODAL ─────────────────────────────────────────
function openModal(p) {
  modalBody.innerHTML = `
    <div class="modal-img">
      <img src="${p.img}" alt="${p.name}" />
    </div>
    <div class="modal-info">
      <p class="modal-category">${p.categoryLabel}</p>
      <h2 class="modal-name">${p.name}</h2>
      <p class="modal-price">$${p.price}</p>
      <p class="modal-desc">${p.longDesc}</p>
      <div class="modal-features">
        <h4>Key Features</h4>
        <ul>
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      <div class="modal-actions">
        <button class="btn btn-primary" id="modalAddCart">Add to Cart</button>
        <button class="btn btn-ghost" onclick="closeModal()">Continue Shopping</button>
      </div>
    </div>
  `;

  document.getElementById('modalAddCart').addEventListener('click', () => {
    addToCart(p);
    closeModal();
  });

  modalBackdrop.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.classList.remove('active');
  if (!cartSidebar.classList.contains('open')) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', () => {
  closeModal();
  closeCart();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeModal(); closeCart(); }
});

// ── CART ──────────────────────────────────────────────────
function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartUI();
  animateBadge();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartUI(); }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Cart cleared');
}

window.clearCart = clearCart;

function saveCart() {
  localStorage.setItem('be_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal   = cart.reduce((s, i) => s + i.price * i.qty, 0);

  cartBadge.textContent = totalItems;

  if (cart.length === 0) {
    cartEmpty.classList.remove('hidden');
    cartFooter.classList.add('hidden');
    cartItems.innerHTML = '';
  } else {
    cartEmpty.classList.add('hidden');
    cartFooter.classList.remove('hidden');
    renderCartItems();
  }

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  cartTotal.textContent    = `$${subtotal.toFixed(2)}`;
}

function renderCartItems() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
      </div>
    `;
    cartItems.appendChild(el);
  });

  cartItems.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      changeQty(Number(btn.dataset.id), Number(btn.dataset.delta));
    });
  });
}

function openCart() {
  cartSidebar.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  if (!modalBackdrop.classList.contains('active')) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.closeCart = closeCart;

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);

function animateBadge() {
  cartBadge.classList.remove('pop');
  void cartBadge.offsetWidth;
  cartBadge.classList.add('pop');
}

// ── CHECKOUT (demo) ───────────────────────────────────────
window.handleCheckout = function() {
  showToast('Checkout coming soon!');
};

// ── TOAST ─────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── DARK MODE ─────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('be_theme') || 'light';
  applyTheme(saved);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  toggleIcon.textContent = theme === 'dark' ? '☀' : '☽';
  localStorage.setItem('be_theme', theme);
}

darkToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ── NAVBAR SCROLL ─────────────────────────────────────────
function initNavScroll() {
  const handler = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    highlightActiveLink();
  };
  window.addEventListener('scroll', handler, { passive: true });
}

function highlightActiveLink() {
  const sections = ['home', 'shop', 'about', 'contact'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 100) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

// ── HAMBURGER ─────────────────────────────────────────────
function initNav() {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('mobile-open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('mobile-open');
    });
  });
}

// ── CONTACT FORM ──────────────────────────────────────────
window.handleContactSubmit = function(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.classList.add('visible');
  e.target.reset();
  setTimeout(() => success.classList.remove('visible'), 4000);
  showToast('Message sent — thanks!');
};

// ── SMOOTH ANCHOR OFFSET ──────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
