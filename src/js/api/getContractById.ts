import { Agency, Contract } from '../data/contract';
import { convertCanisterContractToContract } from '../utils/contract';
import sendJsonRequest from './api';
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
  },
];

export type AccessListItem = 'Agent' | 'Seller' | 'Buyer';

export interface Seller {
  address: string;
  quota: number;
}

/**
 * @description Get contract by ID.
 * @param id Contract ID
 * @returns Contract data
 */
const getContractById = async (id: bigint): Promise<Contract> => {
  const contractData = await sendJsonRequest(
    'GET',
    `/contracts/${id}`,
    mockContract(id),
  );

  return convertCanisterContractToContract(contractData);
};

export default getContractById;
