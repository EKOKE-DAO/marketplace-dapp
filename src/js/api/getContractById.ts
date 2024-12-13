import { Agency, Contract } from '../data/contract';
import { convertCanisterContractToContract } from '../utils/contract';
import deferredDataRequest, { makeQueryArgs, Signature } from './api';
import { mockContract } from './mock';

/**
 * @description Contract data returned from the canister.
 */
export interface ContractData {
  id: bigint;
  type: 'Financing' | 'Sell';
  sellers: Seller[];
  buyers: string[];
  installments: number;
  value: number;
  deposit: number;
  currency: string;
  properties: ContractProperty[];
  restricted_properties: RestrictedContractProperty[];
  documents: ContractDocument[];
  agency?: Agency;
  expiration: string;
}

export type ContractProperty = [
  string,
  {
    TextContent?: string;
    Nat64Content?: number;
    BoolContent?: boolean;
  },
];

export type RestrictedContractProperty = [
  string,
  {
    access_list: AccessListItem[];
    value: {
      TextContent: string;
    };
  },
];

export type ContractDocument = [
  number,
  {
    access_list: AccessListItem[];
    mime_type: string;
    name: string;
    size: number;
  },
];

export type AccessListItem = 'Agent' | 'Seller' | 'Buyer' | 'Public';

export interface Seller {
  address: string;
  quota: number;
}

/**
 * @description Get contract by ID.
 * @param id Contract ID
 * @returns Contract data
 */
const getContractById = async (
  id: bigint,
  signature?: Signature,
): Promise<Contract> => {
  const url = `/contracts/${id}?${makeQueryArgs(signature ?? {})}`;

  const contractData = await deferredDataRequest('GET', url, mockContract(id));

  return convertCanisterContractToContract(contractData);
};

export default getContractById;
