import { RealEstate } from '../real_estate';
import villaLondon from '../../../assets/images/case/villa_london.webp';
import apartmentParis from '../../../assets/images/case/charming_apartment_in_paris.webp';
import villaMalibu from '../../../assets/images/case/beach_house_in_malibu.webp';
import pentaNewYork from '../../../assets/images/case/penthouse_in_new_york_city.webp';
import tuscany from '../../../assets/images/case/country_cottage_in_tuscany.webp';
import loftBerlin from '../../../assets/images/case/modern_loft_in_berlin.webp';
import lakeZurich from '../../../assets/images/case/lake_house_in_zurich.webp';
import victorianEdimburg from '../../../assets/images/case/victorian_house_in_edimburg.webp';
import villaDubai from '../../../assets/images/case/luxury_villa_in_dubai.webp';
import chaletAspen from '../../../assets/images/case/sky_chalet_in_aspen.webp';
import riversideAmsterdam from '../../../assets/images/case/amsterdamriverside.webp';
import suburbanToronto from '../../../assets/images/case/suburban_home_in_toronto.webp';
import colorado from '../../../assets/images/case/mountain_cabin_in_colorado.webp';
import condoTokyo from '../../../assets/images/case/modern_condo_in_tokio.webp';
import prague from '../../../assets/images/case/historic_house_in_prague.webp';
import apartmantSydney from '../../../assets/images/case/luxury_apartment_in_sidney.webp';
import chateuBordeaux from '../../../assets/images/case/chateau_in_bordeaux.webp';
import loftMadrid from '../../../assets/images/case/city_centre_loft_in_madrid.webp';
import villaSantorini from '../../../assets/images/case/seaside_villa_in_santorini.webp';
import ecoPortland from '../../../assets/images/case/eco_friendly_home_in_portland.webp';
import palaceVienna from '../../../assets/images/case/palace_in_vienna.webp';
import cabinBlackForest from '../../../assets/images/case/cozy_cabin_in_black_forest.webp';
import pentaDubai from '../../../assets/images/case/penthouse_in_dubai_marina.webp';
import townhouseBoston from '../../../assets/images/case/townhouse_in_boston.webp';
import villaProvence from '../../../assets/images/case/farmhouse_in_provence.webp';
import apartmentHongKong from '../../../assets/images/case/luxury_apartment_in_hong_kong.webp';
import villaBali from '../../../assets/images/case/beachfront_villa_in_bali.webp';
import CottageCotswolds from '../../../assets/images/case/cottage_in_the_cottswolds.webp';
import flatSingapore from '../../../assets/images/case/modern_flat_in_singapore.webp';
import villaRome from '../../../assets/images/case/historical_villa_in_rome.webp';
import pentaSydney from '../../../assets/images/case/penthouse_in_sidney.webp';
import villaZermatt from '../../../assets/images/case/mountain_villa_in_zermatt.webp';
import condoMiami from '../../../assets/images/case/beachfront_condo_in_miami.webp';
import palaceBeverlyHills from '../../../assets/images/case/palatial_estate_in_beverly_hills.webp';
import CabinWhistler from '../../../assets/images/case/luxury_cabin_in_whistler.webp';
import pentaParis from '../../../assets/images/case/penthouse_in_paris.webp';
import villaCostaRica from '../../../assets/images/case/eco_villa_in_costa_rica.webp';
import cottageCornwall from '../../../assets/images/case/seaside_cottage_in_cornwall.webp';
import loftChigago from '../../../assets/images/case/urban_loft_in_chicago.webp';
import chaletCamonix from '../../../assets/images/case/alpine_chalet_in_chamonix.webp';
import ApartmentRio from '../../../assets/images/case/luxury_apartment_in_rio_de_janeiro.webp';
import Surrey from '../../../assets/images/case/country_estate_in_surrey.webp';
import homeVancouver from '../../../assets/images/case/contemporary_home_in_vancouver.webp';
import villaMikonos from '../../../assets/images/case/secluded_villa_in_mikonos.webp';
import CapeTown from '../../../assets/images/case/modern_house_in_capetown.webp';
import terraceMelbourne from '../../../assets/images/case/victorian_terrace_in_melbourne.webp';
import villaIbiza from '../../../assets/images/case/luxury_villa_in_ibiza.webp';
import brooklyn from '../../../assets/images/case/historic_brownstone_in_brooklin.webp';
import condLasVegas from '../../../assets/images/case/luxury_condo_in_las_vegas.webp';
import mansionHamptons from '../../../assets/images/case/seaside_mansion_in_hamptons.webp';
import keyWest from '../../../assets/images/case/tropical_bungalow_in_key_west.webp';
import apartmentSohO from '../../../assets/images/case/chic_loft_in_soho_new_york.webp';

