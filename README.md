# PruebaAngular

El proyecto ha sido creado con Angular CLI y con la versión 16 de Angular.

## REQUISITOS

Es importante tener mínimo Node 18 para ejecutar el proyecto ya que se usan algunas características implementadas a partir de esa version como el modo `--watch` para el servidor.

Importante lanzar el comando `npm install` antes de ejecutar el servidor o la app.

## API

El proyecto incluye una pequeña API desarrollada con javascript vanilla ubicada en la carpeta `server` del proyecto. Hay que lanzar el comando `npm run server:dev` para lanzar el servidor.

## APP Frontend

La aplicación utiliza Bootstrap 5.X para el diseño. Consta de un solo módulo, llamado `users.module` con rutas propias y un único componente que implementa el listado y el filtro.

Para arrancar la app frontend, hay que lanzar el comando `npm start`.

Importante: Hay que tener arrancado el back para que funcione. Se puede abrir una consola para el proceso del back y otra para la app web.

### Servicios

Existe un único servicio encargado de llamar a la API para la extracción de datos dentro del directorio `services`.

### Interfaces

En la carpeta `interfaces` dentro de user, existen diversas interfaces para tipar datos y respuestas del back.


### Test Unitarios

Se han implementado test unitarios para el componente de listado `user-list`. Se pueden comprobar lanzando el comando `npm run test`
