export interface RealEstate {
  name: string;
  description: string;
  image?: string;
  address?: string;
  country?: string;
  continent?: string;
  region?: string;
  zipCode?: string;
  latitude?: string;
  longitude?: string;
  zone?: string;
  city?: string;
  squareMeters?: number;
  rooms?: number;
  bathrooms?: number;
  floors?: number;
  balconies?: number;
  garden: boolean;
  pool: boolean;
  garage: boolean;
  parking: boolean;
  energyClass?: string;
}
