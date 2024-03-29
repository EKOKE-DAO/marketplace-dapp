#!/bin/bash

cd "$(dirname "$0")" || exit 1

CANISTER_IDS="../.dfx/local/canister_ids.json"
MARKETPLACE_DAPP="$(cat "$CANISTER_IDS" | jq -r '.marketplace-dapp.local')"

source ./deploy_functions.sh

dfx stop
dfx start --background

cd ../

set -e

deploy_marketplace_dapp "reinstall" "local" "$MARKETPLACE_DAPP"

set +e

dfx stop

exit 0
