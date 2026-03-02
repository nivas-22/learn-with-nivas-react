# Stage 1 - Build React App
FROM public.ecr.aws/docker/library/node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2 - Nginx Production Server
FROM public.ecr.aws/docker/library/nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
