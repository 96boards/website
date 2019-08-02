#!/bin/bash

if [ -z "$JEKYLLSITEBUILD" ]; then
  export JEKYLLSITEBUILD=latest
fi
if [ -z "$JEKYLL_ENV" ]; then
  export JEKYLL_ENV=staging
fi
if [ "$JEKYLL_ACTION" = "serve" ]; then
  PORTS="-p 4000:4000"
else
  PORTS=""
fi

# Are we running interactively or via Bamboo?
if [ -t 1 ]; then
  INTER="-i"
else
  INTER=""
fi

docker run \
  --cap-drop ALL \
  --rm \
  -t \
  $INTER \
  $PORTS \
  -e JEKYLL_ACTION \
  -e JEKYLL_ENV \
  -v /etc/passwd:/etc/passwd:ro \
  -v /etc/group:/etc/group:ro \
  -u "$(id -u)":"$(id -g)" \
  -v "$(pwd)":/srv/source \
  linaroits/jekyllsitebuild:"$JEKYLLSITEBUILD" \
  build-site.sh "$@"
