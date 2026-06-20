# elevaDev

**elevaDev** es una landing page corporativa desarrollada para promocionar servicios de desarrollo web dirigidos a pequeños negocios, emprendedores y marcas que desean mejorar su presencia digital, ordenar sus productos y recibir más consultas a través de canales como WhatsApp.

El proyecto está enfocado en presentar servicios de manera clara, profesional y orientada a conversión, utilizando una interfaz moderna, minimalista, responsive y optimizada para captar el interés de posibles clientes.

## Descripción

Esta web funciona como página principal de presentación para elevaDev, una propuesta de servicios digitales centrada en soluciones web accesibles para negocios pequeños.

La landing incluye secciones estratégicas como servicios, un caso de éxito real (Balkan Blood), beneficios, paquetes, proceso de trabajo y llamadas a la acción para contactar por WhatsApp o correo.

## Características principales

* Diseño corporativo, oscuro, moderno y minimalista, basado en la marca real de elevaDev (logo y paleta violeta/azul).
* Interfaz responsive adaptada a dispositivos móviles, con botón flotante de WhatsApp en pantallas pequeñas.
* Navbar fijo con navegación suave entre secciones.
* CTAs funcionales orientados a conversión (WhatsApp y correo).
* Sección de servicios para pequeños negocios.
* **Caso de éxito real:** Balkan Blood, tienda de streetwear con tema WordPress a medida e integración Shopify ([repositorio](https://github.com/jcarrascop13/balkan-blood-theme)).
* Paquetes de desarrollo web con precios referenciales.
* Sección de proceso de trabajo.
* Imágenes de catálogo optimizadas en formato WebP (ligeras y rápidas de cargar).
* SEO básico: metadatos, descripción, Open Graph y `robots.txt`.
* Favicon y título personalizados.
* Despliegue en Vercel.

## Tecnologías utilizadas

* React 19
* Vite
* Tailwind CSS 4
* shadcn/ui (Button, Card)
* Lucide React
* Framer Motion
* Vercel

## Servicios presentados

La landing promociona servicios como:

* Catálogos web con pedido por WhatsApp.
* Landing pages para negocios.
* Tiendas pequeñas personalizadas.
* Migración desde Shopify o WordPress.
* Mantenimiento y soporte mensual.

## Estructura del proyecto

```bash
elevaDev/
├── public/
│   ├── demo/                  # Imágenes de catálogo (WebP, optimizadas)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, botón flotante de WhatsApp
│   │   ├── sections/          # Hero, Servicios, Proyectos, Beneficios,
│   │   │                      # Paquetes, Proceso, Contacto
│   │   └── ui/                # Button, Card (shadcn/ui)
│   ├── data/
│   │   └── content.js         # Todo el contenido editable de la web
│   ├── lib/
│   │   ├── site.js            # Helpers: WhatsApp, correo, scroll, contacto
│   │   └── utils.js           # cn() para clases Tailwind
│   ├── App.jsx                # Composición de secciones
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Para editar textos, precios o servicios, basta con modificar `src/data/content.js`. No es necesario tocar los componentes.

## Instalación y uso local

Clonar el repositorio:

```bash
git clone https://github.com/jcarrascop13/elevaDev.git
```

Entrar al proyecto:

```bash
cd elevaDev
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```bash
http://localhost:5173/
```

## Crear versión de producción

Para generar la versión optimizada del proyecto:

```bash
npm run build
```

Para previsualizar la versión de producción localmente:

```bash
npm run preview
```

## Despliegue

El proyecto está preparado para desplegarse en Vercel.

Configuración recomendada:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Contacto

**elevaDev**
Desarrollo web para pequeños negocios.

Correo: [jcarrascop13@gmail.com](mailto:jcarrascop13@gmail.com)
WhatsApp: 935 452 663
GitHub: [github.com/jcarrascop13](https://github.com/jcarrascop13)

## Estado del proyecto

Proyecto en desarrollo y mejora continua.
Se seguirán agregando ajustes visuales, optimización de contenido, mejoras de conversión y nuevos casos de éxito a medida que se sumen clientes.

## Autor

Desarrollado por **Jhonatan Carrasco**.
