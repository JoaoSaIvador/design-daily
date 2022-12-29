type LoginButtonProps = {
  text: string;
};

function LoginButton({ text }: LoginButtonProps) {
  return (
    <button
      type='submit'
      className='text-white bg-orange-400 uppercase w-full py-4 my-6 text-lg font-bold text-center'
    >
      {text}
    </button>
  );
}

export default LoginButton;
