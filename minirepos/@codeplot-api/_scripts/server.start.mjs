#!/usr/bin/env zx

console.log(`Starting server in ${process.env.TARGET} mode...`);

if (process.env.TARGET === "production" || process.env.TARGET === "selfhost") {
  await $`node ./dist/main.js`;
}

if (process.env.TARGET === "localhost") {
  await $`DEBUG=codeplot:* node_modules/.bin/nodemon --watch ./dist --exec "node ./dist/main.js"`;
}
