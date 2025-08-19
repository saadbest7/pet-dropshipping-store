export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Pet Collar',
    description: 'Comfortable collar for your beloved pet.',
    price: 9.99,
    image: 'https://placekitten.com/400/300'
  },
  {
    id: '2',
    title: 'Dog Toy',
    description: 'A fun squeaky toy to keep dogs entertained.',
    price: 14.99,
    image: 'https://placebear.com/400/300'
  },
  {
    id: '3',
    title: 'Cat Bed',
    description: 'Soft and cozy bed for cats of all sizes.',
    price: 29.99,
    image: 'https://placekitten.com/401/300'
  }
];
