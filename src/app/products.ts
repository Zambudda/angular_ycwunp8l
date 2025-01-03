export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    rating: 11
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    rating: 22
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    rating: 33
  },
  {
    id: 4,
    name: 'Locomotiva E.646',
    price: 1299,
    description: 'Locomotiva',
    rating: 44
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/