import { useRouter } from 'next/router';

type CustomButtonProps = {
  text: string;
  redirectTo: string;
  active?: boolean;
};

function CustomButton({ text, redirectTo, active = false }: CustomButtonProps) {
  const router = useRouter();

  return (
    <button
      className={
        'basis-1/2 flex justify-center py-4 ' +
        (active ? 'text-white' : 'text-neon-blue bg-white')
      }
      onClick={() => router.push(redirectTo)}
    >
      {text}
    </button>
  );
}

export default CustomButton;
