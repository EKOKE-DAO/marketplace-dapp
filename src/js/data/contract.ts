import { Agency } from './agency';
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
  agency: Agency;
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

export type Continent =
  | 'Africa'
  | 'Antarctica'
  | 'Asia'
  | 'Europe'
  | 'NorthAmerica'
  | 'Oceania'
  | 'SouthAmerica';
