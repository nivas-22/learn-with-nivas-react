# Stage 1 - Build React App
FROM public.ecr.aws/docker/library/node:18-alpine AS builder

WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Use npm install instead of npm ci
RUN npm install

# Copy rest of the source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2 - Nginx Production Server
FROM public.ecr.aws/docker/library/nginx:stable-alpine

# Copy built files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
