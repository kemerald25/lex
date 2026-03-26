
export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Villa' | 'Penthouse' | 'Estate' | 'Mansion';
  imageUrl: string;
  featured?: boolean;
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Azure Horizon Villa',
    location: 'Malibu, California',
    price: 12500000,
    beds: 5,
    baths: 6,
    sqft: 6500,
    type: 'Villa',
    imageUrl: 'https://picsum.photos/seed/prop1/800/600',
    featured: true,
  },
  {
    id: '2',
    title: 'The Gilded Penthouse',
    location: 'Manhattan, New York',
    price: 24000000,
    beds: 4,
    baths: 4.5,
    sqft: 4200,
    type: 'Penthouse',
    imageUrl: 'https://picsum.photos/seed/prop4/800/600',
    featured: true,
  },
  {
    id: '3',
    title: 'Ethereal Forest Estate',
    location: 'Aspen, Colorado',
    price: 18750000,
    beds: 7,
    baths: 8,
    sqft: 9800,
    type: 'Estate',
    imageUrl: 'https://picsum.photos/seed/prop3/800/600',
  },
  {
    id: '4',
    title: 'Serenity Cove Mansion',
    location: 'Hamilton, Bermuda',
    price: 32000000,
    beds: 8,
    baths: 10,
    sqft: 15400,
    type: 'Mansion',
    imageUrl: 'https://picsum.photos/seed/prop2/800/600',
  },
  {
    id: '5',
    title: 'Obsidian Ridge',
    location: 'Scottsdale, Arizona',
    price: 9200000,
    beds: 4,
    baths: 5,
    sqft: 5200,
    type: 'Villa',
    imageUrl: 'https://picsum.photos/seed/prop5/800/600',
  },
  {
    id: '6',
    title: 'The Heritage Manor',
    location: 'Oxfordshire, UK',
    price: 15500000,
    beds: 10,
    baths: 12,
    sqft: 22000,
    type: 'Estate',
    imageUrl: 'https://picsum.photos/seed/prop6/800/600',
  }
];
