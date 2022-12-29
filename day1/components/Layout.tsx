import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CustomButton from './PageButton';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div className="h-screen w-100 flex justify-center items-center bg-[url('/sunset.jpeg')] bg-top bg-no-repeat bg-cover">
      <div
        className='bg-black/60 flex flex-col items-center'
        style={{ height: '600px', width: '380px' }}
      >
        <div className='w-full flex flex-row'>
          <CustomButton
            text='Sign In'
            redirectTo='/signin'
            active={router.pathname === '/signin' ? true : false}
          />
          <CustomButton
            text='Sign Up'
            redirectTo='/signup'
            active={router.pathname === '/signup' ? true : false}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
