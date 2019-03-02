FROM node:8.11.3-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm vue-cli

RUN npm install vue
RUN npm install -g @vue/cli
RUN npm i vue-template-compiler
RUN npm install --save cytoscape
RUN npm install --save vuex

CMD ["/bin/sh"]
