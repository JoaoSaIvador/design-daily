import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';

function ButtonList() {
  const state = useContext(ProductContext);
  const [products] = state.products;
  const [currentProduct, setCurrentProduct] = state.currentProduct;

  return (
    <div className='mt-6 mb-8 flex flex-row justify-center items-center'>
      {products.map((product) => {
        if (product.name === currentProduct.name) {
          return (
            <span
              className='w-2 h-2 m-1 bg-[#e52340] rounded-full cursor-pointer'
              key={product.name + '-btn'}
              onClick={() => setCurrentProduct(product)}
            ></span>
          );
        } else {
          return (
            <span
              className='w-2 h-2 m-1 bg-gray-400 rounded-full cursor-pointer'
              key={product.name + '-btn'}
              onClick={() => setCurrentProduct(product)}
            ></span>
          );
        }
      })}
    </div>
  );
}

export default ButtonList;
