import { ContractData } from '../api/getContractById';
import { Agency } from '../data/agency';
import { Contract, ContractDocument } from '../data/contract';
import { RealEstate } from '../data/real_estate';

/**
 * @description Convert a canister contract to a contract
 * @param data ContractData from canister
 * @returns Contract
 */
export const convertCanisterContractToContract = (
  data: ContractData,
  agency: Agency,
  realEstate: RealEstate,
): Contract => {
  return {
    id: data.id,
    type: data.type,
    sellers: data.sellers.length,
    buyers: data.buyers.length,
    installments: data.installments,
    price: data.value,
    deposit: data.deposit,
    currency: data.currency,
    agency,
    expiration: new Date(data.expiration),
    documents: getContractDocuments(data),
    realEstate,
  };
};

const getContractDocuments = (data: ContractData): ContractDocument[] => {
  const docs: ContractDocument[] = [];

  for (const item of data.documents) {
    const id = item[0];
    docs.push({
      id: BigInt(id),
      name: item[1].name,
      mimeType: item[1].mime_type,
      size: item[1].size,
    });
  }

  return docs;
};
