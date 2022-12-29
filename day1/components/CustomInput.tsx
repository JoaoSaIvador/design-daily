import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type CustomInputProps = {
  placeholder: string;
  icon: IconDefinition;
};

function CustomInput({ placeholder, icon }: CustomInputProps) {
  return (
    <div className='w-full flex justify-between items-center text-gray-400 border-b border-neon-blue my-4 pb-1 px-2'>
      <input
        type={placeholder.toLowerCase() === 'password' ? 'password' : 'text'}
        placeholder={placeholder}
        name={placeholder}
        className='bg-transparent text-white focus:outline-none'
      />
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export default CustomInput;
