# BFF en NestJS con GraphQL

Este proyecto implementa un Backend-For-Frontend (BFF) utilizando NestJS y GraphQL, consumiendo datos de dos APIs externas conectadas a bases de datos MongoDB.

## Tecnologias

- NestJS
- GraphQL
- MongoDB
- Docker
- Redis

## Requisitos

- NodeJS (v20 o superior)
- Docker
- Docker Compose

## Configuración

1. Clona el repositorio
2. Configura el enviroment considerando lo siguiente:

- En caso de usar docker compose, crear network `bff-network` y ajustar las variables de entorno en el archivo `docker-compose.yml`
- En caso de usar localhost, copia el archivo `.env.example` a `.env` y ajusta las variables de entorno según sea necesario

3. Instala las dependencias: `yarn install`

## Ejecución

### Desarrollo

```bash
docker-compose up -d
```

### Produccion

```bash
docker-compose up --build
```
