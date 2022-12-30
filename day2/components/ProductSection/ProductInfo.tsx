import Image from 'next/image';

type Product = {
  image: string;
  name: string;
  color: string;
  price: number;
};

type ProductProps = {
  product: Product;
};

function ProductInfo({ product }: ProductProps) {
  return (
    <div className='flex flex-col justify-between items-center'>
      <Image src={product.image} alt='' width={180} height={180} />
      <p className='text-gray-600 text-sm'>{product.name}</p>
      <p className='text-gray-600 text-sm'>Color: {product.color}</p>
      <p className='text-gray-600 text-sm font-bold'>Price: ${product.price}</p>
    </div>
  );
}

export default ProductInfo;
