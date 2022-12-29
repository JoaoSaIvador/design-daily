import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function CustomCheckbox() {
  const [check, setCheck] = useState(false);

  return (
    <label className='cursor-pointer relative'>
      <input
        type='checkbox'
        className='peer relative h-3 w-3 appearance-none rounded-sm border border-neon-blue checked:appearance- focus:outline-none'
        onClick={() => setCheck((prevCheck) => !prevCheck)}
      />
      <FontAwesomeIcon
        icon={faCheck}
        className={
          'text-neon-blue absolute left-0 top-1.5 text-xs ' +
          (check ? '' : 'opacity-0')
        }
      />
    </label>
  );
}

export default CustomCheckbox;
