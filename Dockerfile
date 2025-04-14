FROM node:18
WORKDIR /api
COPY . .
RUN npm install
CMD ["node", "index.js"]