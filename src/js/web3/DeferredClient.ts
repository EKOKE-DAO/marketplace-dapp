import Web3 from 'web3';

import { ABI, CONTRACT_ADDRESS } from './contracts/Deferred';
import { ChainId } from '../components/MetamaskConnect';

export default class DeferredClient {
  private address: string;
  private web3: Web3;
  private chainId: ChainId;

  constructor(address: string, ethereum: any, chainId: ChainId) {
    this.address = address;
    this.web3 = new Web3(ethereum);
    this.chainId = chainId;
  }

  async tokenUri(tokenId: bigint): Promise<string> {
    const contract = this.getContract();
    return contract.methods.tokenUri(tokenId).call();
  }

  private getContract() {
    return new this.web3.eth.Contract(ABI, CONTRACT_ADDRESS[this.chainId]);
  }
}
