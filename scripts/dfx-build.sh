#!/bin/bash

# build frontend
yarn
yarn build:release
cd -

dfx build
