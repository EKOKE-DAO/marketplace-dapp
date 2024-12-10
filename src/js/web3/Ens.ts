import { createEnsPublicClient } from '@ensdomains/ensjs';
import { http } from 'viem';
import { mainnet } from 'viem/chains';

export const getENSName = async (address: string): Promise<string> => {
  const client = createEnsPublicClient({
    chain: mainnet,
    transport: http(),
  });

  const addressWnoPrefix = address.replace(/^0x/, '');

  const name = await client.getName({ address: `0x${addressWnoPrefix}` });

  return name.name;
};
