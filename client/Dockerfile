FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev --no-audit
COPY ./ ./
CMD ["npm", "run", "dev"]
