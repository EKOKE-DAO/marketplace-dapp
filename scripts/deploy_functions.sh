#!/bin/bash

set -e

deploy_marketplace_dapp() {
  INSTALL_MODE="$1"
  NETWORK="$2"
  $MARKETPLACE_DAPP_PRINCIPAL="$3"

  echo "deploying marketplace-dapp canister $MARKETPLACE_DAPP_PRINCIPAL"

  dfx deploy --mode=$INSTALL_MODE --yes --network="$NETWORK" marketplace-dapp
}
