import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import CustomInput from '../components/CustomInput';
import CustomCheckbox from '../components/CustomCheckbox';
import SubmitButtons from '../components/SubmitButtons';

function signup() {
  return (
    <form action='' className='w-full'>
      <div className='w-full p-16 flex flex-col items-center'>
        <CustomInput placeholder='Name' icon={faUser} />
        <CustomInput placeholder='Email' icon={faEnvelope} />
        <CustomInput placeholder='Password' icon={faLock} />
        <div className='w-full flex flex-row justify-around items-center px-2'>
          <div className='flex flex-row justify-between items-center'>
            <CustomCheckbox />
            <label className='text-gray-400 pl-2 font-normal text-sm'>
              Male
            </label>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <CustomCheckbox />
            <label className='text-gray-400 pl-2 font-normal text-sm'>
              Female
            </label>
          </div>
        </div>

        <SubmitButtons text='Sign Up' />
      </div>
    </form>
  );
}

export default signup;
