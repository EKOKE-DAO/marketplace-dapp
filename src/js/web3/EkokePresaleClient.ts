import {
  Address,
  createWalletClient,
  custom,
  createPublicClient,
  PublicClient,
  WalletClient,
} from 'viem';
import { mainnet, sepolia } from 'viem/chains';

import { ABI, CONTRACT_ADDRESS } from './contracts/EkokePresale';
import { ChainId } from '../components/MetamaskConnect';

export default class EkokePresaleClient {
  private account: Address;
  private publicClient: PublicClient;
  private client: WalletClient;
  private chainId: ChainId;

  constructor(address: string, ethereum: any, chainId: ChainId) {
    this.account = address as unknown as Address;
    this.client = createWalletClient({
      chain: chainId === ChainId.Mainnet ? mainnet : sepolia,
      transport: custom(ethereum),
    });
    this.publicClient = createPublicClient({
      chain: chainId === ChainId.Mainnet ? mainnet : sepolia,
      transport: custom(ethereum),
    });
    this.chainId = chainId;
  }

  async buyTokens(amount: bigint) {
    return this.callMutFunction('buyTokens', [amount]);
  }

  async claimTokens() {
    return this.callMutFunction('claimTokens');
  }

  async softCap(): Promise<bigint> {
    return this.callViewFunction<bigint>('SOFT_CAP_USDT');
  }

  async usdtRaised(): Promise<bigint> {
    return this.callViewFunction<bigint>('usdtRaised');
  }

  async tokensSold(): Promise<bigint> {
    return this.callViewFunction<bigint>('tokensSold');
  }

  async presaleCap(): Promise<bigint> {
    return this.callViewFunction<bigint>('presaleCap');
  }

  async refund() {
    return this.callMutFunction('refund');
  }

  async ekokeBalance(): Promise<bigint> {
    return this.callViewFunction<bigint>('balanceOf', [this.account]);
  }

  async usdBalance(): Promise<bigint> {
    return this.callViewFunction<bigint>('usdtInvested', [this.account]);
  }

  async tokenPrice(): Promise<bigint> {
    return this.callViewFunction<bigint>('tokenPrice');
  }

  async isOpen(): Promise<boolean> {
    return this.callViewFunction<boolean>('isOpen');
  }

  async hasFailed(): Promise<boolean> {
    return this.callViewFunction<boolean>('hasFailed');
  }

  presaleAddress(): string {
    return CONTRACT_ADDRESS[this.chainId];
  }

  async callMutFunction(name: string, args?: any[]) {
    const request = await this.simulateContract(name, args);

    const hash = await this.client.writeContract(request);

    await this.publicClient.waitForTransactionReceipt({
      hash,
    });
  }

  async simulateContract(name: string, args?: any[]): Promise<any> {
    const { request } = await this.publicClient.simulateContract({
      address: this.getContractAddress(),
      abi: ABI,
      functionName: name,
      args,
      account: this.account,
    });

    return request;
  }

  async callViewFunction<T>(name: string, args?: any[]): Promise<T> {
    const result = await this.publicClient.readContract({
      address: this.getContractAddress(),
      abi: ABI,
      functionName: name,
      args,
      account: this.account,
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
