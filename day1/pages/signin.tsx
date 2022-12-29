import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import CustomInput from '../components/CustomInput';
import CustomCheckbox from '../components/CustomCheckbox';
import SubmitButtons from '../components/SubmitButtons';

function signin() {
  return (
    <form action='' className='w-full'>
      <div className='w-full p-16 flex flex-col items-center'>
        <CustomInput placeholder='Username' icon={faUser} />
        <CustomInput placeholder='Password' icon={faLock} />
        <div className='w-full flex flex-row justify-between items-center px-2'>
          <div className='flex flex-row justify-between items-center'>
            <CustomCheckbox />
            <label className='text-gray-400 pl-2 font-normal text-xs'>
              Remember me
            </label>
          </div>
          <a href='#' className='text-gray-400 font-normal text-xs underline'>
            Forgot password
          </a>
        </div>

        <SubmitButtons text='Log In' />
      </div>
    </form>
  );
}

export default signin;
