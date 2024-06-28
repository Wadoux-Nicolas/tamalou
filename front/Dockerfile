FROM node:alpine AS builder

WORKDIR /src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /src/app/dist /usr/share/nginx/html

EXPOSE 80