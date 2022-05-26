import { GuitarFromServer, GuitarProps } from './types/guitar';

export const adaptToClient = (guitar: GuitarFromServer): GuitarProps => (
  {
    id: guitar['id'],
    name: guitar['name'],
    vendorCode: guitar['vendorCode'],
    type: guitar['type'],
    description: guitar['description'],
    previewImg: guitar['previewImg'],
    rating: guitar['rating'],
    price: guitar['price'],
    stringCount: guitar['stringCount'],
  }
);

export const adaptGuitarsToClient = (guitars: GuitarFromServer[]): GuitarProps[] => (
  guitars.map((guitar) => adaptToClient(guitar))
);


export function getType(guitarsTypes:string) {
  switch(guitarsTypes) {
    case 'electric':
      return 'Электрическая';
    case 'ukulele':
      return 'Укулеле';
    case 'acoustic':
      return 'Акустическая';
    default:
      return '';
  }
}