export const mockedContracts = () =>
  MOCKED_REAL_ESTATE.map((realEstate, index) => ({
    id: index,
    realEstate,
  }));

export const MOCKED_REAL_ESTATE: RealEstate[] = [
  {
    name: 'Villa in the heart of London',
    description:
      'A beautiful villa in the heart of London, with a view on the Thames.',
    address: 'Downing Street 10, London',
    price: 1_000_000,
    image: villaLondon,
  },
  {
    name: 'Charming Apartment in Paris',
    description:
      'A cozy apartment near the Eiffel Tower with a modern interior.',
    address: 'Rue de Rivoli 23, Paris',
    price: 750_000,
    image: apartmentParis,
  },
  {
    name: 'Beach House in Malibu',
    description: 'A luxurious beachfront property with stunning ocean views.',
    address: 'Pacific Coast Hwy 3400, Malibu',
    price: 2_500_000,
    image: villaMalibu,
  },
  {
    name: 'Penthouse in New York City',
    description:
      'A stunning penthouse in Manhattan with a panoramic skyline view.',
    address: '5th Avenue 789, New York',
    price: 3_000_000,
    image: pentaNewYork,
  },
  {
    name: 'Country Cottage in Tuscany',
    description:
      'A charming cottage surrounded by the rolling hills of Tuscany.',
    address: 'Via del Chianti 45, Florence',
    price: 600_000,
    image: tuscany,
  },
  {
    name: 'Modern Loft in Berlin',
    description:
      'A spacious loft in the vibrant heart of Berlin, ideal for creatives.',
    address: 'Alexanderplatz 12, Berlin',
    price: 900_000,
    image: loftBerlin,
  },
  {
    name: 'Lake House in Zurich',
    description: 'A serene lake house with direct access to Lake Zurich.',
    address: 'Seefeldstrasse 45, Zurich',
    price: 1_800_000,
    image: lakeZurich,
  },
  {
    name: 'Victorian House in Edinburgh',
    description:
      'A historic Victorian home with original features and modern amenities.',
    address: 'Princes Street 67, Edinburgh',
    price: 1_200_000,
    image: victorianEdimburg,
  },
  {
    name: 'Luxury Villa in Dubai',
    description:
      'A high-end villa with a private pool and view of the Burj Khalifa.',
    address: 'Palm Jumeirah 2, Dubai',
    price: 4_000_000,
    image: villaDubai,
  },
  {
    name: 'Ski Chalet in Aspen',
    description: 'A cozy ski chalet located near the slopes of Aspen Mountain.',
    address: 'Main Street 134, Aspen',
    price: 2_200_000,
    image: chaletAspen,
  },
  {
    name: 'Riverside House in Amsterdam',
    description:
      'A quaint house along the canals of Amsterdam with stunning water views.',
    address: 'Keizersgracht 89, Amsterdam',
    price: 1_100_000,
    image: riversideAmsterdam,
  },
  {
    name: 'Suburban Home in Toronto',
    description:
      'A family-friendly home in a quiet Toronto neighborhood with a large backyard.',
    address: 'Maple Street 28, Toronto',
    price: 850_000,
    image: suburbanToronto,
  },
  {
    name: 'Mountain Cabin in Colorado',
    description:
      'A rustic cabin nestled in the Colorado Rockies, perfect for a retreat.',
    address: 'Pine Lane 58, Breckenridge',
    price: 950_000,
    image: colorado,
  },
  {
    name: 'Modern Condo in Tokyo',
    description:
      'A sleek and modern condo in the bustling Shibuya district of Tokyo.',
    address: 'Shibuya 2-24, Tokyo',
    price: 1_300_000,
    image: condoTokyo,
  },
  {
    name: 'Historic House in Prague',
    description:
      'A beautifully preserved historic house in the old town of Prague.',
    address: 'Karlova 10, Prague',
    price: 980_000,
    image: prague,
  },
  {
    name: 'Luxury Apartment in Sydney',
    description:
      'A high-rise apartment with breathtaking views of the Sydney Opera House.',
    address: 'Circular Quay 5, Sydney',
    price: 2_700_000,
    image: apartmantSydney,
  },
  {
    name: 'Chateau in Bordeaux',
    description:
      'An elegant chateau surrounded by vineyards in the Bordeaux region.',
    address: 'Route des Châteaux 12, Bordeaux',
    price: 3_500_000,
    image: chateuBordeaux,
  },
  {
    name: 'City Center Loft in Madrid',
    description:
      'A stylish loft in the heart of Madrid, perfect for urban living.',
    address: 'Gran Via 15, Madrid',
    price: 1_100_000,
    image: loftMadrid,
  },
  {
    name: 'Seaside Villa in Santorini',
    description: 'A stunning villa overlooking the Aegean Sea in Santorini.',
    address: 'Oia Village 7, Santorini',
    price: 2_000_000,
    image: villaSantorini,
  },
  {
    name: 'Eco-friendly Home in Portland',
    description:
      'A sustainable, eco-friendly home with a green roof in Portland.',
    address: 'Alberta Street 23, Portland',
    price: 900_000,
    image: ecoPortland,
  },
  {
    name: 'Palace in Vienna',
    description:
      'A majestic palace with opulent interiors located in central Vienna.',
    address: 'Ringstrasse 1, Vienna',
    price: 5_000_000,
    image: palaceVienna,
  },
  {
    name: 'Cozy Cabin in the Black Forest',
    description:
      'A charming cabin surrounded by the dense trees of the Black Forest in Germany.',
    address: 'Schwarzwaldstrasse 22, Baden-Baden',
    price: 700_000,
    image: cabinBlackForest,
  },
  {
    name: 'Penthouse in Dubai Marina',
    description: 'A luxurious penthouse with panoramic views of Dubai Marina.',
    address: 'Marina Walk 44, Dubai',
    price: 3_500_000,
    image: pentaDubai,
  },
  {
    name: 'Townhouse in Boston',
    description:
      'A classic Boston townhouse in the historic Beacon Hill neighborhood.',
    address: 'Chestnut Street 12, Boston',
    price: 1_750_000,
    image: townhouseBoston,
  },
  {
    name: 'Farmhouse in Provence',
    description:
      'A rustic farmhouse surrounded by lavender fields in Provence, France.',
    address: 'Chemin de la Lavande 5, Provence',
    price: 1_200_000,
    image: villaProvence,
  },
  {
    name: 'Luxury Apartment in Hong Kong',
    description:
      'A high-end apartment with a view of Victoria Harbour in Hong Kong.',
    address: 'Mid-Levels Central 8, Hong Kong',
    price: 3_800_000,
    image: apartmentHongKong,
  },
  {
    name: 'Beachfront Villa in Bali',
    description:
      'A tropical villa right on the beach with private access to the ocean.',
    address: 'Jl. Pantai Berawa 33, Bali',
    price: 1_500_000,
    image: villaBali,
  },
  {
    name: 'Cottage in the Cotswolds',
    description: 'A picturesque English cottage in the heart of the Cotswolds.',
    address: 'High Street 18, Cotswolds',
    price: 950_000,
    image: CottageCotswolds,
  },
  {
    name: 'Modern Flat in Singapore',
    description:
      'A stylish and modern flat in the Marina Bay area of Singapore.',
    address: 'Marina Boulevard 15, Singapore',
    price: 2_200_000,
    image: flatSingapore,
  },
  {
    name: 'Historical Villa in Rome',
    description:
      'A beautifully restored villa with classical Roman architecture.',
    address: 'Via Appia Antica 11, Rome',
    price: 2_800_000,
    image: villaRome,
  },
  {
    name: 'Penthouse in Sydney',
    description:
      'A luxurious penthouse with views of the Sydney Harbour Bridge.',
    address: 'George Street 65, Sydney',
    price: 3_200_000,
    image: pentaSydney,
  },
  {
    name: 'Mountain Villa in Zermatt',
    description:
      'A stunning villa with views of the Matterhorn in Zermatt, Switzerland.',
    address: 'Bahnhofstrasse 10, Zermatt',
    price: 2_400_000,
    image: villaZermatt,
  },
  {
    name: 'Beachfront Condo in Miami',
    description: 'A modern condo with direct access to Miami Beach.',
    address: 'Ocean Drive 23, Miami',
    price: 1_600_000,
    image: condoMiami,
  },
  {
    name: 'Palatial Estate in Beverly Hills',
    description:
      'A sprawling estate with lush gardens in the heart of Beverly Hills.',
    address: 'Rodeo Drive 45, Beverly Hills',
    price: 6_500_000,
    image: palaceBeverlyHills,
  },
  {
    name: 'Luxury Cabin in Whistler',
    description:
      'A high-end cabin with ski-in/ski-out access in Whistler, Canada.',
    address: 'Peak Road 7, Whistler',
    price: 2_100_000,
    image: CabinWhistler,
  },
  {
    name: 'Penthouse in Paris',
    description:
      'A luxurious penthouse with views of the Eiffel Tower in Paris.',
    address: 'Avenue Montaigne 32, Paris',
    price: 3_700_000,
    image: pentaParis,
  },
  {
    name: 'Eco Villa in Costa Rica',
    description:
      'An eco-friendly villa surrounded by rainforest in Costa Rica.',
    address: 'Monteverde 19, Puntarenas',
    price: 1_300_000,
    image: villaCostaRica,
  },
  {
    name: 'Seaside Cottage in Cornwall',
    description:
      'A charming seaside cottage with panoramic views of the Cornish coast.',
    address: 'Harbour Road 4, Cornwall',
    price: 850_000,
    image: cottageCornwall,
  },
  {
    name: 'Urban Loft in Chicago',
    description:
      'A modern loft in the vibrant River North neighborhood of Chicago.',
    address: 'Wells Street 56, Chicago',
    price: 1_100_000,
    image: loftChigago,
  },
  {
    name: 'Alpine Chalet in Chamonix',
    description:
      'A cozy chalet with stunning views of Mont Blanc in Chamonix, France.',
    address: 'Rue des Moulins 15, Chamonix',
    price: 1_900_000,
    image: chaletCamonix,
  },
  {
    name: 'Luxury Apartment in Rio de Janeiro',
    description:
      'A stunning apartment overlooking Copacabana Beach in Rio de Janeiro.',
    address: 'Avenida Atlantica 101, Rio de Janeiro',
    price: 2_600_000,
    image: ApartmentRio,
  },
  {
    name: 'Country Estate in Surrey',
    description:
      'A grand estate with expansive grounds in the Surrey countryside.',
    address: 'Manor Road 25, Surrey',
    price: 4_000_000,
    image: Surrey,
  },
  {
    name: 'Contemporary Home in Vancouver',
    description: 'A sleek and modern home with views of the Vancouver skyline.',
    address: 'Granville Street 89, Vancouver',
    price: 2_000_000,
    image: homeVancouver,
  },
  {
    name: 'Secluded Villa in Mykonos',
    description:
      'A private villa with a pool and views of the Aegean Sea in Mykonos.',
    address: 'Agios Ioannis 12, Mykonos',
    price: 2_300_000,
    image: villaMikonos,
  },
  {
    name: 'Modern House in Cape Town',
    description:
      'A stunning modern house with panoramic views of Table Mountain.',
    address: 'Camps Bay Drive 34, Cape Town',
    price: 2_500_000,
    image: CapeTown,
  },
  {
    name: 'Victorian Terrace in Melbourne',
    description:
      'A beautifully renovated Victorian terrace in Melbourne’s Fitzroy district.',
    address: 'Brunswick Street 77, Melbourne',
    price: 1_450_000,
    image: terraceMelbourne,
  },
  {
    name: 'Luxury Villa in Ibiza',
    description:
      'A high-end villa with a private pool and sea views in Ibiza, Spain.',
    address: 'Carrer de la Mar 8, Ibiza',
    price: 3_000_000,
    image: villaIbiza,
  },
  {
    name: 'Historic Brownstone in Brooklyn',
    description:
      'A classic brownstone with original details in Brooklyn’s Park Slope.',
    address: '7th Avenue 102, Brooklyn',
    price: 2_000_000,
    image: brooklyn,
  },
  {
    name: 'Luxury Condo in Las Vegas',
    description: 'A high-rise condo with views of the Las Vegas Strip.',
    address: 'Las Vegas Blvd 200, Las Vegas',
    price: 1_800_000,
    image: condLasVegas,
  },
  {
    name: 'Seaside Mansion in Hamptons',
    description: 'A grand mansion with private beach access in the Hamptons.',
    address: 'Meadow Lane 50, Southampton',
    price: 5_500_000,
    image: mansionHamptons,
  },
  {
    name: 'Tropical Bungalow in Key West',
    description: 'A cozy bungalow with a lush garden in the heart of Key West.',
    address: 'Duval Street 70, Key West',
    price: 950_000,
    image: keyWest,
  },
  {
    name: 'Chic Loft in SoHo, New York',
    description: 'A stylish loft with exposed brick and high ceilings in SoHo.',
    address: 'Greene Street 22, New York',
    price: 1_600_000,
    image: apartmentSohO,
  },
];
