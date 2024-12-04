import sendJsonRequest from './api';
import { mockContractIds } from './mock';

const getContracts = async (): Promise<bigint[]> => {
  return await sendJsonRequest('GET', '/contracts', mockContractIds());
};

export default getContracts;
