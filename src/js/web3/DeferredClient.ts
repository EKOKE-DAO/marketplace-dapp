import Web3 from 'web3';

import { ABI, CONTRACT_ADDRESS } from './contracts/Deferred';
import { ChainId } from '../components/MetamaskConnect';

interface Contract {
  contractId: bigint;
  metadataUri: string;
  buyers: string[];
  sellers: {
    seller: string;
    tokenFromId: bigint;
    tokenToId: bigint;
  }[];
  ekokeReward: bigint;
  tokenPriceUsd: bigint;
  tokenFromId: bigint;
  tokenToId: bigint;
  closed: boolean;
}

export default class DeferredClient {
  private address: string;
  private web3: Web3;
  private chainId: ChainId;

  constructor(address: string, ethereum: any, chainId: ChainId) {
    this.address = address;
    this.web3 = new Web3(ethereum);
    this.chainId = chainId;
  }

  async nextTokenIdToBuy(contractId: bigint): Promise<bigint> {
    const contract = this.__getContract();
    return contract.methods.nextTokenIdToBuy(contractId).call({
      from: this.address,
    });
  }

  async contractProgress(contractId: bigint): Promise<bigint> {
    const contract = this.__getContract();
    return contract.methods.contractProgress(contractId).call();
  }

  async contractCompleted(contractId: bigint): Promise<boolean> {
    const contract = this.__getContract();
    return contract.methods.contractCompleted(contractId).call();
  }

  async tokenUri(tokenId: bigint): Promise<string> {
    const contract = this.__getContract();
    return contract.methods.tokenUri(tokenId).call();
  }

  async ownerOf(tokenId: bigint): Promise<string> {
    const contract = this.__getContract();
    return contract.methods.ownerOf(tokenId).call();
  }

  async balanceOf(address: string): Promise<bigint> {
    const contract = this.__getContract();
    return contract.methods.balanceOf(address).call();
  }

  async totalSupply(): Promise<bigint> {
    const contract = this.__getContract();
    return contract.methods.totalSupply().call();
  }

  async tokenContract(tokenId: bigint): Promise<Contract> {
    const contract = this.__getContract();
    return contract.methods.tokenContract(tokenId).call();
  }

  async getContract(contractId: bigint): Promise<Contract> {
    const contract = this.__getContract();
    return contract.methods.getContract(contractId).call();
  }

  private __getContract() {
    return new this.web3.eth.Contract(ABI, CONTRACT_ADDRESS[this.chainId]);
  }
}
