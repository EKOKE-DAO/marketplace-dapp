import Web3 from 'web3';

import { ABI, CONTRACT_ADDRESS } from './contracts/EkokePresale';
import { ChainId } from '../components/MetamaskConnect';

export default class EkokePresaleClient {
  private address: string;
  private web3: Web3;
  private chainId: ChainId;

  constructor(address: string, ethereum: any, chainId: ChainId) {
    this.address = address;
    this.web3 = new Web3(ethereum);
    this.chainId = chainId;
  }

  async buyTokens(amount: bigint) {
    const contract = this.getContract();
    return contract.methods.buyTokens(amount).send({ from: this.address });
  }

  async claimTokens() {
    const contract = this.getContract();
    return contract.methods.claimTokens().send({ from: this.address });
  }

  async softCap(): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.SOFT_CAP_USDT().call();
  }

  async usdtRaised(): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.usdtRaised().call();
  }

  async tokensSold(): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.tokensSold().call();
  }

  async presaleCap(): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.presaleCap().call();
  }

  async refund() {
    const contract = this.getContract();
    return contract.methods.refund().send({ from: this.address });
  }

  async ekokeBalance(): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.balanceOf(this.address).call();
  }

  async usdBalance(): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.usdInvested(this.address).call();
  }

  async tokenPrice(): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.tokenPrice().call();
  }

  async isOpen(): Promise<boolean> {
    const contract = this.getContract();
    return contract.methods.isOpen().call();
  }

  async hasFailed(): Promise<boolean> {
    const contract = this.getContract();
    return contract.methods.hasFailed().call();
  }

  presaleAddress(): string {
    return CONTRACT_ADDRESS[this.chainId];
  }

  private getContract() {
    return new this.web3.eth.Contract(ABI, CONTRACT_ADDRESS[this.chainId]);
  }
}
