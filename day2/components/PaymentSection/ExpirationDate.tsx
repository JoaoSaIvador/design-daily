import CustomSelect from './CustomSelect';

const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];

function ExpirationDate() {
  return (
    <div className='basis-7/12 flex flex-col items-start justify-center'>
      <label htmlFor='date' className='text-gray-500'>
        Expiration Date:
      </label>
      <div id='date' className='w-full flex flex-row '>
        <CustomSelect options={months} />
        <CustomSelect options={years} />
      </div>
    </div>
  );
}

export default ExpirationDate;
