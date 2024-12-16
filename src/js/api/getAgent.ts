import { Agency } from '../data/contract';
import { deferredMinterRequest } from './api';
import { mockAgents } from './mock';

export const getAgentByPrincipal = async (id: string): Promise<Agency> => {
  return await deferredMinterRequest('GET', `/agent/${id}`, mockAgents()[0]);
};