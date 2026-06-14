# Trabajo Backend Segundo Laboratorio - Gestión de Envíos

Este proyecto es una API REST funcional desarrollada con **Node.js**, **Express** y **MongoDB** (usando Mongoose). Su objetivo principal es gestionar el ciclo de vida de envíos, permitiendo su creación, consulta y actualización de estados.

## Características

- **Gestión de Envíos:** Creación de nuevos registros de envío con validación de datos.
- **Búsqueda Específica:** Consulta de envíos mediante un identificador personalizado.
- **Actualización de Estado:** Cambiar el estado de un envío de forma dinámica.
- **Filtros:** Obtención de una lista filtrada de envíos con estado "activo".
- **Limpieza de Datos:** Las respuestas JSON están configuradas para no exponer campos internos de MongoDB como `_id` o `__v`.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- Node.js (v14 o superior)
- MongoDB (Local o una cuenta en MongoDB Atlas)

## Instalación

1. Navega a la carpeta del proyecto:
   ```bash
   cd "Trabajo Backend Segundo Laboratorio"
   ```

2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

3. Configura tu conexión a MongoDB en las variables de entorno (.env)

## Ejecución

Para iniciar el servidor, utiliza el comando:
```bash
node index.js
```

## Endpoints de la API

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| **POST** | `/envios` | Crea un nuevo envío. |
| **GET** | `/envios/:id` | Obtiene un envío por su ID. |
| **PUT** | `/envios/:id` | Actualiza el estado de un envío existente. |
| **GET** | `/envios/activos` | Lista todos los envíos con estado "activo". |

## Estructura de los json

### Creación de envío (POST /envios)

```json
{
  "destinatario": "Juan Pérez",
  "direccion": "Calle Falsa 123",
  "estado": "activo"
}
```

### Actualización de estado (PUT /envios/:id)

```json
{
  "id":id,
  "estado": "entregado"
}
```