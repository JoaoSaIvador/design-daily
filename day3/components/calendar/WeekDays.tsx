import { weekDays } from '../../utils/auxiliary';

function WeekDays() {
	return (
		<div className='grid grid-cols-7 gap-x-7 mt-4'>
			{weekDays.map(day => (
				<span
					className='text-secondary text-sm uppercase font-light font-sm'
					key={day}
				>
					{day}
				</span>
			))}
		</div>
	);
}

export default WeekDays;
