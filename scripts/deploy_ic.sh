#!/bin/bash

cd "$(dirname "$0")" || exit 1

if [ -z "$1" ]; then
  echo "Usage: $0 <identity>"
  exit 1
fi

IDENTITY="$1"

CANISTER_IDS="../.dfx/local/canister_ids.json"
MARKETPLACE_DAPP="$(cat "$CANISTER_IDS" | jq -r '.marketplace-dapp.ic')"

source ./deploy_functions.sh

dfx identity use "$IDENTITY"

cd ../

set -e

deploy_marketplace_dapp "reinstall" "ic" "$MARKETPLACE_DAPP"

set +e

exit 0
