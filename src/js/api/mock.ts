import { ContractData } from './getContractById';
import villaLondon from '../../assets/images/case/villa_london.webp';

const FIRST_CONTRACT_ID = 1;

export const mockContractIds = (): bigint[] => {
  const ids = [];
  for (let i = FIRST_CONTRACT_ID; i < 100; i++) {
    ids.push(BigInt(i));
  }

  return ids;
};

export const mockContract = (id: bigint): ContractData => {
  return {
    id,
    type: 'Sell',
    sellers: [
      {
        address: '0x1234567890',
        quota: 100,
      },
    ],
    buyers: ['0x1234567890'],
    installments: 40_000,
    value: 400_000,
    deposit: 50_000,
    currency: 'USD',
    agency: {
      address: 'Via Roma 1',
      name: 'Agency',
      agent: 'Miriam',
      city: 'Milano',
      continent: 'Europe',
      country: 'Italy',
      email: 'miriamlagente@gmail.com',
      logo: villaLondon,
      mobile: '+39 333 1234567',
      owner: 'v5vof-zqaaa-aaaal-ai5cq',
      region: 'Lombardia',
      vat: 'IT12345678901',
      website: 'https://www.agency.com',
      zip_code: '20121',
    },
    expiration: '2050-01-01',
    restricted_properties: [],
    documents: [
      [
        1,
        {
          access_list: ['Agent', 'Seller', 'Buyer', 'Public'],
          mime_type: 'application/pdf',
          name: 'Sale contract',
          size: 1024,
        },
      ],
      [
        2,
        {
          access_list: ['Agent', 'Seller', 'Buyer', 'Public'],
          mime_type: 'application/pdf',
          name: "Property's plan",
          size: 1024 * 1024 * 4,
        },
      ],
    ],
    properties: [
      [
        'contract:name',
        {
          TextContent: 'Villa in the heart of London',
        },
      ],
      [
        'contract:description',
        {
          TextContent: 'A beautiful villa in the heart of London',
        },
      ],
      [
        'contract:image',
        {
          TextContent: villaLondon,
        },
      ],
      [
        'contract:address',
        {
          TextContent: 'Via Roma 1',
        },
      ],
      [
        'contract:country',
        {
          TextContent: 'Italy',
        },
      ],
      [
        'contract:continent',
        {
          TextContent: 'Europe',
        },
      ],
      [
        'contract:region',
        {
          TextContent: 'Lombardia',
        },
      ],
      [
        'contract:zipCode',
        {
          TextContent: '20121',
        },
      ],
      [
        'contract:latitude',
        {
          TextContent: '45.464664',
        },
      ],
      [
        'contract:longitude',
        {
          TextContent: '9.188540',
        },
      ],
      [
        'contract:zone',
        {
          TextContent: 'City Center',
        },
      ],
      [
        'contract:city',
        {
          TextContent: 'Milano',
        },
      ],
      [
        'contract:squareMeters',
        {
          Nat64Content: 200,
        },
      ],
      [
        'contract:rooms',
        {
          Nat64Content: 4,
        },
      ],
      [
        'contract:bathrooms',
        {
          Nat64Content: 2,
        },
      ],
      [
        'contract:floors',
        {
          Nat64Content: 2,
        },
      ],
      [
        'contract:balconies',
        {
          Nat64Content: 1,
        },
      ],
      [
        'contract:garden',
        {
          BoolContent: true,
        },
      ],
      [
        'contract:pool',
        {
          BoolContent: true,
        },
      ],
      [
        'contract:garage',
        {
          BoolContent: true,
        },
      ],
      [
        'contract:parking',
        {
          BoolContent: true,
        },
      ],
      [
        'contract:energyClass',
        {
          TextContent: 'A',
        },
      ],
      [
        'contract:youtubeUrl',
        {
          TextContent: 'https://www.youtube.com/watch?v=hMUXxBvBiAo',
        },
      ],
    ],
  };
};

export const mockDocumentData = () => ({
  mimeType: 'application/pdf',
  data: new Uint8Array([1, 2, 3, 4, 5]),
});
