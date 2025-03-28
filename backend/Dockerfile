# First Stage: Builder
FROM node:21-alpine AS builder 

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Second Stage: Final Image
FROM node:21-alpine 

WORKDIR /app

# Copy dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy remaining application files
COPY . . 

# Expose necessary port (if your app runs on port 5000)
EXPOSE 5000 

# Start the application
CMD ["node", "index.js"]
