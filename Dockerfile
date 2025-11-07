# Multi-stage build for React application

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Accept build arguments for environment variables
# PUBLIC_URL is used by Create React App for asset paths
# Empty string = absolute paths from root (recommended for nginx)
ARG PUBLIC_URL=
ARG REACT_APP_ENABLE_VISUAL_EDITS
ARG REACT_APP_ENABLE_HEALTH_CHECK
ARG DISABLE_HOT_RELOAD

# Set as environment variables for the build process
ENV PUBLIC_URL=${PUBLIC_URL}
ENV REACT_APP_ENABLE_VISUAL_EDITS=${REACT_APP_ENABLE_VISUAL_EDITS}
ENV REACT_APP_ENABLE_HEALTH_CHECK=${REACT_APP_ENABLE_HEALTH_CHECK}
ENV DISABLE_HOT_RELOAD=${DISABLE_HOT_RELOAD}

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Production
FROM nginx:alpine

# Install wget for healthcheck (lightweight and commonly available)
RUN apk add --no-cache wget || true

# Copy built assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

