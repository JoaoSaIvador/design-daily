type FormControlProps = {
  label: string;
  type: string;
  id: string;
  wrapperAddons?: string;
};

function FormControl({
  label,
  type,
  id,
  wrapperAddons = '',
}: FormControlProps) {
  return (
    <div
      className={
        'w-full flex flex-col items-start justify-center ' + wrapperAddons
      }
    >
      <label htmlFor={id} className='text-gray-500'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className='w-full py-4 px-6 rounded font-medium border border-gray-200 focus:outline-none'
      />
    </div>
  );
}

export default FormControl;
