#!/usr/bin/env bash

git pull && npx quartz build; echo "www.selfsynthesized.net" > ./docs/CNAME; git add .; git commit -am "update"; git push

