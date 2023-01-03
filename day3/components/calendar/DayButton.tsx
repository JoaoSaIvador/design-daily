import { useContext } from 'react';
import { DateContext } from '../../contexts/DateContext';

type DayButtonProps = {
	day: number;
	month: number;
	year: number;
	styles: string;
};

function DayButton({ day, month, year, styles }: DayButtonProps) {
	const state = useContext(DateContext);
	const [, setCurrentDate] = state.currentDate;

	const handleChangeDay = (event: React.MouseEvent) => {
		event.preventDefault();
		setCurrentDate(() => {
			return { day, month, year };
		});
	};

	return (
		<button
			className={
				'text-center cursor-pointer py-1 w-[32px] rounded-full font-medium' +
				styles
			}
			onClick={handleChangeDay}
		>
			{day}
		</button>
	);
}

export default DayButton;
