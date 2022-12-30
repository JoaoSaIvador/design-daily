import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='shadow-1 rounded w-[900px] h-[650px] flex flex-row'>
        <div className='basis-5/12 rounded-l px-4 py-6 flex flex-col justify-start items-center bg-[#F1EAE9]'>
          <Image src='/logo.png' alt='' width={80} height={80} />
          <h1 className='text-2xl py-6 font-medium text-gray-500'>
            YOUR ORDER
          </h1>
          <div className='shadow-2 rounded w-full h-[300px] bg-white p-3'>
            <div className='flex flex-row justify-end'>
              <Image src='/close.png' alt='' width={25} height={25} />
            </div>
            <div className='flex flex-col justify-between items-center'>
              <Image src='/bag.png' alt='' width={180} height={180} />
              <p className='text-gray-600 text-sm'>Suede Shopper</p>
              <p className='text-gray-600 text-sm'>Color: Bright Orange</p>
              <p className='text-gray-600 text-sm font-bold'>Price: $129</p>
            </div>
          </div>
          <div className='mt-6 mb-8 flex flex-row justify-center items-center'>
            <span className='w-2 h-2 m-1 bg-gray-400 rounded-full cursor-pointer'></span>
            <span className='w-2 h-2 m-1 bg-[#e52340] rounded-full cursor-pointer'></span>
            <span className='w-2 h-2 m-1 bg-gray-400 rounded-full cursor-pointer'></span>
            <span className='w-2 h-2 m-1 bg-gray-400 rounded-full cursor-pointer'></span>
            <span className='w-2 h-2 m-1 bg-gray-400 rounded-full cursor-pointer'></span>
          </div>
          <p className='text-2xl text-gray-500'>TOTAL</p>
          <p className='text-3xl font-bold text-gray-500'>$145.98</p>
        </div>
        <form
          action='submit'
          className='h-full basis-7/12 p-20 flex flex-col justify-between items-center'
        >
          <h1 className='text-2xl pb-10 font-medium text-gray-500'>
            PAY WITH CREDIT CARD
          </h1>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-full flex flex-col items-start justify-center mb-6'>
              <label htmlFor='name' className='text-gray-500'>
                Name of Card Holder:
              </label>
              <input
                type='text'
                id='name'
                className='w-full py-4 px-6 rounded font-medium border border-gray-200 focus:outline-none'
              />
            </div>
            <div className='w-full flex flex-col items-start justify-center mb-6'>
              <label htmlFor='number' className='text-gray-500'>
                Credit Card Number:
              </label>
              <input
                type='number'
                id='number'
                className='w-full py-4 px-6 rounded font-medium border border-gray-200 focus:outline-none'
              />
            </div>
            <div className='w-full flex flex-row justify-between items-center'>
              <div className='basis-7/12 flex flex-col items-start justify-center'>
                <label htmlFor='date' className='text-gray-500'>
                  Expiration Date:
                </label>
                <div id='date' className='w-full flex flex-row '>
                  <select
                    id='month'
                    className='basis-1/2 h-[58px] rounded-l text-center font-medium border border-gray-200 focus:outline-none'
                  >
                    <option value='12' className='' selected>
                      12
                    </option>
                  </select>
                  <select
                    id='year'
                    className='basis-1/2 h-[58px] rounded-r text-center font-medium border-y border-r border-gray-200 focus:outline-none'
                  >
                    <option value='2017' className='' selected>
                      2017
                    </option>
                  </select>
                </div>
              </div>
              <div className='basis-5/12 pl-2 flex flex-col items-start justify-center'>
                <label htmlFor='name' className='text-gray-500'>
                  CVC:
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full py-4 px-6 rounded font-medium border border-gray-200 focus:outline-none'
                />
              </div>
            </div>
          </div>
          <button
            type='submit'
            className='bg-[#e52340] w-full p-4 text-xl rounded text-white'
          >
            PAY SECURELY
          </button>
        </form>
      </div>
    </div>
  );
}
