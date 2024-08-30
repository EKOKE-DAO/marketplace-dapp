import { RealEstate } from '../real_estate';

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
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Charming Apartment in Paris',
    description:
      'A cozy apartment near the Eiffel Tower with a modern interior.',
    address: 'Rue de Rivoli 23, Paris',
    price: 750_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Beach House in Malibu',
    description: 'A luxurious beachfront property with stunning ocean views.',
    address: 'Pacific Coast Hwy 3400, Malibu',
    price: 2_500_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Penthouse in New York City',
    description:
      'A stunning penthouse in Manhattan with a panoramic skyline view.',
    address: '5th Avenue 789, New York',
    price: 3_000_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Country Cottage in Tuscany',
    description:
      'A charming cottage surrounded by the rolling hills of Tuscany.',
    address: 'Via del Chianti 45, Florence',
    price: 600_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Modern Loft in Berlin',
    description:
      'A spacious loft in the vibrant heart of Berlin, ideal for creatives.',
    address: 'Alexanderplatz 12, Berlin',
    price: 900_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Lake House in Zurich',
    description: 'A serene lake house with direct access to Lake Zurich.',
    address: 'Seefeldstrasse 45, Zurich',
    price: 1_800_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Victorian House in Edinburgh',
    description:
      'A historic Victorian home with original features and modern amenities.',
    address: 'Princes Street 67, Edinburgh',
    price: 1_200_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Luxury Villa in Dubai',
    description:
      'A high-end villa with a private pool and view of the Burj Khalifa.',
    address: 'Palm Jumeirah 2, Dubai',
    price: 4_000_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Ski Chalet in Aspen',
    description: 'A cozy ski chalet located near the slopes of Aspen Mountain.',
    address: 'Main Street 134, Aspen',
    price: 2_200_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Riverside House in Amsterdam',
    description:
      'A quaint house along the canals of Amsterdam with stunning water views.',
    address: 'Keizersgracht 89, Amsterdam',
    price: 1_100_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Suburban Home in Toronto',
    description:
      'A family-friendly home in a quiet Toronto neighborhood with a large backyard.',
    address: 'Maple Street 28, Toronto',
    price: 850_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Mountain Cabin in Colorado',
    description:
      'A rustic cabin nestled in the Colorado Rockies, perfect for a retreat.',
    address: 'Pine Lane 58, Breckenridge',
    price: 950_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Modern Condo in Tokyo',
    description:
      'A sleek and modern condo in the bustling Shibuya district of Tokyo.',
    address: 'Shibuya 2-24, Tokyo',
    price: 1_300_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Historic House in Prague',
    description:
      'A beautifully preserved historic house in the old town of Prague.',
    address: 'Karlova 10, Prague',
    price: 980_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Luxury Apartment in Sydney',
    description:
      'A high-rise apartment with breathtaking views of the Sydney Opera House.',
    address: 'Circular Quay 5, Sydney',
    price: 2_700_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Chateau in Bordeaux',
    description:
      'An elegant chateau surrounded by vineyards in the Bordeaux region.',
    address: 'Route des Châteaux 12, Bordeaux',
    price: 3_500_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'City Center Loft in Madrid',
    description:
      'A stylish loft in the heart of Madrid, perfect for urban living.',
    address: 'Gran Via 15, Madrid',
    price: 1_100_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Seaside Villa in Santorini',
    description: 'A stunning villa overlooking the Aegean Sea in Santorini.',
    address: 'Oia Village 7, Santorini',
    price: 2_000_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Eco-friendly Home in Portland',
    description:
      'A sustainable, eco-friendly home with a green roof in Portland.',
    address: 'Alberta Street 23, Portland',
    price: 900_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Palace in Vienna',
    description:
      'A majestic palace with opulent interiors located in central Vienna.',
    address: 'Ringstrasse 1, Vienna',
    price: 5_000_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Cozy Cabin in the Black Forest',
    description:
      'A charming cabin surrounded by the dense trees of the Black Forest in Germany.',
    address: 'Schwarzwaldstrasse 22, Baden-Baden',
    price: 700_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Penthouse in Dubai Marina',
    description: 'A luxurious penthouse with panoramic views of Dubai Marina.',
    address: 'Marina Walk 44, Dubai',
    price: 3_500_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Townhouse in Boston',
    description:
      'A classic Boston townhouse in the historic Beacon Hill neighborhood.',
    address: 'Chestnut Street 12, Boston',
    price: 1_750_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Farmhouse in Provence',
    description:
      'A rustic farmhouse surrounded by lavender fields in Provence, France.',
    address: 'Chemin de la Lavande 5, Provence',
    price: 1_200_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Luxury Apartment in Hong Kong',
    description:
      'A high-end apartment with a view of Victoria Harbour in Hong Kong.',
    address: 'Mid-Levels Central 8, Hong Kong',
    price: 3_800_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Beachfront Villa in Bali',
    description:
      'A tropical villa right on the beach with private access to the ocean.',
    address: 'Jl. Pantai Berawa 33, Bali',
    price: 1_500_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Cottage in the Cotswolds',
    description: 'A picturesque English cottage in the heart of the Cotswolds.',
    address: 'High Street 18, Cotswolds',
    price: 950_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Modern Flat in Singapore',
    description:
      'A stylish and modern flat in the Marina Bay area of Singapore.',
    address: 'Marina Boulevard 15, Singapore',
    price: 2_200_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Historical Villa in Rome',
    description:
      'A beautifully restored villa with classical Roman architecture.',
    address: 'Via Appia Antica 11, Rome',
    price: 2_800_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Penthouse in Sydney',
    description:
      'A luxurious penthouse with views of the Sydney Harbour Bridge.',
    address: 'George Street 65, Sydney',
    price: 3_200_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Mountain Villa in Zermatt',
    description:
      'A stunning villa with views of the Matterhorn in Zermatt, Switzerland.',
    address: 'Bahnhofstrasse 10, Zermatt',
    price: 2_400_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Beachfront Condo in Miami',
    description: 'A modern condo with direct access to Miami Beach.',
    address: 'Ocean Drive 23, Miami',
    price: 1_600_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Palatial Estate in Beverly Hills',
    description:
      'A sprawling estate with lush gardens in the heart of Beverly Hills.',
    address: 'Rodeo Drive 45, Beverly Hills',
    price: 6_500_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Luxury Cabin in Whistler',
    description:
      'A high-end cabin with ski-in/ski-out access in Whistler, Canada.',
    address: 'Peak Road 7, Whistler',
    price: 2_100_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Penthouse in Paris',
    description:
      'A luxurious penthouse with views of the Eiffel Tower in Paris.',
    address: 'Avenue Montaigne 32, Paris',
    price: 3_700_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Eco Villa in Costa Rica',
    description:
      'An eco-friendly villa surrounded by rainforest in Costa Rica.',
    address: 'Monteverde 19, Puntarenas',
    price: 1_300_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Seaside Cottage in Cornwall',
    description:
      'A charming seaside cottage with panoramic views of the Cornish coast.',
    address: 'Harbour Road 4, Cornwall',
    price: 850_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Urban Loft in Chicago',
    description:
      'A modern loft in the vibrant River North neighborhood of Chicago.',
    address: 'Wells Street 56, Chicago',
    price: 1_100_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Alpine Chalet in Chamonix',
    description:
      'A cozy chalet with stunning views of Mont Blanc in Chamonix, France.',
    address: 'Rue des Moulins 15, Chamonix',
    price: 1_900_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Luxury Apartment in Rio de Janeiro',
    description:
      'A stunning apartment overlooking Copacabana Beach in Rio de Janeiro.',
    address: 'Avenida Atlantica 101, Rio de Janeiro',
    price: 2_600_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Country Estate in Surrey',
    description:
      'A grand estate with expansive grounds in the Surrey countryside.',
    address: 'Manor Road 25, Surrey',
    price: 4_000_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Contemporary Home in Vancouver',
    description: 'A sleek and modern home with views of the Vancouver skyline.',
    address: 'Granville Street 89, Vancouver',
    price: 2_000_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Secluded Villa in Mykonos',
    description:
      'A private villa with a pool and views of the Aegean Sea in Mykonos.',
    address: 'Agios Ioannis 12, Mykonos',
    price: 2_300_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Modern House in Cape Town',
    description:
      'A stunning modern house with panoramic views of Table Mountain.',
    address: 'Camps Bay Drive 34, Cape Town',
    price: 2_500_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Victorian Terrace in Melbourne',
    description:
      'A beautifully renovated Victorian terrace in Melbourne’s Fitzroy district.',
    address: 'Brunswick Street 77, Melbourne',
    price: 1_450_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Luxury Villa in Ibiza',
    description:
      'A high-end villa with a private pool and sea views in Ibiza, Spain.',
    address: 'Carrer de la Mar 8, Ibiza',
    price: 3_000_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Historic Brownstone in Brooklyn',
    description:
      'A classic brownstone with original details in Brooklyn’s Park Slope.',
    address: '7th Avenue 102, Brooklyn',
    price: 2_000_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Luxury Condo in Las Vegas',
    description: 'A high-rise condo with views of the Las Vegas Strip.',
    address: 'Las Vegas Blvd 200, Las Vegas',
    price: 1_800_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Seaside Mansion in Hamptons',
    description: 'A grand mansion with private beach access in the Hamptons.',
    address: 'Meadow Lane 50, Southampton',
    price: 5_500_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Tropical Bungalow in Key West',
    description: 'A cozy bungalow with a lush garden in the heart of Key West.',
    address: 'Duval Street 70, Key West',
    price: 950_000,
    image: 'https://placehold.co/300x200',
  },
  {
    name: 'Chic Loft in SoHo, New York',
    description: 'A stylish loft with exposed brick and high ceilings in SoHo.',
    address: 'Greene Street 22, New York',
    price: 1_600_000,
    image: 'https://placehold.co/300x200',
  },
];
