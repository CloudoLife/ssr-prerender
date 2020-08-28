
# SSR-Prerender
[ssr-prerender](https://github.com/CloudoLife/ssr-prerender) is a wrapper to use [Prerender](https://prerender.io) to prerender HTML for SEO. It can run by [Docker Compose](https://docs.docker.com/compose/), [Docker](https://www.docker.com/) or [Docker Compose](https://docs.docker.com/compose/) or Shell(Traditional).

## Prerender
Prerender is a node server that uses Headless Chrome to render HTML, screenshots, PDFs, and HAR files out of any web page. The Prerender server listens for an http request, takes the URL and loads it in Headless Chrome, waits for the page to finish loading by waiting for the network to be idle, and then returns your content.

It have some advantages:
- Loosely coupled
  No code or only a small codes need to modify no matter what technical architecture is used within Front-End or Back-End.

- Out of the box
  Provide cache support, multiple render types(HTML, Image, PDF, HAR), Allowlist, Blacklist, etc.

## Deployment Diagram

![SSR-Prerender Deployment](https://github.com/CloudoLife/ssr-prerender/blob/master/SSR-Prerender%20Deployment%20v1.1.png?raw=true)

Powered by [PlantUML](https://plantuml.com/deployment-diagram)

## Prerequisites

- [Docker](https://www.docker.com/) or [Docker Compose](https://docs.docker.com/compose/)

- Google Chrome
It is optional while run within the docker container.

## Configuration
You can change configuration within [.env](.env) file.
```env
# prerender/prerender: Node server that uses Headless Chrome to render a javascript-rendered page as HTML. To be used in conjunction with prerender middleware.
# https://github.com/prerender/prerende
CHROME_FLAGS="--no-sandbox, --headless, --disable-gpu, --remote-debugging-port=9222, --hide-scrollbars"
LOG_REQUESTS=false
PORT=3000

# memory or redis
STORAGE_CACHE=memory

# prerender-redis-cache/prerenderRedisCache.js at master · JonathanBennett/prerender-redis-cache
# https://github.com/JonathanBennett/prerender-redis-cache/blob/master/lib/prerenderRedisCache.js
# REDISTOGO_URL=redis://redis:6379/0
# REDISCLOUD_URL=redis://redis:6379/0
# REDISGREEN_URL=redis://redis:6379/0
REDIS_URL=redis://redis:6379/0

# prerender/prerender-memory-cache: In memory cache for use with Prerender server
# https://github.com/prerender/prerender-memory-cache
CACHE_MAXSIZE=10000
CACHE_TTL=3600
```

## Run
Recommand to run ss-prerender with Docker Compose or Docker.

### Docker Compose
```bash
docker-compose up
```

### Docker
```bash
docker run -it --rm --name ssr-prerender -p 3000:3000 cloudolife/ssr-prerender:latest
```

### Kubernetes
TBD

### Shell
You can run ss-prerender from local shell or within a docker container.
```bash
node server.js
```

That's all.

## Test
http://localhost:3000/http://localhost:8080

## Upgrade

### Google Chrome
This repository has provider a Google Chrome version and will auto install while docker build process. But you can upgrade Google Chrome to the latest version by download and replace google-chrome-stable_current_amd64.deb file with the latest Google Chrome version.

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -O google-chrome-stable_current_amd64.deb
```
Then, run command docker build . or docker-compose buiid to rebuild it.

## References
[1] [prerender/prerender: Node server that uses Headless Chrome to render a javascript-rendered page as HTML. To be used in conjunction with prerender middleware. - https://github.com/prerender/prerender](https://github.com/prerender/prerender)

[2] [Prerender - Dynamic Rendering for Effective JavaScript SEO | Prerender - https://prerender.io/](https://prerender.io/)

[3] [Prerender - Dynamic Rendering for Effective JavaScript SEO | Prerender - https://prerender.io/documentation](https://prerender.io/documentation)

[4] [Prerender.com | Headless Chrome In The Cloud to Render HTML, Screenshots, PDFs, and HAR Files - https://prerender.com/](https://prerender.com/)

[5] [Prerender.com | Documentation - https://prerender.com/documentation](https://prerender.com/documentation)

[6] [prerender-redis-cache/prerenderRedisCache.js at master · JonathanBennett/prerender-redis-cache - https://github.com/JonathanBennett/prerender-redis-cache/blob/master/lib/prerenderRedisCache.js](https://github.com/JonathanBennett/prerender-redis-cache/blob/master/lib/prerenderRedisCache.js)

[7] [prerender/prerender-memory-cache: In memory cache for use with Prerender server - https://github.com/prerender/prerender-memory-cache](https://github.com/prerender/prerender-memory-cache)