import { useContext } from 'react';
import Image from 'next/image';
import { DateContext } from '../../contexts/DateContext';
import { months, getCircularMonth } from '../../utils/auxiliary';

function SelectMonth() {
	const state = useContext(DateContext);
	const [currentDate, setCurrentDate] = state.currentDate;

	const handleChangeMonth = (index: number) => {
		setCurrentDate(prevDate => {
			let year = prevDate.year;
			if (index < 0) {
				year--;
			}

			if (index > 11) {
				year++;
			}

			return { ...prevDate, month: getCircularMonth(index), year };
		});
	};

	return (
		<div className='h-full flex justify-center items-end'>
			<div className='w-full flex flex-row justify-around'>
				<Image
					src='/chevron-left.svg'
					alt=''
					width={25}
					height={25}
					className='cursor-pointer'
					onClick={() => handleChangeMonth(currentDate.month - 1)}
				/>
				<span
					className='text-gray-300 text-center text-xl font-light uppercase cursor-pointer'
					onClick={() => handleChangeMonth(currentDate.month - 2)}
				>
					{months[getCircularMonth(currentDate.month - 2)]}
				</span>
				<span
					className='text-gray-300 text-center text-xl font-light uppercase cursor-pointer'
					onClick={() => handleChangeMonth(currentDate.month - 1)}
				>
					{months[getCircularMonth(currentDate.month - 1)]}
				</span>
				<span className='text-gray-200 text-center text-xl font-bold uppercase cursor-pointer'>
					{months[getCircularMonth(currentDate.month)]}
				</span>
				<span
					className='text-gray-300 text-center text-xl font-light uppercase cursor-pointer'
					onClick={() => handleChangeMonth(currentDate.month + 1)}
				>
					{months[getCircularMonth(currentDate.month + 1)]}
				</span>
				<span
					className='text-gray-300 text-center text-xl font-light uppercase cursor-pointer'
					onClick={() => handleChangeMonth(currentDate.month + 2)}
				>
					{months[getCircularMonth(currentDate.month + 2)]}
				</span>
				<Image
					src='/chevron-right.svg'
					alt=''
					width={25}
					height={25}
					className='cursor-pointer'
					onClick={() => handleChangeMonth(currentDate.month + 1)}
				/>
			</div>
		</div>
	);
}

export default SelectMonth;
