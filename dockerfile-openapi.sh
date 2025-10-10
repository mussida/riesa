#!/bin/bash
 
set -ue
 
curl http://127.0.0.1:8000/api/openapi.json -o openapi.json
 
docker run --rm -v "${PWD}:/local" -v "${PWD}/openapi.json:/openapi/openapi.json" openapitools/openapi-generator-cli generate --skip-validate-spec -i /openapi/openapi.json -g typescript-angular -o /local/src/app/tmp_api -p ngVersion=19.0.0 --additional-properties=stringEnums=true
 
rm openapi.json
rm -rf src/app/api
 
mv src/app/tmp_api src/app/api