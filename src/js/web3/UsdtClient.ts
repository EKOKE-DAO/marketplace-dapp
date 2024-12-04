import Web3 from 'web3';

import { ABI, CONTRACT_ADDRESS } from './contracts/Usdt';
import { ChainId } from '../components/MetamaskConnect';

export default class UsdtClient {
  private address: string;
  private web3: Web3;
  private chainId: ChainId;

  constructor(address: string, ethereum: any, chainId: ChainId) {
    this.address = address;
    this.web3 = new Web3(ethereum);
    this.chainId = chainId;
  }

  async allowance(owner: string, spender: string): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.allowance(owner, spender).call();
  }

  async approve(spender: string, amount: number) {
    const contract = this.getContract();
    return contract.methods
      .approve(spender, amount)
      .send({ from: this.address });
  }

  async balanceOf(address: string): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.balanceOf(address).call();
  }

  async decimals(): Promise<bigint> {
    const contract = this.getContract();
    return contract.methods.decimals().call();
  }

  private getContract() {
    return new this.web3.eth.Contract(ABI, CONTRACT_ADDRESS[this.chainId]);
  }
}
