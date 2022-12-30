type CustomSelectProps = {
  options: string[];
};

function CustomSelect({ options }: CustomSelectProps) {
  return (
    <select
      id='month'
      className='basis-1/2 h-[58px] rounded-l text-center font-medium border border-gray-200 focus:outline-none'
    >
      {options.map((option) => {
        return (
          <option value={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}

export default CustomSelect;
