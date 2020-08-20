
// prerender/prerender: Node server that uses Headless Chrome to render a javascript-rendered page as HTML. To be used in conjunction with prerender middleware.
// https://github.com/prerender/prerender
const prerender = require('prerender');

console.log("PORT =", process.env.PORT || '3000')
chromeFlags = process.env.CHROME_FLAGS && process.env.CHROME_FLAGS.split(',');

chromeFlags = chromeFlags || ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars']
console.log("chromeFlags =", chromeFlags)

const server = prerender({
  chromeFlags: chromeFlags,
  // logRequests: true,
});

const storageCache = process.env.STORAGE_CACHE
console.log("storageCache =", storageCache || 'memory')

if ( storageCache == 'redis') {
  // JonathanBennett/prerender-redis-cache
  // https://github.com/jonathanbennett/prerender-redis-cache
  console.log("REDISTOGO_URL =", process.env.REDISTOGO_URL)
  console.log("REDISCLOUD_URL =", process.env.REDISCLOUD_URL)
  console.log("REDISGREEN_URL =", process.env.REDISGREEN_URL)
  console.log("REDIS_URL =", process.env.REDIS_URL)
  server.use(require('prerender-redis-cache'));
}  
else {
  // prerender/prerender-memory-cache: In memory cache for use with Prerender server
  // https://github.com/prerender/prerender-memory-cache
  console.log("CACHE_TTL =", process.env.CACHE_TTL || 3600)
  console.log("CACHE_MAXSIZE =", process.env.CACHE_MAXSIZE || 100000)
  server.use(require('prerender-memory-cache'));
}

server.start();