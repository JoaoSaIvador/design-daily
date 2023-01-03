import SelectDay from './SelectDay';
import SelectMonth from './SelectMonth';
import SelectYear from './SelectYear';

function Calendar() {
	return (
		<div className='bg-dark w-[500px] h-[570px] p-10 flex flex-col rounded-l-3xl shadow-lg'>
			<SelectYear />
			<SelectDay />
			<SelectMonth />
		</div>
	);
}

export default Calendar;
