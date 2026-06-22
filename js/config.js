// ============================================
// CONFIGURACIÓN DEL NEGOCIO — Amor Eterno
// Edita SOLO los valores de aquí abajo.
// ============================================

const CONFIG = {
  // Número de WhatsApp con indicativo (57 + 10 dígitos, sin espacios ni +)
  whatsapp: "573214946953",

  // Contraseña del panel de administración
  adminPassword: "Admin1628.",

  // Datos del repositorio en GitHub (para el panel admin)
  githubUser: "davidq16",
  githubRepo: "amor-eterno",

  // Redes sociales (deja "" si no quieres mostrar)
  redes: {
    tiktokNiditoDeAmor: "https://www.tiktok.com/@nidito.deamoor",
    tiktokLumina: "https://www.tiktok.com/@lumin.a4"
  },

  // Zonas de domicilio. costo: 0 = gratis
  zonasDomicilio: [
    { zona: "Zona principal", costo: 0 },
    { zona: "Resto de la ciudad", costo: 6000 },
    { zona: "Municipios cercanos", costo: 12000 }
  ],

  // Métodos de pago aceptados
  metodosPago: ["Nequi", "Daviplata", "PSE", "Volt", "Efectivo", "Contraentrega"],

  // Frase del footer
  fraseFamiliar: "Hecho con cariño."
};
