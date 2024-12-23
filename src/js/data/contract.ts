import { RealEstate } from './real_estate';

export interface Contract {
  id: bigint;
  type: 'Financing' | 'Sell';
  sellers: number;
  buyers: number;
  installments: number;
  price: number;
  deposit: number;
  currency: string;
  agency?: Agency;
  expiration: Date;
  documents: ContractDocument[];
  realEstate: RealEstate;
}

export interface ContractDocument {
  id: bigint;
  name: string;
  mimeType: string;
  size: number;
}

export interface Agency {
  address: string;
  agent: string;
  city: string;
  continent: Continent;
  country: string;
  email: string;
  lat?: string;
  lng?: string;
  logo?: string;
  mobile: string;
  name: string;
  owner: string;
  region: string;
  vat: string;
  website: string;
  zip_code: string;
}

export type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Europe'
  | 'NorthAmerica'
  | 'Oceania'
  | 'SouthAmerica';
