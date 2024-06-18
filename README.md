# Social Links Profile

Este proyecto es una tarjeta de perfil de usuario con enlaces a sus redes sociales, utilizando HTML, SASS, y Gulp para la automatización de tareas.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)


## Descripción

El objetivo de este proyecto es crear una tarjeta de perfil estilizada con enlaces a redes sociales. Utiliza Gulp para la automatización de tareas, incluyendo la compilación de SASS a CSS, la optimización de imágenes, y el hot reload para un desarrollo más ágil.

## Características

- **Compilación de SASS**: Convierte archivos SASS a CSS.
- **Autoprefixer y CSSNano**: Añade prefijos de navegadores automáticamente y minifica el CSS.
- **Optimización de Imágenes**: Reduce el tamaño de las imágenes usando gulp-imagemin.
- **Hot Reload**: Actualiza automáticamente el navegador al realizar cambios.
- **Enlaces a Redes Sociales**: Incluye enlaces a perfiles de GitHub, Frontend Mentor, LinkedIn, Twitter e Instagram.

## Instalación

Para instalar y configurar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Leonhardtjs/social-links-profile.git
   cd social-links-profile

2. Instala dependencias
   ```bash
   npm install

# Uso

1. Para iniciar el servidor de desarrollo con hot reload:
   ```bash
   npm run dev

2. Para compilar los archivos para producción:
   ```bash
   npm run build


# Estructura del proyecto

```plaintext
.
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   ├── js
│   │   └── main.js
│   ├── sass
│   │   └── main.scss
│   └── index.html
├── gulpfile.mjs
├── package.json
└── README.md


   