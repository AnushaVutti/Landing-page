FROM node:9.6.1 as node
WORKDIR /usr/src
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run build

# Stage 2
FROM node
RUN npm install http-server -g
CMD ["http-server","-p","4200", "dist/landing"]
