FROM node:4.2

WORKDIR /home/arlin
COPY README.markdown README.markdown
COPY README-docker.markdown README-docker.markdown
COPY package.json package.json
COPY config/ config/
COPY public/ public/
COPY src/ src/
ENV NODE_ENV 'dev'
ENV PORT '8080'
ENV NEDB_BASE_PATH '../data'
ENV SECRET 'lots of secrets'
ENV GITHUB_CLIENT_ID 'client id'
ENV GITHUB_CLIENT_SECRET 'client secret'
RUN npm install --production
CMD ["node", "src/index.js"]
CMD ["node", "src/app.js"]
