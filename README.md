# Amor Eterno — Sitio web

Sitio para Nidito de Amor, Lúmina, Detalles, Ropa Colombia y Servicios.
Pedidos por WhatsApp, sin pasarela de pago. Temporada de la cinta superior
cambia sola según la fecha.

## Estructura del proyecto

```
amor-eterno/
├── index.html          <- No lo edites casi nunca
├── css/style.css        <- Diseño. Editar solo si quieren cambiar colores
├── js/
│   ├── config.js         <- WhatsApp, zonas de domicilio, redes  ✅ EDITAR AQUÍ
│   ├── productos.js       <- Productos                            ✅ EDITAR AQUÍ
│   ├── temporadas.js      <- Fechas de cada temporada              ✅ EDITAR AQUÍ
│   └── main.js            <- Lógica. No tocar salvo que sepan qué hacen
└── img/                  <- Fotos, una carpeta por categoría
```

**Para el día a día solo necesitan tres archivos: `config.js`, `productos.js`
y `temporadas.js`. Cada uno trae instrucciones por dentro en comentarios.**

## Cómo agregar un producto

1. Abre `js/productos.js`
2. Copia un bloque `{ ... }` completo de un producto parecido
3. Pégalo antes del `]` final
4. Cambia `id`, `categoria`, `nombre`, `precio`, `imagen`, `descripcion`
5. Guarda y sube los cambios a GitHub

## Cómo cambiar el número de WhatsApp

Abre `js/config.js` y reemplaza el valor de `whatsapp` por el número real,
con indicativo de país y sin espacios ni símbolos (ejemplo: `573001112233`).

## Cómo funciona la temporada automática

`js/temporadas.js` tiene una lista de temporadas con fecha de inicio y fin.
Cada vez que alguien visita la página, el sitio revisa la fecha de hoy y
muestra la cinta de la temporada que corresponda. Si ninguna fecha coincide,
muestra la temporada `default`. Para agregar una temporada nueva (Navidad,
amor y amistad, etc.) solo agreguen un bloque más siguiendo el mismo formato.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (público), por ejemplo `amor-eterno`
2. Sube TODO el contenido de esta carpeta al repositorio (manteniendo la
   estructura de carpetas tal cual está)
3. En el repositorio, ve a **Settings → Pages**
4. En "Branch", selecciona `main` y la carpeta `/ (root)` → Save
5. Espera 1-2 minutos. La URL quedará como:
   `https://tu-usuario.github.io/amor-eterno/`

## Dominio propio (opcional, más adelante)

1. Compra el dominio en Namecheap, GoDaddy o similar
2. En el repositorio, ve a **Settings → Pages → Custom domain** y escribe
   el dominio
3. En el panel del proveedor del dominio, agrega los registros DNS que
   GitHub indique (suele ser un registro tipo CNAME apuntando a
   `tu-usuario.github.io`)
4. Puede tardar hasta 24 horas en propagarse

## Nota sobre pagos

Este sitio no procesa pagos en línea: el cliente arma el pedido, lo confirma
por WhatsApp y se acuerda el pago (efectivo, Nequi, Daviplata, etc.) al
momento de la entrega o por transferencia antes del domicilio. Si más
adelante quieren cobrar en línea directamente, se puede integrar un botón
de pago (ej. Wompi o Bold) sin tener que rehacer el sitio.
