import { useContext } from 'react';
import Image from 'next/image';
import { ProductContext } from '../../contexts/ProductContext';
import ProductInfo from './ProductInfo';

function Product() {
  const state = useContext(ProductContext);
  const [, setProducts] = state.products;
  const [currentProduct] = state.currentProduct;

  const handleRemove = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.name !== currentProduct.name)
    );
  };

  return (
    <div className='shadow-2 rounded w-full h-[300px] bg-white p-3'>
      <div className='flex flex-row justify-end'>
        <Image
          src='/close.png'
          alt=''
          width={25}
          height={25}
          className='cursor-pointer'
          onClick={handleRemove}
        />
      </div>
      <ProductInfo product={currentProduct} />
    </div>
  );
}

export default Product;
