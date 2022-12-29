import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

type FacebookLoginButtonProps = {
  text: string;
};

function FacebookLoginButton({ text }: FacebookLoginButtonProps) {
  return (
    <button
      type='submit'
      className='text-white bg-facebook-blue w-full py-4 my-6 font-light text-center'
    >
      <FontAwesomeIcon icon={faFacebookF} className='text-2xl mr-4' />
      {text + ' with Facebook'}
    </button>
  );
}

export default FacebookLoginButton;
