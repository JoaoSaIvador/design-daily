import LoginButton from './LoginButton';
import FacebookLoginButton from './FacebookLoginButton';

type SubmitButtonsProps = {
  text: string;
};

function SubmitButtons({ text }: SubmitButtonsProps) {
  return (
    <>
      <LoginButton text={text} />
      <div className='flex justify-center items-center'>
        <span className='border-b border-neon-blue w-6 mx-2' />
        <p className='text-white font-light'>or</p>
        <span className='border-b border-neon-blue w-6 mx-2' />
      </div>
      <FacebookLoginButton text={text} />
    </>
  );
}

export default SubmitButtons;
