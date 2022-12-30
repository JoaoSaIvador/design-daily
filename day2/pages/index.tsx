import PaymentSection from '../components/PaymentSection/PaymentSection';
import ProductSection from '../components/ProductSection/ProductSection';
import { ProductProvider } from '../contexts/ProductContext';

export default function Home() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='shadow-1 rounded w-[900px] h-[650px] flex flex-row'>
        <ProductProvider>
          <ProductSection />
        </ProductProvider>
        <PaymentSection />
      </div>
    </div>
  );
}
