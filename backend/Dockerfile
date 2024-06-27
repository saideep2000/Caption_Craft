# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if there is a build step, e.g., with TypeScript)
# Uncomment the following line if you have a build step
# RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app .

# Expose port 3000 (or whatever port your application runs on)
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
