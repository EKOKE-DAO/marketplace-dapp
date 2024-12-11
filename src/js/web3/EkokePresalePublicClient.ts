import { http, createPublicClient, PublicClient } from 'viem';
import { mainnet, sepolia } from 'viem/chains';

import { ABI, CONTRACT_ADDRESS } from './contracts/EkokePresale';
import { ChainId } from '../components/MetamaskConnect';

type Address = `0x${string}`;

export default class EkokePresalePublicClient {
  private client: PublicClient;
  private chainId: ChainId;

  constructor() {
    // check env
    const chain = process.env.NODE_ENV === 'production' ? mainnet : sepolia;
    this.chainId =
      process.env.NODE_ENV === 'production' ? ChainId.Mainnet : ChainId.Sepolia;
    this.client = createPublicClient({
      chain,
      transport: http(),
    });
  }

  async softCap(): Promise<bigint> {
    return this.callViewFunction('SOFT_CAP_USDT');
  }

  async usdtRaised(): Promise<bigint> {
    return this.callViewFunction('usdtRaised');
  }

  async tokensSold(): Promise<bigint> {
    return this.callViewFunction('tokensSold');
  }

  async presaleCap(): Promise<bigint> {
    return this.callViewFunction('presaleCap');
  }

  async tokenPrice(): Promise<bigint> {
    return this.callViewFunction('tokenPrice');
  }

  async isOpen(): Promise<boolean> {
    return this.callViewFunction('isOpen');
  }

  async hasFailed(): Promise<boolean> {
    return this.callViewFunction('hasFailed');
  }

  async callViewFunction<T>(name: string): Promise<T> {
    const result = await this.client.readContract({
      address: this.getContractAddress(),
      abi: ABI,
      functionName: name,
    });

    return result as T;
  }

  private getContractAddress(): Address {
    const addr = CONTRACT_ADDRESS[this.chainId];
    if (addr.startsWith('0x')) {
      return addr as `0x${string}`;
    }

    return `0x${addr}`;
  }
}
