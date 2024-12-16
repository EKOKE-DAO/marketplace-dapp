import { Address, custom, createPublicClient, PublicClient } from 'viem';
import { mainnet, sepolia } from 'viem/chains';

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
  private account: Address;
  private publicClient: PublicClient;
  private chainId: ChainId;

  constructor(address: string, ethereum: any, chainId: ChainId) {
    this.account = address as unknown as Address;
    this.publicClient = createPublicClient({
      chain: chainId === ChainId.Mainnet ? mainnet : sepolia,
      transport: custom(ethereum),
    });
    this.chainId = chainId;
  }

  async nextTokenIdToBuy(contractId: bigint): Promise<bigint> {
    return this.callViewFunction<bigint>('nextTokenIdToBuy', [contractId]);
  }

  async contractProgress(contractId: bigint): Promise<bigint> {
    return this.callViewFunction<bigint>('contractProgress', [contractId]);
  }

  async contractCompleted(contractId: bigint): Promise<boolean> {
    return this.callViewFunction<boolean>('contractCompleted', [contractId]);
  }

  async tokenUri(tokenId: bigint): Promise<string> {
    return this.callViewFunction<string>('tokenUri', [tokenId]);
  }

  async ownerOf(tokenId: bigint): Promise<string> {
    return this.callViewFunction<string>('ownerOf', [tokenId]);
  }

  async balanceOf(address: string): Promise<bigint> {
    return this.callViewFunction<bigint>('balanceOf', [address]);
  }

  async totalSupply(): Promise<bigint> {
    return this.callViewFunction<bigint>('totalSupply');
  }

  async tokenContract(tokenId: bigint): Promise<Contract> {
    return this.callViewFunction<Contract>('tokenContract', [tokenId]);
  }

  async getContract(contractId: bigint): Promise<Contract> {
    return this.callViewFunction<Contract>('getContract', [contractId]);
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
