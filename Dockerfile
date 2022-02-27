FROM mhart/alpine-node:14

RUN mkdir -p /home/app

WORKDIR /home/app

COPY dist ./dist
COPY package-lock.json .
COPY package.json .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "dist/main.js"]