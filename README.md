# elevaDev

**elevaDev** es una landing page corporativa desarrollada para promocionar servicios de desarrollo web dirigidos a pequeños negocios, emprendedores y marcas que desean mejorar su presencia digital, ordenar sus productos y recibir más consultas a través de canales como WhatsApp.

El proyecto está enfocado en presentar servicios de manera clara, profesional y orientada a conversión, utilizando una interfaz moderna, responsive y optimizada para captar el interés de posibles clientes.

## Descripción

Esta web funciona como página principal de presentación para elevaDev, una propuesta de servicios digitales centrada en soluciones web accesibles para negocios pequeños.

La landing incluye secciones estratégicas como servicios, beneficios, paquetes, proceso de trabajo, demostración visual de catálogo y llamadas a la acción para contactar por WhatsApp.

## Características principales

* Diseño corporativo, moderno y minimalista.
* Interfaz responsive adaptada a dispositivos móviles.
* Navbar fijo con navegación suave entre secciones.
* CTAs funcionales orientados a conversión.
* Integración directa con WhatsApp.
* Sección de servicios para pequeños negocios.
* Paquetes de desarrollo web con precios referenciales.
* Sección de proyectos reales entregados a clientes.
* Demo visual de catálogo digital.
* Sección de proceso de trabajo.
* Favicon y título personalizados.
* Despliegue en Vercel.

## Tecnologías utilizadas

* React
* Vite
* Tailwind CSS
* shadcn/ui
* Lucide React
* Framer Motion
* Vercel

## Servicios presentados

La landing promociona servicios como:

* Landing pages para negocios.
* Catálogos web con pedido por WhatsApp.
* Tiendas pequeñas personalizadas.
* Migración desde Shopify o WordPress.
* Mejora de webs existentes.
* Mantenimiento y soporte mensual.

## Estructura del proyecto

```bash
elevaDev/
├── public/
│   ├── demo/
│   │   ├── polos.jpg
│   │   ├── casacas.jpg
│   │   ├── accesorios.jpg
│   │   └── ofertas.jpg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/        # Navbar y Footer
│   │   ├── sections/       # Una sección de la landing por archivo
│   │   └── ui/             # Componentes base (Button, Card) + helpers de UI
│   ├── data/
│   │   └── site.js         # Todo el contenido y textos del sitio en un solo lugar
│   ├── lib/
│   │   ├── utils.js         # Helper cn() para clases de Tailwind
│   │   └── whatsapp.js       # Helpers de WhatsApp, email y scroll
│   ├── App.jsx              # Compone las secciones de la landing
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Para editar cualquier texto, precio o dato de contacto, basta con modificar `src/data/site.js`. Para agregar un nuevo proyecto real a la sección "Proyectos", se añade un objeto al arreglo `projects` en ese mismo archivo.

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

## Estado del proyecto

Proyecto en desarrollo y mejora continua.
Se seguirán agregando ajustes visuales, optimización de contenido, mejoras de conversión y posibles demos adicionales para distintos tipos de negocios.

## Autor

Desarrollado por **Jhonatan Carrasco**.
