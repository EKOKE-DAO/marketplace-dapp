#!/bin/bash

dfx stop
dfx start --background --clean
dfx canister create marketplace-dapp

dfx stop
