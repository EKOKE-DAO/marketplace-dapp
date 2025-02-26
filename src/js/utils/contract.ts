import { ContractData } from '../api/getContractById';
import { Contract, ContractDocument } from '../data/contract';

/**
 * @description Convert a canister contract to a contract
 * @param data ContractData from canister
 * @returns Contract
 */
export const convertCanisterContractToContract = (
  data: ContractData,
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
    agency: data.agency,
    expiration: new Date(data.expiration),
    documents: getContractDocuments(data),
    realEstate: {
      name: getPropertyText(data, 'contract:name') || '',
      description: getPropertyText(data, 'contract:description') || '',
      image: getPropertyText(data, 'contract:image'),
      address: getPropertyText(data, 'contract:address'),
      country: getPropertyText(data, 'contract:country'),
      continent: getPropertyText(data, 'contract:continent'),
      region: getPropertyText(data, 'contract:region'),
      zipCode: getPropertyText(data, 'contract:zipCode'),
      latitude: getPropertyText(data, 'contract:latitude'),
      longitude: getPropertyText(data, 'contract:longitude'),
      zone: getPropertyText(data, 'contract:zone'),
      city: getPropertyText(data, 'contract:city'),
      squareMeters: getPropertyNumber(data, 'contract:squareMeters'),
      rooms: getPropertyNumber(data, 'contract:rooms'),
      bathrooms: getPropertyNumber(data, 'contract:bathrooms'),
      floors: getPropertyNumber(data, 'contract:floors'),
      balconies: getPropertyNumber(data, 'contract:balconies'),
      garden: getPropertyBoolean(data, 'contract:garden'),
      pool: getPropertyBoolean(data, 'contract:pool'),
      garage: getPropertyBoolean(data, 'contract:garage'),
      parking: getPropertyBoolean(data, 'contract:parking'),
      energyClass: getPropertyText(data, 'contract:energyClass'),
      youtubeUrl: getPropertyText(data, 'contract:youtubeUrl'),
    },
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

const getPropertyText = (
  data: ContractData,
  key: string,
): string | undefined => {
  const property = data.properties.find((values) => values[0] === key);
  if (!property) {
    return undefined;
  }

  return property[1].TextContent;
};

const getPropertyNumber = (
  data: ContractData,
  key: string,
): number | undefined => {
  const property = data.properties.find((values) => values[0] === key);
  if (!property) {
    return undefined;
  }

  return property[1].Nat64Content;
};

const getPropertyBoolean = (data: ContractData, key: string): boolean => {
  const property = data.properties.find((values) => values[0] === key);
  if (!property) {
    return false;
  }

  return property[1].BoolContent || false;
};
