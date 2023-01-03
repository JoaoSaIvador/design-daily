import { useEffect, useContext, useState } from 'react';
import moment from 'moment';
import {
	months,
	getDaysOfMonth,
	getCircularMonth,
} from '../../utils/auxiliary';
import { DateContext } from '../../contexts/DateContext';
import WeekDays from './WeekDays';
import DayButton from './DayButton';

type Day = {
	day: number;
	month: number;
	year: number;
};

function SelectDay() {
	const state = useContext(DateContext);
	const [currentDate] = state.currentDate;
	const [events] = state.events;
	const [days, setDays] = useState<Day[]>();

	useEffect(() => {
		const changeCalendarDays = (month: number, year: number) => {
			const nDaysBefore = moment(`${months[month]}-01-${year}`).weekday();
			const daysOfMonth = getDaysOfMonth(month, year);

			if (nDaysBefore !== 0) {
				const daysPreviousMonth = getDaysOfMonth(
					getCircularMonth(month - 1),
					month === 0 ? year - 1 : year
				).slice(-nDaysBefore);

				daysOfMonth.unshift(...daysPreviousMonth);
			}

			if (daysOfMonth.length % 7 !== 0) {
				const daysNextMonth = getDaysOfMonth(
					getCircularMonth(month + 1),
					month === 11 ? year + 1 : year
				).slice(0, 7 - (daysOfMonth.length % 7));

				daysOfMonth.push(...daysNextMonth);
			}
			setDays(daysOfMonth);
		};

		changeCalendarDays(currentDate.month, currentDate.year);
	}, [currentDate]);

	const getStyleOfDay = (day: number, month: number, year: number) => {
		let styles = ' text-gray-500 ';

		if (
			(currentDate.day === day &&
				currentDate.month === month &&
				currentDate.year === year) ||
			events.some(
				event =>
					event.day === day && event.month - 1 === month && event.year === year
			)
		) {
			styles =
				' bg-secondary text-dark outline outline-offset-2 outline-2 outline-secondary ';
		} else if (
			day === moment().day() &&
			month === moment().month() &&
			year === moment().year()
		) {
			styles =
				' bg-light text-dark outline outline-offset-2 outline-2 outline-light ';
		} else if (month === currentDate.month && year === currentDate.year) {
			styles = ' text-gray-300 ';
		}

		return styles;
	};

	if (days) {
		return (
			<div className='flex- flex-col justify-center items-center px-10 pt-10 pb-10'>
				<WeekDays />
				<div className='grid grid-cols-7 gap-y-5 gap-x-6 justify-center items-center mt-6'>
					{days.map(({ day, month, year }, index) => {
						return (
							<DayButton
								key={`current-${index}`}
								day={day}
								month={month}
								year={year}
								styles={getStyleOfDay(day, month, year)}
							/>
						);
					})}
				</div>
			</div>
		);
	} else {
		return null;
	}
}

export default SelectDay;
