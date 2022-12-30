import { createContext, useState, useEffect, Dispatch, ReactNode } from 'react';

const initialProducts = [
  {
    image: '/bag.png',
    name: 'Suede Shopper',
    color: 'Bright Orange',
    price: 129,
  },
  {
    image: '/sweatshirt.png',
    name: 'Mountain Sweatshirt',
    color: 'Light Pink',
    price: 29,
  },
  {
    image: '/tshirt.png',
    name: 'Simple T-shirt',
    color: 'Black',
    price: 9,
  },
  {
    image: '/jacket.png',
    name: 'Rockstar Jacket',
    color: 'Bright Red',
    price: 89,
  },
  {
    image: '/boots.png',
    name: 'Casual Boots',
    color: 'Beige',
    price: 159,
  },
];

type Product = {
  image: string;
  name: string;
  color: string;
  price: number;
};

type State = {
  products: [
    Product[],
    (setValueFunction: (value: Product[]) => Product[]) => void
  ];
  currentProduct: [Product, Dispatch<Product>];
};

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductContext = createContext({} as State);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState(initialProducts);
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  useEffect(() => {
    setCurrentProduct(products[0]);
  }, [products]);

  const state: State = {
    products: [products, setProducts],
    currentProduct: [currentProduct, setCurrentProduct],
  };

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
}
