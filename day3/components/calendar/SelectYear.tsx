import { useContext } from 'react';
import { DateContext } from '../../contexts/DateContext';
import { months } from '../../utils/auxiliary';

function SelectYear() {
	const state = useContext(DateContext);
	const [currentDate, setCurrentDate] = state.currentDate;

	const handleChangeYear = (year: number) => {
		setCurrentDate(prevDate => ({
			...prevDate,
			year,
		}));
	};

	return (
		<div className='flex flex-row justify-around items-center'>
			<span
				className='text-gray-400 cursor-pointer'
				onClick={() => handleChangeYear(currentDate.year - 1)}
			>
				{currentDate.year - 1}
			</span>
			<span className='text-gray-300 text-lg font-bold cursor-pointer uppercase'>
				{months[currentDate.month] + '. ' + currentDate.year}
			</span>
			<span
				className='text-gray-400 cursor-pointer'
				onClick={() => handleChangeYear(currentDate.year + 1)}
			>
				{currentDate.year + 1}
			</span>
		</div>
	);
}

export default SelectYear;
