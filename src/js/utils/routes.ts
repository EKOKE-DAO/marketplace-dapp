export enum Route {
  ABOUT = 'about',
  AGENCIES = 'agencies',
  AGENCIES_AGENCY = 'agencies/agency/:id',
  COOKIES = 'cookies',
  DOCUMENTATION = 'documentation',
  DOCUMENTATION_FAQ = 'documentation/faq',
  DOCUMENTATION_ARCHITECTURE = 'documentation/architecture',
  DOCUMENTATION_CANISTERS_DATA = 'documentation/canisters/deferred-data',
  DOCUMENTATION_CANISTERS_MINTER = 'documentation/canisters/deferred-minter',
  DOCUMENTATION_CONTRACTS_DEFERRED = 'documentation/contracts/deferred',
  DOCUMENTATION_CONTRACTS_EKOKE = 'documentation/contracts/ekoke',
  DOCUMENTATION_CONTRACTS_MARKETPLACE = 'documentation/contracts/marketplace',
  DOCUMENTATION_CONTRACTS_REWARD_POOL = 'documentation/contracts/reward-pool',
  DOCUMENTATION_DAO = 'documentation/dao',
  DOCUMENTATION_REWARD = 'documentation/reward',
  DOCUMENTATION_WHITEPAPER = 'documentation/whitepaper',
  GIVEAWAY = 'giveaway',
  HOME = 'home',
  MARKETPLACE = 'marketplace',
  MARKETPLACE_CONTRACT = 'marketplace/contract/:id',
  PRESALE = 'presale',
  PRIVACY = 'privacy',
  PROFILE = 'profile',
  PROFILE_COLLECTED = 'profile/collected',
  PROFILE_CONTRACTS = 'profile/contracts',
  REAL_ESTATE = 'real-estate',
  REAL_ESTATE_PROPERTY = 'real-estate/:id',
  TERMS_AND_CONDITIONS = 'terms-and-conditions',
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Route {
  export function url(route: Route): string {
    if (route === Route.HOME) {
      return `/`;
    }

    return `/${route}`;
  }

  export function isRoute(keyOrValue: any): boolean {
    return isEnumKey(keyOrValue) || isEnumValue(keyOrValue);
  }

  export function marketplaceContractUrl(id: bigint): string {
    return `/marketplace/contract/${id.toString()}`;
  }

  export function agentUrl(principal: string): string {
    return `/agencies/agency/${principal}`;
  }

  export function realEstateUrl(id: bigint): string {
    return `/real-estate/${id.toString()}`;
  }
}

function isEnumKey(key: any): boolean {
  return Object.keys(Route).includes(key);
}

function isEnumValue(value: any): boolean {
  return Object.values(Route).includes(value);
}

export interface MenuEntries {
  [key: string]: MenuEntry;
}

interface MenuEntry {
  label: string;
  link?: Route;
  section?: string;
}

export const getIdFromHash = (): string | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const hash = window.location.hash;
  const lastIndex = hash.lastIndexOf('#');

  if (lastIndex < 0) {
    return undefined;
  }

  return hash.slice(lastIndex + 1);
};
