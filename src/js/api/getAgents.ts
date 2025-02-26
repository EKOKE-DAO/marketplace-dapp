import { Agency } from '../data/agency';
import { deferredMinterRequest, makeQueryArgs } from './api';
import { mockAgents } from './mock';

interface Filters {
  offset?: number;
  limit?: number;
  latitude?: string;
  longitude?: string;
  radius?: string;
  country?: string;
}

export const getAgents = async (filters: Filters): Promise<Agency[]> => {
  const url = `/agents?${makeQueryArgs(filters)}`;

  return await deferredMinterRequest(
    'GET',
    url,
    mockAgents(filters.latitude, filters.longitude),
  );
};
