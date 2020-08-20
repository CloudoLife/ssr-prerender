
FROM node:14.8.0

ARG WORKDIR=/app
RUN mkdir ${WORKDIR}
WORKDIR ${WORKDIR}

COPY google-chrome-stable_current_amd64.deb .
RUN apt-get update -qq && \
    apt install -y ./google-chrome-stable_current_amd64.deb

COPY package.json package-lock.json server.js ./
RUN npm i

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD [ "node", "server.js"]