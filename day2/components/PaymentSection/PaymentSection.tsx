import ExpirationDate from './ExpirationDate';
import FormControl from './FormControl';

function PaymentSection() {
  return (
    <form
      action='submit'
      className='h-full basis-7/12 p-20 flex flex-col justify-between items-center'
    >
      <h1 className='text-2xl pb-10 font-medium text-gray-500'>
        PAY WITH CREDIT CARD
      </h1>
      <div className='flex flex-col justify-center items-center'>
        <FormControl
          label='Name of Card Holder:'
          type='text'
          id='name'
          wrapperAddons='mb-6'
        />
        <FormControl
          label='Credit Card Number:'
          type='number'
          id='number'
          wrapperAddons='mb-6'
        />
        <div className='w-full flex flex-row justify-between items-center'>
          <ExpirationDate />
          <FormControl
            label='CVC:'
            type='text'
            id='cvc'
            wrapperAddons='basis-5/12 pl-2'
          />
        </div>
      </div>
      <button
        type='submit'
        className='bg-[#e52340] w-full p-4 text-xl rounded text-white'
      >
        PAY SECURELY
      </button>
    </form>
  );
}

export default PaymentSection;
