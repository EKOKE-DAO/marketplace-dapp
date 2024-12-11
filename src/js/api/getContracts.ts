import sendJsonRequest, { makeQueryArgs } from './api';
import { mockContractIds } from './mock';

interface Filters {
  buyer?: string;
  seller?: string;
  agent?: string;
  minPrice?: number;
  maxPrice?: number;
  name?: string;
  description?: string;
  address?: string;
  country?: string;
  continent?: string;
  region?: string;
  zipCode?: string;
  latitude?: string;
  longitude?: string;
  radius?: string;
  zone?: string;
  city?: string;
}

const getContracts = async (filters?: Filters): Promise<bigint[]> => {
  const url = `/contracts?${makeQueryArgs(filters ?? {})}`;

  return await sendJsonRequest('GET', url, mockContractIds());
};

export default getContracts;
