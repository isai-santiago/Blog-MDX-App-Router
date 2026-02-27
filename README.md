# 🚀 Blog MDX - Next.js App Router (Documentación Completa)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![MDX](https://img.shields.io/badge/MDX-Content-yellow?style=for-the-badge&logo=mdx)

Este proyecto es una plataforma de blogging de alto rendimiento diseñada con las últimas tecnologías de desarrollo web. Utiliza **Next.js App Router** para una navegación ultrarrápida, **MDX** para una gestión de contenido flexible y **Tailwind CSS** para un diseño moderno y minimalista, enlace de la pagina: https://blog-mdx-app-router-plnt.vercel.app/blog

# hay una disculpa la presentacion la dejare pendiente por que hay mucho ruido en mi casa
---

## 📖 Tabla de Contenidos
- [Características Principales](#-características-principales)
- [Arquitectura del Sistema](#-arquitectura-del-sistema)
- [Stack Tecnológico](#-stack-tecnológico)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Guía de Escritura (MDX)](#-guía-de-escritura-mdx)
- [Optimización y SEO](#-optimización-y-seo)
- [Despliegue](#-despliegue)
- [Licencia](#-licencia)

---

## ✨ Características Principales

### 🚀 Rendimiento y Core Web 
- **Generación Estática (SSG):** Todos los artículos se pre-renderizan en el servidor, garantizando tiempos de carga casi instantáneos.
- **Optimización de Imágenes:** Implementación de `next/image` con soporte para WebP y lazy loading.
- **Incremental Static Regeneration (ISR):** Capacidad de actualizar contenido sin necesidad de reconstruir todo el sitio.

### ✍️ Experiencia de Contenido (DX)
- **Soporte MDX:** Escribe en Markdown tradicional pero usa componentes de React dinámicos dentro del texto.
- **Resaltado de Sintaxis:** Bloques de código enriquecidos para una visualización profesional de lenguajes.
- **Cálculo de Lectura:** Script integrado para determinar automáticamente los minutos de lectura.

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **Next.js 15** | Framework base con arquitectura de App Router |
| **TypeScript** | Desarrollo robusto con tipado estático |
| **Tailwind CSS** | Estilizado basado en utilidades y diseño responsivo |
| **MDX Bundler** | Procesamiento y compilación de archivos .mdx |
| **Lucide React** | Librería de iconos vectoriales ligeros |
| **Vercel** | Infraestructura de despliegue y Edge Network |

---

## 📂 Arquitectura del Sistema

```text
.
├── app/                    # Directorio raíz del App Router
│   ├── blog/               # Ruta principal del listado de artículos
│   │   ├── page.tsx        # Renderizado de la lista con filtros por tags
│   │   └── [slug]/         # Página dinámica para la lectura individual
│   ├── layout.tsx          # Definición de Navbar, Footer y contextos globales
│   └── page.tsx            # Landing page principal
├── components/             # Biblioteca de componentes React
│   ├── ui/                 # Componentes atómicos (Botones, Cards, Badges)
│   └── mdx/                # Componentes específicos para inyectar en Markdown
├── content/                # Base de datos de contenido (Archivos .mdx)
├── lib/                    # Utilidades de procesamiento de texto y fechas
├── public/                 # Assets estáticos (Imágenes de posts, logos)
├── styles/                 # Configuraciones globales de CSS
├── next.config.mjs         # Configuración del servidor y plugins de MDX
└── tailwind.config.ts      # Tokens de diseño y extensiones de tema
```

---

## 🚀 Instalación y Configuración

### 1. Clonación del Repositorio
```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

### 2. Gestión de Dependencias
```bash
npm install
```

### 3. Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto:
```env
NEXT_PUBLIC_SITE_URL=https://tu-blog.vercel.app
```

### 4. Modo de Desarrollo
```bash
npm run dev
```

---

## ✍️ Guía de Escritura (MDX)

Cada artículo se define mediante un archivo `.mdx` en la carpeta `/content/`. Es obligatorio incluir el Frontmatter:

```mdx
---
title: "Cómo construir un blog con Next.js"
date: "2026-02-26"
description: "Guía paso a paso para dominar MDX y el App Router."
author: "Isai"
tags: ["Next.js", "Tutorial"]
image: "/images/blog/portada.jpg"
---

## Cuerpo del Post
Contenido en **Markdown** estándar.

### Ejemplo de Código
```javascript
console.log("Resaltado funcionando");
```
```

---

## 📈 Optimización y SEO

- **Metadata API:** Títulos y descripciones dinámicas para cada artículo.
- **OpenGraph:** Tarjetas visuales para mejorar el compartido en redes sociales.
- **Sitemap:** Generación automática de `sitemap.xml` para indexación en Google.

---

## 🚢 Despliegue

### Vercel (Recomendado)
Conecta tu repositorio a Vercel para despliegues automáticos en cada `git push`.

### Build Manual
```bash
npm run build
npm run start
```

---

## 📄 Licencia
Este proyecto está bajo la licencia **MIT**. Eres libre de usarlo y modificarlo.

---

**Desarrollado con ❤️ por [Isai]**
*Si este proyecto te ha servido, ¡no olvides darle una estrella ⭐️ en GitHub!*
