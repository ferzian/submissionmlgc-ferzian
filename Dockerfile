# Gunakan Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode
COPY . .

# Ekspose port
EXPOSE 8080

# Jalankan aplikasi
CMD ["node", "src/server/server.js"]
