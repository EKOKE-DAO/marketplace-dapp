import {
  Address,
  createWalletClient,
  custom,
  createPublicClient,
  PublicClient,
  WalletClient,
} from 'viem';
import { mainnet, sepolia } from 'viem/chains';

import { ABI, CONTRACT_ADDRESS } from './contracts/Usdt';
import { ChainId } from '../components/MetamaskConnect';

export default class UsdtClient {
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

  async allowance(owner: string, spender: string): Promise<bigint> {
    return this.callViewFunction<bigint>('allowance', [owner, spender]);
  }

  async approve(spender: string, amount: bigint) {
    return this.callMutFunction('approve', [spender, amount]);
  }

  async balanceOf(address: string): Promise<bigint> {
    return this.callViewFunction<bigint>('balanceOf', [address]);
  }

  async decimals(): Promise<bigint> {
    return this.callViewFunction<bigint>('decimals');
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
