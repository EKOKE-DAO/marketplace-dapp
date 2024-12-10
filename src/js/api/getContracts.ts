import sendJsonRequest, { makeQueryArgs } from './api';
import { mockContractIds } from './mock';

interface Filters {
  seller?: string;
}

const getContracts = async (filters?: Filters): Promise<bigint[]> => {
  const url = `/contracts${makeQueryArgs(filters ?? {})}`;

  return await sendJsonRequest('GET', url, mockContractIds());
};

export default getContracts;
