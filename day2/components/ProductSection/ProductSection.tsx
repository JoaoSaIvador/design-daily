import { useContext, useEffect } from 'react';
import Image from 'next/image';
import ProductList from './ProductList';
import { ProductContext } from '../../contexts/ProductContext';

function ProductSection() {
  const state = useContext(ProductContext);
  const [products] = state.products;

  return (
    <div className='basis-5/12 rounded-l px-4 py-6 flex flex-col justify-start items-center bg-[#F1EAE9]'>
      <Image src='/logo.png' alt='' width={80} height={80} />
      <h1 className='text-2xl py-6 font-medium text-gray-500'>YOUR ORDER</h1>
      <ProductList />
      <p className='text-2xl text-gray-500'>TOTAL</p>
      <p className='text-3xl font-bold text-gray-500'>
        ${products.reduce((total, product) => total + product.price, 0)}
      </p>
    </div>
  );
}

export default ProductSection;
