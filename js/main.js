// ============================================
// MAIN — Amor Eterno v2
// ============================================

const CATEGORIAS = [
  { id: "nidito",    nombre: "Nidito de Amor", sub: "Crochet y tejidos hechos a mano", icono: "🧶", domicilio: true  },
  { id: "lumina",    nombre: "Lúmina",         sub: "Belleza, Natura y perfumes",      icono: "💄", domicilio: true  },
  { id: "detalles",  nombre: "Detalles",        sub: "Rosas eternas y regalos únicos", icono: "🎁", domicilio: true  },
  { id: "ropa",      nombre: "Ropa Colombia",   sub: "Prendas con sentido patrio",     icono: "👕", domicilio: true  },
  { id: "servicios", nombre: "Servicios",       sub: "Uñas y cejas, con cita previa",  icono: "✂️", domicilio: false }
];

function formatearPrecio(valor) {
  return "$" + Number(valor).toLocaleString("es-CO");
}

function generarLinkWhatsApp(producto, categoria) {
  const msg = categoria.domicilio
    ? `Hola, Amor Eterno 👋 Quiero pedir: *${producto.nombre}* (${formatearPrecio(producto.precio)}). ¿Está disponible?`
    : `Hola, Amor Eterno 👋 Quiero agendar: *${producto.nombre}* (${formatearPrecio(producto.precio)}). ¿Qué horarios tienen?`;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function crearTarjetaProducto(producto, categoria) {
  const art = document.createElement("article");
  art.className = "tarjeta-producto fade-up";

  const imgHTML = producto.imagen
    ? `<img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">`
    : `<div class="sin-foto"><span>📷</span><p>Foto próximamente</p></div>`;

  const notaHTML = categoria.domicilio
    ? `<p class="nota-tarjeta">Con domicilio</p>`
    : `<p class="nota-tarjeta">Solo con cita previa</p>`;

  const txtBtn = categoria.domicilio ? "Pedir por WhatsApp" : "Agendar por WhatsApp";

  art.innerHTML = `
    <div class="tarjeta-imagen">${imgHTML}</div>
    <div class="tarjeta-cuerpo">
      <h3>${producto.nombre}</h3>
      <p class="tarjeta-descripcion">${producto.descripcion || ""}</p>
      <p class="tarjeta-precio">${formatearPrecio(producto.precio)}</p>
      ${notaHTML}
      <a class="boton-whatsapp" href="${generarLinkWhatsApp(producto, categoria)}" target="_blank" rel="noopener">${txtBtn}</a>
    </div>`;
  return art;
}

function renderizarCategorias() {
  const contenedor = document.getElementById("contenedor-categorias");
  const nav        = document.getElementById("nav-categorias");
  contenedor.innerHTML = "";
  nav.innerHTML = "";

  CATEGORIAS.forEach(cat => {
    // Píldora de nav
    const pill = document.createElement("a");
    pill.href = `#${cat.id}`;
    pill.className = "pill-nav";
    pill.textContent = `${cat.icono} ${cat.nombre}`;
    nav.appendChild(pill);

    // Sección
    const sec = document.createElement("section");
    sec.className = "seccion-categoria";
    sec.id = cat.id;

    const header = document.createElement("div");
    header.className = "encabezado-categoria fade-up";
    header.innerHTML = `
      <div class="encabezado-categoria-regla">
        <h2>${cat.icono} ${cat.nombre}</h2>
      </div>
      <p class="cat-sub">${cat.sub}</p>`;
    sec.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "grid-productos";

    const productos = PRODUCTOS.filter(p => p.categoria === cat.id);
    if (productos.length === 0) {
      grid.innerHTML = `<p class="vacio">Aún no hay productos aquí. ¡Vuelve pronto!</p>`;
    } else {
      productos.forEach(p => grid.appendChild(crearTarjetaProducto(p, cat)));
    }

    sec.appendChild(grid);
    contenedor.appendChild(sec);
  });
}

function aplicarTemporada() {
  const t = obtenerTemporadaActiva();
  document.getElementById("cinta-temporada").innerHTML =
    `<span class="cinta-emoji">${t.emoji}</span>` +
    `<span class="cinta-texto"><strong>${t.titulo}</strong> — ${t.mensaje}</span>`;
}

function renderizarFooter() {
  // Zonas de domicilio
  const listaZonas = document.getElementById("lista-zonas");
  listaZonas.innerHTML = "";
  CONFIG.zonasDomicilio.forEach(z => {
    const li = document.createElement("li");
    li.textContent = z.costo === 0 ? `${z.zona}: domicilio gratis ✓` : `${z.zona}: ${formatearPrecio(z.costo)}`;
    listaZonas.appendChild(li);
  });

  // Métodos de pago
  const footerPagos = document.getElementById("footer-pagos");
  if (footerPagos && CONFIG.metodosPago) {
    footerPagos.innerHTML = CONFIG.metodosPago
      .map(m => `<span class="badge-pago">${m}</span>`)
      .join("");
  }

  // Redes
  const tn = document.getElementById("link-tiktok-nidito");
  const tl = document.getElementById("link-tiktok-lumina");
  if (CONFIG.redes.tiktokNiditoDeAmor) tn.href = CONFIG.redes.tiktokNiditoDeAmor;
  else tn.style.display = "none";
  if (CONFIG.redes.tiktokLumina) tl.href = CONFIG.redes.tiktokLumina;
  else tl.style.display = "none";

  // WhatsApp flotante
  document.getElementById("whatsapp-flotante").href =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hola, Amor Eterno 👋 Tengo una pregunta.")}`;

  // Footer base
  document.getElementById("frase-familiar").textContent = CONFIG.fraseFamiliar;
  document.getElementById("anio-actual").textContent = new Date().getFullYear();
}

// Animaciones al hacer scroll
function iniciarObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarTemporada();
  renderizarCategorias();
  renderizarFooter();
  // Observer después de que main.js renderice todo
  requestAnimationFrame(() => iniciarObserver());
});
