import { useContext, useEffect } from 'react';
import {
	faUtensils,
	faShoppingCart,
	faHeart,
	faChartArea,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { DateContext } from '../../contexts/DateContext';
import Event from './Event';

type EventType = {
	id: number;
	name: string;
	displayDate: string;
	icon: IconDefinition;
	day: number;
	month: number;
	year: number;
};

const eventsDB: EventType[] = [
	{
		id: 1,
		name: 'Dinner with dad',
		displayDate: 'Wed 3 20:00',
		icon: faUtensils,
		day: 3,
		month: 1,
		year: 2023,
	},
	{
		id: 2,
		name: 'Pay Phone Bills',
		displayDate: 'Sat 13 12:00',
		icon: faShoppingCart,
		day: 13,
		month: 1,
		year: 2023,
	},
	{
		id: 3,
		name: 'Special Day',
		displayDate: 'Sun 14 16:00',
		icon: faHeart,
		day: 14,
		month: 1,
		year: 2023,
	},
	{
		id: 4,
		name: 'Meeting with John',
		displayDate: 'Thur 25 10:00',
		icon: faChartArea,
		day: 25,
		month: 1,
		year: 2023,
	},
];

function EventsSection() {
	const state = useContext(DateContext);
	const [currentDate] = state.currentDate;
	const [events, setEvents] = state.events;

	useEffect(() => {
		setEvents(() =>
			eventsDB.filter(
				event =>
					event.month - 1 === currentDate.month &&
					event.year === currentDate.year
			)
		);

		// TODO: Fetch all the events for this month and year combo from the database
	}, [currentDate]);

	const removeEvent = (eventId: number) => {
		setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
		// TODO: Send delete request to the database for the event with id = eventId
	};

	const addEvent = () => {
		// TODO: Create new event with today's date and hour and store it in the database
	};

	return (
		<div className='bg-light w-[500px] h-[570px] p-10 flex flex-col items-center justify-between rounded-r-3xl shadow-lg'>
			<h1 className='uppercase text-2xl font-bold text-dark'>
				Events of the month
			</h1>
			<div className='h-full max-h-[380px] w-full overflow-y-auto flex flex-col my-6 px-4'>
				{events.map(event => (
					<Event event={event} removeEvent={removeEvent} key={event.id} />
				))}
			</div>
			<button
				className='uppercase bg-dark rounded-full py-4 px-6 text-gray-200 font-medium hover:bg-gray-200 hover:text-dark'
				onClick={addEvent}
			>
				Add Event
			</button>
		</div>
	);
}

export default EventsSection;
