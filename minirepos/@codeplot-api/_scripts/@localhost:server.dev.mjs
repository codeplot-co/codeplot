#!/usr/bin/env zx

await $`
rm -rf _tmp && mkdir _tmp

cue export _cue/* --expression generateEnvVariablesLocalhostFile --out text > _tmp/.env
cue export _cue/* --expression dockerComposeLocalhost --out yaml > _tmp/docker-compose.yaml
export $(cat _tmp/.env | xargs)

pnpm compile

docker context use $DOCKER_CONTEXT
docker build -t $DOCKER_IMAGE .
docker compose --file ./_tmp/docker-compose.yaml up -d

node_modules/.bin/tsup src/main.ts --watch
`;
