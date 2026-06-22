// ============================================
// TEMPORADAS — Amor Eterno
// La cinta de arriba de la página cambia SOLA según la fecha de hoy.
// No tienes que hacer nada para que esto funcione.
//
// Para agregar o mover una temporada, edita "inicio" y "fin"
// en formato "MM-DD" (mes-día), por ejemplo "08-01" es 1 de agosto.
//
// Si dos temporadas se cruzaran en fechas, gana la primera que
// aparece en esta lista de arriba hacia abajo.
//
// La última, "default", es la que se muestra el resto del año
// cuando ninguna otra temporada está activa. Siempre debe quedar
// de última y no necesita fechas.
// ============================================

const TEMPORADAS = [
  {
    id: "mundial",
    inicio: "06-01",
    fin: "07-19",
    emoji: "⚽🇨🇴",
    titulo: "Edición Mundial",
    mensaje: "Pedidos con sabor a gol — ¡vamos Colombia!"
  },
  {
    id: "cometas",
    inicio: "08-01",
    fin: "08-31",
    emoji: "🪁",
    titulo: "Agosto de Cometas",
    mensaje: "Que tu pedido vuele alto este agosto."
  },
  {
    id: "amor-amistad",
    inicio: "09-01",
    fin: "09-21",
    emoji: "💌",
    titulo: "Mes del Amor y la Amistad",
    mensaje: "Sorprende a esa persona especial."
  },
  {
    id: "navidad",
    inicio: "12-01",
    fin: "12-31",
    emoji: "🎄",
    titulo: "Navidad",
    mensaje: "Regalos hechos con amor para esta Navidad."
  },
  {
    id: "default",
    emoji: "💗",
    titulo: "Amor Eterno",
    mensaje: "Hecho con cariño, para ti."
  }
];

// Devuelve la temporada activa hoy. No edites esta función,
// solo la lista de arriba.
function obtenerTemporadaActiva() {
  const hoy = new Date();
  const mesDia = String(hoy.getMonth() + 1).padStart(2, "0") + "-" + String(hoy.getDate()).padStart(2, "0");

  for (const temporada of TEMPORADAS) {
    if (temporada.id === "default") continue;
    if (mesDia >= temporada.inicio && mesDia <= temporada.fin) {
      return temporada;
    }
  }
  return TEMPORADAS.find(t => t.id === "default");
}
