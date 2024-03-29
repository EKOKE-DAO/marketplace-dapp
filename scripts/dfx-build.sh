#!/bin/bash

# build frontend
yarn
yarn build

dfx build
