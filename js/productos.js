// ============================================
// PRODUCTOS — Amor Eterno
// Para agregar un producto nuevo, copia un bloque { ... } completo,
// pégalo antes del corchete final ] y cambia los datos.
// La página se arma sola, no necesitas tocar el HTML ni el CSS.
//
// CATEGORÍAS VÁLIDAS (no inventar otras, deben ir exactas):
//   "nidito"     -> Nidito de Amor (crochet, amigurumis, tejidos)
//   "lumina"     -> Lúmina (belleza, Natura, perfumes)
//   "detalles"   -> Detalles (rosas eternas, alcancías personalizadas)
//   "ropa"       -> Ropa Colombia
//   "servicios"  -> Servicios (uñas, cejas) — estos NO tienen domicilio
//
// IMAGEN: pon tu foto dentro de la carpeta img/ (ya hay una subcarpeta
// por categoría, ej: img/nidito/) y escribe aquí la ruta, ej:
//   "img/nidito/pulpo-rosado.jpg"
// Si todavía no tienes la foto, deja "" y se mostrará un cuadro
// de "foto próximamente" automáticamente.
// ============================================

const PRODUCTOS = [
  // ---------- NIDITO DE AMOR (crochet) ----------
  {
    id: "nidito-001",
    categoria: "nidito",
    nombre: "Amigurumi pulpo",
    precio: 35000,
    imagen: "",
    descripcion: "Tejido a mano, 100% personalizable en colores."
  },
  {
    id: "nidito-002",
    categoria: "nidito",
    nombre: "Cobija tejida a crochet",
    precio: 95000,
    imagen: "",
    descripcion: "Tamaño sencillo, hecha a pedido."
  },

  // ---------- LÚMINA (belleza) ----------
  {
    id: "lumina-001",
    categoria: "lumina",
    nombre: "Perfume Natura (línea variada)",
    precio: 68000,
    imagen: "",
    descripcion: "Pregunta disponibilidad de fragancia."
  },
  {
    id: "lumina-002",
    categoria: "lumina",
    nombre: "Set de cuidado facial",
    precio: 52000,
    imagen: "",
    descripcion: "Producto Natura, apto piel sensible."
  },

  // ---------- DETALLES (rosas eternas, alcancías) ----------
  {
    id: "detalles-001",
    categoria: "detalles",
    nombre: "Rosa eterna en caja",
    precio: 45000,
    imagen: "",
    descripcion: "Dura hasta un año, ideal para regalo."
  },
  {
    id: "detalles-002",
    categoria: "detalles",
    nombre: "Alcancía personalizada",
    precio: 28000,
    imagen: "",
    descripcion: "Con el nombre o mensaje que tú elijas."
  },

  // ---------- ROPA COLOMBIA ----------
  {
    id: "ropa-001",
    categoria: "ropa",
    nombre: "Camiseta Colombia tricolor",
    precio: 60000,
    imagen: "",
    descripcion: "Tallas S a XL disponibles."
  },

  // ---------- SERVICIOS (sin domicilio, con agenda) ----------
  {
    id: "servicios-001",
    categoria: "servicios",
    nombre: "Uñas acrílicas",
    precio: 40000,
    imagen: "",
    descripcion: "Duración aprox. 1h30. Incluye diseño sencillo."
  },
  {
    id: "servicios-002",
    categoria: "servicios",
    nombre: "Diseño de cejas",
    precio: 20000,
    imagen: "",
    descripcion: "Perfilado + tinte."
  }
];
